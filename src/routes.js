
import Dashboard from "views/Dashboard";
import ProductsList from 'views/ProductsList';
import AddProduct from 'views/AddProduct';
import EditProduct from 'views/EditProduct';
import CampaignList from 'views/CampaignList';
import Login from 'views/Login';


const dashboardRoutes = [
  
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "fa fa-pie-chart",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/productsList",
    name: "Products",
    icon: "fa fa-list",
    component: ProductsList,
    layout: "/admin"
  },
  {
    path: "/addProduct",
    name: "Add Product",
    icon: "pe-7s-portfolio",
    component: AddProduct,
    layout: "/admin"
  },
  {
    path: "/editProduct",
    name: "Edit Product",
    icon: "fa fa-pencil-square-o",
    component: EditProduct,
    layout: "/admin"
  },
  {
    path: "/campaignList",
    name: "Campaign",
    icon: "pe-7s-loop",
    component: CampaignList,
    layout: "/admin"
  },
  {
    path: "/login",
    name: "Login",
    icon: "fa fa-sign-in",
    component: Login,
    layout: "/admin"
  }
];

export default dashboardRoutes;
