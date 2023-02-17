import React, { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import RightArrowIcon from "../../assets/right-arrow.png";
import LeftArrowIcon from "../../assets/left-arrow.png";

const Slider = ({ children, id = "slider", row = true }) => {
  const ShopsScrollingContainerRef = useRef(null);
  const [cardCarousel, setCardcarousel] = useState();
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);

  useEffect(() => {
    const cardContainer = ShopsScrollingContainerRef.current;
    setCardcarousel(cardContainer);
  }, []);

  const handlePre = () => {
    let width = cardCarousel.clientWidth;
    cardCarousel.scrollLeft = cardCarousel.scrollLeft - width;
  };

  const handleNext = () => {
    let width = cardCarousel.clientWidth;
    cardCarousel.scrollLeft = cardCarousel.scrollLeft + width;
  };

  const ShowHideArrows = useCallback(() => {
    if (ShopsScrollingContainerRef.current) {
      setShowLeftArrow(ShopsScrollingContainerRef.current.scrollLeft > 0);
      setShowRightArrow(
        ShopsScrollingContainerRef.current.scrollLeft <
        ShopsScrollingContainerRef.current.scrollWidth -
        ShopsScrollingContainerRef.current.clientWidth
      );
    }
  }, []);


  const OnScroll = useCallback(() => {
    ShowHideArrows();
  }, [ShowHideArrows]);

  useEffect(() => {
    ShowHideArrows();
  }, [ShowHideArrows, children]);

  return (
    <Container id={id}>
      <ContentContainer>
        <ShopsScrollingContainer
          row={row}
          ref={ShopsScrollingContainerRef}
          onScroll={OnScroll}
        >
          {children}
        </ShopsScrollingContainer>
        {showLeftArrow && (
          <ArrowLeft onClick={handlePre}>{LeftArrow}</ArrowLeft>
        )}
        {showRightArrow && (
          <ArrowRight onClick={handleNext}>{RightArrow}</ArrowRight>
        )}
      </ContentContainer>
    </Container>
  );
};

export default Slider;

const Container = styled.div`
  margin-bottom: 10px;
  background: transparent;
  position: relative;
`;

const ShopsScrollingContainer = styled.div`
  overflow-x: auto;
  padding: 10px 0 10px;
  display: flex;
  flex-direction: row;
  scroll-behavior: smooth;
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
  padding-bottom: 10px;
  ${(props) =>
    !props.row &&
    `
        flex-wrap: wrap;
        overflow-x: reset;
    `}
`;

const ContentContainer = styled.div`
  position: relative;
`;

const ArrowLeft = styled.div`
  position: absolute;
  top: 175px;
  font-size: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(100, 100, 100);
  left: 0;
  box-shadow: 0px 1.70339px 12.7754px rgb(0 0 0 / 20%);
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: #fcfcfc;
  pointer-events: initial;
  cursor: pointer;
  margin: 10px;
  &:hover {
    background: #fcfcfc;
  }
`;

const ArrowRight = styled.div`
  position: absolute;
  top: 175px;
  font-size: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(100, 100, 100);
  right: 0;
  box-shadow: 0px 1.70339px 12.7754px rgb(0 0 0 / 20%);
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: #fcfcfc;
  pointer-events: initial;
  cursor: pointer;
  margin: 10px;
  &:hover {
    background: #fcfcfc;
  }
`;

const ArrowImg = styled.img`
  width: 16px;
  height: 16px;
`;

const RightArrow = <ArrowImg src={RightArrowIcon} />;
const LeftArrow = <ArrowImg src={LeftArrowIcon} />;
