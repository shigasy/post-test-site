<template>
  <p>Twitterへリダイレクトしています</p>
</template>

<script>
export default {
  asyncData({ app, error }) {
    // return app.$axios
    //   .$get('http://localhost:3000/api/v1/posts', {
    //     withCredentials: true,
    //     headers: {
    //       'Access-Control-Allow-Origin': 'http://localhost:3000'
    //     }
    //   })
    //   .then((data) => {
    //     return { twitterAuthUrl: data.data }
    //   })
    //   .catch((e) => error({ message: e.message, statusCode: e.statusCode }))
  },
  mounted() {
    window.location.href =
      'https://oshi-loss-api.herokuapp.com/api/v1/users/auth/twitter'
  }
}
</script>
