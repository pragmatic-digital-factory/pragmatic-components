import React from "react";
import Page from "../../hoc/page";
import { DrawContainer } from "../../components/Draw/Container";

const DrawPage = () => {
  return (
    <div>
      <DrawContainer />
    </div>
  );
};

export default Page("Drawing based on Konva")(DrawPage);
