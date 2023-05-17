import axios from "axios";

const client = axios.create({});

client.interceptors.response.use(
  (response) => response.data,
  (error) => {
    const responseStatus = error.response ? error.response.status : 0;

    if (responseStatus === 401) {
      console.log("Unauthorized Access, redirect to login");
      window.location = "/";
    } else {
      console.error("Ocorreu um erro ao processar sua solicitação");
    }

    const hasError =
      !!error.response && !!error.response.data && !error.response.data.success;

    if (hasError) return error.response.data;

    return error;
  }
);

export default client;
