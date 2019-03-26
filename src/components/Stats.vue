<template>
  <div class="stats">
      <h1>Stats</h1>
      <p>{{ countLinks }}</p>
  </div>
</template>

<script>

import { mapGetters } from "vuex";

export default {
  name: 'Stats',
  computed: {
    ...mapGetters([
        'countLinks'
    ]),
    // other stuff
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
