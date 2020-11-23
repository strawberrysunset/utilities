/**
 * Get UNIX time using optional date offset.
 */

interface Props {
  dateObject: Date
  offset?: {
    days?: number
    months?: number
    years?: number
  }
}
export const getUnixTime = ({
  dateObject,
  offset: { days = 0, months = 0, years = 0 },
}: Props) => {
  const dateObjectCopy = new Date(dateObject.getTime()) // Prevent mutation of original date object.
  dateObjectCopy.setDate(dateObjectCopy.getDate() + days)
  dateObjectCopy.setMonth(dateObjectCopy.getMonth() + months)
  dateObjectCopy.setFullYear(dateObjectCopy.getFullYear() + years)
  const UnixTime = Math.floor(dateObjectCopy.getTime() / 1000)
  return UnixTime
}
