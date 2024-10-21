<script lang="ts">
  import type { Result } from "./types/results";
  import Header from "./lib/Header.svelte";
  import Hero from "./lib/Hero.svelte";
  import Characters from "./lib/Characters.svelte";
  import Footer from "./lib/Footer.svelte";
  import { data } from "./main";

  let characters: Result[] = $state([]);
  $effect(() => {
    characters = data;
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
