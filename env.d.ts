// Generated by Wrangler by running `wrangler types --env-interface CloudflareEnv env.d.ts --x-include-runtime`

interface CloudflareEnv {
	NEXT_CACHE_WORKERS_KV: KVNamespace;
	MICROCMS_SERVICE_DOMAIN: string;
	MICROCMS_API_KEY: string;
	MICROCMS_SECRET: string;
	ASSETS: Fetcher;
}
