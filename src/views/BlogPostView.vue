<template>
  <HeaderTransparentComponent />
  <section
    class="heroSection"
    :style="{ backgroundImage: `url(${getImgUrl(blog.img)})` }">
    <div class="heroOverlay flexCenter justify-center">
      <div class="heroPages flexCenter">
        <h1 v-motion="scrollBottom" class="text-white">{{ blog.title }}</h1>
        <p v-motion="scrollBottom" class="text-radioactive font-weight-bold mt-3">
          {{ formatDate(blog.date) }}
        </p>
      </div>
    </div>
    <img 
      src="@/assets/images/misc/White-Bottom-Wave.png"
      alt="White Bottom Wave"
      class="heroPagesWhiteWave"
      width="100%"
    />
  </section>
  <section class="radioactiveWave">
    <h2 v-motion="scrollBottom" class="text-midnight">{{ blog.h2 }}</h2>
    <div class="text-start text-midnight px-5 my-5">
      <p class="w-100">{{ blog.intro }}</p>
      <ul class="blogBullets px-3 my-3 column ga-4">
        <li v-for="(item, index) in blog.bullet" :key="index">
          {{ item }}
        </li>
      </ul>
      <p class="w-100">{{ blog.closer }}</p>
    </div>
    <div class="columnAlignCenter mt-5">
      <h2 v-motion="scrollBottom" class="text-midnight">Recent Posts</h2>
      <div class="columnAlignCenter ga-7 py-5">
        <article
          v-for="(recentBlog, index) in recentBlogs"
          :key="index"
          v-motion="scrollBottom"
          class="recentBlog text-start w-75 elevation-5 rounded-lg">
          <img
            :src="getImgUrl(recentBlog.img)"
            :alt="recentBlog.alt"
            class="rounded-t-lg"
            width="100%" />
          <div class="pa-3">
            <p class="text-midnight mb-2">{{ recentBlog.title }}</p>
            <p class="text-lightGray">{{ formatDate(recentBlog.date) }}</p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script>
  import { blogs } from "@/cms/blogs.service.js";
  import HeaderTransparentComponent from "@/components/HeaderTransparentComponent.vue"

  export default {
    components: {
      HeaderTransparentComponent,
    },
    data() {
      return {
        blogs: blogs,
        blog: null,
        blogSlug: null,
      };
    },
    created() {
      this.fetchBlogDetails();
    },
    watch: {
      $route() {
        this.fetchBlogDetails();
      },
    },
    computed: {
      recentBlogs() {
        const sortedBlogs = [...this.blogs].sort(
          (a, b) => new Date(b.date) - new Date(a.date)
        );
        return sortedBlogs.slice(0, 3);
      },
    },
    methods: {
      fetchBlogDetails() {
        this.blogSlug = this.$route.params.slug;
        this.blog = blogs.find((blog) => blog.slug === this.blogSlug);
      },
      getImgUrl(imgName) {
        return new URL(`../assets/images/blogs/${imgName}`, import.meta.url)
          .href;
      },
      formatDate(dateString) {
        const date = new Date(dateString);
        const options = { month: "long", day: "numeric", year: "numeric" };
        return date.toLocaleDateString("en-US", options);
      },
    },
  };
</script>

<script setup>

  import { scrollBottom } from "@/motions.js"
</script>

<style scoped>
  .heroSection {
    position: relative;
    width: 100%;
    height: 525px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  .heroOverlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
  }

  .radioactiveWave{
    background-image: url("@/assets/images/misc/Radioactive-Bottom-Wave.png");
    background-repeat: no-repeat;
    background-size: contain;
    background-position: bottom;
    padding-bottom: 20vw;
  }

  .recentBlog {
    width: 85%;
  }
</style>
