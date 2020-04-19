import { observable } from "mobx";

export interface Coords {
  lat: number;
  lng: number;
}
export class placeModel {
  readonly id: string;
  @observable public name: string;
  @observable public address: string;
  @observable public noiseRate: number;
  @observable public serviceRate: number;
  @observable public coffeeRate: number;
  @observable public busyRate: number;
  @observable public imgs: string[];
  @observable public coords: Coords;

  constructor(
    name: string,
    address: string,
    noiseRate: number,
    serviceRate: number,
    busyRate: number,
    coffeeRate: number,
    imgs: string[],
    coords: Coords
  ) {
    this.id = placeModel.generateId();
    this.name = name;
    this.address = address;
    this.noiseRate = noiseRate;
    this.serviceRate = serviceRate;
    this.coffeeRate = coffeeRate;
    this.busyRate = busyRate;
    this.imgs = imgs;
    this.coords = coords;
  }

  static nextId = 1;
  static generateId() {
    return (this.nextId++).toString();
  }
}

export default placeModel;
