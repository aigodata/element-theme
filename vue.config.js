let customEntry = {}
if (process.env.NODE_ENV != 'development') {
	customEntry = {
		'theme-chalk': './src/lib/theme-chalk/index.scss',
		'theme-test': './src/lib/theme-test/index.scss',
	}
}

module.exports = {
	publicPath: '/element-theme',
	outputDir: 'docs',
	pages: {
		index: {
			entry: './src/main.js',
			template: './public/index.html',
			filename: 'index.html',
			chunks: ['chunk-vendors', 'chunk-common', 'styles', 'index'],
			excludeChunks: ['theme-chalk', 'theme-test']
		}
	},
	chainWebpack: config => {
		// 	const cssRule = config.module.rule('css');
		// 	cssRule.test(/\.css$/)
		// 		.use('style-loader')
		// 		.loader('style-loader')
		// 		.options({ singleton: false })
	},
	configureWebpack: {
		entry: customEntry,
		optimization: {
			splitChunks: {
				cacheGroups: {
					styles: {
						name: 'styles',
						test: /\.css$/,
						chunks: 'all',
						enforce: true
					}
				}
			}
		}
	}
}
