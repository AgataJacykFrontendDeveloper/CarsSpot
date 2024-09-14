<template>
  <section id="gallery" class="mx-auto max-w-screen-xl">
    <h3 class="text-blueish text-m">Prezentacja firmy</h3>
    <h2 class="text-xxl">Zobacz naszą galerię zdjęć</h2>
    <br />
    <div class="text-xs">
      <a class="mr-8 text-blueish underline underline-offset-8"
        >Samochody osobowe</a
      >
      <a>Samochody dostawcze</a>
    </div>
    <p class="invisible text-s">
      Documenting design decisions, in the form of annotated wireframes, gives
      the developer the necessary information they may need to successfully code
      the project.
    </p>
    <snappy-carousel :style="cssVars">
      <li
        class="list-none"
        v-for="galleryItem in galleryItems"
        :key="galleryItem.id"
      >
        <img :src="galleryItem.image" :alt="galleryItem.title" />
        <div class="invisible">
          <h2 class="inline">{{ galleryItem.title }}</h2>
          <p>{{ galleryItem.caption }}</p>
        </div>
      </li>

      <svg
        slot="indicator-icon-active"
        width="8"
        height="8"
        viewBox="0 0 8 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M4 8C6.20914 8 8 6.20914 8 4C8 1.79086 6.20914 0 4 0C1.79086 0 0 1.79086 0 4C0 6.20914 1.79086 8 4 8Z"
          fill="#0147FF"
        />
      </svg>
      <svg
        slot="indicator-icon"
        width="8"
        height="8"
        viewBox="0 0 8 8"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M4 8C6.20914 8 8 6.20914 8 4C8 1.79086 6.20914 0 4 0C1.79086 0 0 1.79086 0 4C0 6.20914 1.79086 8 4 8Z"
          fill="#EDEDED"
        />
      </svg>
    </snappy-carousel>
  </section>
</template>

<script>
import "https://unpkg.com/@snappywc/carousel";

export default {
  data() {
    return {
      galleryItems: [
        {
          id: 1,
          image: "/redCar.jpg",
          title: "vbncvnvdsffffffnc",
          caption: "Consectetur quis viverra.",
        },
        {
          id: 2,
          image: "/mikebirdy.jpg",
          title: "vbncvnvdsffffffnc",
          caption: "Consectetur quis viverra.",
        },
        {
          id: 3,
          image: "/sarmad.jpg",
          title: "vbncvnvdsffffffnc",
          caption: "Consectetur quis viverra.",
        },
      ],
      mobile: 1,
      tablet: 2,
      desktop: 2.05,
      arrowSize: "8px",
      indicatorSize: "8px",
    };
  },
  computed: {
    cssVars() {
      return {
        "--mobile": 100 / this.mobile + "%",
        "--tablet": 100 / this.tablet + "%",
        "--desktop": 100 / this.desktop + "%",
        "--arrow-size": this.arrowSize,
        "--indicator-size": this.indicatorSize,
      };
    },
  },
};
</script>
<style lang="css" scoped>
#gallery {
  margin-bottom: 4rem;
}
img {
  width: 600px;
  height: 446px;
  margin: 20px 75px 20px auto;
}
li h2,
li p {
  position: relative;
  bottom: 100px;
  padding: 20px 24px;
}
</style>
