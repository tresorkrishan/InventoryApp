import Dashboard from "views/Dashboard.js";
import Notifications from "views/Notifications.js";
import Icons from "views/Icons.js";
import TableList from "views/Tables.js";
import Maps from "views/Map.js";
import UserPage from "views/User.js";
import UpgradeToPro from "views/Upgrade.js";
import Register from "views/RegisterUserForm";
import CustomerSignInForm from "views/CustomerSignForm";
import ProductMenu from "views/MainProduct-Menu/ProductMenu";

// import IpadMenu from "views/MainProduct-Menu/ProductCategories/IpadMenu";
import Loader from "components/Loader";
import LandingPage from "views/LandingPage";
import UpdateUserForm from "views/UpdateUserForm";

var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-bank",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/register",
    name: "register",
    icon: "nc-icon nc-bank",
    component: Register,
    layout: "/admin",
  },
  {
    path: "/updateuser",
    name: "User Update",
    icon: "nc-icon nc-bank",
    component: CustomerSignInForm,
    layout: "/admin",
  },
  // {
  //   path: "/productMenu",
  //   name: "Main Product Availability Menu",
  //   icon: "nc-icon nc-bank",
  //   component: ProductMenu,
  //   layout: "/admin",
  // },
  // {
  //   path: "/icons",
  //   name: "Icons",
  //   icon: "nc-icon nc-diamond",
  //   component: Icons,
  //   layout: "/admin",
  // },

  // {
  //   path: "/maps",
  //   name: "Maps",
  //   icon: "nc-icon nc-pin-3",
  //   component: Maps,
  //   layout: "/admin",
  // },
  // {
  //   path: "/notifications",
  //   name: "Notifications",
  //   icon: "nc-icon nc-bell-55",
  //   component: Notifications,
  //   layout: "/admin",
  // },
  // {
  //   path: "/user-page",
  //   name: "User Profile",
  //   icon: "nc-icon nc-single-02",
  //   component: UserPage,
  //   layout: "/admin",
  // },

  // {
  //   path: "/tables",
  //   name: "Table List",
  //   icon: "nc-icon nc-tile-56",
  //   component: TableList,
  //   layout: "/admin",
  // },
  // {
  //   pro: true,
  //   path: "/upgrade",
  //   name: "Upgrade to PRO",
  //   icon: "nc-icon nc-spaceship",
  //   component: UpgradeToPro,
  //   layout: "/admin",
  // },

  // {
  //   path: "/loader",
  //   name: "loaderComponent",
  //   icon: "nc-icon nc-spaceship",
  //   component: Loader,
  //   layout: "/admin",
  // },
  {
    path: "/landingpage",
    name: "landingpage",
    icon: "nc-icon nc-spaceship",
    component: LandingPage,
    layout: "/admin",
  },
  {
    path: "/update",
    name: "update",
    icon: "nc-icon nc-spaceship",
    component: UpdateUserForm,
    layout: "/admin",
  },
];
export default routes;
