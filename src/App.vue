<template>
  <div
    class="w-full h-full lg:h-screen pb-8 backGround flex flex-col items-center"
  >
    <Sidebar />
    <Modal />
    <div class="w-11/12">
      <Navbar />
      <CardTypes class="hidden md:flex" />
      <Content />
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import CardTypes from './components/CardTypes.vue';
import Content from './components/Content.vue';
import Modal from './components/Modal.vue';
import Sidebar from './components/Sidebar.vue';

export default {
  components: {
    Navbar,
    CardTypes,
    Content,
    Modal,
    Sidebar,
  },
};
</script>

<style scoped>
.backGround {
  background-color: #40444c;
}
</style>
