import React, { useReducer, useState, useEffect } from "react";
import "./css/App.scss";
import Home from "./components/Bata Components/Home_Section/Home";
import Skills from "./components/Supper Components/Skills/Skills";
import Header from "./components/Bata Components/Header/Header";
import Swiper from "./components/Bata Components/PageSwipeTransition/Swiper";
import Experience from "./components/Supper Components/Experience/Experience";
import Contact from "./components/Supper Components/Contact/Contact";

const PageSwiper = React.createContext();

const pages = {
  HOME_PAGE: {
    NAME: "About",
    STATE: true,
    NUM: 0,
  },
  SKILLS_PAGE: {
    NAME: "Skills",
    STATE: false,
    NUM: 1,
  },
  EXPERIENCE_PAGE: {
    NAME: "Experience",
    STATE: false,
    NUM: 2,
  },
  CONTACT_PAGE: {
    NAME: "Contact",
    STATE: false,
    NUM: 3,
  },
};

function reducer(state, action) {
  switch (action.type) {
    case pages.HOME_PAGE.NAME:
      return {
        HOME_PAGE: { ...state.HOME_PAGE, STATE: true },
        SKILLS_PAGE: { ...state.SKILLS_PAGE, STATE: false },
        EXPERIENCE_PAGE: { ...state.EXPERIENCE_PAGE, STATE: false },
        CONTACT_PAGE: { ...state.CONTACT_PAGE, STATE: false },
      };
    case pages.SKILLS_PAGE.NAME:
      return {
        HOME_PAGE: { ...state.HOME_PAGE, STATE: false },
        SKILLS_PAGE: { ...state.SKILLS_PAGE, STATE: true },
        EXPERIENCE_PAGE: { ...state.EXPERIENCE_PAGE, STATE: false },
        CONTACT_PAGE: { ...state.CONTACT_PAGE, STATE: false },
      };
    case pages.EXPERIENCE_PAGE.NAME:
      return {
        HOME_PAGE: { ...state.HOME_PAGE, STATE: false },
        SKILLS_PAGE: { ...state.SKILLS_PAGE, STATE: false },
        EXPERIENCE_PAGE: { ...state.EXPERIENCE_PAGE, STATE: true },
        CONTACT_PAGE: { ...state.CONTACT_PAGE, STATE: false },
      };
    case pages.CONTACT_PAGE.NAME:
      return {
        HOME_PAGE: { ...state.HOME_PAGE, STATE: false },
        SKILLS_PAGE: { ...state.SKILLS_PAGE, STATE: false },
        EXPERIENCE_PAGE: { ...state.EXPERIENCE_PAGE, STATE: false },
        CONTACT_PAGE: { ...state.CONTACT_PAGE, STATE: true },
      };
    default:
      return state;
  }
}

function App() {
  const [currentPage, dispatch] = useReducer(reducer, pages);
  const [swipe, setSwipe] = useState(0);
  const [oldSwipe, setOldSwipe] = useState(0);
  const [swipeFrom, setSwipeFrom] = useState("");
  const [toWare, setToWare] = useState("");

  function whereAMi(place, number) {
    setToWare(place);
    setSwipe(number);
    console.log(number)
  }

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      dispatch({ type: toWare });
    }, 1000);
    return () => clearTimeout(timeoutId);
  }, [toWare]);

  useEffect(() => {
    if (swipe > oldSwipe) setSwipeFrom("from-right");
    if (swipe < oldSwipe) setSwipeFrom("from-left");
    setOldSwipe(swipe);

    return () => {
      setTimeout(() => {
        setSwipeFrom("");
      }, 2000);
    };
  }, [swipe]);

  return (
    <PageSwiper.Provider value={{ whereAMi }}>
      <div className="BG">
        <Header currentPage={currentPage} />
        {currentPage.HOME_PAGE.STATE && <Home />}
        {currentPage.SKILLS_PAGE.STATE && <Skills />}
        {currentPage.EXPERIENCE_PAGE.STATE && <Experience />}
        {currentPage.CONTACT_PAGE.STATE && <Contact />}
        <Swiper swipeFrom={swipeFrom} toWare={toWare} />
      </div>
    </PageSwiper.Provider>
  );
}

export default App;
export { PageSwiper, pages };
