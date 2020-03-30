import React from "react";

import { Switch, Route, withRouter } from "react-router-dom";
import HomePage from "./uniquePages/homePages/HomePage";
import Degrees from "./uniquePages/degreePages/Degrees";
import Resources from "./uniquePages/resourcePages/Resources";
import People from "./uniquePages/People";
import Mission from "./uniquePages/homePages/Mission";
import History from "./uniquePages/homePages/History";
import Contact from "./uniquePages/homePages/Contact";
import Search from "./uniquePages/Search";
import DegreeTemplate from "./uniquePages/degreePages/DegreeTemplate";
import ResourcesTemplate from "./uniquePages/resourcePages/ResourcesTemplate";
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
            <Route exact path="/courses" component={Degrees} />
            <Route exact path="/advising" component={Resources} />
            <Route path="/people" component={People} />
            <Route path="/mission" component={Mission} />
            <Route path="/history" component={History} />
            <Route path="/contact" component={Contact} />
            <Route path="/search" component={Search} />
            <Route exact path="/courses/:id" component={DegreeTemplate} />
            <Route exact path="/advising/:id" component={ResourcesTemplate} />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </>
  );
};

export default withRouter(Routes);
