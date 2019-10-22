<template>
  <div class="ApiTest">
    <h1>{{ msg }}</h1>
    <button @click="fetchGithub">fetchGithub</button>
    <button @click="fetchAgreed">fetchAgreed</button>
    <ul>
      <li v-for="(v, index) in items" :key="v.id">
        <a :href="v.html_url" target="_blank">
          {{index}}
          {{v.id}}
          {{v.name}}
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import { axios } from "../main";
export default {
  name: "ApiTest",
  props: {
    msg: String
  },
  data: function() {
    return {
      items: [],
      res: {},
      err: {}
    };
  },
  methods: {
    fetchGithub() {
      const successUrl = "https://api.github.com/search/repositories";
      axios
        .get(successUrl, {
          params: {
            q: "stars:>1",
            sort: "stars",
            order: "desc",
            type: "Repositories"
          }
        })
        .then(({ data }) => {
          this.items = data.items;
          this.res = data;
        })
        .catch(err => {
          this.err = err;
        });
    },
    fetchAgreed() {
      const url = "http://localhost:21000/user/aaa";
      axios
        .get(url, {
          params: {
            q: "1",
            index: "2222"
          }
        })
        .then(({ data }) => {
          this.res = data;
        })
        .catch(err => {
          this.err = err;
        });
    }
  }
};
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 0 10px;
}
</style>
