import React from "react";
import { BrowserRouter } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Router from "./routers/Router";
import CustomThemeProvider from "./providers/CustomThemeProvider";

export default function App() {
  return (
    <BrowserRouter>
      <CustomThemeProvider>
        <Layout>
          <Router />
        </Layout>
      </CustomThemeProvider>
    </BrowserRouter>
  );
}
