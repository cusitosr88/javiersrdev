<template>
    <div class="bg-white pt-6 pb-6">
        <div class="mx-auto lg:max-w-6xl px-5">
        <h2 class="text-2xl">Take a moment to read, learn and enjoy!</h2>
            <ul class="grid gap-4 mt-6 sm:grid-cols-2 lg:grid-cols-3">
                <li v-for="{ _path: slug, title, description, img } in blogPosts" :key="slug">
                    <div class="block overflow-hidden group rounded-md border-2">
                        <NuxtLink :to="slug">
                            <nuxt-img
                                :src="img"
                                loading="lazy"
                                placeholder="/images/no-image.jpg"
                                class="h-[150px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[250px]"
                            />
                        </NuxtLink>
                    <div class="relative pt-3 px-2" :key="`portfolio-description-${idx}`">
                        <h3
                        class="text-lg text-slate-900 font-bold"
                        >
                        {{ title }}
                        </h3>
                        <div class="mt-2 pb-2">
                        <p class="tracking-wider text-gray-900"> {{ description }} </p>
                        </div>
                        <div class="pb-3 pt-3 text-right">
                            <NuxtLink :to="slug"
                                class="bg-slate-500
                                hover:bg-slate-700
                                text-white font-bold 
                                py-2 px-4 rounded-full"
                            >
                                Read more
                            </NuxtLink>
                        </div>
                    </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script setup>
useHead({
  title: 'JavierDev Blog | Vuejs, Quasar Framework, Nuxtjs, Javascript',
  meta: [
    { name: 'description', content: 'Discover the power of Vue.js, Quasar Framework, Nuxt.js and JavaScript with this informative and educational blog. Whether you\'re a beginner or an experienced developer, you\'ll find practical tips, tutorials, and insights to help you unleash the full potential of these powerful technologies.' }
  ]
})
const { data: blogPosts, pending } = await useAsyncData('blog', () => {
     return queryContent('/blog').sort({ date: -1 }).where({ _partial: false }).find()
})
</script>
<style>
    
</style>