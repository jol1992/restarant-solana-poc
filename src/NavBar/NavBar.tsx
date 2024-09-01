import styled from "styled-components";
import { MenuButton } from ".";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

const StyledNav = styled.ul`
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
  font-family: "Italiana", sans-serif;
  font-weight: 400;
  font-style: normal;
  list-style: none;
  padding: 1rem;
  width: 400px;
  margin-left: auto;
  li {
    flex: 1;
  }
`;
const StyledConnectButton = styled(WalletMultiButton)`
  font-family: "Italiana", sans-serif;
  font-weight: 400;
  font-style: normal;
  background-color: red;
`;

export const NavBar = () => {
  return (
    <div style={{ position: "relative" }}>
      <StyledNav>
        <li>
          <MenuButton text="Menu" />
        </li>
        <li>
          <MenuButton text="About" />
        </li>
        <li>
          <StyledConnectButton style={{ fontFamily: "Italiana" }} />
        </li>
      </StyledNav>
    </div>
  );
};
