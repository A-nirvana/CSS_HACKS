const config = {
    db: "/NGO-dash",
    port: parseInt(process.env.PORT ?? "3000"),
    baseURL:
      process.env.SERVER_BASE_URL || `http://localhost:${process.env.PORT}`,
  };
  
export default config;
