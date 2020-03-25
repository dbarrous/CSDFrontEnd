import React from "react";

import { Switch, Route, withRouter } from "react-router-dom";
import HomePage from "./uniquePages/HomePage";
import Degrees from "./uniquePages/Degrees";
import Resources from "./uniquePages/Resources";
import People from "./uniquePages/People";
import Mission from "./uniquePages/Mission";
import History from "./uniquePages/History";
import Contact from "./uniquePages/Contact";
import Search from "./uniquePages/Search";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const Routes = ({ location }) => {
  return (
    <>
      <TransitionGroup>
        <CSSTransition
          key={location.key}
          timeout={{ enter: 300, exit: 300 }}
          classNames="fade"
        >
          <Switch location={location}>
            <Route exact path="/" component={HomePage} />
            <Route path="/courses" component={Degrees} />
            <Route path="/resources" component={Resources} />
            <Route path="/people" component={People} />
            <Route path="/mission" component={Mission} />
            <Route path="/history" component={History} />
            <Route path="/contact" component={Contact} />
            <Route path="/search" component={Search} />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </>
  );
};

export default withRouter(Routes);
