<script>
	import BouncyIllustrations from '$lib/components/bouncy_illustrations.svelte';

	import fbLogo from '$lib/assets/Facebook_Logo_Secondary.png';
	import igLogo from '$lib/assets/Instagram_Glyph_White.png';
	import logo from '$lib/assets/CTD_logo.png';
	import StreetFoodFinder from '$lib/components/street_food_finder.svelte';
</script>

<svelte:head>
	<title>Cheez The Day | Cincinnati's grilled cheez food truck</title>
	<meta
		name="description"
		content="Cheez The Day serves Cincinnati with gourmet sandwiches, fresh salads, and truckmade soup. Contact us to schedule your next catering event!"
	/>

	<!-- Open Graph tags -->
	<meta
		property="og:title"
		content="Cheez The Day | Best grilled cheez food truck | Cincinnati Catering and Events"
	/>
	<meta
		property="og:description"
		content="Cheez The Day food truck serves Cincinnati with gourmet sandwiches, fresh salads, and truckmade soup."
	/>
	<meta property="og:url" content="https://cheeztheday.com" />
	<!-- Not sure if the URL below changes... -->
	<meta
		property="og:image"
		content="https://cheeztheday.com/_app/immutable/assets/CTD_logo.Cwiz2ai3.png"
	/>
	<meta property="og:type" content="website" />
</svelte:head>

<div
	class="relative flex min-h-[100svh] max-w-[100vw] flex-col justify-between"
>
	<div class="hidden lg:block">
		<BouncyIllustrations />
	</div>

	<div class="flex justify-center">
		<img alt="Cheez The Day logo" class="w-4/5 lg:mt-12 lg:w-1/4" src={logo} />
	</div>

	<h1 class="sr-only">Cheez The Day</h1>
	<div class="flex flex-col items-center">
		<p
			class="mx-4 my-8 text-center font-handwritten text-5xl md:text-5xl lg:mt-0"
		>
			life is about experiences &ndash;<br class="lg:hidden" /> come have one!
		</p>
		<h2 class="my-4 font-museo text-sm uppercase tracking-wide text-stone-800">
			<span class="text-lg">C</span>incinnati's
			<span class="text-lg">g</span>rilled
			<span class="text-lg">c</span>heez
			<span class="text-lg">t</span>ruck
		</h2>
	</div>
	<nav class="mx-auto my-8 grid grid-cols-2 justify-center gap-3 md:w-80">
		<a class="mx-auto font-museo text-xl underline" href="/menu">Menu</a>
		<a class="mx-auto font-museo text-xl underline" href="/about">About</a>

		<a class="mx-auto font-museo text-xl underline" href="/events">Events</a>
		<a class="mx-auto font-museo text-xl underline" href="/contact">Contact</a>

		<a class="mx-auto mt-4 invert" href="https://www.facebook.com/CheezTheDay/"
			><img alt="Facebook logo" class="w-8" src={fbLogo} />
		</a>
		<a
			class="mx-auto mt-4 invert"
			href="https://www.instagram.com/cheezthedayfoodtruck"
			><img alt="Instagram logo" class="w-8" src={igLogo} />
		</a>
	</nav>
</div>

<div class="relative my-24 h-[60svh] lg:hidden">
	<BouncyIllustrations />
</div>
<!-- Cori resolution: 695, 1421 -->

<div
	class="mx-4 mb-16 mt-12 flex w-fit flex-col justify-center lg:mx-auto lg:mt-48"
>
	<StreetFoodFinder></StreetFoodFinder>
</div>
