<template>
  <div>
    <input
      v-model="query"
      type="search"
      autocomplete="off"
      placeholder="Search B Corporations"
    />
    <p>from JSON</p>
    <ul>
      <li v-for="b in companies" :key="b.id">
        <nuxt-link :to="`/company/${b.slug}`">
          {{ b.name }}
        </nuxt-link>
      </li>
    </ul>
    <!-- <p>from store</p>
    <ul>
      <li v-for="b in $store.state.companies" :key="b.id">
        <nuxt-link :to="`/company/${b.slug}`">
          {{ b.name }}
        </nuxt-link>
      </li>
    </ul> -->
    <!-- <p>from store</p>
    <ul>
      <li v-for="b in $store.state.companies" :key="b.id">
        <nuxt-link :to="`/company/${b.slug}`">
          {{ b.name }}
        </nuxt-link>
      </li>
    </ul> -->
    <!-- <ul>
      <li v-for="b in companies" :key="b.slug">
        {{ b.name }}
      </li>
    </ul> -->
  </div>
</template>

<script>
import lunr from 'lunr';
import companies from '~/data/companies.json';
import search from '~/data/search.json';

export default {
  data() {
    return {
      query: '',
      companies,
    };
  },
  watch: {
    async query(q) {
      if (!q) {
        this.companies = companies;
        return;
      }

      const idx = await lunr.Index.load(search);
      const results = idx.search(q);
      const found = results.map((r) => {
        return companies.filter((c) => c.id === r.ref)[0];
      });

      this.companies = found;
    },
  },
};
</script>

<!--
<script>
import { mapState } from 'vuex';
export default {
  computed: {
    ...mapState(['companies']),
  },
};
</script>
-->
<!--
<script>
export default {
  async asyncData({ params, error, payload }) {
    if (payload) {
      return { companies: payload };
    }
  },
};
</script>
-->
