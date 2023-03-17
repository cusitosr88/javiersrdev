<template>
    <div>
        <h1 class="capitalize text-slate-100 font-light text-[38px] lg:text-4xl text-center leading-snug">
            Hello, I'm Javier<br>
            <span class="font-extrabold lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-sky-500 to-blue-500">
                Web developer
            </span>
        </h1>
        <div class="mx-auto lg:max-w-6xl mt-4 lg:mt-4 text-center space-x-4 px-10">
            <span class="text-slate-100 lg:text-lg">Discover how I can help you build 
            high-quality and efficient web applications using my skills in 
            Vuejs, Quasar Framework, Nuxt, Pinia, Vite, Javascript, HTML, CSS, 
            Django Rest Framework, Python, Git, and Linux. Explore my portfolio 
            and learn more about my experience and work.
            </span>
        </div>
        <div class="mt-10 lg:mt-14 text-center space-x-2">
            <div class="text[32] font-bold text-slate-100">Follow me</div><br>
            <ul class="flex items-center justify-center space-x-2">
            <template v-for="(n, i) in nav" :key="i">
                <li>
                    <a
                        :href="n.link"
                        target="_blank"
                        class="inline-block px-3 py-2 text-slate-800 bg-slate-200 rounded-full hover:bg-slate-400 transition-all duration-300"
                    >
                    <div class="flex items-center space-x-2">
						<Icon :icon="n.icon" class="w-4 h-4" />
						<span class="font-medium"> {{ n.name }}</span>
					</div>
                    </a>
                </li>
            </template>
            </ul>
        </div>
        <div class="mt-8 flex flex-wrap lg:pl-4 bg-white">
          <Portfolio/>
        </div>
    </div>
</template>
<script setup>
import { Icon } from '@iconify/vue'
useHead({
  title: 'JavierDev Portfolio | Web Developer',
  meta: [
    { name: 'description', content: 'Take a closer look at my portfolio, an experienced web developer with expertise in Vue.js, Quasar Framework, Nuxt.js and JavaScript.' }
  ]
})
const nav = [
        {
            name: 'Linkedin',
            link: 'https://www.linkedin.com/in/javiersr88/',
            icon: 'carbon:logo-linkedin'
        },
        {
            name: 'Github',
            link: 'https://github.com/cusitosr88',
            icon: 'carbon:logo-github'
        }
    ]
</script>
<style scoped>
.separator-port {
    position: relative;
    width: 100%;
    padding: 8rem 0;
    -webkit-transform: scale(1.0001);
    -moz-transform: scale(1.0001);
    -ms-transform: scale(1.0001);
    transform: scale(1.0001);
    background: hsla(259, 10%, 11%, 1);
    background: linear-gradient( to bottom, transparent, rgba(0,0,0,0.1) 30%, rgba(0,0,0,0.8) 70%, rgba(0,0,0,0.99) );
}
</style>
