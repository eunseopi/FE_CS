/**
 * 객체를 공유해서 메모리 사용을 줄이는 패턴
 * 많은 수의 유사한 객체가 필요할 때, 공통된 속성은 공유하고,
 * 변하는 속성만 따로 관리해서 리소스를 아끼는 구조.
 */

/**
 * 실생활 예:
 * 문자 처리기에서 'a','b' 같은 글자 객체를 매번 새로 만들지 않고 공유해서 사용하는 방식
 */

// 공유 객체 - 내부 상태(intrinsic)
class Character {
  constructor(char) {
    this.char = char; // 공유되는 속성
  }

  display(position) {
    console.log(`문자 '${this.char}' 출력 at ${position}`);
  }
}

// Flyweight Factory - 객체 재사용
class CharacterFactory {
  constructor() {
    this.characters = {}; // 캐시
  }

  getCharacter(char) {
    if (!this.characters[char]) {
      this.characters[char] = new Character(char);
    }
    return this.characters[char];
  }
}

// 사용 예시
const factory = new CharacterFactory();

const text = "hello world";
[...text].forEach((char, index) => {
  const character = factory.getCharacter(char);
  character.display(index);
});

/**
 * 장점:
 * 1. 메모리 사용을 줄일 수 있다.
 * 2. 객체 생성 비용이 높은 경우 유용하다.
 * 
 */

/**
 * 단점:
 * 1. 객체가 변하는 속성과 공유되는 속성이 있는 경우 복잡해질 수 있다.
 * 2. 캐시 관리가 어려울 수 있다.
 */

