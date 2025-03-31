/**
 * 객체 생성을 서브클래스에서 처리하도록 객체 생성 코드를 캡슐화하는 패턴
 * 즉, 객체 생성을 한 곳에 몰아서 관리할 수 있고, 새로운 객체가 생겨도 코드 변경을 최소화할 수 있다.
 */

/**
 * 실생활 예
 * 버튼을 클릭했을 때 어떤 UI 컴포넌트를 생성할지 팩토리가 대신 결정해준다.
 */

// Product 클래스 (인터페이스 역할)
class Button {
  click() {
    throw new Error("click() 메서드는 구현되어야 합니다.");
  }
}

// Concrete Product 1
class WindowsButton extends Button {
  click() {
    console.log("Windows 스타일 버튼 클릭");
  }
}

class MacButton extends Button {
  click() {
    console.log("Mac 스타일 버튼 클릭");
  }
}

// Creator 클래스
class Dialog {
  createButton() {
    throw new Error("createButton() 메서드는 구현되어야 합니다.");
  }

  render() {
    const button = this.createButton();
    button.click();
  }
}

// Concrete Creator 1
class WindowsDialog extends Dialog {
  createButton() {
    return new WindowsButton();
  }
}

// Concrete Creator 2
class MacDialog extends Dialog {
  createButton() {
    return new MacButton();
  }
}

// 사용 예시
const os = "Mac";
let dialog;

if (os === "Windows") {
  dialog = new WindowsDialog();
} else {
  dialog = new MacDialog();
}

dialog.render();

/**
 * 장점:
 * 1. 객체 생성 로직을 한 곳에 모아서 관리할 수 있다.
 * 2. 새로운 객체가 생겨도 코드 변경을 최소화할 수 있다.
 * 3. 테스트가 쉬워진다.
 */

/**
 * 단점:
 * 1. 팩토리 클래스가 많아질수록 코드가 복잡해질 수 있다.
 * 2. 상속을 사용하므로 다중 상속이 불가능한 언어에서는 구현이 어려울 수 있다.
 */
