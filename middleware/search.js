import apiClient from "~/services/apiClient";

export default function ({ params, store }) {
  return apiClient.search(params)
    .then((response) => {
      store.commit('add', response.data.results)
    });
}
