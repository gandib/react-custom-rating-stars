import React from "react";
import { StarIcon } from "lucide-react";

interface StarRatingProps {
  rating: number;
  totalStars?: number;
  size?: number;
  color?: string; // Raw color like 'yellow', '#facc15', etc.
}

const Rating: React.FC<StarRatingProps> = ({
  rating,
  totalStars = 5,
  size = 16,
  color = "#facc15", // default: yellow-400
}) => {
  const fullStars = Math.floor(rating);
  const hasFraction = rating - fullStars > 0;
  const fraction = rating - fullStars;
  const emptyStars = totalStars - Math.ceil(rating);

  return (
    <div className="flex items-center space-x-0.5">
      {/* Full stars */}
      {Array.from({ length: fullStars }).map((_, i) => (
        <StarIcon
          key={`full-${i}`}
          size={size}
          color={color}
          fill={color}
          stroke={color}
        />
      ))}

      {/* Fractional star */}
      {hasFraction && (
        <svg key="fractional" width={size} height={size} viewBox="0 0 24 24">
          <defs>
            <linearGradient id="half-fill" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset={`${fraction * 100}%`} stopColor={color} />
              <stop offset={`${fraction * 100}%`} stopColor="transparent" />
            </linearGradient>
          </defs>
          <StarIcon fill="url(#half-fill)" stroke={color} />
        </svg>
      )}

      {/* Empty stars */}
      {Array.from({ length: emptyStars }).map((_, i) => (
        <StarIcon key={`empty-${i}`} size={size} stroke={color} />
      ))}
    </div>
  );
};

export default Rating;
