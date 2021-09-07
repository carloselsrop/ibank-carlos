<template>
  <div class="w-full pt-12 flex flex-col lg:flex-row">
    <div class="lg:w-1/2 w-full"><SavedCards /></div>
    <div class="lg:w-1/2 w-full"><CreditCard /></div>
  </div>
</template>

<script>
import SavedCards from './SavedCards.vue';
import CreditCard from './CreditCard.vue';

export default {
  components: {
    SavedCards,
    CreditCard,
  },
};
</script>
