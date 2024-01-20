import axios from "../utils/axios";

export const getApartments = async () => {
  const response = await axios.get("/apartments");
  return response.data;
};
export const getApartmentDetails = async (id: string) => {
  const response = await axios.get(`/apartment-details/${id}`);
  return response.data;
};
