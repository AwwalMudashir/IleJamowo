import React, { useEffect, useRef, useState } from 'react';
import { useParams} from 'react-router-dom';
import familyMembers from '../family.json'; 
import Tree from 'react-d3-tree';

const buildTreeData = (member) => {
  if (!member) return null;

  const findMember = (id) => familyMembers.find((m) => m.id === id);

  const children = member.children.map((childId) => {
    const child = findMember(childId);
    return child ? buildTreeData(child) : null;
  }).filter(Boolean);

  return {
    name: member.name,
    attributes: {
      DOB: member.birthDate,
      Spouse: member.spouse || 'N/A',
    },
    children,
  };
};


const MemberProfile = () => {
  const { id } = useParams();
  const member = familyMembers.find((m) => m.id === parseInt(id));
  const treeContainer = useRef();
  const [dimensions, setDimensions] = useState({ width: 800, height: 600 });

  useEffect(() => {
    if (treeContainer.current) {
      const { clientWidth, clientHeight } = treeContainer.current;
      setDimensions({ width: clientWidth, height: clientHeight });
    }
  }, []);

  if (!member) return <p>Member not found!</p>;

  const treeData = buildTreeData(member);

  return (
    <div>
      <div className=" bg-[url('/optimized-images/fam-house.webp')] h-[100vh] bg-cover bg-center text-center py-16 relative">
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative flex flex-col justify-center items-center h-full text-center">
      <h1 className="text-6xl font-bold text-white">{member.name}</h1>
      <img src={member.image} alt={member.name} className="w-1/2 mx-auto rounded-md border-green-700" />
      <p className="text-white mt-4">DOB: {member.birthDate}</p>
      <p className="mt-4 text-white">{member.bio}</p>
      </div>

      </div>
    

    <div className="p-6 bg-white">
    
      <div className="mt-6">
        <h2 className="text-4xl font-semibold mb-4">Family Tree</h2>
        <div ref={treeContainer} style={{ width: '100%', height: '80vh' }} className="relative">
        <Tree
  data={treeData}
  orientation="vertical"
  translate={{ x: dimensions.width / 2, y: 50 }}
  pathFunc="step" // Makes the tree lines smooth and curved
  zoomable={false}
  scaleExtent={{ min: 0.5, max: 2 }}
  nodeSize={{ x: 200, y: 150 }} // Adjust spacing between nodes
  collapsible={false}
  styles={{
    nodes: {
      node: {
        circle: { fill: '#34d399', stroke: '#065f46', strokeWidth: 3 }, // Styling the nodes
        name: { fontSize: '1.25rem', fontWeight: 'bold' }, // Font styling for names
        attributes: { fontSize: '0.9rem', fill: '#4b5563' }, // Font styling for attributes
      },
      leafNode: {
        circle: { fill: '#6ee7b7' }, // Different color for leaf nodes
      },
    },
    links: {
      stroke: '#065f46', // Color of the lines
      strokeWidth: 2,
    },
  }}
/>

        </div>
      </div>
    </div>
    </div>
  );
};

export default MemberProfile;
