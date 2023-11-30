import { findRowByLineId } from "@/lib/GoogleSpreadsheet";
import { NewGoogleSpreadsheet } from "@/lib/newGoogleSpreadsheet";

const homeURL = process.env.NEXT_PUBLIC_HOME_URL

export const victimOrNotText = {
    type: 'text',
    text: 'まず、あなたについて教えてください。'
}

export const victimOrNot = {
    "type": "flex",
    "altText": "被害者ですか？加害者ですか？",
    "contents": {
        "type": "carousel",
        "contents": [
            {
                "type": "bubble",
                "hero": {
                    "type": "image",
                    "url": `${homeURL}/0.PNG`,
                    "size": "full",
                    "aspectRatio": "1:1",
                    "aspectMode": "cover",
                    "action": {
                        "type": "message",
                        "label": "Tap me",
                        "text": "被害者"
                    }
                }
            },
            {
                "type": "bubble",
                "hero": {
                    "type": "image",
                    "url": `${homeURL}/1.PNG`,
                    "size": "full",
                    "aspectRatio": "1:1",
                    "aspectMode": "cover",
                    "action": {
                        "type": "message",
                        "label": "Tap me",
                        "text": "加害者"
                    }
                }
            }
        ]
    }
};

export const accidentTypeText = {
    type: 'text',
    text: '事故の種類を教えてください'
}

export const accidentType = {
    "type": "flex",
    "altText": "事故の種類を教えてください",
    "contents": {
        "type": "carousel",
        "contents": [
            {
                "type": "bubble",
                "hero": {
                    "type": "image",
                    "url": `${homeURL}/2.PNG`,
                    "size": "full",
                    "aspectRatio": "1:1",
                    "aspectMode": "cover",
                    "action": {
                        "type": "message",
                        "label": "Tap me",
                        "text": "軽傷"
                    }
                }
            },
            {
                "type": "bubble",
                "hero": {
                    "type": "image",
                    "url": `${homeURL}/3.PNG`,
                    "size": "full",
                    "aspectRatio": "1:1",
                    "aspectMode": "cover",
                    "action": {
                        "type": "message",
                        "label": "Tap me",
                        "text": "重症"
                    }
                }
            },
            {
                "type": "bubble",
                "hero": {
                    "type": "image",
                    "url": `${homeURL}/4.PNG`,
                    "size": "full",
                    "aspectRatio": "1:1",
                    "aspectMode": "cover",
                    "action": {
                        "type": "message",
                        "label": "Tap me",
                        "text": "死亡"
                    }
                }
            },
            {
                "type": "bubble",
                "hero": {
                    "type": "image",
                    "url": `${homeURL}/5.PNG`,
                    "size": "full",
                    "aspectRatio": "1:1",
                    "aspectMode": "cover",
                    "action": {
                        "type": "message",
                        "label": "Tap me",
                        "text": "物損のみ"
                    }
                }
            },
        ]
    }
}

export const injuryTypeText = {
    type: 'text',
    text: 'お怪我の状況について教えて下さい'
}

export const injuryType = {
    "type": "flex",
    "altText": "お怪我の状況について教えて下さい",
    "contents": {
        "type": "carousel",
        "contents": [
            {
                "type": "bubble",
                "hero": {
                    "type": "image",
                    "url": `${homeURL}/6.PNG`,
                    "size": "full",
                    "aspectRatio": "1:1",
                    "aspectMode": "cover",
                    "action": {
                        "type": "message",
                        "label": "Tap me",
                        "text": "むねうち"
                    }
                }
            },
            {
                "type": "bubble",
                "hero": {
                    "type": "image",
                    "url": `${homeURL}/7.PNG`,
                    "size": "full",
                    "aspectRatio": "1:1",
                    "aspectMode": "cover",
                    "action": {
                        "type": "message",
                        "label": "Tap me",
                        "text": "その他の怪我"
                    }
                }
            },
        ]
    }
}

