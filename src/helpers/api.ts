// api.ts
import axios from "axios";

const BASE_URL = "https://fakestoreapi.com";

interface ApiResponse<T> {
  data: T;
}

export const api = {
  getData: async (): Promise<ApiResponse<any>> => {
    try {
      const response = await axios.get(`${BASE_URL}/products`);
      return { data: response.data };
    } catch (error) {
      throw error;
    }
  },
  getDataById: async (id: string | number): Promise<ApiResponse<any>> => {
    try {
      const response = await axios.get(`${BASE_URL}/products/${id}`);
      return { data: response.data };
    } catch (error) {
      throw error;
    }
  },
};

export default api;
