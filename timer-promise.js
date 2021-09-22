function TimerPromise(executor,timeout=0){
	return Promise.race([
		new Promise(executor),
		new Promise((resolve,reject)=>!isNaN(parseInt(timeout)) && timeout > 0 ? setTimeout(()=>reject(new Error("Promise timedout after "+timeout+"ms")),timeout) : 0)
	]);
}
module.exports = TimerPromise;
