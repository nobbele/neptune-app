/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: ['selector', '[data-mode="dark"]'],
  theme: {
    extend: {},
    colors: {
      "primary-1": '#18222C',
      "primary-2": '#1D3043',
    }
  },
  plugins: [],
}
