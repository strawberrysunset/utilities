/**
 * Get UNIX time with optional date offset.
 */
module.exports = (date, offset = {}) => {
  if (!date) throw new Error('No date object specified')
  if (typeof date !== "object") throw new Error('Date must be a date object.')
  if (!offset) console.log('No offset was specified.')

  // Create a copy to prevent modifying the original date object.
  const dateCopy = new Date(date.getTime()) 

  dateCopy.setDate(dateCopy.getDate() + (offset.days || 0));
  dateCopy.setMonth(dateCopy.getMonth() + (offset.months || 0));
  dateCopy.setFullYear(dateCopy.getFullYear() + (offset.years || 0));
  const UnixTime = Math.floor(dateCopy.getTime() / 1000);
  return UnixTime;
};
