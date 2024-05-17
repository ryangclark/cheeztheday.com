<script>
	import { spring } from 'svelte/motion';
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';

	import logo from '$lib/assets/CTD_logo.png';

	const illustrationModules = import.meta.glob(
		'../lib/assets/illustrations/*.png'
	);
	let illustrationNames = Object.keys(illustrationModules);

	const ILLUSTRATION_COUNT = 2;

	// Where we'll store the actual imported illustration things.
	const illustrations = new Array(ILLUSTRATION_COUNT);

	for (let i = 0; i < ILLUSTRATION_COUNT; i++) {
		// console.log('length', illustrationNames.length);
		const index = Math.floor(Math.random() * illustrationNames.length);

		illustrations[i] = illustrationModules[illustrationNames[index]]();

		// Remove the name from the array so we don't get duplicates.
		illustrationNames.splice(index, 1);
	}

	const finalPosition = { right: -30, top: 15 };
	const initialPosition = { right: -60, top: 0 };
	const illustrationSpring = spring(initialPosition, {
		damping: 0.15,
		stiffness: 0.1,
	});

	/** @type {IntersectionObserver | undefined}*/
	let io;

	onMount(() => {
		io = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.intersectionRatio > 0.5) {
						illustrationSpring.set(finalPosition);
					} else if (entry.intersectionRatio < 0.3) {
						illustrationSpring.set(initialPosition);
					}
				}
			},
			{
				root: null,
				rootMargin: '0px 0px -64px 0px',
				threshold: [0.25, 0.7, 1],
			}
		);

		const observeElem = document.querySelector('.observe');
		if (observeElem) {
			io.observe(observeElem);
		} else {
			console.log('no observe');
		}

		return () => {
			io?.disconnect();
		};
	});
</script>

<div
	class="relative flex min-h-[100svh] max-w-[100vw] flex-col justify-between"
>
	<div class="flex justify-center">
		<img
			alt="Cheez The Day logo"
			class="md:w-4/5 lg:mt-20 lg:w-1/3"
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
		<h2 class="my-4 font-museo text-sm uppercase tracking-wide text-stone-800">
			<span class="text-lg">C</span>incinnati's
			<span class="text-lg">g</span>rilled
			<span class="text-lg">c</span>heez
			<span class="text-lg">t</span>ruck
		</h2>
	</div>
	<nav class="my-12 flex justify-center gap-6">
		<a class="font-museo text-xl underline" href="/menu">Menu</a>
		<a class="font-museo text-xl underline" href="/about">About</a>
		<a class="font-museo text-xl underline" href="/events">Events</a>
		<a class="font-museo text-xl underline" href="/contact">Contact</a>
	</nav>
</div>

<div
	class="observe relative mb-12 mt-24 h-[60svh] w-full justify-center lg:mx-auto lg:mb-24 lg:mt-12 lg:max-w-[85vw]  xl:max-w-[75vw]"
>
	{#each illustrations as illustrationImport, i}
		{#await illustrationImport then { default: illustration }}
			<!-- <p>value is {illustration.default}</p> -->
			<!-- This `const` is slightly confusing because of zero-indexing. -->
			{@const isLefthandSide = i % 2 === 0}
			{@const name = illustration.match(/_(.*).png$/)?.[1]}
			<img
				alt={`${name} illustration`}
				class="illustration absolute lg:max-w-[50vw] xl:max-w-[35vw]"
				class:left={isLefthandSide}
				style:transform={(isLefthandSide && name === 'spatula') ||
				(isLefthandSide && name === 'spoon')
					? 'scaleX(-1)'
					: ''}
				style="{isLefthandSide
					? 'right'
					: 'left'}: {$illustrationSpring.right}%; top: {$illustrationSpring.top *
					(isLefthandSide ? 1 : -1)}%;"
				src={illustration}
			/>
		{/await}
	{/each}
</div>

<div class="mx-4 mb-12 flex w-fit flex-col justify-center lg:mx-auto">
	<h2 class="mb-2 font-museo text-2xl">Event Calendar</h2>
	<p>
		Find our current and upcoming events on <a
			class="underline"
			href="https://streetfoodfinder.com/CheezTheDay"
			target="_blank">StreetFoodFinder</a
		>.
	</p>
	<a
		class="underline"
		href="https://streetfoodfinder.com/CheezTheDay"
		target="_blank"
	>
		<img
			alt=""
			class="sff-logo mx-auto my-4 px-2 pb-1 pt-2"
			src="https://streetfoodfinder.com/static/imgs/logo3.png"
		/></a
	>
</div>

<style>
	.sff-logo {
		background-color: #ef6c26;
	}
</style>
