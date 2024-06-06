import { toDataURL } from 'qrcode'
export default defineNuxtPlugin((nuxtApp) => {
	nuxtApp.vueApp.directive('qrcode', {
		mounted(el, binding) {
			const img = document.createElement('img');
			toDataURL(binding.value, (error, url) => {
				img.src = url;
				img.style.width = '100%';
				el.appendChild(img);
			});

		}
	})

});