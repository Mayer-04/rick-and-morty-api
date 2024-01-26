<script lang="ts">
  import { onMount } from "svelte";
  import type { Result } from "./types/results";
  import Header from "./lib/Header.svelte";
  import Hero from "./lib/Hero.svelte";
  import Footer from "./lib/Footer.svelte";
  import Characters from "./lib/Characters.svelte";
  import { getCharacters } from "./data/get-characters";

  let characters: Result[] = [];

  onMount(async () => {
    try {
      const data = await getCharacters();
      characters = [...data];
    } catch (error) {
      throw error;
    }
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
