const runtimeCaching = require('next-pwa/cache')
const withPWA = require('next-pwa')({
	dest: 'public',
	register: true,
	skipWaiting: true,
	runtimeCaching,
	buildExcludes: [/middleware-manifest.json$/],
})

const nextConfig = withPWA({
	// next config
	env: {
		NEXT_PUBLIC_QL_URL:
			'https://api-ap-northeast-1.hygraph.com/v2/cl8zbbyjl0vib01tcglp1asau/master',
	},
})
module.exports = nextConfig
