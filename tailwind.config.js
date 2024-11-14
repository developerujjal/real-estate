/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'login-bg': "url('https://storage.googleapis.com/devitary-image-host.appspot.com/15848031292911696601-undraw_designer_life_w96d.svg')"
      }
    },
    fontFamily: {
      outfit: ['"Outfit", serif'],
    },
    boxShadow: {
      'custom': 'rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px',
    },
  },
  plugins: [],
}


