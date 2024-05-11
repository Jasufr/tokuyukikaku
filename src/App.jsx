import MainLayout from "./layout/MainLayout";
import BlobDarkPink from "./components/BlobDarkPink";
import BlobLightPink from "./components/BlobLightPink";
import BlobGreen from "./components/BlobGreen";
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
import { useEffect } from "react";

function App() {
 const pathname = useLocation();

 useEffect(() => {
  window.scrollTo(0, 0);
 }, [pathname]);

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
          {/* <a href="#" className="fixed bottom-0 right-0 w-8 z-50 m-4"><img src="./icons/up.png" alt="" /></a> */}
          <button onClick={() => window.scrollTo(0, 0)} className="fixed bottom-0 right-0 w-8 z-50 m-4"><img src="./icons/up.png" alt="" /></button>
        </MainLayout>
      </div>
    </>
  )
}

export default App
