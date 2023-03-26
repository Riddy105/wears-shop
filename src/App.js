import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { extendTheme, ChakraBaseProvider } from "@chakra-ui/react";
import Home from "./pages/Home";
import Root from "./pages/Root";
import Category from "./pages/Category";
import Details from "./pages/Details";
import Cart from "./pages/Cart";

const route = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      { path: "/list/:category", element: <Category /> },
      { path: "/list/:category/:cloth", element: <Details /> },
    ],
  },

  { path: "/cart", element: <Cart /> },
]);
const theme = extendTheme({
  colors: {
    grey: {
      50: "#757575",
      100: "#172C50",
    },
    black: {
      50: "#202020",
    },
  },
  styles: {
    global: {
      ".sizes, .quantity": {
        border: "none",
        borderRadius: "0",
        width: "100%",
      },
      ".sizes:focus-visible, .quantity:focus-visible": {
        outline: "none",
      },
      ".sizes-label": {
        marginRight: "1.5rem",
      },
      ".div": {
        backgroundColor: "Yellow",
      },
    },
  },
});
function App() {
  return (
    <ChakraBaseProvider theme={theme}>
      <RouterProvider router={route}></RouterProvider>
    </ChakraBaseProvider>
  );
}

export default App;
