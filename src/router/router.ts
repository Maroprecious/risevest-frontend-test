import { homeRoutes } from "@/pages/home/home.router";
import { RouteObject, createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter(homeRoutes as RouteObject[]);
