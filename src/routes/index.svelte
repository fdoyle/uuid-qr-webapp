<script lang="js">
	// @ts-ignore
	import { v4 as uuidv4 } from 'uuid';

	let uuid = uuidv4();
	let history = [uuid];

	function newUuid() {
		uuid = uuidv4();
		history = [uuid].concat(history);
	}

	/**
	 * @param {string} newUuid
	 */
	function setCurrent(newUuid) {
		uuid = newUuid;
	}
</script>

<div class="container">
	<title>QR code generator</title>

	<img
		alt="foo"
		class="qr"
		src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data={uuid}"
	/>

	<p>{uuid}</p>

	<button on:click={newUuid} aria-label="new uuid"> New UUID </button>

	{#each history as item (item)}
		<a
			alt="foo"
			class="history-item"
			on:click={() => {
				setCurrent(item);
			}}>{item}</a
		>
	{/each}
</div>

<style>
	.qr {
		width: 300px;
	}

	.container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.history-item {
		font-family: 'Courier New', Courier, monospace;
		font-weight: bold;
		margin: 3px;
	}
</style>
