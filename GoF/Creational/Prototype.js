/**
 * 기존 객체를 복사해서 새 객체를 만드는 패턴
 * 복잡한 객체를 일일이 새로 만들지 않고, 기존 객체를 복제해서 빠르게 생성
 */

/**
 * 실생활 예:
 * 문서 템플릿, 게임 캐릭터 복제, 도장 찍듯이 복사해서 만드는 방식
 */

// 프로토타입 객체
class Shape {
  constructor(type, color) {
    this.type = type;
    this.color = color;
  }

  clone() {
    // 얕은 복사 (필요 시 깊은 복사로도 가능)
    return new Shape(this.type, this.color);
  }

  draw() {
    console.log(`${this.color} ${this.type} 그리기`);
  }
}

// 사용 예시
const circle = new Shape("원", "빨강");
const clonedCircle = circle.clone();

circle.draw();
clonedCircle.draw();

console.log(circle === clonedCircle);

// 실무에서는 Object.create() 또는 구조 분해 기반 복사도 자주 쓴다.
// const original = { name: "원본", role: "admin" };
// const clone = { ...original };
