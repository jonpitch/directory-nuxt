import path from 'path';
import fs from 'fs';
import companies from './data/companies.json';

// const dynamicRoutes = () => {
//   return new Promise((resolve) => {
//     resolve(companies.map((c) => `company/${c.slug}`));
//   });
// };

const dynamicRoutesWithPayload = () => {
  const companyRoutes = companies.map((c) => {
    return {
      route: `/company/${c.slug}`,
      payload: c,
    };
  });

  const allRoutes = [];
  allRoutes.concat({
    route: '/',
    payload: companies,
  });

  allRoutes.concat(companyRoutes);

  return allRoutes;
};

export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'directory-nuxt',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: ['@nuxtjs/sitemap'],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    // extend(_, context) {
    //   if (context.isServer) {
    //     companies.forEach((c) => {
    //       this.buildContext.options.generate.routes.push(`/company/${c.slug}`);
    //     });
    //   }
    // },
  },

  // Sitemap configuration https://github.com/nuxt-community/sitemap-module
  sitemap: {
    hostname: 'https://bcorporation.com',
    gzip: true,
    routes: JSON.parse(
      fs.readFileSync(path.resolve(__dirname, 'data/companies.json'))
    ).map((c) => {
      return `/company/${c.slug}`;
    }),
  },

  // router: {
  //   middleware: 'companies',
  // },

  generate: {
    routes: dynamicRoutesWithPayload,
  },
};