export const injuryType2 = {
    "type": "flex",
    "altText": "This is a carousel",
    "contents": {
        "type": "carousel",
        "contents": [
            {
                "type": "bubble",
                "hero": {
                    "type": "image",
                    "url": `${homeURL}/8.PNG`,
                    "size": "full",
                    "aspectRatio": "1:1",
                    "aspectMode": "cover",
                    "action": {
                        "type": "message",
                        "label": "Tap me",
                        "text": "骨折"
                    }
                }
            },
            {
                "type": "bubble",
                "hero": {
                    "type": "image",
                    "url": `${homeURL}/9.PNG`,
                    "size": "full",
                    "aspectRatio": "1:1",
                    "aspectMode": "cover",
                    "action": {
                        "type": "message",
                        "label": "Tap me",
                        "text": "脳障害"
                    }
                }
            },
            {
                "type": "bubble",
                "hero": {
                    "type": "image",
                    "url": `${homeURL}/10.PNG`,
                    "size": "full",
                    "aspectRatio": "1:1",
                    "aspectMode": "cover",
                    "action": {
                        "type": "message",
                        "label": "Tap me",
                        "text": "欠損障害"
                    }
                }
            },
            {
                "type": "bubble",
                "hero": {
                    "type": "image",
                    "url": `${homeURL}/11.PNG`,
                    "size": "full",
                    "aspectRatio": "1:1",
                    "aspectMode": "cover",
                    "action": {
                        "type": "message",
                        "label": "Tap me",
                        "text": "その他のケガ"
                    }
                }
            },
        ]
    }
}

export const treatmentText = {
    type: 'text',
    text: '現在治療中ですか？'
}

export const treatment = {
    "type": "flex",
    "altText": "現在治療中ですか？",
    "contents": {
        "type": "carousel",
        "contents": [
            {
                "type": "bubble",
                "body": {
                    "type": "box",
                    "layout": "horizontal",
                    "contents": [
                        {
                            "type": "text",
                            "text": "はい"
                        }
                    ],
                    "action": {
                        "type": "message",
                        "label": "Tap me",
                        "text": "はい"
                    }
                }
            },
            {
                "type": "bubble",
                "body": {
                    "type": "box",
                    "layout": "horizontal",
                    "contents": [
                        {
                            "type": "text",
                            "text": "いいえ"
                        }
                    ],
                    "action": {
                        "type": "message",
                        "label": "Tap me",
                        "text": "いいえ"
                    }
                }
            },
        ]
    }
};

export const familiyPositionText = {
    type: 'text',
    text: '被害者とあなたの関係を教えてください。'
}

export const familiyPosition = {
    "type": "flex",
    "altText": "被害者とあなたの関係を教えてください。",
    "contents": {
        "type": "carousel",
        "contents": [
            {
                "type": "bubble",
                "body": {
                    "type": "box",
                    "layout": "horizontal",
                    "contents": [
                        {
                            "type": "text",
                            "text": "一家の支柱"
                        }
                    ],
                    "action": {
                        "type": "message",
                        "label": "Tap me",
                        "text": "一家の支柱"
                    }
                }
            },
            {
                "type": "bubble",
                "body": {
                    "type": "box",
                    "layout": "horizontal",
                    "contents": [
                        {
                            "type": "text",
                            "text": "配偶者、母親"
                        }
                    ],
                    "action": {
                        "type": "message",
                        "label": "Tap me",
                        "text": "配偶者、母親"
                    }
                }
            },
            {
                "type": "bubble",
                "body": {
                    "type": "box",
                    "layout": "horizontal",
                    "contents": [
                        {
                            "type": "text",
                            "text": "その他"
                        }
                    ],
                    "action": {
                        "type": "message",
                        "label": "Tap me",
                        "text": "その他"
                    }
                }
            },
        ]
    }
};

export const hospitalizationTerm = {
    type: 'text',
    text: '⼊院期間（日数）を教えてください ※数字のみ(⼊⼒例: 30)'
}

export const doctorVisitTerm = {
    type: 'text',
    text: '通院期間を教えてください ※事故から治療終了までの⽇数（⼊⼒例：180）'
}

export const actualDoctorVisitTerm = {
    type: 'text',
    text: '実際に通院した⽇数を教えてください ※数字のみ（⼊⼒例：90）'
}

