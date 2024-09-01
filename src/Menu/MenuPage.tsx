import { MenuItem } from "./MenuItem";
import burgerSmall from "../assets/images/burger-small.jpg";
import friesSmall from "../assets/images/fries-small.jpg";
import drinkSmall from "../assets/images/drink-small.jpg";

export const MenuPage = () => {
  return (
    <div style={{ paddingTop: "4rem", textAlign: "center", height: "100vh" }}>
      <h1 style={{ marginBottom: "4rem" }}>Menu</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "1200px",
          gap: "100px",
          margin: "auto",
        }}
      >
        <MenuItem image={burgerSmall} />
        <MenuItem image={friesSmall} />
        <MenuItem image={drinkSmall} />
      </div>
    </div>
  );
};
