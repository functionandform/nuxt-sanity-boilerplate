import { defineStore } from 'pinia';

export const useMenuStore = defineStore('menu', {
	state: () => {
		return { menuIsOpen: false }
	}
});

export const useModalStore = defineStore('modal', {
	state: () => {
		return { modalIsOpen: false }
	}
});

export const useThemeStore = defineStore('theme', {
	state: () => {
		return { darkMode: false }
	}
});