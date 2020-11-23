interface Props {
  action(): void
  initialInterval: number
}

export const actionScheduler = ({ action, initialInterval }: Props) => {
  let interval = initialInterval
  let stopped = true

  function callAction() {
    action()
    if (stopped) return
    setTimeout(callAction, interval)
  }

  function start() {
    stopped = false
    callAction()
  }

  function stop() {
    stopped = true
  }

  function updateInterval(newInterval: number) {
    interval = newInterval
  }

  return { start, stop, updateInterval }
}