export const workDaysLost = {
    type: 'text',
    text: '休業した⽇数を教えてください ※専業主婦の⽅は家事育児ができなかった⽇数（⼊⼒例：30）'
}

export const age = {
    type: 'text',
    text: '事故時の年齢を教えてください ※数字のみ（⼊⼒例：35）'
}

export const aftereffect = {
    type: 'text',
    text: '認定されている後遺障害等級を教えてください ※⾮該当は０、等級は1〜14の数字のみ（⼊⼒例：12）'
}

export const genderText = {
    type: 'text',
    text: '性別を教えてください'
}

export const gender = {
    "type": "flex",
    "altText": "性別を教えてください",
    "contents": {
        "type": "carousel",
        "contents": [
            {
                "type": "bubble",
                "hero": {
                    "type": "image",
                    "url": `${homeURL}/12.PNG`,
                    "size": "full",
                    "aspectRatio": "1:1",
                    "aspectMode": "cover",
                    "action": {
                        "type": "message",
                        "label": "Tap me",
                        "text": "男性"
                    }
                }
            },
            {
                "type": "bubble",
                "hero": {
                    "type": "image",
                    "url": `${homeURL}/13.PNG`,
                    "size": "full",
                    "aspectRatio": "1:1",
                    "aspectMode": "cover",
                    "action": {
                        "type": "message",
                        "label": "Tap me",
                        "text": "女性"
                    }
                }
            },
        ]
    }
}

export const relationshipText = {
    type: 'text',
    text: '結婚状況を教えてください'
}

export const relationship = {
    "type": "flex",
    "altText": "結婚状況を教えてください",
    "contents": {
        "type": "carousel",
        "contents": [
            {
                "type": "bubble",
                "hero": {
                    "type": "image",
                    "url": `${homeURL}/14.PNG`,
                    "size": "full",
                    "aspectRatio": "1:1",
                    "aspectMode": "cover",
                    "action": {
                        "type": "message",
                        "label": "Tap me",
                        "text": "既婚"
                    }
                }
            },
            {
                "type": "bubble",
                "hero": {
                    "type": "image",
                    "url": `${homeURL}/15.PNG`,
                    "size": "full",
                    "aspectRatio": "1:1",
                    "aspectMode": "cover",
                    "action": {
                        "type": "message",
                        "label": "Tap me",
                        "text": "独身"
                    }
                }
            },
        ]
    }
}

export const salaryText = {
    type: 'text',
    text: '収入の有無を教えてください'
}

export const salary = {
    "type": "flex",
    "altText": "収入の有無を教えてください",
    "contents": {
        "type": "carousel",
        "contents": [
            {
                "type": "bubble",
                "hero": {
                    "type": "image",
                    "url": `${homeURL}/16.PNG`,
                    "size": "full",
                    "aspectRatio": "1:1",
                    "aspectMode": "cover",
                    "action": {
                        "type": "message",
                        "label": "Tap me",
                        "text": "あり"
                    }
                }
            },
            {
                "type": "bubble",
                "hero": {
                    "type": "image",
                    "url": `${homeURL}/17.PNG`,
                    "size": "full",
                    "aspectRatio": "1:1",
                    "aspectMode": "cover",
                    "action": {
                        "type": "message",
                        "label": "Tap me",
                        "text": "なし"
                    }
                }
            },
        ]
    }
}
export const salaryAmount = {
    type: 'text',
    text: '事故前の年収を教えてください ※年収は数字のみ。ない場合は0と入力。⼊⼒例：500）'
}

export const lawyerFeeSpecialClauseText = {
    type: 'text',
    text: `加入保険に弁護士費用特約の付帯はありましたか？
なお、弁護士費用特約の適用範囲は、契約者本人だけでなく周囲の一定範囲の加入保険も対象となります。
例）
・被保険者の配偶者
被保険者の同居の家族
被保険者の別居の未婚の子
契約車両の同乗者　など
※その他、適用範囲がありますので弁護士にご相談ください。
`
}

