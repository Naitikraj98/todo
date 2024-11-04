/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      // Add custom colors, spacing, or other properties if needed
    },
  },
  plugins: [
    function({ addComponents }) {
      addComponents({
        '.mobile-view': {
          '@media (max-width: 767px)': {
            width: '375px', /* Typical mobile screen width */
            height: '667px', /* Typical mobile screen height */
            overflow: 'hidden', /* Hide overflow */
            border: '16px solid #000', /* Add border to simulate mobile device frame */
            borderRadius: '36px', /* Rounded corners */
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)', /* Optional shadow for effect */
            position: 'relative',
            transform: 'scale(1)', /* Adjust scale if needed */
            transformOrigin: 'top left', /* Scale from top-left corner */
            background: '#fff', /* Background color to simulate mobile device */
          }
        }
      });
    }
  ],
};
