import React from "react";
import { ISearchOption } from "../Search";
import { MenuItem } from "@blueprintjs/core";
import styled from "styled-components/macro";
import { ItemRenderer } from "@blueprintjs/select";

export const SearchMenuItem: ItemRenderer<ISearchOption> = (
  option,
  { handleClick, modifiers }
) => {
  if (!modifiers.matchesPredicate) {
    return null;
  }

  return (
    <Root
      key={option.symbol}
      active={modifiers.active}
      onClick={handleClick}
      text={option.symbol + " - " + option.name}
      label={option.type}
      onKeyPress={DISABLE_ENTER_PRESS}
      {...option}
    ></Root>
  );
};

const Root = styled(MenuItem)`
  div {
  }
`;

const DISABLE_ENTER_PRESS = (event: React.KeyboardEvent<HTMLElement>) => {
  if (event.charCode === 13) {
    event.stopPropagation();
    event.preventDefault();
  }
};
