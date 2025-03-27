/**
 * 서로 다른 인터페이스를 가진 클래스들을 연결해주는 패턴
 * 즉, 기존 코드의 구조를 바꾸지 않고 호한성을 맞추기 위해 중간에 어댑터를 끼워넣는 방식.
 */

// 기존의 오래된 프린터
class OldPrinter {
  printOld(text) {
    console.log(`Old Printer: ${text}`);
  }
}

// 새로운 시스템에서는 print() 메서드를 기대한다.
class PrinterAdapter {
  constructor(oldPrinter) {
    this.oldPrinter = oldPrinter;
  }

  print(text) {
    // 내부적으로는 oldPrinter 의 메서드를 호출한다.
    this.oldPrinter.printOld(text);
  }
}

// 사용 예시
const oldPrinter = new OldPrinter();
const adapter = new PrinterAdapter(oldPrinter);

// 새로운 코드에서는 아래처럼 사용 가능
adapter.print("Hello, World");


/**
 * 구조는 간단하면서도 실무에서도 자주 쓰인다.(예: 라이브러리 변경 대응 시)
 */