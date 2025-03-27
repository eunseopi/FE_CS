/**
 * 기존 객체에 동적으로 기능을 추가할 수 있게 해주는 패턴
 * 상속을 사용하지 않고도 객체의 기능을 확장할 수 있는 유연한 방법
 */

/**
 * 실생활 예:
 * 커피에 시럽이나 휘핑크림을 얹듯이, 기능을 겹겹이 덧붙일 수 있다.
 */

// 기본 컴포넌트 인터페이스
class Coffee {
  cost() {
    return 0;
  }

  description() {
    return "Plain Coffee";
  }
}

// 데코레이터 베이스 클래스
class CoffeeDecorator extends Coffee {
  constructor(coffee) {
    super();
    this.coffee = coffee;
  }

  cost() {
    return this.coffee.cost();
  }

  description() {
    return this.coffee.description();
  }
}

// 데코레이터 1 - 우유 추가
class MilkDecorator extends CoffeeDecorator {
  cost() {
    return this.coffee.cost() + 500;
  }

  description() {
    return this.coffee.description() + ", Milk";
  }
}

// 데코레이터 2 - 시럽 추가
class SugarDecorator extends CoffeeDecorator {
  cost() {
    return this.coffee.cost() + 300;
  }

  description() {
    return this.coffee.description() + ", Syrup";
  }
}

// 사용 예시
let myCoffee = new Coffee();
myCoffee = new MilkDecorator(myCoffee);
myCoffee = new SugarDecorator(myCoffee);

console.log(myCoffee.description());
console.log(`Total cost: ${myCoffee.cost()}원`);
