import axiosInstance from "../api"

export const getSessions = async (page, pageSize, movieId, cinemaId) => {
  return (await axiosInstance.get(`/sessions?page=${page}&pageSize=${pageSize}${movieId ? `&movieId=${movieId}` : ""}${cinemaId ? `&cinemaId=${cinemaId}` : ""}`)).data;
}
