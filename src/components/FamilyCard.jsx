import React from 'react'
import { useNavigate } from 'react-router-dom';

const FamilyCard = ({ member }) => {
  const navigate = useNavigate();
  
  const goToProfile = () => {
    navigate(`/member/${member.id}`);
  };

  return (
    <div className="border rounded-lg shadow-lg p-4 bg-white hover:shadow-xl cursor-pointer" onClick={goToProfile}>
      <img src={member.image} alt={member.name} className="w-full h-60 object-cover rounded-md" />
      <h3 className="text-xl font-semibold mt-4 text-green-700">{member.name}</h3>
      <p className="text-gray-600">DOB: {member.birthDate}</p>
    </div>
  );
};

export default FamilyCard;