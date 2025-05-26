import {
    FiBox,
    FiGrid,
    FiHome,
    FiShoppingCart,
    FiTruck,
    FiUsers,
  } from "react-icons/fi";
  
  export default [
    {
        title: "Dashboard",
        icon: FiHome,
        href: '/',
    },
    {
        title: "Resources",
        href: '/resources',
    },
    {
        title: "Categories",
        href: '/categories',
        icon: FiGrid,
    },
    {
        title: "Products",
        href: '/products',
        icon: FiBox,
    },
    {
        title: "Orders",
        href: '/orders',
        icon: FiShoppingCart,
    },
    {
        title: "Customers",
        href: '/customers',
        icon: FiUsers,
    },
    {
        title: "Deliveries",
        href: '/deliveries',
        icon: FiTruck,
    },
  ];