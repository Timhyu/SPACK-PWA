const path = require('path')
const os = require('os')
const webpack = require('webpack')
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin')

const SystemConfig = require('./config/system.conf')
const IS_PROD = ['production', 'test'].includes(process.env.NODE_ENV)

module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  filenameHashing: true,
  lintOnSave: false,
  productionSourceMap: false,
  css: {
    extract: IS_PROD,
    sourceMap: !IS_PROD,
    loaderOptions: {
      less: {
        lessOptions: {
          modifyVars: SystemConfig.antd.variables,
          javascriptEnabled: true
        }
      }
    }
  },
  pluginOptions: {
    webpackBundleAnalyzer: {
      openAnalyzer: process.env.VUE_APP_BUNDLE_ANALYZER === 'true'
    }
  },
  devServer: {
    open: process.platform === 'darwin',
    host: 'localhost',
    port: 3000,
    https: false,
    overlay: {
      warning: true,
      errors: true
    },
    proxy: {
      '/graphql': {
        target: `${process.env.VUE_APP_GRAPHQL_URL}/graphql`,
        changeOrigin: true,
        secure: false
      },
      '/api/': {
        proxyHeaders: false,
        target: process.env.VUE_APP_GRAPHQL_URL,
        pathRewrite: {
          '^/api/': ''
        },
        secure: false
      }
    }
  },
  // pwa: {
  //   name: 'Magento Vue Pwa',
  //   themeColor: '#4DBA87',
  //   msTitleColor: '#000000',
  //   appleMobileWebAppCapable: 'yes',
  //   appleMobileWebAppStatusBarStyle: 'black',
  //   // configure the workbox plugin
  //   workboxPluginMode: 'InjectManifest',
  //   workboxOptions: {
  //     // swSrc is required in InjectManifest mode.
  //     swSrc: `${process.env.BASE_URL}service-worker.js`,
  //     // ...other Workbox options...
  //   }
  // },
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@config', path.resolve(__dirname, './config'))
      .set(
        '@ant-design/icons/lib/dist$',
        path.resolve(__dirname, './src/components/Icons/icons.js')
      )

    config.plugin('fork-ts-checker').tap((args) => {
      // get OS mem size
      const totalMem = Math.floor(os.totalmem() / 1024 / 1024)
      const allowUseMem = totalMem > 2500 ? 2048 : 1000
      args[0].memoryLimit = allowUseMem
      return args
    })
  },
  configureWebpack: (config) => {
    if (IS_PROD) {
      config.plugins.push(
        new LodashModuleReplacementPlugin({
          shorthands: true,
          cloning: true,
          collections: true,
          paths: true
        })
      )

      config.optimization = {
        splitChunks: {
          cacheGroups: {
            common: {
              name: 'chunk-common',
              chunks: 'initial',
              minChunks: 2,
              maxInitialRequests: 5,
              minSize: 0,
              priority: 1,
              reuseExistingChunk: true,
              enforce: true
            },
            vendors: {
              name: 'chunk-vendors',
              test: /[\\/]node_modules[\\/]/,
              chunks: 'initial',
              priority: 2,
              reuseExistingChunk: true,
              enforce: true
            }
          }
        }
      }
    }

    /* strips out moment locales */
    config.plugins.push(new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/))
  }
}
