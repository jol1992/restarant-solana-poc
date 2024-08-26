import styled from "styled-components";
import burger from "./assets/images/burger-large.jpg";
import phantom from "./assets/images/Phantom-small.png";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import "@solana/wallet-adapter-react-ui/styles.css";

const Wrapper = styled.div`
  background: url(${burger});
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  background-size: cover;
  z-index: -1;
`;
const StyledNav = styled.ul`
  display: flex;
  gap: 1rem;
  justify-content: flex-end;

  list-style: none;
  padding: 1rem;

  button {
    height: 100%;
  }
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
    <div>
      <Wrapper />
      <Header>
        <Logo></Logo>
        <div>Now accepting Crypto</div>
      </Header>
      <div style={{ position: "relative" }}>
        <StyledNav>
          <li>
            <button>Menu</button>
          </li>
          <li>
            <button>About</button>
          </li>
          <li>
            <WalletMultiButton />
          </li>
        </StyledNav>
      </div>
    </div>
  );
};
