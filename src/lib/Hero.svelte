<script lang="ts">
  import RickIcon from "./icons/RickIcon.svelte";
</script>

<section class="hero">
  <h1 class="hero-title">The Rick and Morty API</h1>
  <figure class="hero-image">
    <RickIcon></RickIcon>
  </figure>
</section>

<style>
  .hero {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    height: calc(50vh - 60px);
  }

  .hero-title {
    font-size: 6.25rem;
    font-weight: 900;
    text-align: center;
    z-index: 10;
  }

  .hero-title::selection {
    background-color: var(--main);
    color: var(--orange);
  }

  .hero-image {
    position: absolute;
    width: 18.75rem;
  }
</style>
