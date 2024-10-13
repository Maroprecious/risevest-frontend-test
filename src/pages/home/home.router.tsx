import Preloader from "@/lib/ui/preloader/preloder";
import { RouteType } from "@/router/router.types";
import { lazy, Suspense } from "react";

const HomePage = lazy(() => import("./"));

export const homePaths = [
  "/",
]

export const homeRoutes: RouteType[] = [
  {
    path: "/",
    element: (
      <Suspense fallback={<Preloader />}>
        <HomePage />
      </Suspense>
    ),
  },
];
