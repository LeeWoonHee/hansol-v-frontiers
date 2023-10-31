const path = require('path')

module.exports = {
  publicPath           : '/',
  transpileDependencies: [
    'vue-echarts',
    'resize-detector',
  ],
  configureWebpack     : {
    resolve     : {
      alias: {
        '@extra': path.resolve(__dirname, 'src/assets/images/extra/'),
      }
    },
    optimization: {
      splitChunks: {
        chunks: 'all'
      }
    }
  },
  // devServer: {
  //   overlay: {
  //     warnings: true,
  //     errors: true
  //   }
  // }

  pluginOptions: {
    s3Deploy: {
      awsProfile       : 'bluepoint',
      region           : 'ap-northeast-2',
      bucket           : 'hs-vfrontiers.com',
      uploadConcurrency: 3,
      registry         : undefined,
      overrideEndpoint : false,
      createBucket     : true,
      staticHosting    : true,
      assetPath        : 'dist',
      assetMatch       : '**',
      deployPath       : '/',
      acl              : 'bucket-owner-full-control',
      pwa              : false,
      enableCloudfront : true,
      cloudfrontId     : 'E246KY4JA50WU9',
      pluginVersion    : '4.0.0-rc3',
      staticIndexPage  : 'index.html',
      staticErrorPage  : 'index.html',
    }
  }
}

