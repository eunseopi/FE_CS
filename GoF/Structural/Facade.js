/**
 * 복잡한 서브시스템을 간단한 인터페이스 하나로 감싸서 제공하는 패턴
 * 외부에서는 복잡한 내부 구조를 몰라도 쉽게 사용할 수 있도록 도와준다.
 */

/**
 * 실생활 예:
 * 컴퓨터 부팅 과정을 예로 들 수 있다.
 * 컴퓨터는 많은 하위 시스템으로 구성되어 있지만, 사용자는 부팅 하나의 명령으로 컴퓨터를 사용할 수 있다.
 */

// 복잡한 하위 시스템 ㅡㅋㄹ래스들
class CPU {
  start() {
    console.log("CPU 시작");
  }
}

class Memory {
  load(address, data) {
    console.log(`메모리에 데이터 로드: ${data} at ${address}`);
  }
}

class HardDrive {
  read(sector) {
    console.log(`하드에서 데이터 읽음: 섹터 ${sector}`);
    return "운영체제 데이터";
  }
}

// Facade 클래스
class Computer {
  constructor() {
    this.cpu = new CPU();
    this.memory = new Memory();
    this.hardDrive = new HardDrive();
  }

  startComputer() {
    console.log("컴퓨터 부팅 중...");
    const osData = this.hardDrive.read(100);
    this.memory.load(0, osData);
    this.cpu.start();
    console.log("컴퓨터 부팅 완료");
  }
}

// 사용 예시
const myComputer = new Computer();
myComputer.startComputer();

/**
 * 장점:
 * 1. 복잡한 시스템을 간단한 인터페이스로 추상화할 수 있다.
 * 2. 시스템 내부 구조를 숨길 수 있어 유지보수와 테스트가 쉬워진다.
 */

/**
 * 단점:
 * 1. 파사드가 모든 것을 처리하기 때문에 복잡한 시스템에서는 파사드 자체가 복잡해질 수 있다.
 * 2. 파사드가 너무 많은 역할을 하면 유지보수가 어려워질 수 있다.
 */
