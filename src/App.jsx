import React from "react";
import { BrowserRouter } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Router from "./routers/Router";

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Router />
      </Layout>
    </BrowserRouter>
  );
}
