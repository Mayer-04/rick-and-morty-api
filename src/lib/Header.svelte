<script lang="ts">
  import Logo from "./icons/Logo.svelte";
</script>

<header class="header">
  <a href="/">
    <Logo></Logo>
  </a>

  <nav class="nav">
    <a href="https://www.google.com/" target="_blank" rel="noopener noreferrer"
      >Docs</a
    >
    <a href="https://www.google.com/" target="_blank" rel="noopener noreferrer"
      >About</a
    >
    <a href="https://www.google.com/" target="_blank" rel="noopener noreferrer"
      >SUPPORT US</a
    >
  </nav>
</header>

<style>
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 24px;
  }

  .nav {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2.5rem;
  }

  .nav a {
    font-size: 1.125rem;
    font-weight: 700;
    color: var(--main);
    text-decoration: none;
    transition: all 0.2s;
  }

  .nav a:hover {
    color: var(--orange);
  }

  .nav a:last-child {
    display: inline-block;
    font-size: 0.875rem;
    border-radius: 8px;
    padding: 0.5rem 1.125rem;
    border: 1px solid var(--orange);
  }

  .nav a:last-child:hover {
    background-color: var(--orange);
    color: var(--white);
  }
</style>
