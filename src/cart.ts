import Buyable from './buyable';

export default class Cart {
  private _items: Buyable[] = [];

  add(item: Buyable): void {
    this._items.push(item);
  }

  get items(): Buyable[] {
    return [...this._items];
  }

  calculationSum(): number {
    return this.items.reduce((acc, prevValue) => acc + prevValue.price, 0)

  }

  calculationDiscountedAmount(discount: number): number {
    const calculationSum = this.items.reduce((acc, prevValue) => acc + prevValue.price, 0);
    return calculationSum - calculationSum * discount / 100;
  }

  remove(id: number): void {
    const idx = this.items.findIndex((item) => item.id === id);
    this._items.splice(idx, 1)
  }
}