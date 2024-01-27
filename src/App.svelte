<script lang="ts">
  import { onMount } from "svelte";
  import { getCharacters } from "./data/get-characters";
  import type { Result } from "./types/results";
  import Header from "./lib/Header.svelte";
  import Hero from "./lib/Hero.svelte";
  import Characters from "./lib/Characters.svelte";
  import Footer from "./lib/Footer.svelte";

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
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 30px;
    background-color: var(--characters);
    padding: 5rem 0;
  }
</style>
