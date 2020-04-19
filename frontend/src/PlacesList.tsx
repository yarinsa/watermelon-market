import React from "react";
import styled from "styled-components/macro";
import { PlacesListItem } from "./PlacesListItem";
import PlaceModel from "./models/PlaceModel";
import { usePlacesStore } from "./Store/placesStore";

export const PlacesList: React.FC<any> = ({}) => {
  const placesStore = usePlacesStore();
  const PlaceItems = placesStore.places.map((place: PlaceModel, index) => (
    <PlacesListItem key={index} {...place} />
  ));
  // const PlaceItems = [
  //   <PlacesListItem key="1" />,
  //   <PlacesListItem key="2" isClosed />,
  //   <PlacesListItem key="3" />,
  //   <PlacesListItem key="4" />,
  // ];
  return <Root>{PlaceItems}</Root>;
};

const Root = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 30px;
  padding: 20px;
`;
