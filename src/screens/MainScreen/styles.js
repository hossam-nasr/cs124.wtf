import styled from "styled-components";
import JelaniDeepFried from "../../assets/img/jelani-deep-fried.jpg";

export const Container = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  background-image: url(${JelaniDeepFried});
  background-size: cover;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.div`
  font-size: 100px;
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New";
  text-shadow: 0px 0px 30px rgba(0, 0, 0, 1);
  color: white;
`;
