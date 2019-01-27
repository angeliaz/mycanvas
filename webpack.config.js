const CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
const path = require('path');
const webpack = require('webpack');
const fs = require('fs');
const uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

const srcDir = path.resolve(process.cwd(), 'src');

//获取多页面的每个入口文件，用于配置中的entry
function getEntry() {
    const jsPath = path.resolve(srcDir, 'js');
    const dirs = fs.readdirSync(jsPath);
    let matchs = [], files = {};
    dirs.forEach(function (item) {
        matchs = item.match(/(.+)\.js$/);
        if (matchs) {
            files[matchs[1]] = path.resolve(srcDir, 'js', item);
        }
    });
    return files;
}

module.exports = {
    cache: true,
    devtool: "#source-map",
    entry: getEntry(),
    output: {
        path: path.join(__dirname, "dist/js/"),
        publicPath: "dist/js/",
        filename: "[name].js",
        chunkFilename: "[chunkhash].js"
    },
    module: {
      loaders: [{
          test: /\.js$/,
          // 以下目录不处理
          exclude: /node_modules/,
          // 只处理以下目录
          include: /src/,
          loader: "babel-loader",
          // 配置的目标运行环境（environment）自动启用需要的 babel 插件
          query: {
              presets: ["latest"]
          }
        }
      ]
    },
    resolve: {
        alias: {
            jquery: srcDir + "/js/lib/jquery.min.js",
            core: srcDir + "/js/core",
            lib: srcDir + "/js/lib",
            util: srcDir + "/js/util",
            ui: srcDir + "/js/ui"
        }
    },
    plugins: [
        new CommonsChunkPlugin("common.js"),
        new uglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]
};