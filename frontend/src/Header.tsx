import React, { useState } from "react";
import { Colors, Icon, Drawer } from "@blueprintjs/core";
import { ReactComponent as PortfolioIcon } from "./assets/icons/portfolio.svg";
import { ReactComponent as HomeIcon } from "./assets/icons/home.svg";
import { ReactComponent as NewsIcon } from "./assets/icons/news.svg";
import { ReactComponent as WatchIcon } from "./assets/icons/watch.svg";
import { ReactComponent as ExploreIcon } from "./assets/icons/explore.svg";
import vriables from "./theme/_variables.scss";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import styled from "styled-components/macro";
import { mediaQueries } from "./theme";
import { Avatar } from "./Avatar";

export const Header: React.FC<any> = ({}) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  return (
    <Root>
      {/* <AvatarStyled onClick={toggleDrawer} size="70px" /> */}
      <DrawerStyled
        canOutsideClickClose
        isOpen={isDrawerOpen}
        onClose={toggleDrawer}
        position="left"
      ></DrawerStyled>
      <Menu>
        <MenuLink exact to="/">
          <MenuItemIcon>
            <HomeIcon />
          </MenuItemIcon>
          <MenuItemText>Home</MenuItemText>
        </MenuLink>

        <MenuLink to="/news">
          <MenuItemIcon>
            <NewsIcon />
          </MenuItemIcon>
          <MenuItemText>News</MenuItemText>
        </MenuLink>

        <MenuLink to="/watch">
          <MenuItemIcon>
            <WatchIcon />
          </MenuItemIcon>
          <MenuItemText>Watchlist</MenuItemText>
        </MenuLink>

        <MenuLink to="/explore">
          <MenuItemIcon>
            <ExploreIcon />
          </MenuItemIcon>
          <MenuItemText>Explore</MenuItemText>
        </MenuLink>

        <MenuLink to="/portfolio">
          <MenuItemIcon>
            <PortfolioIcon />
          </MenuItemIcon>
          <MenuItemText>Portfolio</MenuItemText>
        </MenuLink>
      </Menu>
    </Root>
  );
};

const Root = styled.header`
  display: flex;
  justify-content: space-around;
  /* box-shadow: inset 0 -3px ${Colors.ORANGE5}; */
  font-weight: 600;
  color:white;
  @media (max-width: ${mediaQueries.phone}) {
    position: fixed;
    bottom: 0;
    width: 100%;
    /* box-shadow: inset 0 3px ${Colors.ORANGE5}; */
    background-color: #723cb5;
    padding-left:60px;
    box-shadow: 0 0 2px #333;
  }
`;

const Logo = styled.h1``;

const Menu = styled.nav`
  display: flex;
  flex: 1;
  flex-direction: row;
  @media (max-width: ${mediaQueries.tablet}) {
    justify-content: space-around;
  }
`;

const MenuItemIcon = styled.div`
  padding: 10px;
  svg {
    display: block;
    margin: auto;
    width: 30px;
    height: 30px;
    path {
      fill: #fff;
    }
  }
  @media (min-width: ${mediaQueries.phone}) {
    display: none;
  }
`;
const MenuItemText = styled.span`
  margin-left: 10px;
  @media (max-width: ${mediaQueries.phone}) {
    display: none;
  }
`;
const activeClassName = "nav-item-active";

const MenuLink = styled(NavLink).attrs({ activeClassName })`
  display: flex;
  align-items: center;
  line-height: 60px;
  color: inherit;
  padding: 0 15px;
  :hover {
    color: #3f1184;
  }
  &.${activeClassName} {
    box-shadow: inset 0 -3px #3f1184;
    @media (max-width: ${mediaQueries.phone}) {
      box-shadow: inset 0 3px #3f1184;
    }
  }
  @media (max-width: ${mediaQueries.phone}) {
    padding: 0 10px;
  }
`;

const AvatarStyled = styled(Avatar)`
  margin: 10px;
  box-sizing: content-box;

  @media (max-width: ${mediaQueries.phone}) {
    position: absolute;
    left: -5px;
    bottom: 10px;
    margin: 0;
    box-shadow: 5px -5px 5px -8px #333;
    border: 5px solid #723cb5;
  }
`;

const DrawerStyled = styled(Drawer)``;
