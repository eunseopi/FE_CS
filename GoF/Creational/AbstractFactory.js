/**
 * 관련된 객체들을 일관된 방식으로 생성할 수 있게 해주는 패턴
 * 여러 개의 팩토리 메서드를 묶어서  "제품군"을 만들고, 서로 호환되는 객체들을 한번에 만들 수 있다.
 */

/**
 * 실생활 예
 * Windows UI 팩토리는 버튼, 체크박스, 드롭다운을 전부 Windows 스타일로 생성
 * Mac UI 팩토리는 전부 Mac 스타일로 생성
 */

// 추상 제품 A
class Button {
  render() {
    throw new Error("render() 메서드는 구현되어야 합니다.");
  }
}

// 추상 제품 B
class Checkbox {
  render() {
    throw new Error("render() 메서드는 구현되어야 합니다.");
  }
}

// 제품군 - Windows 스타일
class WindowsButton extends Button {
  render() {
    console.log("Windows 스타일 버튼 렌더링");
  }
}

class WindowsCheckbox extends Checkbox {
  render() {
    console.log("Windows 스타일 체크박스 렌더링");
  }
}

// 제품군 - Mac 스타일
class MacButton extends Button {
  render() {
    console.log("Mac 스타일 버튼 렌더링");
  }
}

class MacCheckbox extends Checkbox {
  render() {
    console.log("Mac 스타일 체크박스 렌더링");
  }
}

// 추상 팩토리
class GUIFactory {
  createButton() {}
  createCheckbox() {}
}

// 구체 팩토리 - Windows
class WindowsFactory extends GUIFactory {
  createButton() {
    return new WindowsButton();
  }

  createCheckbox() {
    return new WindowsCheckbox();
  }
}

// 구체 팩토리 - Mac
class MacFactory extends GUIFactory {
  createButton() {
    return new MacButton();
  }

  createCheckbox() {
    return new MacCheckbox();
  }
}

// 클라이언트 코드
function renderUI(factory) {
  const button = factory.createButton();
  const checkbox = factory.createCheckbox();

  button.render();
  checkbox.render();
}

// 사용 예시
const os = "Mac";
const factory = os === "Windows" ? new WindowsFactory() : new MacFactory();

renderUI(factory);
