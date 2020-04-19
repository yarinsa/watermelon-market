import React from "react";
import styled from "styled-components/macro";

interface AvatarProps {
  size?: string;
  imgUrl?: string;
}

// prettier-ignore
export const Avatar = styled.div<AvatarProps>`
  background-image: url(${(props) => props.imgUrl ? props.imgUrl : require("./assets/default_user.svg")});
  height: ${(props) => props.size ? props.size : "50px"};
  width: ${(props) => props.size ? props.size : "50px"};
  border-radius: 100vh;
  background-size: cover;
`;
