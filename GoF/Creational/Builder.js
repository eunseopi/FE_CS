/**
 * 복잡한 객체를 단계별로 생성할 수 있게 해주는 패턴
 * 같은 생성 절차로도 다양한 결과물을 만들 수 있다.
 */

/**
 * 실생활 예
 * 햄버거 주문할 때, 빵, 패티, 치즈, 소스 등을 선택적으로 조립하듯이
 */

// Product : 복잡한 객체
class Burger {
  constructor() {
    this.ingredients = [];
  }

  addIngredient(ingredient) {
    this.ingredients.push(ingredient);
  }

  show() {
    console.log(`버거 구성 : ${this.ingredients.join(", ")}`);
  }
}

// Builder: 빌더 인터페이스
class BurgerBuilder {
  constructor() {
    this.burger = new Burger();
  }

  addbun() {}
  addPatty() {}
  addCheeseS() {}
  addLettuce() {}
  getBurger() {
    return this.burger;
  }
}

// ConcreteBuilder: 구체적인 빌더

class CheeseBurgerBuilder extends BurgerBuilder {
  addbun() {
    this.burger.addIngredient("빵");
    return this;
  }
  addPatty() {
    this.burger.addIngredient("소고기 패티");
    return this;
  }
  addCheese() {
    this.burger.addIngredient("치즈");
    return this;
  }
  addLettuce() {
    this.burger.addIngredient("양상추");
    return this;
  }
}

// Director: 조립 순서 관리
class BurgerDirector {
  constructor(builder) {
    this.builder = builder;
  }

  makeSimpleBurger() {
    return this.builder.addbun().addPatty().getBurger();
  }

  makeFullBurger() {
    return this.builder
      .addbun()
      .addPatty()
      .addCheese()
      .addLettuce()
      .getBurger();
  }
}

// 사용 예시
const builder = new CheeseBurgerBuilder();
const director = new BurgerDirector(builder);

const burger1 = director.makeSimpleBurger();
burger1.show();

const burger2 = director.makeFullBurger();
burger2.show();
