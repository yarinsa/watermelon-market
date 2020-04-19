import PlaceModel from "../models/PlaceModel";
import { useLocalStore } from "mobx-react";

export type PlacesStore = ReturnType<typeof usePlacesStore>;
export const usePlacesStore = (defaultPlaces: PlaceModel[] = []) => {
  const store = useLocalStore(() => ({
    // places: defaultPlaces,
    places: places,
    selectedPlaceId: "121",
    get getPlaces() {
      return store.places;
    },
    get getSelectedPlaceId() {
      return store.selectedPlaceId;
    },
    get getSelectedPlace() {
      return store.places.filter((place) => place.id === store.selectedPlaceId);
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
      store.selectedPlaceId = id;
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
      store.places = store.places.filter((place) => place.id !== id);
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

const places: PlaceModel[] = [
  {
    id: "1112",
    name: `Joe's Coffee Place`,
    address: "Borashov 22, Tel Aviv",
    noiseRate: 0.9,
    serviceRate: 0.8,
    coffeeRate: 0.2,
    busyRate: 0.3,
    imgs: [
      "https://www.touchpointisrael.com/wp-content/uploads/2017/04/1-1.jpg",
    ],
    coords: {
      lat: 32.21,
      lng: 32.21,
    },
  },
  {
    id: "1142",
    name: `Aunti Mama Coffee`,
    address: "Balfour 40, Tel Aviv",
    noiseRate: 0.3,
    serviceRate: 0.1,
    coffeeRate: 0.8,
    busyRate: 0.5,
    imgs: [
      "https://c4.wallpaperflare.com/wallpaper/693/568/854/black-coffee-cofee-coffee-coffee-cup-wallpaper-preview.jpg",
    ],
    coords: {
      lat: 32.21,
      lng: 32.21,
    },
  },
];
