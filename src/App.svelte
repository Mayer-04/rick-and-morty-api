<script lang="ts">
  import type { Result } from "./types/results";
  import { getCharacters } from "./data/get-characters";
  import Header from "./lib/Header.svelte";
  import Hero from "./lib/Hero.svelte";
  import Characters from "./lib/Characters.svelte";
  import Footer from "./lib/Footer.svelte";

  let characters: Result[] = $state([]);

  async function fetchCharacters() {
    try {
      const data = await getCharacters();
      characters.push(...data);
    } catch (error) {
      throw new Error("Error getting characters on multiple promises", {
        cause: error,
      });
    }
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
