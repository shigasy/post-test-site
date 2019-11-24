<template>
  <v-app dark>
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
    </div>
  </v-app>
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
    onFileChange(event) {
      const files = event.target.files || event.dataTransfer.files
      this.images.push(files[0])
    }
  }
}
</script>
