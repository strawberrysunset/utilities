// Sleep for t seconds.
export const sleep = (t: number) => {
  return new Promise((resolve) => setTimeout(resolve, t * 1000))
}
