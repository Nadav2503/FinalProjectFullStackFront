import About from "./pages/aboutPage"
import React from 'react';
import Layout from './components/layout/Layout';
import Home from './pages/HomePage';

export default function App() {
  return (
    <Layout>
      <Home />
    </Layout>
  );
}
