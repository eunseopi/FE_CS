/**
 * 하나의 인스턴스만 존재하고, 전역에서 접근할 수 있도록 보장하는 패턴.
 * 자바스크립트에서는 보통 클로저, 모듈, 클래스 정적 속성을 활용해서 구현.
 * 전역 설정 객체, 로깅 서비스, DB 커넥션 관리자 등에 사용된다.
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

/**
 * 장점:
 * 1. 전역 접근 포인트를 제공하여 모든 객체가 동일한 인스턴스를 참조할 수 있다.
 * 2. 메모리 낭비를 줄일 수 있다.
 * 3. 데이터 공유가 쉬워진다.
 */

/**
 * 단점:
 * 1. 테스트가 어려워질 수 있다.
 * 2. 전역 상태를 사용하므로 코드 가독성이 떨어질 수 있다.
 * 3. 모듈화가 어려워질 수 있다.
 */

/**
 * 주의사항:
 * 1. 싱글톤 인스턴스가 너무 많은 책임을 가지면 안된다.
 * 2. 싱글톤 인스턴스가 너무 많은 데이터를 가지면 안된다.
 * 3. 싱글톤 인스턴스가 너무 많은 외부 의존성을 가지면 안된다.
 */
