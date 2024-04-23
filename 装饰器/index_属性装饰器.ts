const doc2: PropertyDecorator = (target: any, key: string | symbol) => {
  console.log(target,key,'此时target是原型对象');
}

class chengzi {
  @doc2
  public name: string
  constructor() {
    this.name = '成子';
  }

}
