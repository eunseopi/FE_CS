/**
 *  어떤 객체에 대한 접근을 제어하는 역할
 *  실제 객체를 대신해서 접근을 조절하거나, 기능을 추가
 */

/**
 * 인터넷 프록시 서버, 접근 제어용 관리자 계정, 로딩 지연 처리 등
 * "진짜 객체 앞에 서서 뭔가 대신 처리해주는 애"라고 보면 됨.
 */

// 실제 서비스 객체
class RealImage {
  constructor(filename) {
    this.filename = filename;
    this.loadFromDisk();
  }

  loadFromDisk() {
    console.log(`이미지 ${this.filename} 로딩 중...`);
  }

  display() {
    console.log(`이미지 ${this.filename} 표시`);
  }
}

// 프록시 객체 - 실제 객체의 생성과 사용을 지연시킴
class ProxyImage {
  constructor(filename) {
    this.filename = filename;
    this.realImage = null;
  }

  display() {
    if (!this.realImage) {
      this.realImage = new RealImage(this.filename);
    }
    this.realImage.display();
  }
}

// 사용 예시
const image = new ProxyImage("my-photho.png");

// 이미지 객체는 아직 로딩 X
console.log("이미지 준비 완료");

image.display();
image.display();

/**
 * 장점:
 * 1. 실제 객체의 생성과 사용을 지연시킬 수 있다.
 * 2. 접근 제어를 쉽게 구현할 수 있다.
 *
 */

/**
 * 단점:
 * 1. 프록시 객체가 복잡해질 수 있다.
 * 2. 실제 객체와 프록시 객체가 동일한 인터페이스를 가져야 한다.
 */