export const lawyerFeeSpecialClause = {
    "type": "flex",
    "altText": "弁護士費用特約の有無を教えてください。弁特がなくても相談は無料です。",
    "contents": {
        "type": "carousel",
        "contents": [
            {
                "type": "bubble",
                "hero": {
                    "type": "image",
                    "url": `${homeURL}/18.PNG`,
                    "size": "full",
                    "aspectRatio": "1:1",
                    "aspectMode": "cover",
                    "action": {
                        "type": "message",
                        "label": "Tap me",
                        "text": "弁護士費用特約がある"
                    }
                }
            },
            {
                "type": "bubble",
                "hero": {
                    "type": "image",
                    "url": `${homeURL}/19.PNG`,
                    "size": "full",
                    "aspectRatio": "1:1",
                    "aspectMode": "cover",
                    "action": {
                        "type": "message",
                        "label": "Tap me",
                        "text": "弁護士費用特約がなし"
                    }
                }
            },
            {
                "type": "bubble",
                "hero": {
                    "type": "image",
                    "url": `${homeURL}/20.PNG`,
                    "size": "full",
                    "aspectRatio": "1:1",
                    "aspectMode": "cover",
                    "action": {
                        "type": "message",
                        "label": "Tap me",
                        "text": "わからない"
                    }
                }
            },
        ]
    }
}

export const resultMessage = {
    type: 'text',
    text: '慰謝料の計算できました。最後に相談方法やご連絡先情報を教えていただき計算結果をご共有いたします。'
}

export const consultationText = {
    type: 'text',
    text: 'ご希望の相談方法を選択してください'
}

export const Consultation = {
    "type": "flex",
    "altText": "ご希望の相談方法を選択してください",
    "contents": {
        "type": "carousel",
        "contents": [
            {
                "type": "bubble",
                "hero": {
                    "type": "image",
                    "url": `${homeURL}/21.PNG`,
                    "size": "full",
                    "aspectRatio": "1:1",
                    "aspectMode": "cover",
                    "action": {
                        "type": "message",
                        "label": "Tap me",
                        "text": "来所で相談"
                    }
                }
            },
            {
                "type": "bubble",
                "hero": {
                    "type": "image",
                    "url": `${homeURL}/24.PNG`,
                    "size": "full",
                    "aspectRatio": "1:1",
                    "aspectMode": "cover",
                    "action": {
                        "type": "message",
                        "label": "Tap me",
                        "text": "オンラインで相談"
                    }
                }
            },
        ]
    }
}

export const info = {
    type: 'text',
    text: '最後に、無料相談を承りますので下記の画像メニューを閉じて、メッセージ入力に戻り相談者様の情報をご入力ください'
}

export const name = {
    type: 'text',
    text: 'まず、お名前を教えてください'
}

export const phone = {
    type: 'text',
    text: '携帯またはご自宅のお電話番号を教えてください'
}

export const email = {
    type: 'text',
    text: 'メールアドレスを教えてください'
}

export const address = {
    type: 'text',
    text: '最後に、お住いの地域（市町村まで）を教えてください'
}

export const finish = {
    type: 'text',
    text: 'ご回答ありがとうございました。今後の相談につきましては、担当者より追って連絡させていただきます。\nまた弁護士特約がない場合でも、無料相談・着手金・報酬金など弁護士費用は完全成功報酬でご依頼できますので、本LINEアカウントよりご相談ください。'
}

export const dependents = {
    type: 'text',
    text: '被扶養家族の⼈数を教えてください ※数字のみ（⼊⼒例：2)'
}

export const start = {
    type: 'text',
    text: '相談予約ありがとうございます。以下の画面の表示に従って、カードを選択してください。\nまずあなたについて教えてください。'
}

