const path = require('path');
const {
    override,
    babelInclude,
    addBabelPreset,
    addExternalBabelPlugin,
} = require('customize-cra');
const { decorateServerConfig } = require('seek-style-guide-webpack');
const { decorateClientConfig } = require('seek-style-guide-webpack');

module.exports = decorateClientConfig({
  // Webpack config...
});

module.exports = decorateServerConfig({
  // Webpack config...
});

module.exports = override(
    babelInclude([
        path.resolve('src'),
        path.resolve('node_modules/seek-style-guide'),
    ]),
    addBabelPreset("@babel/preset-react"),
    addExternalBabelPlugin('@babel/plugin-proposal-class-properties'),
);