
import Dashboard from "views/Dashboard";
import ProductsList from 'views/ProductsList';
import AddProduct from 'views/AddProduct';
import AddCampaign from 'views/AddCampaign';


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
  }
];

export default dashboardRoutes;
