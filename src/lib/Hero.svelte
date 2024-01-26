<script lang="ts">
  import RickIcon from "./icons/RickIcon.svelte";
</script>

<section class="hero">
  <h1>The Rick and Morty API</h1>
  <figure>
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

  figure {
    position: absolute;
    width: 18.75rem;
  }

  h1 {
    font-size: 6.25rem;
    font-weight: 900;
    z-index: 10;
    text-align: center;
  }

  h1::selection {
    background-color: var(--main);
    color: var(--orange);
  }
</style>
