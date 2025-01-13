// components/TurtleGraphic.jsx
const TurtleGraphic = () => {
    return (
      <svg
        viewBox="0 0 200 200"
        className="w-32 h-32 md:w-48 md:h-48 absolute right-0 opacity-20 transform translate-x-1/4"
      >
        <path
          d="M100 20c-11 0-20 9-20 20s9 20 20 20 20-9 20-20-9-20-20-20zm0 35c-8.3 0-15-6.7-15-15s6.7-15 15-15 15 6.7 15 15-6.7 15-15 15z"
          fill="currentColor"
        />
        <path
          d="M160 100c0 33.1-26.9 60-60 60s-60-26.9-60-60 26.9-60 60-60 60 26.9 60 60zm-110 0c0 27.6 22.4 50 50 50s50-22.4 50-50-22.4-50-50-50-50 22.4-50 50z"
          fill="currentColor"
        />
        <path
          d="M100 70c-16.6 0-30 13.4-30 30s13.4 30 30 30 30-13.4 30-30-13.4-30-30-30zm0 55c-13.8 0-25-11.2-25-25s11.2-25 25-25 25 11.2 25 25-11.2 25-25 25z"
          fill="currentColor"
        />
        <g className="animate-spin-slow">
          <path
            d="M190 100c0 49.7-40.3 90-90 90s-90-40.3-90-90 40.3-90 90-90 90 40.3 90 90zm-170 0c0 44.2 35.8 80 80 80s80-35.8 80-80-35.8-80-80-80-80 35.8-80 80z"
            fill="currentColor"
          />
        </g>
      </svg>
    );
  };
  
  export default TurtleGraphic;