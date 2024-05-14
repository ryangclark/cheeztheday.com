// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		interface Platform {
			env: {
				CF_TURNSTILE_SITE_KEY: string;
				FORM_TO_EMAIL_URL: string;
			};
		}
	}
}

export {};
