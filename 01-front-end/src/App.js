import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";

function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route path="/" component={Home} exact></Route>
          <Route path="/products/:id" component={ProductPage} exact></Route>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
