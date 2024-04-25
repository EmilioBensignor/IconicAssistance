<template>
  <CallToAction />
  <HeaderTransparentComponent />
  <section class="heroSection" :style="{ backgroundImage: `url(${getImgUrl(blog.img)})` }">
    <div class="heroOverlay flexCenter justify-center">
      <div class="heroPages flexCenter">
        <h1 v-motion="scrollBottom" class="text-white">{{ blog.title }}</h1>
        <p v-motion="scrollBottom" class="text-radioactive subtitle font-weight-bold mt-3">
          {{ formatDate(blog.date) }}
        </p>
      </div>
    </div>
    <img src="@/assets/images/misc/White-Bottom-Wave.png" alt="White Bottom Wave" class="heroPagesWhiteWave"
      width="100%" />
  </section>
  <section class="radioactiveWave">
    <div class="content">
      <div class="blogRecentPost columnAlignCenter">
        <div class="blogPost columnAlignCenter">
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
        </div>
        <div class="recentBlogs columnAlignCenter mt-5">
          <h2 v-motion="scrollBottom" class="text-midnight">Recent Posts</h2>
          <div class="w-75 recentBlogWrapper columnAlignCenter ga-10 py-5">
            <article v-for="(recentBlog, index) in recentBlogs" :key="index" v-motion="scrollBottom"
              class="recentBlog text-start elevation-5 rounded-lg">
              <img :src="getImgUrl(recentBlog.img)" :alt="recentBlog.alt" class="rounded-t-lg" width="100%" />
              <div class="pa-3">
                <p class="text-midnight mb-2">{{ recentBlog.title }}</p>
                <p class="text-lightGray">{{ formatDate(recentBlog.date) }}</p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  </section>
  <FooterComponent />
</template>

<script>
import { blogs } from "@/cms/blogs.service.js";
import HeaderTransparentComponent from "@/components/HeaderTransparentComponent.vue";
import CallToAction from "@/components/calendly/CallToAction.vue";
import FooterComponent from "@/components/FooterComponent.vue";

export default {
  name: 'BlogPost',
  components: {
    HeaderTransparentComponent,
    CallToAction,
    FooterComponent,
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
import { scrollBottom } from "@/motions.js";
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

.radioactiveWave {
  background-image: url("@/assets/images/misc/Radioactive-Bottom-Wave.png");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: bottom;
  padding-bottom: 20vw;
}

.recentBlog {
  width: 85%;
}

.recentBlog div p:nth-child(1) {
  font-weight: 500;
}

.recentBlog div p:nth-child(2) {
  font-weight: 400;
  color: rgba(0, 0, 0, 0.5);
}

/* SM */
@media only screen and (min-width: 480px) {
  .heroSection {
    height: 600px;
  }

  .recentBlog {
    width: 75% !important;
  }
}

/* MD */
@media only screen and (min-width: 769px) {
  .heroSection {
    height: 675px;
  }

  .recentBlogWrapper{
    width: 90% !important;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
  }

  .recentBlog {
    width: 35% !important;
  }
}

/* LG */
@media only screen and (min-width: 992px) {
  .heroSection {
    width: 100vw;
    height: 700px;
  }

  .recentBlogWrapper {
    width: 60% !important;
  }
}

/* Desktop */
@media only screen and (min-width: 1080px) {
  .heroSection {
    height: 725px;
  }

  h1 {
    width: 85%;
  }

  .blogRecentPost {
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    position: relative;
    padding: 0 3vw 3vw 3vw;
  }

  .blogRecentPost h2 {
    text-align: start;
  }

  .blogPost {
    width: 60%;
    align-items: flex-start;
  }

  .recentBlogs {
    width: 35%;
    box-shadow: 0px 3px 5px -1px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0.2)),
      0px 5px 8px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.14)),
      0px 1px 14px 0px var(--v-shadow-key-ambient-opacity, rgba(0, 0, 0, 0.12)) !important;
    position: sticky;
    top: 15vw;
    z-index: 2;
    border-radius: 20px;
    padding: 1vw 0;
    margin-top: 1vw !important;
  }

  .recentBlogWrapper {
    width: 90% !important;
    gap: 2.5vw !important;
  }

  .recentBlogs .recentBlog {
    width: 100% !important;
    display: flex;
    gap: 2vw;
    box-shadow: none !important;
  }

  .recentBlog img {
    width: 35%;
    object-fit: contain;
    border-radius: 20px !important;
  }

  .recentBlog div {
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    gap: 0.5vw;
    padding: 0 !important;
  }

  .recentBlog div p {
    width: 100% !important;
  }
}

@media only screen and (min-width: 1280px) {
  .heroSection {
    height: 800px;
  }

  .recentBlogs {
    top: 13vw;
    width: 30%;
  }
}

/* XL */
@media only screen and (min-width: 1440px) {
  .heroSection {
    height: 875px;
  }

  .blogPost {
    width: 67.5%;
  }


  .recentBlogs {
    top: 9vw;
    width: 28%;
  }

  .recentBlog img {
    width: 30%;
  }
}

@media only screen and (min-width: 1600px) {
  .heroSection {
    height: 925px;
  }

  .recentBlogs {
    width: 26%;
    top: 10vw;
  }
}

@media only screen and (min-width: 1750px) {
  .heroSection {
    height: 975px;
  }

  .recentBlogs {
    top: 5.5vw;
  }

  .recentBlogs div {
    gap: 0;
  }

  .recentBlog img {
    width: 35%;
  }
}

@media only screen and (min-width: 1920px) {
  .heroSection {
    height: 1025px;
  }

  .heroPages {
    padding: 300px 0 450px 0;
  }

  .blogPost {
    width: 72%;
  }

  .recentBlogs {
    top: 120px;
  }

  .recentBlogs .recentBlog {
    gap: 25px;
  }
}
</style>
