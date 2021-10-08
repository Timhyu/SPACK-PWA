const isProd = ['production', 'test'].includes(process.env.NODE_ENV)

module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  filenameHashing: true,
  lintOnSave: false,
  productionSourceMap: false,
  css: {
    extract: isProd,
    sourceMap: !isProd
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
  pwa: {
    name: 'Magento Vue Pwa',
    themeColor: '#4DBA87',
    msTitleColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    // configure the workbox plugin
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      // swSrc is required in InjectManifest mode.
      swSrc: `${process.env.BASE_URL}service-worker.js`,
      // ...other Workbox options...
    }
  },
  chainWebpack: (config) => {
    // Fixed HMR
    // config.resolve.symlinks(true)
  },
  configureWebpack: (config) => {
    if (isProd) {
      // Do something for prod
    } else {
      // Do something for dev
    }
  }
}
