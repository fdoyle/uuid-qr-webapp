<script lang="js">
	// @ts-ignore
	import { v4 as uuidv4 } from 'uuid';

	let count = 100;
	/**
	 * @type {string[]}
	 */
	let ids = [];
	let temp = [];
	for (let i = 0; i != 400; i++) {
		temp = temp.concat(uuidv4());
	}
	ids = temp
	console.log("Foo bar baz")
</script>

<div class="container">
	<title>QR code generator</title>

	<div class="inner-container">
		{#each ids as uuid, i}
			<div class="qr-container">
				<img
					alt="foo"
					class="qr"
					src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data={uuid}"
				/>
				<span class="qr-label">{uuid}</span>
			</div>
		{/each}
	</div>
</div>

<style>
	.qr {
		width: 1in;
		height: 1in;
		margin: 0px;
	}

	.qr-label {
		font-family: 'Courier New', Courier, monospace;
		display: inline;
		font-size: 10px;
		margin: 0px;
		text-align: center;
		width: 1in;
	}

	.qr-container {
		position: relative;
		display: inline-flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		page-break-inside: avoid;
		padding: 0.2in;
	}

	.inner-container {
		display: flex;
		flex-direction: column;
		display: block;
		width: 8.5in;
		align-items: center;
		justify-content: center;
		page-break-inside: avoid;
	}

	.container {
		display: flex;
		align-items: center;
		flex-direction: column;
	}
</style>
