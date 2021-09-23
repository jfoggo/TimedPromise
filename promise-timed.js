function TimedPromise(executor,timeout=0){
	return !isNaN(parseInt(timeout)) && timeout > 0 ? Promise.race([
		new Promise(executor),
		new Promise((resolve,reject)=>setTimeout(()=>reject(new Error("Promise timedout after "+timeout+"ms")),timeout))
	]) : new Promise(executor);
}
module.exports = TimedPromise;
