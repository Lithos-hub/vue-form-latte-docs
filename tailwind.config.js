/** @type {import('tailwindcss').Config} */
export default {
  important: true,
  content: [
		'./docs/.vitepress/**/*.{js,ts,vue}',
		'./docs/**/*.md',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}