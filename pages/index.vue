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
      <p></p>
      <br />
      <div>
        <a @click="loginTwitter">
          Twitterアカウントでログイン
        </a>
      </div>
      <div>
        <a @click="loginGoogle">
          Googleアカウントでログイン
        </a>
      </div>
      <div class="test">
        <nuxt-link to="/test">
          <button>
            test（ログイン必要）
          </button>
        </nuxt-link>
      </div>
      <div @click="test">
        あいうえお
      </div>
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
        title: 'title',
        text: 'text_text2',
        images: this.images,
        album_id: ''
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
    onFileChange(event) {
      const files = event.target.files || event.dataTransfer.files
      this.images.push(files[0])
    },
    test() {
      // eslint-disable-next-line no-console
      console.log(process.env.apiBaseUrl)
      this.$axios
        .$get(`/posts`, {
          withCredentials: true,
          headers: {
            'Access-Control-Allow-Origin': '*'
          }
        })
        .then((data) => {
          return { text: data }
        })
    },
    loginTwitter() {
      window.location.href = `${process.env.apiBaseUrl}/users/auth/twitter`
    },
    loginGoogle() {
      window.location.href = `${process.env.apiBaseUrl}/users/auth/google_oauth2`
    }
  }
}
</script>
<style scoped>
.test {
  margin: 50px 0;
}
</style>
