<template>
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
    <p @click="fetchAlbums">アルバム取得</p>
    <div v-for="album in albums" :key="album.id">
      <p>タイトル: {{ album.title }}</p>
      <p>説明: {{ album.description }}</p>
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  </div>
</template>
<script>
export default {
  name: 'Album',
  data() {
    return {
      images: [],
      albums: ''
    }
  },
  methods: {
    async submit() {
      const params = {
        name: 'hoge',
        title: 'title',
        description: 'description',
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
      const response = await this.$axios.post('/albums', formData)
      // eslint-disable-next-line no-console
      console.log(response)
    },
    onFileChange(event) {
      const files = event.target.files || event.dataTransfer.files
      this.images.push(files[0])
    },
    fetchAlbums() {
      this.$axios
        .$get(`/albums`, {
          withCredentials: true,
          headers: {
            'Access-Control-Allow-Origin': '*'
          }
        })
        .then((data) => {
          this.albums = data.data
        })
    }
  }
}
</script>
<style scoped></style>
