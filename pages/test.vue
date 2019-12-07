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
      .$get('https://oshi-loss-api.herokuapp.com/api/v1/posts', {
        withCredentials: true
      })
      .then((data) => {
        return { text: data }
      })
      .catch((e) => error({ message: e.message, statusCode: e.statusCode }))
  }
}
</script>

<style scoped></style>
