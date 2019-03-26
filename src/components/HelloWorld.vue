<template>
  <div class="hello">

    <div class="left">
      <h2>{{ title }}</h2>

      <form @submit.prevent="addLink">
          <input type="text" placeholder="add link" v-model='newLink' />
      </form>
      <ul>
        <li v-for="(link, index) in links" v-bind:key="index">{{ link }}</li>  
      </ul>
    </div>
    <div class="right">
      <Stats />
    </div>

  </div>
</template>

<script>

import Stats from "@/components/Stats.vue";
import {  mapState, mapMutations } from "vuex";

export default {
  name: 'HelloWorld',
  data() {
    return {
      newLink: ''
    }
  },
  components: {
    Stats
  },
  computed: {
    ...mapState([
      'title',
      'links'
    ]),
    // other stuff
  },
  methods: {
    ...mapMutations([
        'ADD_LINK'
    ]),
    addLink: function() {
      this.ADD_LINK(this.newLink)
      this.newLink = ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped langg="scss">
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
