import { createBrowserRouter } from "react-router";
import { Outlet } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Testimoni from "./pages/Testimoni";
import FAQ from "./pages/FAQ";
import Navbar from "./components/Navbar";
function RootLayout() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-5xl px-4 py-8">
        <Outlet />
      </main>
    </>
  );
}

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "home/:id", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "testimoni", element: <Testimoni /> },
      { path: "faq", element: <FAQ /> },
    ],
  },
]);
