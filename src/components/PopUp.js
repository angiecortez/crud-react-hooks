import React from "react";
import styled, { keyframes, css } from "styled-components";
import PropTypes from "prop-types";

const fadeAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 100%;
  }
`;

const Wrapper = styled.div`
  background-color: rgba(100, 100, 100, 0.3);
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 12;
  justify-content: center;
  align-items: center;
  align-content: center;
  animation: ${fadeAnimation} 0.2s ease-in;
  display: ${props => (!props.active ? "none" : "flex")};
`;

const DialogCard = styled.div`
  position: relative;
  background: #fcfdff;
  display: flex;
  flex-flow: column;
  overflow: hidden;
  max-width: 480px;
  font-family: "SFProDisplay", sans-serif;
  animation: ${fadeAnimation} 0.4s ease-in;
  z-index: 12;
  border-radius: 10px;
  ${props => {
    if (props.isMobile) {
      return css`
        width: 90vw;
        max-height: 80vh;
        overflow: scroll;
      `;
    } else {
      return css`
        width: 65vw;
      `;
    }
  }}
`;

const Body = styled.div`
  font-family: "SFProDisplay", sans-serif;
  height: 100%;
`;
const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  z-index: 10;
`;

const PopUp = props => {
  return (
    <Wrapper active={props.active}>
      <Background onClick={props.onClose} />
      <DialogCard style={props.style} isMobile={props.isMobile}>
        <Body>{props.children}</Body>
      </DialogCard>
    </Wrapper>
  );
};

DialogCard.propTypes = {
  active: PropTypes.bool,
  onClose: PropTypes.func,
  style: PropTypes.object,
  children: PropTypes.element,
  isMobile: PropTypes.bool
};

export default PopUp;
