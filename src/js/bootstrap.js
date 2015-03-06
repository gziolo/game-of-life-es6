const TEST = 'test';

export default
class Bootstrap {

  constructor() {
  }

  init() {
    console.log(this.test());
  }

  test() {
    var result = TEST;

    for (let i = 1; i <= 3; i++) {
      result += i;
    }

    return result;
  }
}
