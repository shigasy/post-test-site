<template>
  <div>
    test
    {{ text }}
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
      .$get('/api/posts')
      .then((data) => {
        return { text: data }
      })
      .catch((e) => error({ message: e.message, statusCode: e.statusCode }))
  }
}
</script>

<style scoped></style>
