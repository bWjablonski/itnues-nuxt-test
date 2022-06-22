<template>
  <div>
    <h1>{{ $t("results") }} {{ $route.params.id }}</h1>
    <div v-if="albumData">
      <Card
        v-for="(album, index) in albumData"
        :key="index"
        :title="album.collectionCensoredName"
        :image="album.artworkUrl60"
        :artistName="album.artistName"
        :url="album.artistViewUrl"
      />
    </div>
  </div>
</template>
<script>
import apiClient from "~/services/apiClient";
import Card from "~/components/Card.vue";
export default {
  asyncData({ params }) {
    return apiClient.getAlbumData(params);
  },
  components: {
    Card,
  },
  middleware: "search",
};
</script>
