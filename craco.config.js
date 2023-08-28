const webpack = require('webpack');
const path = require('path');
// The path to the CesiumJS source code
const cesiumSource = 'node_modules/cesium/Source';
const cesiumWorkers = '../Build/Cesium/Workers';
const CopywebpackPlugin = require('copy-webpack-plugin');
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');

module.exports = {
    reactScriptsVersion: 'react-scripts',
    webpack: {
        alias: {},
        style: {
            modules: {
                localIdentName: ""
            },
            css: {
                loaderOptions: (cssLoaderOptions, { env, paths }) => { return cssLoaderOptions; }
            },         
        },
        plugins: {
        add: [
            // new HtmlWebpackPlugin({
            //     template: 'index.html'
            // }),
            [ new CopywebpackPlugin({
                patterns: [
                    { from: path.join(cesiumSource, cesiumWorkers), to: 'Workers' },
                    { from: path.join(cesiumSource, 'Assets'), to: 'Assets' },
                    { from: path.join(cesiumSource, 'Widgets'), to: 'Widgets' },
                    { from: path.join(cesiumSource, 'ThirdParty'), to: 'ThirdParty' }
                ]
            }), "append"],
            [ new webpack.DefinePlugin({
                // Define relative base path in cesium for loading assets
                CESIUM_BASE_URL: JSON.stringify('')
            }), "append" ],
            [ new NodePolyfillPlugin(), "append"]
        ],
        remove: []
        },
        configure: (webpackConfig, { env, paths }) => { return webpackConfig; },
        // resolve: {
        //     fallback: {
        //         "fs": false,
        //         "http": false,
        //         "https": false,
        //         "zlib": require.resolve('browserify-zlib'),
        //         "url": false,
        //     },
        //     mainFiles: ['Cesium', 'index']
        // }
        
    }
};
