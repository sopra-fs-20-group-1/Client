import styled from "styled-components";

export const DESKTOP_WIDTH = 1366;
export const DESKTOP_HEIGHT = 768;
export const SMALL_LAPTOPS_WIDTH = 970;
export const TABLETS_WIDTH = 750;
export const SMALL_WIDTH = 768;

export const BaseContainer = styled.div`
  margin: auto;
  padding-left: 15px;
  padding-right: 15px;
  max-width: ${DESKTOP_WIDTH}px;
  max-height: ${DESKTOP_HEIGHT}px;
`;
