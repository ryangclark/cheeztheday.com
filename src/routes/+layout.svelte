<script>
	import '../app.css';
	import fbLogo from '$lib/assets/Facebook_Logo_Secondary.png';
	import igLogo from '$lib/assets/Instagram_Glyph_White.png';
	import emailIcon from '$lib/assets/mail_icon.svg?raw';
</script>

<div class="flex min-h-[100svh] flex-col justify-between">
	<div class="lg:mx-auto lg:w-full lg:max-w-screen-lg">
		<slot />
	</div>

	<footer class="mb-6 mt-8">
		<div class="my-8 h-1" id="footer-hr"></div>
		<div class="px-4 lg:mx-auto lg:max-w-screen-lg">
			<div class="flex flex-col gap-3 font-museo text-sm">
				<a
					class="flex items-center gap-2"
					href="mailto:cheezthedayfoodtruck@gmail.com"
					><span class="fill-current text-white">
						<!-- I don't know how to directly style the resulting `<svg>`,
							so we style a `<span>` instead. -->
						{@html emailIcon}
					</span>cheezthedayfoodtruck@gmail.com</a
				>

				<a
					class="flex items-center gap-2"
					href="https://www.facebook.com/CheezTheDay/"
					><img alt="Facebook logo" class="w-6" src={fbLogo} />Cheez The Day</a
				>

				<a
					class="flex items-center gap-2"
					href="https://www.instagram.com/cheezthedayfoodtruck"
					><img
						alt="Instagram logo"
						class="w-6"
						src={igLogo}
					/>cheezthedayfoodtruck</a
				>
			</div>
		</div>
	</footer>
</div>

<style>
	#footer-hr {
		background: linear-gradient(
			0.25turn,
			rgb(var(--ctd-green)) 0%,
			rgb(var(--ctd-yellow)) 62%,
			rgb(var(--ctd-pink-light)) 86%,
			rgb(var(--ctd-pink-dark)) 100%
		);
	}
</style>
