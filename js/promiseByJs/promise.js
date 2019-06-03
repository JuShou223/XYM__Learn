function MyPromise(callback) {
  var self = this;
  // promise 有三种状态 1.pending 2.resolve 3.reject
  var state = null;
  // 记录resolve的参数
  var param = null;
  // then方法返回的promise对象的resolve和reject
  var nextResolve = null;
  var nextReject = null;
  // 记录then方法的参数 onFulfilled OnReject
  var asynconFulfilled = null;
  var asyncOnReject = null;
  // 执行并改变promise对象的状态
  callback(resolve, reject)
  // then方法
  this.then = function (onFulfilled, onReject) {
    // 返回一个新的promise对象 
    return new self.constructor(function (resolve, reject) {
      // 判断异步代码是否执行完毕（是否reject / resolve）
      // 若执行完毕，就在then方法里面立即执行 否则就将参数记录下来，等待state就绪 在执行****函数
      if (state === true) {
        doAsynconFulfilled(onFulfilled, resolve, reject);
      } else if (state === false) {
        doAsynconRejected(onReject, resolve, reject);
      } else {
        nextResolve = resolve;
        nextReject = reject;
        asynconFulfilled = onFulfilled;
        asyncOnReject = onReject;
      }
    });
  }
  // resolve方法 
  function resolve(data) {
    state = true;
    param = data;
    if(nextResolve){
      doAsynconFulfilled(asynconFulfilled, nextResolve, nextReject);
    }
  }
  // reject 方法
  function reject(err) {
    state = false;
    param = err;
    if(nextReject){
      doAsynconRejected(asyncOnReject,nextResolve,nextReject)
    }
  }
  function doAsynconFulfilled(onFulfilled,resolve,reject){
    window.setTimeout(() => {
      //  判断onFulfilled 是否为function 不是就忽略
      if(typeof onFulfilled === 'function'){
        // 执行onFulfilled 获取返回值promise()
        var promise = onFulfilled(param);
        // 如果promise 为undefined  执行 if
        if(promise === undefined){
          resolve(param)
        }
        // 如果promise 为MyPromise 对象  执行else if
        else if(promise.constructor === self.constructor){
          // 等待 传递进来的promise 对象执行完毕 ，然后根据promise对象的状态 执行resolve 或则reject
          promise.then(function(param){resolve(param)},function(param){reject(param)})
        }
        // 如果promise 为非Mypromise 对象 执行else
        else{
          // 执行then 方法返回对象的resolve
          resolve(promise)
        }
      }else{
        resolve(param)
      }
    },0);
  }
  function doAsynconRejected(onReject,resolve,reject){
    window.setTimeout(() => {
      if(typeof onReject === 'function'){
        var promise = onReject(param);
        if (promise===undefined){
          reject(param);
        }else if(promise.constructor===self.constructor){
          promise.then(function(param){resolve(param)},function(param){reject(param)})
        }else{
          reject(promise);
        }
      }else{
        reject(param)
      }
    }, 0);
  }
}