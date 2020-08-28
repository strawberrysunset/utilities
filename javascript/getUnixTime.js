/**
 * Get UNIX time with specified offset.
 */
export const getUnixTime = ({ day = 0, month = 0, year = 0}, ...args) => {
    if (!args) return
    let time = new Date();
    time.setDate(time.getDate() + day);
    time.setMonth(time.getMonth() + month);
    time.setFullYear(time.getFullYear() + year);
    return Math.round(time.getTime() / 1000);
}

