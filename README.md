# nuxt3-generate-routes-issue
This is a minimal reproduction of [this Nuxt3 issue](https://github.com/nuxt/framework/issues/7424)

[The Nuxt2 docs](https://nuxtjs.org/docs/configuration-glossary/configuration-generate/#function-which-returns-a-promise) as well as the [config schema file in Nuxt3](https://github.com/nuxt/framework/blob/main/packages/schema/src/config/generate.ts) explain that the `nuxt.generate.routes` config option can be given a function that returns a promise.

> You can pass a function that returns a promise or a function that takes a callback. It should return an array of strings or objects with `route` and (optional) `payload` keys.

However when running `npx nuxi generate` the following error is raised:
```
ERROR  nuxt.options.generate.routes is not iterable
```

### Example from the config schema file
Here is the example of a function that returns a promise form the Nuxt3 file mentioned above.
```js
export default {
  generate: {
    async routes() {
      const res = await axios.get('https://my-api/users')
      return res.data.map(user => ({ route: '/users/' + user.id, payload: user }))
    }
  }
}
```

I implemented it in this repository like so
```js
export default defineNuxtConfig({
    generate: {
        async routes() {
            const res = await axios.get('https://tools.learningcontainer.com/sample-json.json')
            return res.data.phoneNumbers.map(number => ({ route: '/' + number.type }))
        }
    }
})
```



