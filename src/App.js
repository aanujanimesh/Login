import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
// import Footer from "./components/Footer";
import LoginScreen from "./components/LoginScreen";
import HomeScreen from "./components/HomeScreen";

const App = () => {
  return (
    <>
      <Header />
      <Router>
        <Container>
          <Routes>
            <Route exact path="/" element={<LoginScreen />}></Route>
            <Route path="/homepage" element={<HomeScreen />}></Route>
          </Routes>
        </Container>
      </Router>
      {/* <Footer /> */}
    </>
  );
};

export default App;
