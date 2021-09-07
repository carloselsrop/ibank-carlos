<template>
  <div class="w-full select-none">
    <!-- Add new card button -->
    <button
      @click="openModal"
      class="
        w-full
        mb-14
        lg:w-11/12
        2xl:w-8/12
        bg-transparent
        hover:bg-white
        hover:text-black
        text-opacity-50 text-white
        font-medium font-body
        space-x-8
        py-4
        px-4
        rounded-lg
        border border-gray-400
        transition
        duration-300
      "
    >
      + ADD NEW CARD
    </button>
    <!-- Different Cards -->
    <div v-for="(card, index) in cards" :key="card" class="mb-14 relative">
      <button
        :class="
          index == selectedPrimary
            ? '  border-blue-800 bgCardPrimary transition duration-300'
            : ''
        "
        class="
          flex
          w-full
          sm:justify-around
          transform
          hover:scale-105
          lg:w-11/12
          2xl:w-8/12
          bgCard
          text-white
          font-body
          space-x-8
          py-6
          px-4
          border-2 border-transparent
          rounded-lg
          transition
          duration-300
        "
      >
        <img class="w-16 h-6" :src="card.logo" alt="" />
        <div class="flex items-center space-x-8">
          <div>****</div>
          <div>----</div>
          <div>----</div>
          <div>{{ card.group4 }}</div>
        </div>
        <div @click="handleOptionClick(index)" class="hidden sm:flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 5v.01M12 12v.01M12 19v.01M12
            6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1
            0 110-2 1 1 0 010 2zm0 7a1 1 0
            110-2 1 1 0 010 2z"
            />
          </svg>
        </div>
      </button>
      <!-- Options -->
      <div
        :class="
          index == selectedCardOption
            ? 'opacity-100 transition duration-300 '
            : ' opacity-0 transition duration-300'
        "
        class="
          flex flex-col
          absolute
          sm:hidden
          z-40
          lg:flex
          right-28
          top-0
          pb-4
          px-8
          bg-white
          rounded-lg
          shadow-xl
          space-y-4
        "
      >
        <div
          class="w-4 h-8 bg-white absolute top-2 -left-4 z-10 rounded-l-md"
        ></div>
        <button class="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002
              2h11a2 2 0 002-2v-5m-1.414-9.414a2
              2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
            />
          </svg>
          <div>Edit</div>
        </button>
        <button class="flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 7l-.867 12.142A2 2 0 0116.138
              21H7.862a2 2 0 01-1.995-1.858L5 7m5
              4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1
              1 0 00-1 1v3M4 7h16"
            />
          </svg>
          <div>Delete</div>
        </button>
        <button @click="handlePrimaryClick(index)">
          <div v-show="selectedPrimary === selectedPrimary" class="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0
                003-3V8a3 3 0 00-3-3H6a3 3 0 00-3
                3v8a3 3 0 003 3z"
              />
            </svg>
            <div>Primary</div>
          </div>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data: () => ({
    cards: [
      {
        logo: 'https://www.visa.es/campaign/HOLA/assets/images/visa-logo.png', group1: '4812', group2: '4812', group3: '2365', group4: '1748', isPrimary: true,
      },
      {
        logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b7/MasterCard_Logo.svg', group1: '4812', group2: '4812', group3: '2365', group4: '4875', isPrimary: false,
      },
      {
        logo: 'https://www.visa.es/campaign/HOLA/assets/images/visa-logo.png', group1: '4812', group2: '4812', group3: '2365', group4: '7812', isPrimary: false,
      },
    ],
    selectedCardOption: null,
    selectedPrimary: null,
    dots: true,
  }),

  methods: {
    handleOptionClick(index) {
      if (this.selectedCardOption === index) {
        this.selectedCardOption = null;
      } else { this.selectedCardOption = index; }
    },

    handlePrimaryClick(index) {
      if (this.selectedPrimary === index) {
        this.selectedPrimary = null;
      } else { this.selectedPrimary = index; }
    },

    ...mapActions(['openModal']),
  },

};
</script>

<style scoped>
.bgCard {
  background-color: #504c4c;
}
.bgCardPrimary {
  background-color: #666161;
}
</style>
