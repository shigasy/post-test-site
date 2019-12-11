<template>
  <div>
    test
    {{ text }}
    <nuxt-link to="/">
      <button>
        test
      </button>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'Test',
  data() {
    return {
      text: ''
    }
  },
  asyncData({ app, error }) {
    return app.$axios
      .$get('/api/posts', {
        withCredentials: true,
        headers: {
          'Access-Control-Allow-Origin': '*'
        }
      })
      .then((data) => {
        return { text: data }
      })
      .catch((e) => error({ message: e.message, statusCode: e.statusCode }))
  }
}
</script>

<style scoped></style>
