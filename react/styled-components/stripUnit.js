export const stripUnit = (string) => {
    const digitMatch = /\d*/;
    return parseFloat(digitMatch.exec(string).join());
}
