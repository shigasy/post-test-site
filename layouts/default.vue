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
      photo: null,
      images: []
    }
  },
  methods: {
    async submit() {
      const params = {
        text: 'text_text',
        images: this.images
      }
      const formData = new FormData()
      // eslint-disable-next-line no-console
      console.log(this.images)
      Object.entries(params).forEach(([key, value]) => {
        if (Array.isArray(value)) {
          value.forEach((v, i) => {
            formData.append(key + '[]', v) // arrayデータを分割して入れ直す
          })
        } else {
          formData.append(key, value)
        }
      })
      // for (let i = 0; i < this.images.length; i++) {
      //   // const name = 'uploadedImages[' + i + ']'
      //   const name = 'images'
      //   console.log(this.images[i])
      //   formData.append(name, this.images)
      //   // formData.append(name, JSON.stringify(this.images))
      // }
      // eslint-disable-next-line no-console
      console.log(formData)
      // formData.append('images', this.images[0])
      // formData.append('images', this.images[1])
      // eslint-disable-next-line no-console
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
