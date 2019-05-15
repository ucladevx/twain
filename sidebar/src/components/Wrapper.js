import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(6, 1fr);
  height: 10vh;
  font-family: Cabin;
  font-style: normal;
  line-height: normal;
  overflow: hidden;
`;

export default Wrapper;
