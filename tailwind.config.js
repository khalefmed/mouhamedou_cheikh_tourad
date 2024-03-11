/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '0px', 
      },
      colors: {
        overlayColor : '#3a3a3a8a',
        headerColor : '#0F0F0FF2',
        primaryColor : '#001F3F',
        secondaryColor: '#001F3F',
        // primaryColor : '#024E13',
        // secondaryColor: '#04290C',
        primaryWhite: '#fff',
        secondaryWhite: '#9F9C9C',
        inputColor: '#f0f0f0',
        grey : '#6D6969',
        primaryBlack : '#000',
        secondaryBlack : '#323232',
        secondButtonColor : "#001F3F",
        black : 'rgb(79, 78, 78)'
      },
      fontFamily: {
        sans: ['Poppins','sans-serif'],
        arabic: ['Cairo','sans-serif'],
      },
      backgroundImage: {
        'background': "url('/LOGO_CHN.jpg')",
        'footer-texture': "url('/img/footer-texture.png')",
      },

      keyframes: {
        
        servicesAnimation: {
          from: { opacity: 0, transform: 'translate(-200%, 0%) scaleX(0.8)' },
          to: { opacity: 1, transform: 'translate(0%, 0%) scaleX(1)' },
        },
        homeAnimation: {
          from: { opacity: 0, transform: 'translate(-100%, 0%) scaleX(0.8)' },
          to: { opacity: 1, transform: 'translate(0%, 0%) scaleX(1)' },
        },
        navBarAnimation: {
          from: { opacity: 0, transform: 'translate(100%, 0%) scaleX(0.8)' },
          to: { opacity: 1, transform: 'translate(0%, 0%) scaleX(1)' },
        },
        
      },
      animation: {
        servicesAnimation: 'servicesAnimation 15000ms cubic-bezier(0.16, 1, 0.3, 1) ',
        homeAnimation: 'homeAnimation 4000ms cubic-bezier(0.16, 1, 0.3, 1) ',
        navBarAnimation: 'navBarAnimation 2000ms cubic-bezier(0.16, 1, 0.3, 1) ',
      },
    },
  },
  plugins: [],
}

