<template>
<section id="portfolio" class="mx-auto lg:max-w-6xl">
  <div class="max-w-screen-xl px-0 py-8 mx-auto sm:px-2 sm:py-12 lg:px-8">
    <header class="text-center">
      <h2 class="text-xl font-bold text-slate-900 sm:text-3xl">
        Latest Projects
      </h2>

      <p class="max-w-md mx-auto mt-4 text-slate-900">
      </p>
    </header>

    <ul class="grid px-5 gap-4 mt-8 sm:grid-cols-2 lg:grid-cols-3">
      <li v-for="(p, idx) in portfolio" :key="`portfolio-${idx}`">
        <a class="block overflow-hidden group rounded-md border-2">
          <nuxt-img
            :src="p.image"
            loading="lazy"
            placeholder="/images/no-image.jpg"
            class="h-[250px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[250px]"
          />

          <div class="relative pt-3 px-2" :key="`portfolio-description-${idx}`">
            <h3
              class="text-md text-slate-900"
            >
              {{ p.title }}
            </h3>
            
            <div class="mt-2 pb-2">
              <ul class="flex items-center space-x-1 flex-wrap">
              <template v-for="(t, i) in p.tech" :key="i">
                  <li class="inline-block px-2 py-1 mt-2 bg-slate-700 text-slate-100 rounded-full text-xs">
                      {{ t }}
                  </li>
              </template>
              </ul>
            </div>
            <div class="mt-2 pb-2">
              <p class="tracking-wider text-gray-900"> {{ p.description }} </p>
            </div>
            <div class="mt-1 pb-2" v-if="p.link">
              <a :href="p.link" target="_blank">
                <Icon icon="mingcute:external-link-line" class="w-6 h-6" />
              </a>
            </div>
          </div>
        </a>
      </li>
    </ul>
  </div>
</section>
</template>
<script setup>
import { Icon } from '@iconify/vue'
const portfolio = [
  {
    title: '(SPA) Video Editor',
    image: '/images/mindmovies.webp',
    description: 'Creation Kit is a fantastic tool that helps you create a short, 3-minute video vision board of your dream life. It\'s like watching a movie that features powerful affirmations, beautiful images, motivating videos, and uplifting music which gives you a positive mindset.',
    tech: ['Vue.js', 'JavaScript', 'Quasar Framework', 'AWS', 'PWA'],
    link: 'https://platinum.mindmovies.com/'
  },
  {
    title: 'Community Service Manager',
    image: '/images/ammecs.webp',
    description: 'Is a Web app, a powerful tool for managing the sale of medical insurance policies. It offers insurance agents a streamlined platform to customize and sell policies, as well as track sales and revenue. The user-friendly interface makes managing sales a breeze.',
    tech: ['Django', 'Python', 'Vue.js', 'JavaScript', 'Quasar Framework'],
    link: ''
  },
  {
    title: 'Housettel',
    image: '/images/housettel.webp',
    description: 'HOUSETTEL is a one-stop-shop for new-build housing listings in Spain. This web portal simplifies the search process by gathering all available options for you to browse, compare, and consider at your leisure.',
    tech: ['Django', 'Python', 'Vue.js', 'JavaScript', 'Quasar Framework'],
    link: 'https://www.housettel.com/en/'
  },
  {
    title: 'MY Booking engine',
    image: '/images/my-booking.webp',
    description: 'Is designed to simplify the booking process for guests and hotels alike. Built using Vue.js and TypeScript, it provides a flexible and scalable solution that can cater to the needs of hotels of any size.',
    tech: ['Vue.js', 'TypeScript', 'Quasar Framework', 'Vuex'],
    link: 'https://mybooking.com.es/?client_id=12&client_secret=ZtgRLX1FJSSfr4fd3LUfY0mKK1AlLvhn6TuQoBA1'
  },
  {
    title: 'Syncbed',
    image: '/images/syncbed.webp',
    description: 'Syncbed is a feature-rich hotel software that simplifies the complexity of managing your booking calendars. It synchronizes and updates your vacation property calendar automatically across sites such as Airbnb, Booking, etc.',
    tech: ['Vue.js', 'JavaScript', 'Quasar Framework', 'Django', 'Python'],
    link: 'https://www.syncbed.com/'
  },
  {
    title: 'Vufink',
    image: '/images/vufink.webp',
    description: 'VuFink is a powerful web application designed to simplify the management of community organizations.',
    tech: ['Vue.js', 'JavaScript', 'Quasar Framework', 'Django', 'Python'],
    link: 'https://www.vuestrafinca.com/'
  }
]
</script>
