<script lang="ts">
  import { onMount } from "svelte";
  import type { Result } from "./types/results";
  import Header from "./lib/Header.svelte";
  import Hero from "./lib/Hero.svelte";
  import Footer from "./lib/Footer.svelte";
  import { getCharacters } from "./data/get-characters";
  import Status from "./lib/Status.svelte";

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
    {#each characters as { image, name, status, species, location, origin }}
      <article class="character">
        <figure class="character-figure">
          <img src={image} alt={name} class="character-image" />
        </figure>

        <div class="info">
          <Status {name} {status} {species}></Status>
          <div>
            <p class="title-location">Last known location:</p>
            <p class="location">{location.name}</p>
          </div>

          <footer>
            <p class="title-origin">First seen in:</p>
            <p class="origin">{origin.name}</p>
          </footer>
        </div>
      </article>
    {/each}
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
    padding: 5.0625rem 0;
  }

  .character {
    display: flex;
    width: 37.5rem;
    height: 13.75rem;
    background-color: var(--cards);
    color: var(--white);
    border-radius: 0.5rem;
    overflow: hidden;
  }

  .info {
    --font-info: 1.125rem;
    --info-weigth: 500;

    display: flex;
    flex-direction: column;
    gap: 8px;
    flex: 3 1 0%;
    width: 100%;
    padding: 1rem;
  }

  .character-figure {
    flex: 2 1 0%;
    width: 100%;
  }

  .character-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .title-location {
    color: var(--unknown);
    font-weight: var(--info-weigth);
  }

  .title-origin {
    color: var(--unknown);
    font-weight: var(--info-weigth);
  }

  .location {
    font-size: var(--font-info);
  }

  .origin {
    font-size: var(--font-info);
  }
</style>
