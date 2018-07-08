/* eslint-disable no-unused-vars */
import path from "path";
import merge from "lodash/merge";

/* istanbul ignore next */
const requireProcessEnv = name => {
  if (!process.env[name]) {
    throw new Error("You must set the " + name + " environment variable");
  }
  return process.env[name];
};

/* istanbul ignore next */
if (process.env.NODE_ENV !== "production") {
  const dotenv = require("dotenv-safe");
  dotenv.load({
    path: path.join(__dirname, "../.env"),
    sample: path.join(__dirname, "../.env.example")
  });
}

const config = {
  all: {
    env: process.env.NODE_ENV || "development",
    root: path.join(__dirname, ".."),
    port: process.env.API_PORT || 8081,
    ip: process.env.API_IP || "127.0.0.1",
    apiRoot: process.env.API_ROOT || "",
    masterKey: requireProcessEnv("API_MASTER_KEY")
  },
  test: {},
  development: {},
  production: {
    ip: process.env.API_IP || undefined,
    port: process.env.API_PORT || 8081
  }
};

module.exports = merge(config.all, config[config.all.env]);
export default module.exports;
