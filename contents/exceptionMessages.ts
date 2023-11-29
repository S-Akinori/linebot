export const exceptionMessages = [
    {session: 5, trigger: '加害者', message: '誠に申し訳ございません。当事務所では加害者側のご相談はお受けしておりません。'},
    {session: 6, trigger: '物損のみ', message: '誠に申し訳ございません。当事務所では物損のみのご相談はお受けしておりません。'},
]

export function getExceptionMessages(sessionId: number) {
    const exceptionMessage = exceptionMessages.find(messageObj => messageObj.session === sessionId);
    return exceptionMessage ? exceptionMessage : null;
}