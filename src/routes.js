
import Dashboard from "views/Dashboard";
import ProductsList from 'views/ProductsList';
import AddProduct from 'views/AddProduct';
import EditProduct from 'views/EditProduct';
import AddCampaign from 'views/AddCampaign';
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
    path: "/addCampaign",
    name: "Add Campaign",
    icon: "pe-7s-loop",
    component: AddCampaign,
    layout: "/admin"
  },
  {
    path: "/login",
    name: "Login",
    icon: "pe-7s-loop",
    component: Login,
    layout: "/admin"
  },
  {
    path: "/editProduct",
    name: "Edit Product",
    icon: "pe-7s-loop",
    component: EditProduct,
    layout: "/admin"
  }
];

export default dashboardRoutes;
