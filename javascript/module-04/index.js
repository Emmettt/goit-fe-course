﻿'use strict';

const products = {
  bread: 10,
  milk: 15,
  apples: 20,
  chicken: 50,
  pork: 80,
  cheese: 60,
  tea: 20,
  candy: 25
};

const order = {
  bread: 2,
  milk: 2,
  apples: 1,
  cheese: 1
};

class Cashier {
  constructor(name, products) {
    this.name = name;
    this.products = products;
    this.totalPrice = 0;
    this.customerMoney = 0;
    this.changeAmount = 0;
  }

  countTotalPrice(order) {
    for (let key in order) {
      this.totalPrice += order[key] * this.products[key];
    }
    return this.totalPrice;
  }

  getCustomerMoney() {
    do {
      this.customerMoney = prompt(`Общая сумма покупок - ${this.totalPrice}, гони бабло:`);
      if (this.customerMoney === null) {
        return null;
      } else {
        this.customerMoney = Number(this.customerMoney);
      }
    } while (this.customerMoney < this.totalPrice || Number.isNaN(this.customerMoney));

    return this.customerMoney;
  }

  countChange() {
    if (this.customerMoney !== null)
      this.changeAmount = this.customerMoney - this.totalPrice;
    return this.changeAmount;
  }

  reset() {
    this.totalPrice = 0;
    this.customerMoney = 0;
    this.changeAmount = 0;
  }

  serve(order) {
    this.countTotalPrice(order);
    this.getCustomerMoney();
    this.countChange();
    if (this.customerMoney !== null) {
      alert(`Спасибо за покупку, ваша сдача ${this.changeAmount}`);
    } else {
      alert('Очень жаль, что-то пошло не так, приходите еще');
    }
    this.reset();
  }
}

const cashier = new Cashier('mango', products);

cashier.serve(order);