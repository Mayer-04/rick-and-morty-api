<script lang="ts">
  import type { Counts } from "../types/counts";

  type Props = {
    countPromises: Promise<Counts>;
  };

  let { countPromises }: Props = $props();
</script>

<nav class="nav-api">
  {#await countPromises then counts}
    <a
      href="https://rickandmortyapi.com/api/character"
      target="_blank"
      rel="noopener noreferrer">CHARACTERS: {counts.characters}</a
    >
    <a
      href="https://rickandmortyapi.com/api/location"
      target="_blank"
      rel="noopener noreferrer">LOCATIONS: {counts.locations}</a
    >
    <a
      href="https://rickandmortyapi.com/api/episode"
      target="_blank"
      rel="noopener noreferrer">EPISODES: {counts.episodes}</a
    >
  {/await}
</nav>

<style>
  .nav-api {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 1.25rem;
  }

  .nav-api a {
    font-weight: 700;
    color: var(--unknown);
    text-decoration: none;
    cursor: pointer;
    transition: var(--transition-color);
  }

  .nav-api a:hover {
    color: var(--orange);
  }
</style>
