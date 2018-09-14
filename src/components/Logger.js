import React from "react";
import { ConnectContext } from "../hoc/ConnectContext";
const Logger = ({ context }) => {
  return (
    <React.Fragment>
      <h4>Log du Store via le contexte</h4>
      <div>
        <pre>{JSON.stringify(context.state, null, "\t")}</pre>
      </div>
    </React.Fragment>
  );
};
export default ConnectContext(Logger);
