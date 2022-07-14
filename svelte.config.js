import adapter from "@sveltejs/adapter-static"; 

// const dev = process.env.NODE_ENV === 'development';
const dev = false


/** @type {import('@sveltejs/kit').Config} */
const config = {
    kit: {
        adapter: adapter({
            pages: "docs",
            assets: "docs",
			fallback: null,
			precompress: false
        }),
        paths: {
            // change below to your repo name
            base: dev ? "" : "/uuid-qr-webapp",
        },
		prerender: {
			// This can be false if you're using a fallback (i.e. SPA mode)
			default: true
		  }
    }
};

export default config;
