<script>
	import logo from '$lib/assets/CTD_logo.png';
</script>

<nav class="mx-auto mb-8 flex h-20 items-center gap-3 pr-4">
	<a class="w-24" href="/"
		><img alt="Cheez The Day logo" src={logo} /><span class="sr-only">Home</span
		></a
	>
	<a class="font-museo text-lg underline" href="/menu">Menu</a>
	<a class="font-museo text-lg underline" href="/about">About</a>
	<a class="font-museo text-lg underline" href="/events">Events</a>
	<a class="font-museo text-lg underline" href="/contact">Contact</a>
</nav>

<div class="mx-4 lg:mx-10">
	<slot />
</div>
