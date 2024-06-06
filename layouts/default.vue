<template>
	<div>
		<div class="max-w-screen-xl mx-auto px-5">
			<navbar />
		</div>
		<div class=" main px-5 flex justify-center ">
			<div class="lg:w-3/4">
				<slot />
			</div>
		</div>
		<client-only>
			<contact />
		</client-only>



	</div>
</template>
<script setup>
const router = useRouter();



</script>
<style>
.main {
	background-color: aliceblue;
}
</style>