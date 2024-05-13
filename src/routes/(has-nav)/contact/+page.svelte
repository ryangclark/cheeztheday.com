<script lang="ts">
	import type { ActionData } from './$types';

	export let form: ActionData;
</script>

<h1 class="my-3 font-museo text-3xl">Contact us</h1>

<p>
	Let us know if you want Cheez The Day to be part of your event, if you have
	any questions or comments, or if you need grilled cheez advice.
</p>

<p class="my-3">It'd be great to hear from you.</p>

<!-- 
	<p class="my-2">It'd be great to hear from you. Let us know if:</p>
	<ul class="list-disc">
	<li class="mb-1 ml-6">Want Cheez The Day to be part of your event</li>
	<li class="mb-1 ml-6">Have any questions or comments</li>
	<li class="mb-1 ml-6">Need grilled cheez advice</li>
</ul> -->

<!-- <p class="mx-0 my-6 italic opacity-90">
	Not currently accepting recipe requests.
</p> -->

<div class="mx-auto flex flex-col">
	<h2 class="mb-2 mt-12 font-museo text-xl">Write us a note</h2>

	<form class="mb-8 flex flex-col gap-2" method="POST">
		<!-- <label class="mr-auto mt-4 font-mono" for="to"> To </label>
	<input class="lg:mr-auto" name="to" type="text" value="Cheez The Day" /> -->

		<label class=" mt-4 font-mono" for="name"> Your name </label>
		<input class="bg-pink-50 p-2" name="name" type="text" />

		<label class=" mt-4 font-mono" for="message"> Message </label>
		<textarea
			class="min-h-[6rem] bg-pink-50 p-2"
			id="message"
			name="message"
			required
		></textarea>

		<label class=" mt-4 font-mono" for="email"> Contact info </label>
		<div class="flex justify-around gap-2">
			<input
				autocomplete="email"
				class="min-w-0 bg-pink-50 p-2"
				name="email"
				placeholder="Email"
				type="email"
			/>
			<input
				autocomplete="tel"
				class="min-w-0 bg-pink-50 p-2"
				name="phone"
				placeholder="Phone"
				type="tel"
			/>
		</div>

		<button
			class="mx-auto my-6 rounded-lg border-2 border-ctd-pink-dark bg-pink-100 px-8 py-2 font-mono text-pink-950 hover:bg-pink-200"
			>Send</button
		>

		{#if form?.success}<p class="mx-auto">We got your message! Thanks.</p>{/if}
	</form>
</div>
