import type { PageServerLoad } from './$types.js';

/** @type {import('./$types').Actions} */
export const actions = {
	default: async (event) => {
		const formData = await event.request.formData();
		console.log('Contact Form Submission:', formData);

		if (!formData) {
			console.log('error: no `formData`!');
			return { success: false };
		}

		const cf_turnstile_response =
			formData.get('cf-turnstile-response')?.toString().trim() || '';
		const email = formData.get('email')?.toString().trim() || '';
		const message = formData.get('message')?.toString().trim() || '';
		const name = formData.get('name')?.toString().trim() || '';
		const phone = formData.get('phone')?.toString().trim() || '';

		if (!event.platform?.env.FORM_TO_EMAIL_URL) {
			console.log('error: no URL for Form-To-Email!');

			return { success: false };
		}

		const emailResponse = await fetch(event.platform?.env.FORM_TO_EMAIL_URL, {
			body: JSON.stringify({
				'cf-turnstile-response': cf_turnstile_response,
				email,
				message,
				name,
				phone,
			}),
			headers: { 'Content-Type': 'application/json' },
			method: 'POST',
		});

		if (!emailResponse.ok) {
			return { success: false };
		}

		return { success: true };
	},
};

export const load: PageServerLoad = ({ platform }) => {
	// https://developers.cloudflare.com/turnstile/troubleshooting/testing/#dummy-sitekeys-and-secret-keys
	const dummyKey = '2x00000000000000000000AB';

	return {
		CF_TURNSTILE_SITE_KEY: platform?.env?.CF_TURNSTILE_SITE_KEY || dummyKey,
	};
};
