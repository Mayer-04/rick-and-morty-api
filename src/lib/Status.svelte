<script lang="ts">
  import { Status } from "../types/results";
  export let name: string;
  export let status: string;
  export let species: string;
</script>

<header class="characters-status">
  <h2 class="name">{name}</h2>
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

<style>
  .name {
    font-size: 1.6875rem;
  }

  .status-icon {
    --width: 9px;
    --height: 9px;

    display: inline-block;
    width: var(--width);
    height: var(--height);
    border-radius: 50%;
  }

  .status {
    font-weight: 700;
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
