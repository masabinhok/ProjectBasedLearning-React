// Client Side Routing
// React Router enables "client side routing".

// In traditional websites, the browser requests a document from a web server, downloads and evaluates CSS and JavaScript assets, and renders the HTML sent from the server. When the user clicks a link, it starts the process all over again for a new page.

// Client side routing allows your app to update the URL from a link click without making another request for another document from the server. Instead, your app can immediately render some new UI and make data requests with fetch to update the page with new information.

// This enables faster user experiences because the browser doesn't need to request an entirely new document or re-evaluate CSS and JavaScript assets for the next page. It also enables more dynamic user experiences with things like animation.

// Client side routing is enabled by creating a Router and linking/submitting to pages with Link and <Form>:


import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <h1>Hello World!</h1>
        <Link to="about">About Us</Link>
      </div>
    ),
  },
  {
    path: "about",
    element: (
      <div>
        <h1>About Us</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Necessitatibus dolore inventore earum sint esse provident dolor.
          Fugiat tempore maiores repellendus quisquam, iure laboriosam vitae et
          provident, nam qui dolorum delectus impedit nobis! Quod dignissimos
          illum ad cupiditate debitis quo quas ratione eligendi laboriosam nobis
          enim architecto, libero id magni sapiente consequatur impedit minus.
          Itaque hic rerum, iusto aperiam debitis, corrupti est iste id ab
          reiciendis, magni expedita. Culpa, hic.
        </p>
      </div>
    ),
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
