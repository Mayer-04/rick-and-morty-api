import "./app.css";
import { mount } from "svelte";
import App from "./App.svelte";
import { getCharacters } from "./data/get-characters";

export const data = await getCharacters();
const app = mount(App, {
  target: document.getElementById("app") as HTMLElement,
});

export default app;
