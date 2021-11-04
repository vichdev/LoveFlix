import api from "./api";

export async function ObterFoodsUser() {
  return await api
    .get("foods/foods")
    .then((f) => f.data)
    .catch((err) => err.response);
}
