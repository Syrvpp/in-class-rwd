import { nav, toggle, validation } from "./lib/index.js";

nav();

switch (location.pathname) {
  case "/form/":
    toggle();
    validation();
    break;
}
