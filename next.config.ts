import type { NextConfig } from "next";
import path from "path";
import * as R from "ramda";
import type { Configuration as WebpackConfig } from "webpack";
import LicensePlugin from "webpack-license-plugin";

const packageJson = require(path.resolve(__dirname, "package.json"));
const dependenciesPaths = R.map(
  (name) => R.concat("node_modules/", name),
  R.keys(packageJson.dependencies) as string[]
);

const nextConfig: NextConfig = {
  webpack: (config: WebpackConfig, { isServer }) => {
    config.plugins = config.plugins || [];
    config.plugins.push(
      new LicensePlugin({ includePackages: () => dependenciesPaths })
    );

    if (!isServer) {
      config.module = config.module || {};
      config.module.rules = config.module.rules || [];
      config.module.rules.push({
        test: /\.stories\.tsx?$/,
        loader: "ignore-loader", // Ignore stories in production
      });
    }

    return config;
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
};

export default nextConfig;
