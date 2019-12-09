<template>
  <p>Twitterへリダイレクトしています</p>
</template>

<script>
export default {
  mounted() {
    window.location.href =
      'https://oshi-loss-api.herokuapp.com/api/v1/users/auth/twitter'
  }
}
</script>
