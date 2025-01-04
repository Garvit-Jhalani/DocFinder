import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import About from "./pages/AboutUs.jsx";
import Documents from "./pages/Documents.jsx";
import Search from "./pages/Search.jsx";
import Upload from "./pages/Upload.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/upload",
    element: <Upload />,
  },
  {
    path: "/search",
    element: <Search />,
  },
  {
    path: "/documents",
    element: <Documents />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Auth0Provider
      domain="dev-3fjgvbot14tdw8gc.us.auth0.com"
      clientId="gdIxOrrg8WucX4JFLqFd5hKZAjFITRap"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <RouterProvider router={router} />
    </Auth0Provider>
  </StrictMode>
);
