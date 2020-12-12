const { addLessLoader, override, fixBabelImports } = require('customize-cra');
const rewireReactHotLoader = require('react-app-rewire-hot-loader');

/* config-overrides.js */
module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd-mobile',
    style: 'css',
  }),
  addLessLoader({
    lessOptions: {
      javascriptEnabled: true,
    },
  }),
  (config, env) => {
    config = rewireReactHotLoader(config, env);

    return config;
  },
);
