import stockModel from "../models/StockModel";
import { useLocalStore } from "mobx-react";

export type StocksStore = ReturnType<typeof useStocksStore>;
export const useStocksStore = (defaultPlaces: stockModel[] = []) => {
  const store = useLocalStore(() => ({
    // places: defaultPlaces,
    stocks: stocks,
    selectedStockId: "121",
    get getStocks() {
      return store.stocks;
    },
    get getSelectedPlaceId() {
      return store.selectedStockId;
    },
    get getSelectedPlace() {
      return store.stocks.filter((place) => place.id === store.selectedStockId);
    },
    // get activePlaces() {
    //   return store.places.filter((place) => !place.completed);
    // },
    // get completedPlaces() {
    //   return store.places.filter((place) => place.completed);
    // },
    // addPlaces(item: Partial<PlaceModel>): void {
    //   store.places.push(new PlaceModel("bla", item.completed));
    // },
    setSelectedPlace(id: string): void {
      store.selectedStockId = id;
    },
    // editPlaces(id: number, data: Partial<PlaceModel>): void {
    //   store.places = store.places.map((place) => {
    //     if (place.id === id) {
    //       if (typeof data.completed == "boolean") {
    //         place.completed = data.completed;
    //       }
    //       if (typeof data.text == "string") {
    //         place.text = data.text;
    //       }
    //     }
    //     return place;
    //   });
    // },
    deletePlaces(id: string): void {
      store.stocks = store.stocks.filter((place) => place.id !== id);
    },
    // completeAll(): void {
    //   store.places = store.places.map((place) => ({
    //     ...place,
    //     completed: true,
    //   }));
    // },
    // clearCompleted(): void {
    //   store.places = store.places.filter((place) => !place.completed);
    // },
  }));
  return store;
};

const stocks: stockModel[] = [
  {
    id: "222",
    symbol: "TSLA",
    open: "777.8700",
    high: "789.7500",
    low: "770.7700",
    price: "771.8426",
    volume: "6995867",
    latestTradingDay: "2020-02-12",
    previousClose: "774.3800",
    change: "-2.5374",
    changePercent: "-0.3277%",
  },
  {
    id: "222",
    symbol: "TSLA",
    open: "777.8700",
    high: "789.7500",
    low: "770.7700",
    price: "771.8426",
    volume: "6995867",
    latestTradingDay: "2020-02-12",
    previousClose: "774.3800",
    change: "-2.5374",
    changePercent: "-0.3277%",
  },
];