export const replayMessages = [
    { id: 1, session: 'victim', next: 2, messages: [victimOrNotText, victimOrNot], conditions: [{ trigger: '加害者', exception: true, next: 1 }] },
    { id: 2, session: 'accidentType', next: 3, messages: [accidentTypeText, accidentType], conditions: [{ trigger: '重症', exception: false, next: 4 }, { trigger: '死亡', exception: false, next: 5 }, { trigger: '物損のみ', exception: true, next: 2 }] },
    { id: 3, session: 'injuryType', next: 27, messages: [injuryTypeText, injuryType] },
    { id: 4, session: 'injuryType', next: 27, messages: [injuryTypeText, injuryType2] },
    { id: 5, session: 'familyPosition', next: 23, messages: [familiyPositionText, familiyPosition] },
    { id: 6, session: 'hospitalizationTerm', next: 7, messages: [hospitalizationTerm] },
    { id: 7, session: 'doctorVisitTerm', next: 8, messages: [doctorVisitTerm] },
    { id: 8, session: 'actualDoctorVisitTerm', next: 9, messages: [actualDoctorVisitTerm] },
    { id: 9, session: 'workDaysLost', next: 10, messages: [workDaysLost] },
    { id: 10, session: 'age', next: 11, messages: [age] },
    { id: 11, session: 'aftereffect', next: 12, messages: [aftereffect] },
    { id: 12, session: 'gender', next: 13, messages: [genderText, gender] },
    { id: 13, session: 'relationship', next: 15, messages: [relationshipText, relationship] },
    { id: 14, session: 'salary', next: 15, messages: [salaryText, salary], conditions: [{ trigger: 'なし', exception: false, next: 16 }] },
    { id: 15, session: 'salaryAmount', next: 16, messages: [salaryAmount] },
    { id: 16, session: 'lawyerFeeSpecialClause', next: 17, messages: [lawyerFeeSpecialClauseText, lawyerFeeSpecialClause] },
    { id: 17, session: 'consultation', next: 18, messages: [resultMessage,consultationText, Consultation] },
    { id: 18, session: 'name', next: 19, messages: [name] },
    { id: 19, session: 'tel', next: 20, messages: [phone] },
    { id: 20, session: 'email', next: 21, messages: [email] },
    { id: 21, session: 'address', next: 22, messages: [address] },
    { id: 22, session: '', next: 0, messages: [finish] },
    { id: 23, session: 'age', next: 24, messages: [age] },
    { id: 24, session: 'gender', next: 25, messages: [genderText, gender] },
    { id: 25, session: 'relationship', next: 26, messages: [relationshipText, relationship] },
    { id: 26, session: 'dependents', next: 15, messages: [dependents] },
    { id: 27, session: 'treatment', next: 6, messages: [treatmentText, treatment], conditions: [{ trigger: 'はい', exception: true, next: 3 }] },
]

export const exceptionMessages = [
    { id: 1, messages: [{ type: 'text', text: '誠に申し訳ございません。当事務所では加害者側のご相談はお受けしておりません。' }] },
    { id: 2, messages: [{ type: 'text', text: '誠に申し訳ございません。当事務所では物損のみのご相談はお受けしておりません。' }] },
    { id: 3, messages: [{ type: 'text', text: '適切な治療を受けるためにも弁護士へ相談しましょう。ご相談の方はメニューの「相談のご予約」をタップしてください。' }] },
]

export const getExceptionMessages = (id: number) => {
    const exceptionMessage = exceptionMessages.find(messageObj => messageObj.id === id);
    return exceptionMessage ? exceptionMessage : null;
}

export const getConditionObject = (id: number, trigger: string) => {
    const replayMessage = replayMessages.find(messageObj => messageObj.id === id);
    if (replayMessage && replayMessage.conditions) {
        console.log('conditions')
        const condition = replayMessage.conditions.find(conditionObj => conditionObj.trigger === trigger);
        return condition ? condition : null;
    } else {
        console.log('conditions null')
        return null;
    }

}

export const getMessageObject = (id: number) => {
    const replayMessage = replayMessages.find(messageObj => messageObj.id === id);
    return replayMessage ? replayMessage : null;
}

export const getLineProfile = async (userId: string) => {
    const LINE_HEADER = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.LINE_CHANNEL_ACCESS_TOKEN}`
    };

    const res = await fetch(`https://api.line.me/v2/bot/profile/${userId}`, {
        headers: LINE_HEADER
    })

    const profile = await res.json()
    return profile
}

