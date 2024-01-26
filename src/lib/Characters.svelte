<script lang="ts">
  import type { Result } from "../types/results";

  export let characters: Result[];

  const sliceCharacters = characters.slice(0, 6);
</script>

{#each sliceCharacters as character}
  <article class="character">
    <figure>
      <img src={character.image} alt={character.name} />
    </figure>

    <div class="info">
      <header>
        <h1>{character.name}</h1>
        <p>{character.status}</p>
      </header>

      <div>
        <p>Last known location:</p>
        <p>{character.location.name}</p>
      </div>

      <footer>
        <p>First seen in:</p>
        <p>{character.origin.name}</p>
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
