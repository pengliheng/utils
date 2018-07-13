const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

class TypeWord {
  constructor({
    text,
    pauseTime,
    cycle,
    typeFunc,
  }) {
    this.cycle = cycle;
    this.text = text;
    this.typeFunc = typeFunc;
    this.pauseTime = pauseTime;

    this.init();
  }

  async init() {
    for (let i = 0; i < this.text.length; i += 1) {
      const { content, typeTime } = this.text[i];
      await this.typeWord({ content, typeTime });
      await sleep(this.pauseTime);
      if (i === 2 && this.cycle) {
        i = -1;
      }
    }
  }

  async typeWord({ content, typeTime }) {
    for (let i = 0; i < content.split('').length; i += 1) {
      this.typeLetter({
        content,
        i,
      });
      await sleep(typeTime);
    }
  }

  typeLetter({ content, i }) {
    this.typeFunc(content.slice(0, i + 1));
  }
}

function debounce(callback, ms){
  var times;
  var outArgs = arguments
  return function (){
    var self = this
    var innerArgs = arguments
    clearTimeout(times)  // 如果你在某段时间之内再次触发，清除上一次触发的定时器，重新添加定时器。
    times = setTimeout (function () {
      callback.apply(self,[...innerArgs, ...[...outArgs].splice(2,)]);
    },ms)
  }
}
function throttle(callback, ms){
  var times;
  var last = 0;
  var outArgs = arguments
  return function (){
    var innerArgs = arguments
    var now = +new Date();
    if(now>last+ms){
      // 超过节流时间，执行一次,并将上次执行时间戳更新。
      last = now
      callback.apply(this,[...innerArgs, ...[...outArgs].splice(2,)]);
    }
  }
}

export {
  TypeWord, // use with new
  sleep, // normal funciton
  debounce, // 防抖函数
  throttle, // 节流函数
};
