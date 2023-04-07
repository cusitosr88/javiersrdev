<template>
    <article class="bg-white pt-5 pb-5 ">
    <div class="mx-auto lg:max-w-4xl px-5 lg:text-lg prose">
        <ContentDoc :path="$route.path">
        <template v-slot="{ doc }">  
            <ContentRenderer :value="doc" />
        </template>
        </ContentDoc>
    </div>
    </article>
</template>
<script lang="ts" setup>
const runtimeConfig = useRuntimeConfig()
const route = useRoute()
const data = await queryContent(`/blog/${route.params.slug}`).findOne()
useHead({
    meta: [
        { hid: 'og:image', property: 'og:image', content: `${runtimeConfig.public.siteUrl}${data.img}` }
    ]
})
</script>
