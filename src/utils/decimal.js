import Big from 'big.js';
import { convertGivenSumFromTo, convertFromTo } from './conversion';

export const FIX_AFTER_POINT = 4;
export const FIX_STRING_AFTER_POINT = 2;

export const decimal = (val) => Big(val);

export const add = (decimal) => (val) => decimal.plus(val);

export const subtract = (decimal) => (val) => decimal.minus(val);

export const divide = (decimal) => (divider) => decimal.div(divider);

export const multiply = (decimal) => (times) => decimal.times(times);

export const isEqual = (decimal) => (val) => decimal.eq(val);

export const isGreater = (decimal) => (val) => decimal.gt(val);

export const isLessOrEqual = (decimal) => (val) => decimal.lte(val);

export const decimalToString = (decimal) => decimal.toFixed(FIX_STRING_AFTER_POINT);

export class Sum {
  constructor(value, currency) {
    this.value = Big(value);
    this.cur = currency;
  }

  get amount() {
    console.log(this.value);
    return this.value.toFixed(2);
  }
  get currency() {
    return this.cur;
  }

  getCurrency() {
    return this.currency;
  }

  isLessOrEqual(comparator) {
    return this.value.lte(comparator);
  }

  toString(n = 2) {
    return this.value.toFixed(n);
  }

  add(value, currency = this.currency, fromCurrRate, toCurrRate) {
    this.value = this.value.plus(value);
    return this;
  }

  multiply(times) {
    this.value = this.value.times(times);
    return this;
  }

  convertTo(curr, fromCurrRate, toCurrRate) {
    // this.value = this.multiply(convertFromTo(fromCurrRate)(toCurrRate));
    this.value = convertGivenSumFromTo(this.value)(fromCurrRate)(toCurrRate);
    this.cur = curr;
    return this;
  }



}