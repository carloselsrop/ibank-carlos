<template>
  <div
    :class="
      createSideBar.isOpen
        ? 'transform translate-x-0 transition duration-500'
        : 'transform -translate-x-full transition duration-500'
    "
    class="
      w-full
      h-screen
      fixed
      flex
      justify-start
      items-center
      bg-opacity-70 bg-black
      z-50
    "
  >
    <div class="w-full h-full bg-gray-700 flex flex-col">
      <div class="flex justify-end pt-2 pb-8 px-2">
        <button @click="closeSide">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <div
        class="w-full px-2 space-y-12 text-gray-200 font-semibold font-title"
      >
        <button class="w-full flex justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8 text-red-500 mr-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2
              2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2
              0 002-2v-4a2 2 0 00-2-2h-2.343M11
              7.343l1.657-1.657a2 2 0 012.828 0l2.829
              2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
            />
          </svg>
          <div>My Cards</div>
        </button>
        <button class="w-full flex justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8 text-red-500 mr-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10.325 4.317c.426-1.756 2.924-1.756
              3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94
              3.31.826 2.37 2.37a1.724 1.724 0 001.065
              2.572c1.756.426 1.756 2.924 0 3.35a1.724
              1.724 0 00-1.066 2.573c.94 1.543-.826
              3.31-2.37 2.37a1.724 1.724 0 00-2.572
              1.065c-.426 1.756-2.924 1.756-3.35 0a1.724
              1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724
              1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924
              0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31
              2.37-2.37.996.608 2.296.07 2.572-1.065z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <div>Settings</div>
        </button>

        <button class="w-full flex justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8 text-red-500 mr-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3
              3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
            />
          </svg>
          <div>Log out</div>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  computed: {
    ...mapState(['createSideBar']),
  },
  methods: {
    ...mapActions(['closeSide']),
  },
};
</script>
