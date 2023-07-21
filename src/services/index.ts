import axios from "axios";

export const httpRequest = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
});

httpRequest.interceptors.response.use((response: any) => {
  console.log("response from interceptors ", response);
  response.customMessage = "Hello from interceptors";
  return response;
});


