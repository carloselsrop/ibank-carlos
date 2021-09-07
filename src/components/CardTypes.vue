<template>
  <div
    class="w-full flex justify-center items-center pt-12 select-none space-x-4"
  >
    <div v-for="(type, index) in types" :key="type">
      <button
        @click="handleTypeClick(index)"
        :class="index === selectedType ? 'bg-white text-black' : ' text-white'"
        class="
          py-3
          transition
          duration-300
          rounded-lg
          text-sm
          font-semibold font-body
          px-4
        "
      >
        {{ type.type }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    types: [
      { type: 'Card' },
      { type: 'Paypal' },
      { type: 'Skrill' },
    ],
    selectedType: null,
  }),
  methods: {
    handleTypeClick(index) {
      if (this.selectedType === index) {
        this.selectedType = null;
      } else { this.selectedType = index; }
    },
  },
};
</script>
