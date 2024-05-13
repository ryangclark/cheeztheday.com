<script>
	import logo from '$lib/assets/CTD_logo.png';
</script>

<div class="flex min-h-[100svh] flex-col justify-between">
	<div class="flex justify-center">
		<img
			alt="Cheez The Day logo"
			class="mt-6 md:w-4/5 lg:mt-20 lg:w-1/3"
			src={logo}
		/>
	</div>

	<h1 class="sr-only">Cheez The Day</h1>
	<div class="flex flex-col items-center lg:mb-20">
		<p
			class="mx-4 my-8 text-center font-handwritten text-5xl md:text-5xl lg:mt-0"
		>
			life is about experiences &ndash;<br class="lg:hidden" /> come have one!
		</p>
		<h2
			class="my-4 font-museo text-sm uppercase tracking-wide text-stone-800 lg:text-lg"
		>
			<span class="text-lg lg:text-2xl">C</span>incinnati's
			<span class="text-lg lg:text-2xl">g</span>rilled
			<span class="text-lg lg:text-2xl">c</span>heez
			<span class="text-lg lg:text-2xl">t</span>ruck
		</h2>
	</div>
	<nav class="my-12 flex justify-center gap-6">
		<a class="font-museo text-xl underline" href="/about">About</a>
		<a class="font-museo text-xl underline" href="/contact">Contact</a>
		<a class="font-museo text-xl underline" href="/events">Events</a>
		<a class="font-museo text-xl underline" href="/menu">Menu</a>
	</nav>
</div>
