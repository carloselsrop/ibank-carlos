<template>
  <div
    class="
      w-full
      font-title
      flex
      justify-between
      items-center
      pt-14
      text-gray-200
      select-none
    "
  >
    <!-- Hamburguer Navbar-->
    <div class="w-full flex items-center sm:hidden">
      <div class="w-1/3">
        <button @click="openSide">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      <div class="w-1/3 flex justify-center text-4xl font-bold">iBANK</div>
      <div class="w-1/3"></div>
    </div>
    <!-- Navbar on 640 px -->
    <div class="hidden sm:flex py-4 w-full">
      <!-- Left Div -->
      <div class="w-1/3 flex justify-start">
        <button class="flex items-center text-sm font-semibold">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414
          10l3.293 3.293a1 1 0 01-1.414
          1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clip-rule="evenodd"
            />
          </svg>
          <div>BACK</div>
        </button>
      </div>
      <!-- middle Div -->
      <div class="w-1/3 flex justify-center">
        <div class="text-5xl font-bold">iBANK</div>
      </div>
      <!-- Right Div -->
      <div class="w-1/3 flex justify-end relative">
        <button @click="isOpen = !isOpen" class="font-semibold">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5.121 17.804A13.937 13.937 0 0112
            16c2.5 0 4.847.655 6.879 1.804M15 10a3
            3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0
            11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </button>
        <div
          :class="
            isOpen
              ? ' opacity-100 transition duration-300'
              : 'opacity-0 transition duration-300'
          "
          class="
            absolute
            flex flex-col
            bg-white
            top-12
            -right-5
            rounded-lg
            text-sm
            z-50
            px-4
            py-4
          "
        >
          <div
            class="
              w-12
              h-8
              bg-white
              absolute
              z-0
              transform
              rotate-45
              top-1
              right-1
              rounded-t-md
            "
          ></div>
          <button class="flex items-center relative mb-4">
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
            <div class="text-black">My cards</div>
          </button>
          <button class="flex items-center mb-4">
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
            <div class="text-black">Settings</div>
          </button>
          <button class="flex items-center">
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
                d="M17 16l4-4m0 0l-4-4m4 4H7m6
              4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3
              3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>
            <div class="text-black">Log out</div>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data: () => ({
    isOpen: false,
    hamburOpen: true,
  }),

  methods: {
    ...mapActions(['openSide']),
  },
};
</script>

<style scoped>
.bgHambur {
  background-color: #40444c;
}
</style>
