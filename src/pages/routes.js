import React from "react";
import { Redirect } from "react-router-dom";

/*
 * Routes
 * ------
 *
 * This file is not mean to be edited by hand, except for setting
 * 404 pages (not found), after login and redirects if a guest tries
 * to access authenticated only pages.
 *
 * For all the rest, please use `node scripts/route`
 */

// IMPORTS
import HomePage from "./guest/home";
import ProfilePage from "./auth/profile";
import LandingPage from "./guest/landing";
// END IMPORTS

const routes = {
  /*
   * Component for not found paths (path='*')
   */
  notFound: () => <Redirect to="/home" />,

  /*
   * Routes accessible for all users
   */
  guest: {
    routes: [],
  },

  /*
   * Routes accessible for authenticated users
   */
  auth: {
    afterLogin: "/",
    nonAuth: "/home",
    routes: [],
  },
};

// ROUTES
routes.guest.routes.push({ uri: "/home", component: HomePage });
routes.auth.routes.push({ uri: "/profile", component: ProfilePage });
routes.guest.routes.push({ uri: "/landing", component: LandingPage });
// END ROUTES

export default routes;
