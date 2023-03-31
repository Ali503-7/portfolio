import React, { useReducer, useState, useEffect } from "react";
import "./css/App.scss";
import MainHome from "./components/Supper Components/MainComponents/MainHome";
import Skills from "./components/Supper Components/Skills/Skills";
import Header from "./components/Bata Components/Header/Header";
import Swiper from "./components/Bata Components/PageSwipeTransition/Swiper";

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
};

function reducer(state, action) {
  switch (action.type) {
    case pages.HOME_PAGE.NAME:
      return {
        ...state,
        HOME_PAGE: { ...state.HOME_PAGE, STATE: true },
        SKILLS_PAGE: { ...state.SKILLS_PAGE, STATE: false },
      };
    case pages.SKILLS_PAGE.NAME:
      return {
        ...state,
        HOME_PAGE: { ...state.HOME_PAGE, STATE: false },
        SKILLS_PAGE: { ...state.SKILLS_PAGE, STATE: true },
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
  const [toWere, setToWere] = useState("")

  function whereAMi(place, number) {
    setToWere(place)
    setSwipe(number);
    setTimeout(() => {
      dispatch({ type: place });
    }, 1000);
  }

  useEffect(() => {
    if (swipe > oldSwipe) 
      setSwipeFrom("from-right");
    if (swipe < oldSwipe) 
      setSwipeFrom("from-left");
    
    setOldSwipe(swipe);
  }, [swipe]);

  return (
    <PageSwiper.Provider value={{ whereAMi }}>
      <div className="BG">
        <Header />
        {currentPage.HOME_PAGE.STATE && <MainHome />}
        {currentPage.SKILLS_PAGE.STATE && <Skills />}
        <Swiper swipeFrom={swipeFrom} toWere={toWere} />
      </div>
    </PageSwiper.Provider>
  );
}

export default App;
export { PageSwiper, pages };
