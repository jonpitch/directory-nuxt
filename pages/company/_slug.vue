<template>
  <div>{{ company.name }} is certified</div>
</template>

<script>
import companies from '~/data/companies.json';
export default {
  asyncData({ params }) {
    const company = companies.filter((c) => {
      return c.slug === params.slug;
    });

    return {
      company: company[0],
    };
  },
};
</script>

<!--
<script>
import { mapState } from 'vuex';
export default {
  data() {
    return {
      slug: this.$route.params.slug,
    };
  },
  computed: {
    ...mapState(['companies']),
    company() {
      return this.companies.find((c) => c.slug === this.slug);
    },
  },
};
</script>
-->
<!--
<script>
export default {
  async asyncData({ params, error, payload }) {
    if (payload) {
      return { company: payload };
    }
  },
};
</script>
-->
