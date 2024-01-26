<script lang="ts">
  import { onMount } from "svelte";
  import type { Result } from "./types/results";
  import Header from "./lib/Header.svelte";
  import Hero from "./lib/Hero.svelte";
  import Footer from "./lib/Footer.svelte";
  import Characters from "./lib/Characters.svelte";

  let characters: Result[] = [];

  onMount(async () => {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const data = await response.json();
    characters = data.results;
  });
</script>

<Header></Header>
<main>
  <Hero></Hero>
  <section class="characters">
    <Characters {characters}></Characters>
  </section>
</main>
<Footer></Footer>

<style>
  .characters {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
    background-color: var(--characters);
    padding: 5.0625rem 0;
  }
</style>
