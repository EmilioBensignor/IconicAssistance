<template>
  <CallToAction />
  <HeaderPagesComponent />
  <section class="heroPagesWave columnAlignCenter">
    <div class="heroPages flexCenter">
      <h1 v-motion="scrollBottom" class="text-midnight">
        Explore Our Executive Assistant Blog
      </h1>
    </div>
  </section>
  <section class="skyRadioactive">
    <div class="content">
      <div class="columnAlignCenter">
        <h2
          v-motion="scrollBottom"
          class="h2Search text-white font-weight-bold">
          Search
        </h2>
        <v-form class="w-75 buscador my-5 rounded-xl">
          <input
            type="search"
            name="blogSearch"
            v-model="blogSearch"
            class="inputSearch w-100 bg-white rounded-xl elevation-5 py-3 px-5"
            placeholder="What do you want to learn?"
            hide-details />
        </v-form>
        <div class="w-75 blogPosts columnAlignCenter ga-13 mt-5">
          <article
            v-for="(item, index) in filteredBlogs"
            :key="index"
            v-motion="scrollBottom"
            class="columnAlignCenter bg-white rounded-lg elevation-7">
            <router-link :to="`/blog-post/${item.slug}`">
              <img
                :src="getImgUrl(item.img)"
                :alt="item.alt"
                class="rounded-t-lg"
                width="100%"
                eager />
            </router-link>
            <div class="column ga-4 pa-5 pt-3">
              <h3 class="text-midnight text-start">{{ item.title }}</h3>
              <p class="w-100 text-midnight text-start">{{ item.summary }}</p>
              <router-link
                class="secondaryButton elevation-5 mt-2"
                :to="`/blog-post/${item.slug}`"
                >Read Full Post</router-link
              >
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
  <FooterComponent />
</template>

<script>
  import { blogs } from "@/cms/blogs.service.js";
  import HeaderPagesComponent from "@/components/HeaderPagesComponent.vue";
  import CallToAction from "@/components/calendly/CallToAction.vue";
  import FooterComponent from "@/components/FooterComponent.vue";

  export default {
    name: 'Blog',
    components: {
      HeaderPagesComponent,
      CallToAction,
      FooterComponent,
    },
    data() {
      return {
        blogSearch: "",
        blogs: blogs,
      };
    },
    computed: {
      filteredBlogs() {
        return this.blogs.filter((blog) => this.checkFields(blog));
      },
    },
    methods: {
      checkFields(blog) {
        const search = this.blogSearch.toLowerCase();
        return (
          blog.title.toLowerCase().includes(search) ||
          // blog.intro.toLowerCase().includes(search) ||
          blog.h2.toLowerCase().includes(search) ||
          // blog.closer.toLowerCase().includes(search) ||
          blog.keywords.some((keyword) =>
            keyword.toLowerCase().includes(search)
          ) ||
          // blog.bullet.some((bulletPoint) =>
          //   bulletPoint.toLowerCase().includes(search)
          // )
          blog.summary.toLowerCase().includes(search)
        );
      },
      getImgUrl(imgName) {
        return new URL(`/src/assets/images/blogs/${imgName}`, import.meta.url)
          .href;
      },
    },
  };
</script>

<script setup>
  import { scrollBottom } from "@/motions.js";
</script>

<style scoped>
  /* MD */
  @media only screen and (min-width: 769px) {
    article {
      width: 65% !important;
    }
  }

  /* LG */
  @media only screen and (min-width: 992px) {
    article {
      width: 55% !important;
    }
  }

  /* Desktop */
  @media only screen and (min-width: 1080px) {
    .h2Search {
      text-align: start;
      padding-left: 8vw;
    }

    .inputSearch {
      font-size: 1.2rem;
    }

    .blogPosts {
      width: 80% !important;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      align-items: flex-start;
      gap: 3vw !important;
      margin-top: 4vw !important;
      margin-bottom: 7vw;
    }

    article {
      width: 30% !important;
      justify-content: space-between;
    }

    h3 {
      font-size: 1.5rem;
    }

    .secondaryButton {
      font-size: 1.2rem;
    }
  }

  /* XL */
  @media only screen and (min-width: 1440px) {
    .blogPosts {
      width: 75% !important;
      padding-bottom: 5vw;
    }
  }

  @media only screen and (min-width: 1600px) {
    .blogPosts {
      width: 70% !important;
    }
  }
  @media only screen and (min-width: 1920px) {
    .blogPosts {
      margin-top: 50px !important;
      margin-bottom: 50px !important;
      padding-bottom: 120px;
    }
  }
</style>
