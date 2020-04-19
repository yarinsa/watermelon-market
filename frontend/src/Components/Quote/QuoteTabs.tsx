import React, { useState } from "react";
import { Tabs, Navbar, Tab, Alignment } from "@blueprintjs/core";

interface IQuoteTabs {
  symbol: string;
}

export const QuoteTabs: React.FC<IQuoteTabs> = ({ symbol }) => {
  const [navbarTabId, setNavbarTabId] = useState("summery");
  const handleNavbarTabChange = (navbarTabId: string) =>
    setNavbarTabId(navbarTabId);
  return (
    <Navbar>
      <Navbar.Group align={Alignment.CENTER}>
        <Tabs
          id="navbar"
          onChange={handleNavbarTabChange}
          selectedTabId={navbarTabId}
        >
          <Tab id="Home" title="Home" />
          <Tab id="Files" title="Files" />
          <Tab id="Builds" title="Builds" />
        </Tabs>
      </Navbar.Group>
    </Navbar>
  );
};
