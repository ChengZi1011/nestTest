const doc: ClassDecorator = (target: any) => {
  console.log(target,'此时target是构造函数');
  target.prototype.name = '成子';
}
// //写法一 装饰器
// @doc
// class xiaoman {
//   constructor() {

//   }
// }

// //写法二 向下兼容
class xiaoman {
  constructor() {

  }
}
doc(xiaoman)

//实例化
const xm:any = new xiaoman();
console.log(xm.name,'实例化');
