import React from "react";
import { Switch, Route } from "react-router";
import { Home, Reset, SignUp, SignIn, Auth, ProductEdit } from "./templates";

const Router = () => {
  return (
    <Switch>
      <Route exact path={"/signup"} component={SignUp} />
      <Route exact path={"/signin/reset"} component={Reset} />
      <Route exact path={"/signin"} component={SignIn} />
      <Auth>
        <Route exact path={"/product/edit"} component={ProductEdit} />
        <Route exact path={"(/)?"} component={Home} />
      </Auth>
    </Switch>
  );
};

export default Router;
