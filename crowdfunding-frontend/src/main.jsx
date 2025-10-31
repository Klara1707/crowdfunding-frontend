
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

// Pages
import HomePage from "./pages/HomePage.jsx";
import FundraiserPage from "./pages/FundraiserPage.jsx";
import LoginPage from "./pages/LoginPages.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import UserForm from './pages/UserForm.jsx';

// Components
import { AuthProvider } from "./components/AuthProvider.jsx";
import ContactFormPop from "./components/ContactFormPop.jsx";

// Layout wrapper with NavBar
const Layout = () => (
  <>

    <Outlet />
  </>
);

// Router setup
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/login", element: <LoginPage /> },
      { path: "/fundraiser/:id", element: <FundraiserPage /> },
      { path: "/about", element: <AboutPage /> },
      { path: "/create-user", element: <UserForm /> },
      { path: "/contactFormPop", element: <ContactFormPop /> },
    ],
  },
]);

// Render the app
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);

