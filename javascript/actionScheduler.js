// Repeat an action for the given interval.
export const actionScheduler (action, initialInterval) {

    let interval = initialInterval;  
    let stopped = true;

    function callAction () {
        action();
        if (stopped) return;
        setTimeout(callAction, interval);
    }
    
    function start(){
        stopped = false;
        callAction();
    }

    function stop() {
        stopped = true;    
    }

    function updateInterval (newInterval){
        interval = newInterval;
    } 
 
    return { start, stop, updateInterval }
}
  
