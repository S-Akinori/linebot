import { GoogleSpreadsheetWorksheet } from "google-spreadsheet";

export const findRowByLineId = async (sheet: GoogleSpreadsheetWorksheet, lineId: string) => {
    const rows = await sheet.getRows();
    for (const row of rows) {
        if (row.get('id') === lineId) { // A列をチェック
            return row; // 該当する行オブジェクトを返す
        }
    }
    return null; // 見つからなければnullを返す

}