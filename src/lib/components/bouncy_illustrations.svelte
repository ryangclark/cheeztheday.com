<script>
	import { spring } from 'svelte/motion';
	import { onMount } from 'svelte';

	/** @type {HTMLDivElement} */
	let divElementForObservation;

	const illustrationModules = import.meta.glob(
		'$lib/assets/illustrations/*.png'
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

	// Default animation position values.
	const finalPosition = { x: -17, y: 20 };
	const initialPosition = { x: -50, y: 10 };

	const illustrationSpring = spring(initialPosition, {
		damping: 0.15,
		stiffness: 0.1,
	});

	/** @type {IntersectionObserver | undefined} */
	let io;

	onMount(() => {
		// Extra bounce for small screens.
		if (window.innerWidth < 1000) {
			initialPosition.x = -75;
		}

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

		// const observeElem = document.querySelector('#observe');
		if (divElementForObservation) {
			io.observe(divElementForObservation);
		} else {
			console.warn('no observe element!');
		}

		return () => {
			io?.disconnect();
		};
	});
</script>

<div
	bind:this={divElementForObservation}
	class="pointer-events-none absolute h-full w-full max-w-[100vw] overflow-x-clip lg:mx-auto"
>
	{#each illustrations as illustrationImport, i}
		{#await illustrationImport then { default: illustration }}
			<!-- This `const` is slightly confusing because of zero-indexing. -->
			{@const isLefthandSide = i % 2 === 0}
			{@const name = illustration.match(/_(.*).png$/)?.[1]}
			<img
				alt={`${name} illustration`}
				class="illustration absolute lg:max-w-[50vw] xl:max-w-[40vw] 2xl:max-w-[35vw]"
				class:left={isLefthandSide}
				style:transform={(!isLefthandSide && name === 'spatula') ||
				(!isLefthandSide && name === 'spoon')
					? 'scaleX(-1)'
					: ''}
				style="{isLefthandSide
					? 'left'
					: 'right'}: {$illustrationSpring.x}vw; {isLefthandSide
					? 'bottom'
					: 'top'}: {$illustrationSpring.y}svh;"
				src={illustration}
			/>
		{/await}
	{/each}
</div>
