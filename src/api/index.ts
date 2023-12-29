import axios, { AxiosError, AxiosResponse, AxiosRequestConfig } from 'axios';

interface ApiError extends AxiosError {
  message: string;
}

interface CustomAxiosRequestConfig extends AxiosRequestConfig {
  headers?: {
    'Content-Type': string;
  };
}

const api = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json'
  }
} as CustomAxiosRequestConfig);

api.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => {
    const errorMessage = error.message || 'An error occurred';
    console.error(errorMessage);
    return Promise.reject(error);
  }
);

export const getCardsListAPI = async (searchTerm = ''): Promise<any> => {
  try {
    const response = await api.get('/cards-list', {
      params: { search: searchTerm }
    });
    return response.data;
  } catch (error) {
    const apiError: ApiError = error as ApiError;
    return Promise.reject(apiError);
  }
};
