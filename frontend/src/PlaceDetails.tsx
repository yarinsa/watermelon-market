import React from "react";
import styled from "styled-components/macro";
import { PlaceModel } from "./models";
import { mediaQueries } from "./theme/index";
import { usePlacesStore } from "./Store/placesStore";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from "react-router-dom";
import { Card, Elevation } from "@blueprintjs/core";
import { PlaceChart } from "./PlaceChart";
import { ReactComponent as CoffeeBeanIcon } from "./assets/icons/coffee_bean.svg";
import { ReactComponent as CrowdIcon } from "./assets/icons/crowd.svg";
import { ReactComponent as EarIcon } from "./assets/icons/ear.svg";
import { ReactComponent as ServiceIcon } from "./assets/icons/service.svg";

interface PlaceDetailsProps {}
export const PlaceDetails: React.FC<PlaceDetailsProps> = ({}) => {
  let { placeId } = useParams();
  const placesStore = usePlacesStore();
  if (placeId) {
    placesStore.setSelectedPlace(placeId);
  }
  const place = placesStore.getSelectedPlace[0];
  return (
    <Root>
      <CoverPhoto src={place.imgs[0]} />

      <Details>
        <Info elevation={Elevation.TWO}>
          <h1>{place.name}</h1>
          <Charts>
            <PlaceChart Icon={CrowdIcon} value={place.busyRate} />
            <PlaceChart Icon={EarIcon} value={place.noiseRate} />
            <PlaceChart Icon={ServiceIcon} value={place.serviceRate} />
            <PlaceChart Icon={CoffeeBeanIcon} value={place.coffeeRate} />
          </Charts>
        </Info>
        <Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
          reprehenderit omnis obcaecati, ab perferendis nemo commodi placeat
          nisi nesciunt maxime.
        </Description>
      </Details>
    </Root>
  );
};

const Root = styled.section`
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  min-height: 100vh;
`;

const CoverPhoto = styled.img`
  height: 70vh;
  width: 100%;
  object-fit: cover;
  @media (max-width: ${mediaQueries.phone}) {
    height: 200px;
    width: 100%;
    object-fit: cover;
  }
`;

const Info = styled(Card)`
  position: absolute;
  top: 0px;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  text-align: center;
  /* border-bottom-left-radius: 0 !important; */
  @media (min-width: ${mediaQueries.tablet}) {
    display: flex;
    justify-content: space-around;
  }
  @media (max-width: ${mediaQueries.phone}) {
    top: 50px;
  }
`;
const Charts = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 10px 5px;
`;
const Details = styled.section`
  flex: 1;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  padding-top: 100px;
  @media (max-width: ${mediaQueries.phone}) {
    padding-top: 200px;
  }
`;
const Description = styled.p``;
