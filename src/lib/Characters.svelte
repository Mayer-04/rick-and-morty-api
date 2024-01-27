<script lang="ts">
  import { Status, type Result } from "../types/results";

  export let characters: Result[];
</script>

{#each characters as { image, name, status, species, location, origin }}
  <article class="character">
    <figure>
      <img src={image} alt={name} />
    </figure>

    <div class="info">
      <header>
        <h2>{name}</h2>
        <span
          class="status-icon"
          class:alive={status === Status.Alive}
          class:dead={status === Status.Dead}
          class:unknown={status === Status.Unknown}
        ></span>
        <span class="status">
          {status} - {species}
        </span>
      </header>

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

<style>
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
    display: flex;
    flex: 3 1 0%;
    flex-direction: column;
    gap: 10px;
    width: 100%;
    padding: 13px;
  }

  figure {
    flex: 2 1 0%;
    width: 100%;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  h2 {
    font-size: 1.6875rem;
  }

  .status {
    font-weight: 700;
  }

  .status-icon {
    --width: 9px;
    --height: 9px;

    display: inline-block;
    width: var(--width);
    height: var(--height);
    border-radius: 50%;
  }

  .title-location {
    color: var(--unknown);
    font-weight: 500;
  }

  .title-origin {
    color: var(--unknown);
    font-weight: 500;
  }

  .location {
    font-size: 18px;
  }

  .origin {
    font-size: 18px;
  }

  .alive {
    background-color: var(--alive);
  }

  .dead {
    background-color: var(--dead);
  }

  .unknown {
    background-color: var(--unknown);
  }
</style>
