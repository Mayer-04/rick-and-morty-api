<script lang="ts">
  import type { Result } from "../types/results";

  export let characters: Result[];
</script>

{#each characters as { image, name, status, location, origin }}
  <article class="character">
    <figure>
      <img src={image} alt={name} />
    </figure>

    <div class="info">
      <header>
        <h1>{name}</h1>
        <p>{status}</p>
      </header>

      <div>
        <p>Last known location:</p>
        <p>{location.name}</p>
      </div>

      <footer>
        <p>First seen in:</p>
        <p>{origin.name}</p>
      </footer>
    </div>
  </article>
{/each}

<style>
  .character {
    display: flex;
    width: 500px;
    height: 13.75rem;
    background-color: var(--cards);
    color: var(--white);
    border-radius: 0.5rem;
  }

  .info {
    display: flex;
    flex-direction: column;
    padding: 15px;
  }

  img {
    width: 100%;
    height: -webkit-fill-available;
  }
</style>
