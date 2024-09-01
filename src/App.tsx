import styled from "styled-components";
import burger from "./assets/images/burger-large.jpg";
import phantom from "./assets/images/Phantom-small.png";
import "@solana/wallet-adapter-react-ui/styles.css";

import { NavBar } from "./NavBar/NavBar";
import { MenuPage } from "./Menu/MenuPage";

const Wrapper = styled.div`
  background: url(${burger});
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-size: cover;
  z-index: -1;
`;

const Header = styled.div`
  color: white;
  font-size: 5rem;
  position: absolute;
  width: 100%;
  text-align: center;
  top: 50%;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  font-family: "Italiana", sans-serif;
  font-weight: 400;
  font-style: normal;
`;
const Logo = styled.div`
  width: 100px;
  height: 100px;
  background-image: url(${phantom});
  background-size: cover;
  margin: auto 0;
`;

export const App = () => {
  return (
    <>
      <div style={{ height: "100vh" }}>
        <Wrapper />
        <NavBar />
        <Header>
          <Logo></Logo>
          <div>Now accepting Crypto</div>
        </Header>
      </div>
      <MenuPage />
    </>
  );
};
