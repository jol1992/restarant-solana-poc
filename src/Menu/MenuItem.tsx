import { FC } from "react";
import styled from "styled-components";

export const MenuItem: FC<{ image: string }> = ({ image }) => {
  const ItemImage = styled.div`
    width: 150px;
    height: 150px;
    background-image: url(${image});
    background-size: cover;
    background-position-x: 60%;
    background-repeat: no-repeat;
    margin-bottom: 1rem;
  `;
  return (
    <div>
      <ItemImage />
      <div style={{ textAlign: "right", fontSize: "1.3rem" }}>1.50</div>
    </div>
  );
};
