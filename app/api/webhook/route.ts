import { NextApiRequest, NextApiResponse } from "next";
import { GoogleSpreadsheet, GoogleSpreadsheetWorksheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';
import React from "react";
import { getConditionObject, getConsulationMoneyText, getDeathConsulationMoneyText, getExceptionMessages, getLineProfile, getMessageObject, replyLineMessage } from "@/contents/replyMessages";
import { NewGoogleSpreadsheet } from "@/lib/newGoogleSpreadsheet";

export const POST = async (req: Request) => {
    console.log('webhook called')
    const res = await req.json();
    const events = res.events;

    const doc = await NewGoogleSpreadsheet(process.env.SPREADSHEET_ID ?? '')

    // スプレッドシートの最初のシートを取得
    const sheet = doc.sheetsByTitle['users'];
    await sheet.loadHeaderRow()

    // LINEメッセージを処理
    for (const event of events) {
        if (event.type === 'message' && event.message.type === 'text') {
            const message = event.message.text;
            const userId = event.source.userId;
            const row = await findRowByLineId(sheet, userId)
            const id = row ? parseInt(row.get('messageId')) : 1;
            const currentMessageObject = getMessageObject(id)

            if (!currentMessageObject) return

            if (message === '【慰謝料計算をする】') { //初回登録
                const messageObj = getMessageObject(1)!
                replyLineMessage(messageObj?.messages, event.replyToken)
                const timestamp = event.timestamp; // Webhookイベントから取得したタイムスタンプ
                const date = new Date(timestamp); // Dateオブジェクトに変換

                const profile = await getLineProfile(userId)

                const rows = await sheet.getRows();
                console.log(rows.length)

                if(row) {
                    row.set('messageId', 1)
                    row.set('date', date.toString())
                    await row.save()
                } else {
                    await sheet.addRow([profile.userId, 1, profile.displayName, date.toString()])
                }
                replyLineMessage(currentMessageObject.messages, event.replyToken)
                // if(row) {
                //     row.set('id', profile.userId)
                //     row.set('messageId', 1)
                //     row.set('lineName', profile.displayName)
                //     row.set('date', date.toString())
                //     await row.save()
                //     replyLineMessage(currentMessageObject, event.replyToken)
                // }
            } else if (message === '【相談のご予約】') {
                if (row) {
                    row.set('messageId', 17)
                    await row.save()
                } else {
                    const timestamp = event.timestamp; // Webhookイベントから取得したタイムスタンプ
                    const date = new Date(timestamp); // Dateオブジェクトに変換
                    const profile = await getLineProfile(userId)
                    await sheet.addRow([profile.userId, 17, profile.displayName, date.toString()])
                }
                const messageObj = getMessageObject(17)!
                replyLineMessage(messageObj?.messages, event.replyToken)
            } else {
                // messageがcurrentMessageObjectのconditionsのtriggerのいずれかに一致した場合
                if (currentMessageObject.conditions) {
                    const condition = getConditionObject(currentMessageObject.id, message)
                    if (condition && condition.exception) {
                        const exceptionMessage = getExceptionMessages(condition.next)!
                        replyLineMessage(exceptionMessage.messages, event.replyToken)
                        return
                    } else if (condition) {
                        saveData(sheet, userId, condition.next, currentMessageObject.session, message)
                        const messageObject = getMessageObject(condition.next)!
                        if (messageObject.id == 22 && row?.get('accidentType') == '死亡') {//診断結果を表示
                            const resultMessage = await getDeathConsulationMoneyText(userId);
                            replyLineMessage(resultMessage.messages.concat(messageObject.messages as any[]), event.replyToken)
                        } else if (messageObject.id == 22) {
                            const resultMessage = await getConsulationMoneyText(userId);
                            replyLineMessage(resultMessage.messages.concat(messageObject.messages as any[]), event.replyToken)
                        } else {
                            replyLineMessage(messageObject.messages, event.replyToken)
                        }
                    } else {
                        saveData(sheet, userId, currentMessageObject.next, currentMessageObject.session, message)
                        const messageObject = getMessageObject(currentMessageObject.next)!
                        if (messageObject.id == 22 && row?.get('accidentType') == '死亡') {//診断結果を表示
                            const resultMessage = await getDeathConsulationMoneyText(userId);
                            replyLineMessage(resultMessage.messages.concat(messageObject.messages as any[]), event.replyToken)
                        } else if (messageObject.id == 22) {
                            const resultMessage = await getConsulationMoneyText(userId);
                            replyLineMessage(resultMessage.messages.concat(messageObject.messages as any[]), event.replyToken)
                        } else {
                            replyLineMessage(messageObject.messages, event.replyToken)
                        }
                    }
                } else {
                    saveData(sheet, userId, currentMessageObject.next, currentMessageObject.session, message)
                    const messageObject = getMessageObject(currentMessageObject.next)!
                    if (messageObject.id == 22 && row?.get('accidentType') == '死亡') {//診断結果を表示
                        const resultMessage = await getDeathConsulationMoneyText(userId);
                        replyLineMessage(resultMessage.messages.concat(messageObject.messages as any[]), event.replyToken)
                    } else if (messageObject.id == 22) {
                        const resultMessage = await getConsulationMoneyText(userId);
                        replyLineMessage(resultMessage.messages.concat(messageObject.messages as any[]), event.replyToken)
                    } else {
                        replyLineMessage(messageObject.messages, event.replyToken)
                    }
                }
            }
        }
    }
    return Response.json({ status: 'ok' })
}

async function findRowByLineId(sheet: GoogleSpreadsheetWorksheet, lineId: string) {
    const rows = await sheet.getRows();
    for (const row of rows) {
        if (row.get('id') === lineId) { // A列をチェック
            return row; // 該当する行オブジェクトを返す
        }
    }
    return null; // 見つからなければnullを返す
}

const saveData = async (sheet: GoogleSpreadsheetWorksheet, userId: string, id: number, session: string, message: string) => {
    const row = await findRowByLineId(sheet, userId)
    if (row) {
        row.set(session, message)
        row.set('messageId', id)
        await row.save()
    }
}