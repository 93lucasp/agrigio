<template>
  <div class="container">
    <header class="flex items-center justify-between py-5 mb-8">
      <strong>
        <g-link to="/" class="text-3xl">Agrigio</g-link>
      </strong>
      <nav class="nav">
        <g-link to="/">Su di me</g-link>
      </nav>
    </header>
    <slot />
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
body {
  @apply bg-primary text-gray-100;
}
</style>
