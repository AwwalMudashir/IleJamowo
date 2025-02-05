import React from 'react';
import FamilyCard from './FamilyCard'; // Assuming the FamilyCard component is in the same folder
import familyMembers from '../family.json'; // Adjust path as needed

const FamilyList = () => {
  return (
    <section className="py-12 bg-gray-100">
      <h2 className="text-4xl font-bold text-center text-green-700 mb-8">Meet the Family</h2>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-4">
        {familyMembers.map((member) => (
          <FamilyCard key={member.id} member={member} />
        ))}
      </div>
    </section>
  );
};

export default FamilyList;
