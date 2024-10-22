<script lang="ts">
  import type { Result } from "./types/results";
  import Header from "./lib/Header.svelte";
  import Hero from "./lib/Hero.svelte";
  import Characters from "./lib/Characters.svelte";
  import Footer from "./lib/Footer.svelte";
  import { getCharacters } from "./data/get-characters";

  let characters: Result[] = $state([]);

  async function fetchCharacters() {
    const results = await getCharacters();
    characters = results;
  }

  $effect(() => {
    fetchCharacters();
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
    gap: 1.875rem;
    background-color: var(--characters);
    padding: 5rem 0;
  }
</style>
