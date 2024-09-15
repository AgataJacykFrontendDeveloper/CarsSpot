<template>
  <footer
    class="bg-greyish-black flex flex-col items-center text-center text-surface dark:text-white lg:text-left"
  >
    <div class="container mx-auto max-w-screen-xl p-4">
      <ul class="md:h-96 grid gap-4 lg:grid-cols-2 content-center">
        <li
          v-for="footerInfo in footerInfos"
          :key="footerInfo.id"
          class="mb-6 md:mb-0"
        >
          <h5 class="mb-2 text-l uppercase">
            {{ footerInfo.title }}
          </h5>
          <p class="mb-4 text-xxs">
            {{ footerInfo.shortText }}
          </p>
          <p class="mb-4 text-xxs" v-if="footerInfo.readMoreActivated == true">
            {{ footerInfo.longText }}
          </p>
          <button
            class="text-xxs border-b-2 border-b-white bg-transparent"
            v-if="footerInfo.readMoreActivated == false"
            @click="toggleReadMore(footerInfo.id)"
          >
            Rozwiń
            <svg
              class="inline"
              width="13"
              height="13"
              viewBox="0 0 13 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 8.44461L1.07955 7.35086L5.58239 11.8537L5.58239 0.191772L7.14489 0.191773L7.14489 11.8537L11.6335 7.35086L12.7273 8.44461L6.36364 14.8083L0 8.44461Z"
                fill="white"
              />
            </svg>
          </button>
          <button
            class="text-xxs border-b-2 border-b-white bg-transparent"
            v-if="footerInfo.readMoreActivated == true"
            @click="toggleReadMore(footerInfo.id)"
          >
            Zwiń
            <svg
            class="inline"
              width="13"
              height="15"
              viewBox="0 0 13 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.9999 6.55536L11.9203 7.64911L7.41749 3.14627L7.41749 14.8082L5.85499 14.8082L5.85499 3.14627L1.36638 7.64911L0.272577 6.55536L6.63624 0.191668L12.9999 6.55536Z"
                fill="white"
              />
            </svg>
          </button>
        </li>
      </ul>
    </div>

    <!--Copyright section-->
    <div class="w-full bg-greyish-black p-4 border-t border-t-white">
      <div class="max-w-screen-xl mx-auto flex justify-between text-s">
        <b>Cars Spot</b
        ><a class="underline underline-offset-1">Polityka Prywatności</a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      footerInfos: [
        {
          id: 0,
          title:
            "Id nostrud enim esse consectetur in eu mollit fugiat aute. Velit nulla commodo.",
          shortText:
            "Mauris varius ipsum mauris, rutrum lobortis magna efficitur a. Donec egestas, nisl vehicula feugiat ornare, diam turpis efficitur mi, ac venenatis eros ipsum ac arcu. Vestibulum et [...]",
          longText:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          readMoreActivated: false,
        },
        {
          id: 1,
          title:
            "Id nostrud enim esse consectetur in eu mollit fugiat aute. Velit nulla commodo.",
          shortText:
            "Mauris varius ipsum mauris, rutrum lobortis magna efficitur a. Donec egestas, nisl vehicula feugiat ornare, diam turpis efficitur mi, ac venenatis eros ipsum ac arcu. Vestibulum et [...]",
          longText:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          readMoreActivated: false,
        },
      ],
    };
  },
  methods: {
    toggleReadMore(id) {
      this.footerInfos[id].readMoreActivated =
        !this.footerInfos[id].readMoreActivated;
      return console.log(id);
    },
  },
};
</script>
