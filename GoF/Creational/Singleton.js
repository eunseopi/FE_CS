/**
 * 하나의 인스턴스만 존재하고, 전역에서 접근할 수 있도록 보장하는 패턴.
 * 자바스크립트에서는 보통 클로저, 모듈, 클래스 정적 속성을 활용해서 구현.
 */

class Singleton {
  constructor() {
    if (Singleton.instance) {
      return Singleton.instance;
    }

    this.timestamp = Date.now();
    Singleton.instance = this;
  }

  getTime() {
    return this.timestamp;
  }
}

// 사용 예시
const a = new Singleton();
const b = new Singleton();

console.log(a.getTime());
console.log(b.getTime());
console.log(a === b);
