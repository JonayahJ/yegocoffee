// import React from "react";
// import { Redirect } from "react-router-dom";

// Layouts
import DefaultLayout from "./layouts/DefaultLayout";

// Views
import Presentation from "./views/Presentation";
import Landing from "./views/Landing";
import Register from "./views/Register";
// import Profile from "./views/Profile";


let yegocoffee_routes = [
  {
    path: "/",
    exact: true,
    layout: DefaultLayout,
    component: Presentation,
    name: "Home"
  },
  {
    path: "/blog",
    layout: DefaultLayout,
    component: Landing,
    name: "Blog"
  },
  {
    path: "/shop",
    layout: DefaultLayout,
    component: Presentation,
    name: "Shop"
  },
  {
    path: "/contact",
    layout: DefaultLayout,
    component: Register,
    name: "Contact"
  },
  {
    path: "/terms",
    layout: DefaultLayout,
    component: Landing,
    name: "Terms"
  },
  {
    path: "/privacy",
    layout: DefaultLayout,
    component: Landing,
    name: "Privacy"
  },
  {
    path: "/washing-stations",
    layout: DefaultLayout,
    component: Presentation,
    name: "Washing Stations"
  }
];

let about_routes = [
  {
    path: "/about/about-francois",
    layout: DefaultLayout,
    component: Landing,
    name: "About Francois"
  },
  {
    path: "/about/coffee-changes-lives",
    layout: DefaultLayout,
    component: Landing,
    name: "Coffee That Changes Lives"
  },
  {
    path: "/about/our-story",
    layout: DefaultLayout,
    component: Landing,
    name: "Our Story"
  },
  {
    path: "/about/washing-stations",
    layout: DefaultLayout,
    component: Presentation,
    name: "Washing Stations"
  }
];

let legal_routes = [
  {
    path: "/legal/terms",
    layout: DefaultLayout,
    component: Landing,
    name: "Terms and Conditions"
  },
  {
    path: "/legal/privacy",
    layout: DefaultLayout,
    component: Landing,
    name: "Privacy Policy"
  }
];

let routes = [...yegocoffee_routes, ...about_routes, ...legal_routes];
export { routes, yegocoffee_routes, about_routes, legal_routes };
