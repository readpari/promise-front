import * as React from "react";
import { RouterProvider } from "react-router-dom";

import routes from "../routes";
import { StrictMode } from "react";

const App: React.FC = () => {
  return (
    <StrictMode>
      <RouterProvider router={routes} />
    </StrictMode>
  );
};

export default App;
