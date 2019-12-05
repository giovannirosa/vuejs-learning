<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <app-quote>
          <h2 slot="title">The Quote</h2>
          <p slot="content">A wonderful Quote!</p>
        </app-quote>
      </div>
    </div>
  </div>
</template>

<script>
import QuoteVue from './components/Quote.vue';

export default {
  components: {
    appQuote: QuoteVue
  }
};
</script>

<style></style>
