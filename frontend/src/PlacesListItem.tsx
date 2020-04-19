import React from "react";
import { Card, Elevation, Icon, Spinner, Colors } from "@blueprintjs/core";
import styled from "styled-components/macro";
import { ReactComponent as CoffeeBeanIcon } from "./assets/icons/coffee_bean.svg";
import { ReactComponent as CrowdIcon } from "./assets/icons/crowd.svg";
import { ReactComponent as EarIcon } from "./assets/icons/ear.svg";
import { ReactComponent as ServiceIcon } from "./assets/icons/service.svg";
import { PlaceChart } from "./PlaceChart";
import { PlaceModel } from "./models";
import { Link } from "react-router-dom";

interface PlaceListItemProps extends PlaceModel {
  isClosed?: boolean;
}
export const PlacesListItem: React.FC<PlaceListItemProps> = ({
  isClosed,
  id,
  name,
  address,
  noiseRate,
  serviceRate,
  busyRate,
  coffeeRate,
  imgs,
  coords,
}) => {
  return (
    <Root interactive={true} elevation={Elevation.TWO}>
      <RootLink to={`/place/${id}`}>
        {isClosed && <Overlay>Closed</Overlay>}
        <Header>
          <Title>{name}</Title>
          <Distance>400m</Distance>
        </Header>
        <Image src={imgs[0]} />
        <Info>
          <Address>{address}</Address>
          <AdditionalDetails>
            <Icon icon="dollar" />
          </AdditionalDetails>
        </Info>
        <Charts>
          <PlaceChart Icon={CrowdIcon} value={busyRate} />
          <PlaceChart Icon={EarIcon} value={noiseRate} />
          <PlaceChart Icon={ServiceIcon} value={serviceRate} />
          <PlaceChart Icon={CoffeeBeanIcon} value={coffeeRate} />
        </Charts>
      </RootLink>
    </Root>
  );
};

const Root = styled(Card)`
  display: flex;
  flex-direction: column;
  padding: 0 !important;
  position: relative;
`;

const RootLink = styled(Link)`
  color: inherit;
  :hover {
    color: inherit;
  }
`;
const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 12px;
`;

const Title = styled.h2`
  margin: 0;
`;

const Distance = styled.small``;

const Image = styled.img`
  height: 120px;
  width: 100%;
  object-fit: cover;
`;

const Info = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px 10px;
  font-size: 12px;
  font-weight: 100px;
`;

const Address = styled.div``;
const AdditionalDetails = styled.div``;

const Charts = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 10px 5px;
`;

const ChartContainer = styled.div`
  position: relative;
  margin: 5px;
`;

const ChartIcon = styled.div`
  position: absolute;
  top: 17px;
  right: 17px;
  svg {
    width: 16px;
    height: 16px;
  }

  path {
    fill: ${Colors.ORANGE3};
  }
`;

const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 10;
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
`;
