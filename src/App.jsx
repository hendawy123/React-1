import { useState } from "react";
import "./App.css";
import About from "./components/About/About";
import Layout from "./components/LayOut/Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact.jsx";

let path = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "home", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "portfolio", element: <Portfolio /> },
      { path: "contact", element: <Contact /> },
    ],
  },
]);

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <RouterProvider router={path}></RouterProvider>
    </>
  );
}

export default App;
