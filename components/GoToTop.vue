<template>
    <div
        ref="scrollTopButton"
        class="invisible sticky w-full flex justify-end bottom-0 pb-3 pr-5 transition"
    >
        <button type="button" class="
            text-white bg-slate-700 
            hover:bg-slate-800 
            focus:ring-4 
            focus:outline-none 
            focus:ring-slate-300 
            font-medium 
            rounded-full 
            text-lg 
            p-2.5 
            text-center 
            inline-flex 
            items-center mr-2
        "
        @click="goToTop"
        >
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none"
           stroke="#FFFFFF"
           stroke-width="1" stroke-linecap="square" stroke-linejoin="arcs">
            <path d="M18 15l-6-6-6 6"/>
        </svg>
        </button>
    </div>
</template>
<script lang="ts" setup>
const scrollTopButton: Ref<HTMLDivElement | null> = ref(null)

onMounted(() => {
    window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll)
})

function handleScroll():void {
    if (scrollTopButton.value && scrollTopButton.value.classList) {
        window.scrollY > 0 ? scrollTopButton.value.classList.remove('invisible') 
        : scrollTopButton.value.classList.add('invisible')
    }
}
const goToTop = () :void => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>