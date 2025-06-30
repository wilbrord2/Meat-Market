import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

interface ReviewCardProps {
  rating: number;
  date: string;
  message: string;
  name: string;
  status: string;
}

 export const renderStars = (rating:number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<FaStar key={i} className="text-default-red/66" />);
      } else if (i === fullStars && hasHalfStar) {
        stars.push(<FaStarHalfAlt key={i} className="text-default-red/66" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-default-red/66" />);
      }
    }
    return stars;
  };

const ReviewCard: React.FC<ReviewCardProps> = ({
  rating,
  date,
  message,
  name,
  status,
}) => {


  return (
    <div className="h-full flex flex-col justify-between">
      <div className="flex justify-between items-center mb-4">
        <div className="flex space-x-1">{renderStars(rating)}</div>
        <p className="text-sm text-gray-600">{date}</p>
      </div>
      <p className="text-gray-700 mb-6 leading-relaxed">{message}</p>
      <div className="flex justify-between items-center text-sm font-medium text-gray-900">
        <span>{name}</span>
        <span className="text-gray-500">{status}</span>
      </div>
    </div>
  );
};

export default ReviewCard;
