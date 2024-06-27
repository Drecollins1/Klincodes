import React, { useEffect } from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Applayout from "./Applayout";
import HomePage from "./HomePage";
import ErrorPage from "./errorPage";
import Gallery from "./pages/gallery";
import About from "./pages/about";
import Booknow from "./pages/Booknow";
import { ContactUs } from "./pages/emailjs";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Applayout />}>
      <Route index element={<HomePage />} />
      <Route path="gallery" element={<Gallery />} />
      <Route path="about" element={<About />} />
      <Route path="booknow" element={<Booknow />} />
      <Route path="emailjs" element={<ContactUs />} />
      <Route path="*" element={<ErrorPage />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
