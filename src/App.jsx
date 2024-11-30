import MainLayout from "./layout/MainLayout";
import { Route, Switch, useLocation } from "wouter";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ServiceHoumon from "./pages/ServiceHoumon";
import ServiceTaxi from "./pages/ServiceTaxi";
import ServiceDay from "./pages/ServiceDay";
import ServiceKyotaku from "./pages/ServiceKyotaku";
import Recruit from "./pages/Recruit";
import Privacy from "./pages/Privacy";
import PageNotFound from "./pages/PageNotFound";
import { useEffect, useRef } from "react";

function App() {
  const pathname = useLocation();
  const upBtnRef = useRef(null);

  // Always be on top of the page when changing route
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // upBtn show only if scrolled
  const handleScroll = () => {
    if (upBtnRef.current) {
      if (window.scrollY >= 500) {
        upBtnRef.current.classList.remove('opacity-0');
      } else {
        upBtnRef.current.classList.add('opacity-0');
      }
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div id="content">
        <MainLayout>
          <Switch>
            <Route path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/houmon">
              <ServiceHoumon />
            </Route>
            <Route path="/taxi">
              <ServiceTaxi />
            </Route>
            <Route path="/dayservice">
              <ServiceDay />
            </Route>
            <Route path="/kyotaku">
              <ServiceKyotaku />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/recruit">
              <Recruit />
            </Route>
            <Route path="/privacy">
              <Privacy />
            </Route>
            <Route>
              <PageNotFound />
            </Route>
          </Switch>
          <button onClick={() =>  window.scrollTo({ top: 0, left: 0, behavior: "smooth" })} ref={upBtnRef} className="upbtn fixed bottom-0 right-0 w-8 z-50 m-4 transition-opacity opacity-0 duration-500"><img loading="eager" src="./icons/up.webp" alt="back up button" /></button>
        </MainLayout>
      </div>
    </>
  )
}

export default App
