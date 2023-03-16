<template>
    <div class="min-h-screen bg-slate-800">
        <NuxtLoadingIndicator />
        <Header/>
        <main class="mx-auto px-0 lg:px-0 pt-14 lg:pt-12 h-3/4">
            <slot />
        </main>
        <Footer/>
    </div>
  </template>
  <script setup>
  </script>
