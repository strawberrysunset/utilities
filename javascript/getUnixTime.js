/**
 * Get UNIX time with specified offset.
 */
export const getUnixTime = (dateObject, offset) => {
    dateObject.setDate(dateObject.getDate() + offset.days || 0);
    dateObject.setMonth(dateObject.getMonth() + offset.months || 0);
    dateObject.setFullYear(dateObject.getFullYear() + offset.years || 0);
    const UnixTime = Math.round(dateObject.getTime() / 1000);
    return UnixTime
}

