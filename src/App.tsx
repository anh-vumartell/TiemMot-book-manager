import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import "./sass/main.scss";
import { store } from "redux/store";
import MUItheme from "./services/MUI/theme";
import CustomizeRoute from "routers";

function App() {
  return (
    <div className="main">
      <Provider store={store}>
        <ThemeProvider theme={MUItheme}>
          <Router>
            <CustomizeRoute />
          </Router>
        </ThemeProvider>
      </Provider>
    </div>
  );
}

export default App;
