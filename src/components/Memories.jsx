import React from 'react'
import familyMembers from '../family.json'
import FamilyCard from './FamilyCard'

const Memories = () => {

  const memorians = familyMembers.filter((member) => member.dead )

  return (
    <section className="memories bg-white py-12 p-[2%]" id="memories">
    <h2 className="text-3xl font-semibold text-black mb-6">In Our Memories</h2>
    <p className="text-lg text-gray-700">Honoring the lives and legacies of our beloved family members.</p>

    <div className=" mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-4">
        {memorians.map((member) => (
          <FamilyCard key={member.id} member={member} />
        ))}
      </div>
  </section>
  )
}

export default Memories
