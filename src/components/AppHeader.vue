<template>
  <nav
    class="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-600"
  >
    <div class="max-w-screen-xl flex items-center justify-between mx-auto p-4">
      <a href="#" class="flex items-center">
        <img src="/path/to/logo.svg" class="h-8 mr-3" alt="Logo" />
        <span
          class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
          >Your Brand</span
        >
      </a>
      <div class="flex md:order-2">
        <button
          type="button"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-1 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-white"
        >
          Login
        </button>
      </div>
      <div
        class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
        id="navbar-sticky"
      >
        <ul
          class="flex flex-col p-4 md:p-0 mt-4 font-semibold border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
        >
          <li v-for="link in links" :key="link.url">
            <router-link
              :to="link.url"
              :class="isCurrent(link.url) ? currentPageClass : otherPageClass"
            >
              {{ link.name }}
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
// import { ref } from "vue";

const links = [
  { name: "Home", url: "/" },
  { name: "About", url: "/1" },
  { name: "Services", url: "/2" },
  { name: "Contact", url: "/3" },
];

const currentPageClass =
  "block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500";

const otherPageClass =
  "block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700";
// const isUserDropdownOpen = ref(false);

const isCurrent = (test: string) => {
  return test === window.location.pathname;
};

// const toggleUserDropdown = () => {
//   isUserDropdownOpen.value = !isUserDropdownOpen.value;
// };
</script>
