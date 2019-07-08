// @ts-ignore
const envType = process.env.node_env || "local";

const staging = {
  MONGODB_URI: "TODO: mongodb connection string.",
  CORS_ORIGIN_WHITELIST: [],
};

const production = {};

const local = { ...staging, PORT: 5000 };

const configs = {
  staging,
  production,
  local,
};

// @ts-ignore
const config = configs[envType];

export default config;
