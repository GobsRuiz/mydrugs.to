export async function useProducts(url) {
  const { data, error } = await useFetch(url, {
    onResponseError({ response }) {
      console.error("Erro na resposta da API:", response.status);
    },
    onRequestError(err) {
      console.error("Erro na requisição:", err);
    },
  });

  if (error.value) {
    throw createError({
      statusCode: error.value.statusCode || 500,
      statusMessage: "Não foi possível carregar os produtos. Por favor, tente novamente mais tarde.",
    });
  }

  return data.value;
}
