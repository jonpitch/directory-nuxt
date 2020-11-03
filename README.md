# directory-nuxt

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).


## notes

- docs are a little clunky
- full static site build took about 40 seconds
  - output was all all static, html per route
- seems like it has enough to deliver more capabilities, like components that interact with data, make API calls, etc.
  - TBD if it's overkill for this project
- was able to do end-to-end search without a server call for local dev
  - `npm run start` to simulate production mode, working search
  - companies.json and search.json are in the bundle sent to the client as .js files
  - these do get re-keyed on change, so heavily cache these? CDN?
  - would likely require some sort of plugin/config thing
- don't get pagination for free
  - could be a spot for complexity depending on how search is supposed to work
- was able to use the "vuex store" to load data without / incurring the size
  - `npm run generate` never seemed to finish / generate routes for any companies
  - give [this](https://css-tricks.com/creating-dynamic-routes-in-a-nuxt-application/) a shot
    - still couldn't get dynamic routes to generate
    - resources online seem to think this is do-able, so moving on
    - was able to get the pages to build staticly, still has huge JS bundle in it
    - wasn't able to get the "payload" static build to work - all pages were excluded
- TODO i18n
