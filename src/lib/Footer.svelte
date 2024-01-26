<script lang="ts">
  import GitHub from "./icons/GitHub.svelte";
  import Favorite from "./icons/Favorite.svelte";
  import Netlify from "./icons/Netlify.svelte";
  import Stellate from "./icons/Stellate.svelte";
  import X from "./icons/X.svelte";

  const date = new Date();
  let year = date.getFullYear();
</script>

<footer class="footer">
  <nav class="nav-api">
    <a href="https://rickandmortyapi.com/api/character" target="_blank"
      >CHARACTERS: 826</a
    >
    <a href="https://rickandmortyapi.com/api/location" target="_blank"
      >LOCATIONS: 126</a
    >
    <a href="https://rickandmortyapi.com/api/episode" target="_blank"
      >EPISODES: 51</a
    >
  </nav>

  <div class="server-status">
    <p>SERVER STATUS</p>
    <span class="icon"></span>
  </div>

  <figure class="deploy">
    <a href="https://www.netlify.com" target="_blank">
      <Netlify></Netlify>
    </a>
    <a href="https://stellate.co/?ref=powered-by" target="_blank">
      <Stellate></Stellate>
    </a>
  </figure>

  <nav class="social-networks">
    <a
      href="https://github.com/afuh/rick-and-morty-api"
      title="GitHub"
      target="_blank"
    >
      <GitHub></GitHub>
    </a>
    <a href="https://twitter.com/rickandmortyapi" title="X" target="_blank">
      <X></X>
    </a>
    <a
      href="https://rickandmortyapi.com/support-us"
      title="Favorite"
      target="_blank"
    >
      <Favorite></Favorite>
    </a>
  </nav>

  <div>
    <p>
      ❮❯ by <a class="creator" href="https://github.com/afuh" target="_blank"
        >Axel Fuhrmann</a
      >
      {year}
    </p>
  </div>
</footer>

<style>
  .footer {
    --transition-color: color 0.2s;
    --gap: 1.5rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 0.875rem;
    background-color: var(--footer);
    color: var(--unknown);
    row-gap: 1.25rem;
    padding: 4.5rem 0;
  }

  .nav-api {
    display: flex;
    gap: 20px;
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

  .server-status {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    font-weight: 700;
  }

  .icon {
    --width: 9px;
    --height: 9px;

    display: inline-block;
    width: var(--width);
    height: var(--height);
    border-radius: 50%;
    background-color: var(--alive);
  }

  .deploy {
    display: flex;
    gap: var(--gap);
  }

  .deploy a {
    cursor: pointer;
  }

  .social-networks {
    display: flex;
    gap: var(--gap);
  }

  .social-networks a {
    color: var(--unknown);
    text-decoration: none;
    transition: var(--transition-color);
  }

  .social-networks a:hover {
    color: var(--orange);
  }

  .creator {
    color: var(--white);
    text-decoration: none;
    border-bottom: 1px solid var(--orange);
    transition: var(--transition-color);
  }

  .creator:hover {
    color: var(--orange);
    border: 0;
  }
</style>
