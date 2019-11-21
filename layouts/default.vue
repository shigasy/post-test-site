<template>
  <v-app dark>
    <div>
      <form @submit.prevent="submit">
        <label>
          画像
          <input type="file" @change="onFileChange" />
        </label>
        <button type="submit" class="button button--inverse">submit</button>
      </form>
    </div>
  </v-app>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      photo: null
    }
  },
  methods: {
    async submit() {
      const formData = new FormData()
      formData.append('photo', this.photo)
      // eslint-disable-next-line no-console
      console.log(formData)
      // eslint-disable-next-line no-console
      console.log(this.photo)
      const response = await axios.post('api/v1/posts', formData)
      // eslint-disable-next-line no-console
      console.log(response)
    },
    onFileChange(event) {
      this.photo = event.target.files[0]
    }
  }
}
</script>
