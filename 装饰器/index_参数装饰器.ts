const doc44: ParameterDecorator = (
  target: Object,
  key: string | symbol | undefined, // 明确指出 key 可以为 undefined
  index: number         // 参数索引应为数字类型
) => {
  console.log(target, '11', key, '22', index, '此时target是原型对象，key是方法名，index是参数下标索引');
}

class laocheng {
  public name2: string;
  constructor() {
    this.name2 = '成子';
  }
  getName(name: string, @doc44 age: number) {
  }
}
