import React, { useReducer } from "react";
import "./css/App.scss";
import MainHome from "./components/Supper Components/MainComponents/MainHome";
import Skills from "./components/Supper Components/Skills/Skills";
import Header from "./components/Bata Components/Header/Header";

const PageSwiper = React.createContext();

const pages = {
  HOME_PAGE: {
    NAME: "Home-Page",
    STATE: true
  },
  SKILLS_PAGE:  {
    NAME: "Skills-Page",
    STATE: false
  },
};

function reducer(state, action) {
  switch (action.type) {
    case pages.HOME_PAGE.NAME:
      return (
        (pages.SKILLS_PAGE = { ...pages.SKILLS_PAGE, STATE: false }),
        (pages.HOME_PAGE = { ...pages.HOME_PAGE, STATE: true })
      );
    case pages.SKILLS_PAGE.NAME:
      return (
        (pages.SKILLS_PAGE = { ...pages.SKILLS_PAGE, STATE: true }),
        (pages.HOME_PAGE = { ...pages.HOME_PAGE, STATE: false })
      );
  }
}

function App() {
  const [currentPage, dispatch] = useReducer(reducer, pages.HOME_PAGE);

  function whereAMi(place) {
    dispatch({ type: place });
  }

  return (
    <PageSwiper.Provider value={{ whereAMi, pages }}>
      <div className="BG">
        <Header />
        {pages.HOME_PAGE.STATE && <MainHome />}
        {pages.SKILLS_PAGE.STATE && <Skills />}
      </div>
    </PageSwiper.Provider>
  );
}

export default App;
export { PageSwiper, pages };
