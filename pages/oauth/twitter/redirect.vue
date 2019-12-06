<template>
  <p>Twitterへリダイレクトしています</p>
</template>

<script>
export default {
  asyncData({ app, error }) {
    // return app.$axios
    //   .$get('/api/users/auth/twitter', {
    //     withCredentials: true,
    //     headers: { 'Access-Control-Allow-Origin': '*' }
    //   })
    //   .then((data) => {
    //     return { twitterAuthUrl: data.redirect_url }
    //   })
    //   .catch((e) => error({ message: e.message, statusCode: e.statusCode }))
    document.location.pathname = 'api/users/auth/twitter'
  }
  // mounted() {
  //   console.log(this.twitterAuthUrl)
  //   window.location.href = this.twitterAuthUrl
  // }
}
</script>
