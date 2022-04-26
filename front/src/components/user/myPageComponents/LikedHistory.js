import React from "react";
import styled from "styled-components";

// const orderList = {
//   [];
// };

function LikedHistory() {
  return <Container>만들었다 좋아요 히스토리</Container>;
}

const Container = styled.div`
  width: 63.5%;
  box-shadow: #5e5b52 0px 0px 0px 1px, #eefc57 5px 5px 0px 0px;
  flex-wrap: wrap;
  flex-grow: 1;
  justify-content: center;
  display: flex;
  flex-direction: row;
`;

export default LikedHistory;