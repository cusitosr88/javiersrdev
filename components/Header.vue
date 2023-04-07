<template>
<header class="flex items-center justify-between h-20 lg:max-w-6xl mx-auto px-5 xl:px-5">
    <NuxtLink to="/">
        <Logo class="w-8 h-8 mr-5"/>
    </NuxtLink>
    <!-- nav -->
    <ul class="flex items-center space-x-2">
    <template v-for="(n, i) in nav" :key="i">
        <li>
            <NuxtLink
                :to="n.link"
                class="inline-block text-xs lg:text-base px-2 py-2 bg-slate-100 rounded-full hover:bg-blue-200 transition-all duration-300"
            >
            {{ n.name }}
            </NuxtLink>
        </li>
    </template>
    </ul>
</header>
</template>
<script lang="ts" setup>
interface NavItem {
    name: string
    link: string
}
const nav: NavItem[] = [
        {
            name: 'Home',
            link: '/',
        },
        {
            name: 'Portfolio',
            link: '/#portfolio'
        },
        {
            name: 'Blog',
            link: '/blog'
        }
    ]
</script>