export const replyLineMessage = async (messages: any[], replyToken: string) => {
    const LINE_HEADER = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.LINE_CHANNEL_ACCESS_TOKEN}`
    };

    fetch('https://api.line.me/v2/bot/message/reply', {
        method: 'POST',
        body: JSON.stringify({
            replyToken: replyToken, // Webhookから受け取った返信トークン
            messages: messages
        }),
        headers: LINE_HEADER
    })
        .then(response => {
            console.log('Message sent successfully:', response);
        })
        .catch(error => {
            console.error('Error sending message:', error);
        });
}

export const getConsulationMoneyText = async (userId: string) => {
    const doc = await NewGoogleSpreadsheet(process.env.SPREADSHEET_ID ?? '')

    // スプレッドシートの最初のシートを取得
    const sheet = doc.sheetsByTitle['result'];
    await sheet.loadHeaderRow()

    const row = await findRowByLineId(sheet, userId);
    if (row) {
        const laywerBasedHospitalizationMoney = row.get('laywerBasedHospitalizationMoney')
        const hospitalizationMoney = row.get('hospitalizationMoney')
        const laywerBasedWorkLostMoney = row.get('laywerBasedWorkLostMoney')
        const workLostMoney = row.get('workLostMoney')
        const laywerBasedAftereffectMoney = row.get('laywerBasedAftereffectMoney')
        const aftereffectMoney = row.get('aftereffectMoney')
        const laywerBasedLostProfits = row.get('laywerBasedLostProfits')
        const lostProfits = row.get('lostProfits')
        const laywerBasedTotal = row.get('laywerBasedTotal')
        const total = row.get('total')
        const difference = row.get('difference')

        const message = `診断結果
✓入通院慰謝料
（弁護士基準）${laywerBasedHospitalizationMoney}万円
（自賠責基準）${hospitalizationMoney}万円
✓休業損害
（弁護士基準）${laywerBasedWorkLostMoney}万円
（自賠責基準）${workLostMoney}万円
✓後遺障害慰謝料
（弁護士基準）${laywerBasedAftereffectMoney}万円
（自賠責基準）${aftereffectMoney}万円
✓逸失利益
（弁護士基準）${laywerBasedLostProfits}万円
（自賠責基準）${lostProfits}万円
✓総額
（弁護士基準）${laywerBasedTotal}万円
（自賠責基準）${total}万円
自賠責基準の場合、慰謝料${total}万円のところ、弁護士に依頼することで${difference}万円増額の総額${laywerBasedTotal}万円受け取ることができる可能性があります。
※こちらの結果はあくまで目安となります。詳しくは弁護士にご相談ください。
        `

        return { messages: [{ type: 'text', text: message }] }
    } else {
        return { messages: [{ type: 'text', text: 'データがありません' }] }
    }
}

export const getDeathConsulationMoneyText = async (userId: string) => {
    const doc = await NewGoogleSpreadsheet(process.env.SPREADSHEET_ID ?? '')

    // スプレッドシートの最初のシートを取得
    const sheet = doc.sheetsByTitle['result'];
    await sheet.loadHeaderRow()

    const row = await findRowByLineId(sheet, userId);
    if (row) {
        const laywerBasedDeathMoney = row.get('laywerBasedDeathMoney')
        const deathMoney = row.get('deathMoney')
        const laywerBasedDeathLostProfits = row.get('laywerBasedDeathLostProfits')
        const deathLostProfits = row.get('deathLostProfits')
        const laywerBasedTotal = row.get('laywerBasedTotal')
        const total = row.get('total')
        const difference = row.get('difference')

        const message = `診断結果
✓死亡慰謝料
（弁護士基準）${laywerBasedDeathMoney}万円
（自賠責基準）${deathMoney}万円
✓死亡遺失利益
（弁護士基準）${laywerBasedDeathLostProfits}万円
（自賠責基準）${deathLostProfits}万円
✓総額
（弁護士基準）${laywerBasedTotal}万円
（自賠責基準）${total}万円

自賠責基準の場合、慰謝料${total}万円のところ、弁護士に依頼することで${difference}万円増額の総額${laywerBasedTotal}万円受け取ることができる可能性があります。
※こちらの結果はあくまで目安となります。詳しくは弁護士にご相談ください。
        `

        return { messages: [{ type: 'text', text: message }] }
    } else {
        return { messages: [{ type: 'text', text: 'データがありません' }] }
    }
}