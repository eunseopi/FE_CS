/**
 * 부분-전체 계층 구조를 동일하게 다룰 수 있도록 만드는 패턴
 * 즉, 단일 객체와 복합 객체를 동일한 방식으로 처리할 수 있게 해준다.
 */

/**
 * 실생활 예:
 * 파일 시스템 - 폴더 안에 파일도 있고 또 다른 폴더도 있고,
 * 사용자는 "열기" 같은 명령을 폴더나 파일 구분 없이 사용할 수 있어야 한다.
 */

// 공통 인터페이스
class Component {
  operation() {
    throw new Error("operation()은 구현되어야 한다.");
  }
}

/// Leaf - 개별 객체 (ex: 파일)
class Leaf extends Component {
  constructor(name) {
    super();
    this.name = name;
  }

  operation() {
    console.log(`Leaf: ${this.name}`);
  }
}

// Composite - 복합 객체 (ex: 폴더)
class Composite extends Component {
  constructor(name) {
    super();
    this.name = name;
    this.children = [];
  }

  add(child) {
    this.children.push(child);
  }

  operation() {
    console.log(`Composite: ${this.name}`);
    this.children.forEach((child) => child.operation());
  }
}

// 사용 예시
const file1 = new Leaf("file1.txt");
const file2 = new Leaf("file2.txt");

const folder1 = new Composite("Documents");
folder1.add(file1);
folder1.add(file2);

const file3 = new Leaf("file3.txt");

const rootFolder = new Composite("Root");
rootFolder.add(folder1);
rootFolder.add(file3);

// 전체 구조 출력
rootFolder.operation();

/**
 * 장점:
 * 1. 단일 객체와 복합 객체를 동일하게 처리할 수 있다.
 * 2. 새로운 컴포넌트 타입을 쉽게 추가할 수 있다.
 */

/**
 * 단점:
 * 1. 복합 객체가 너무 복잡해지면 관리가 어려워질 수 있다.
 * 2. 클라이언트가 복합 객체와 단일 객체를 구분해야 한다.
 */
