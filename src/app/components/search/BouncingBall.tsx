import { LiaBaseballBallSolid } from "react-icons/lia";

export default function BouncingBall() {
  return (
    <div className="relative flex items-center justify-center h-30 w-full">
      {/* SVG for Dotted Bouncing Path */}
      <svg
        width="250"
        height="100"
        viewBox="0 0 220 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative"
      >
        {/* Path starts slightly below the ball, curves down, then comes up to meet the ball */}
        <path
          d="M10 80 C 30 70, 85 20, 115 80 C 150 75, 180 30, 290 60"
          stroke="#074799"
          strokeWidth="1.5"
          fill="transparent"
          strokeDasharray="8 8"
        />
      </svg>

      {/* Baseball Icon Positioned at the End of the Curve */}
      <div className="relative right-4">
        <LiaBaseballBallSolid size={24} color="#074799" />
      </div>
    </div>
  );
}
