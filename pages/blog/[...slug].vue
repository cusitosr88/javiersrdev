<template>
    <article class="bg-white pt-5 pb-5">
    <div class="mx-auto lg:max-w-4xl prose">
        <ContentDoc :path="$route.path">
        <template v-slot="{ doc }">  
            <ContentRenderer :value="doc" />
        </template>
        </ContentDoc>
    </div>
    </article>
</template>
<script setup>
</script>
