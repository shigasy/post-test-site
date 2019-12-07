<template>
  <p>Twitterへリダイレクトしています</p>
</template>

<script>
export default {
  asyncData({ app, error }) {
    return app.$axios
      .$get('https://oshi-loss-api.herokuapp.com/api/v1/users/auth/twitter', {
        withCredentials: true,
        headers: {
          withCredentials: true,
          'Access-Control-Allow-Origin': 'oshi-loss-api.herokuapp.com'
        }
      })
      .then((data) => {
        return { twitterAuthUrl: data.redirect_url }
      })
      .catch((e) => error({ message: e.message, statusCode: e.statusCode }))
  },
  mounted() {
    window.open(this.twitterAuthUrl)
  }
}
</script>
