/**
 * 구현부에서 추상층을 분리해서 독립적으로 변경 가능하게 만드는 구조
 * 즉, 기능 계층과 구현 계층을 분리해서 확장성을 높이기 위한 패턴.
 */

/**
 * 예시 상황:
 * 여러 종류의 '기기(Device)' 가 있고, 이를 기기를 제어하는 '리모컨'이 있다고 해보자.
 * 리모컨의 기능과 기기 종류는 서로 독립적으로 확장될 수 있어야 한다.
 */

// 구현 계층
class Device {
  turnOn() {}
  turnOff() {}
}

// 구현 클래스 1 - TV
class TV extends Device {
  turnOn() {
    console.log("TV 켜짐");
  }
  turnOff() {
    console.log("TV 꺼짐");
  }
}

// 구현 클래스 2 - 라디오
class Radio extends Device {
  turnOn() {
    console.log("라디오 켜짐");
  }
  turnOff() {
    console.log("라디오 꺼짐");
  }
}

// 추상 계층 - 리모컨
class RemoteControl {
  constructor(device) {
    this.device = device;
  }

  togglePower() {
    console.log("전원 버튼 클릭");
    this.device.turnOn();
  }
}

// 고급 리모컨 (확장된 추상 클래스)
class AdvancedRemoteControl extends RemoteControl {
  mute() {
    console.log("음소거 실행");
  }
}

// 사용 예시
const tv = new TV();
const remote1 = new RemoteControl(tv);
remote1.togglePower();

const radio = new Radio();
const remote2 = new AdvancedRemoteControl(radio);
remote2.togglePower();
remote2.mute();
