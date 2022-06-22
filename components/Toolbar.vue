<template>
  <v-app-bar dark color="blue">
    <v-toolbar class="white--text">
      <nuxt-link class="title" to="/"> {{ $t("appname") }} </nuxt-link>
    </v-toolbar>
  </v-app-bar>
</template>

<script>
</script>

<style scoped>
.title {
  text-decoration: none !important;
}
.title {
  color: white;
}
</style>
