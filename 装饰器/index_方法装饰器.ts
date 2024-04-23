const doc3: MethodDecorator = (target: any, key: string | symbol, descriptor: any) => {
  console.log(target, '11', key, '22', descriptor, '此时target是原型对象，key是方法名，descriptor是方法描述符');
}

class lxl {
  public name: string
  constructor() {
    this.name = '成子';
  }
  @doc3
  getName() {
  }

}
// writable: true,可写
// enumerable: false,可枚举
// configurable: true,可配置