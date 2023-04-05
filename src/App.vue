<!-- eslint-disable max-len -->
<template>
  <HeaderView />
  <Mainview />
  <FooterView />
</template>

<script>
import HeaderView from './components/HeaderView.vue';
import Mainview from './components/MainView.vue';
import FooterView from './components/FooterView.vue';

export default {
  name: 'App',
  components: {
    HeaderView,
    Mainview,
    FooterView,
  },
};
</script>

<style>
@import url(assets/style.css);
</style>
