/** @type {import('./$types').Actions} */
export const actions = {
	default: async (event) => {
		// TODO log the user in
		// console.log('default handler. event:', event);

		const data = await event.request.formData();
		const email = data.get('email');
		const message = data.get('message');
		const name = data.get('name');
		const phone = data.get('phone');

		console.log('Contact Form Submission:', { email, message, name, phone });

		return { success: true };
	},
};
