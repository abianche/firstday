import type { StorybookConfig } from "@storybook/nextjs";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    "@storybook/addon-themes",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  staticDirs: ["../public"],
  managerHead: (head) => `
    ${head}
    <link rel="shortcut icon" href="/icon.svg" />
    <link rel="icon" type="image/png" href="/web-app-manifest-192x192.png" sizes="192x192" />
  `,
};
export default config;
