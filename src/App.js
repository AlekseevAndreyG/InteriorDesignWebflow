import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import MainPage from "./Pages/MainPage/MainPage";
import AboutPage from "./Pages/AboutPage/AboutPage";

const Wrapper = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <Wrapper>
              <MainPage />
            </Wrapper>
          }
        />
        <Route
          path="/about-page"
          element={
            <Wrapper>
              <AboutPage />
            </Wrapper>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
