import { Router, Component } from "https://cdn.jsdelivr.net/gh/pablotheblink/ScopeJS/js/ScopeJS.min.js";
import { HomeController } from "./pages/HomeController.js";

export const router = Router(
    [
      {
        path: "/",
        controller: HomeController,
        alias: "section",
      },
    ],
    {
      useHash: true
    }
  );

  router.render(document.body);