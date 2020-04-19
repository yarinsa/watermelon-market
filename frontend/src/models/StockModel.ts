import { observable } from "mobx";

export interface Coords {
  lat: number;
  lng: number;
}
export class stockModel {
  readonly id: string;
  @observable public symbol: string;
  @observable public open: string;
  @observable public high: string;
  @observable public low: string;
  @observable public price: string;
  @observable public volume: string;
  @observable public latestTradingDay: string;
  @observable public previousClose: string;
  @observable public change: string;
  @observable public changePercent: string;

  constructor(
    symbol: string,
    open: string,
    high: string,
    low: string,
    price: string,
    volume: string,
    latestTradingDay: string,
    previousClose: string,
    change: string,
    changePercent: string
  ) {
    this.id = stockModel.generateId();
    this.symbol = symbol;
    this.open = open;
    this.high = high;
    this.low = low;
    this.price = price;
    this.volume = volume;
    this.latestTradingDay = latestTradingDay;
    this.previousClose = previousClose;
    this.change = change;
    this.changePercent = changePercent;
  }

  static nextId = 1;
  static generateId() {
    return (this.nextId++).toString();
  }
}

export default stockModel;
