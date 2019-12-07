<template>
  <v-layout column align-center>
    <div>
      <form @submit.prevent="submit">
        <label>
          画像
          <input
            id="post_images"
            ref="image"
            @change="onFileChange"
            type="file"
            multiple="multiple"
          />
        </label>
        <button type="submit" class="button button--inverse">submit</button>
      </form>
      <!--      <nuxt-link to="/oauth/twitter/redirect">-->
      <button @click="twitter">
        Twitterログイン
      </button>
      <a href="https://oshi-loss-api.herokuapp.com/api/v1/users/auth/google_oauth2">
        <button @click="google">
          Googleログイン
        </button>
      </a>
      <!--      </nuxt-link>-->
      <nuxt-link to="/test">
        <button>
          test
        </button>
      </nuxt-link>
    </div>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      images: []
    }
  },
  methods: {
    async submit() {
      const params = {
        name: '',
        text: 'text_text2',
        images: this.images
      }
      const formData = new FormData()
      Object.entries(params).forEach(([key, value]) => {
        if (Array.isArray(value)) {
          value.forEach((v, i) => {
            formData.append(key + '[]', v) // arrayデータを分割して入れ直す
          })
        } else {
          formData.append(key, value)
        }
      })
      const response = await this.$axios.post('/posts', formData)
      // eslint-disable-next-line no-console
      console.log(response)
    },
    twitter() {
      document.location.pathname =
        'https://oshi-loss-api.herokuapp.com/api/users/auth/twitter'
    },
    google() {
      document.location.pathname =
        'https://oshi-loss-api.herokuapp.com/api/users/auth/google_oauth2'
    },
    onFileChange(event) {
      const files = event.target.files || event.dataTransfer.files
      this.images.push(files[0])
    }
  }
}
</script>
