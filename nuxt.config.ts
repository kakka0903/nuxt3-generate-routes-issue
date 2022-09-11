import { defineNuxtConfig } from 'nuxt'
import axios from 'axios'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    generate: {
        async routes() {
            const res = await axios.get('https://tools.learningcontainer.com/sample-json.json')
            return res.data.phoneNumbers.map(number => ({ route: '/' + number.type }))
        }
    }
})
