import React, { useRef, useEffect, useState } from 'react';
import Tree from 'react-d3-tree';
import familyMembers from '../family.json';

const generateCompleteTree = () => {
  const memberMap = new Map(familyMembers.map((m) => [m.id, { ...m, children: [] }]));
  let root = memberMap.get(1); // Assuming ID 1 is the root
  const visited = new Set(); // Track processed members

  familyMembers.forEach((member) => {
    if (visited.has(member.id)) return; // Prevent infinite loop
    visited.add(member.id);

    if (member.spouse && member.spouse.length > 0) {
      member.spouse.forEach((spouseId) => {
        if (memberMap.has(spouseId) && !visited.has(spouseId)) {
          memberMap.get(member.id).children.push(memberMap.get(spouseId));
        }
      });
    }
    if (member.children && member.children.length > 0) {
      member.children.forEach((childId) => {
        if (memberMap.has(childId) && !visited.has(childId)) {
          memberMap.get(member.id).children.push(memberMap.get(childId));
        }
      });
    }
  });

  return root;
};
const getNodeColor = (node) => {
  if (node.gender === 'male') return '#3b82f6'; // Blue for males
  if (node.gender === 'female') return '#ec4899'; // Pink for females
  return '#6b7280'; // Default (gray)
};

const GeneralTree = () => {
  const treeContainer = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 800, height: 600 });
  const [treeData, setTreeData] = useState(generateCompleteTree());

  useEffect(() => {
    if (treeContainer.current) {
      const { clientWidth, clientHeight } = treeContainer.current;
      setDimensions({ width: clientWidth, height: clientHeight });
    }
  }, []);

  return (
  <div className="p-6 bg-white rounded-md shadow-lg">
  <h1 className="text-4xl font-bold text-center text-green-700 mb-6">
    Ile-Jamowo Family Tree
  </h1>
  <div
    ref={treeContainer}
    style={{ width: '100%', height: '80vh' }}
    className="relative bg-gradient-to-b from-white to-green-100 rounded-lg border border-green-700"
  >
    <Tree
      data={treeData}
      orientation="vertical"
      translate={{ x: dimensions.width / 2, y: 100 }}
      pathFunc="step"
      zoomable
      scaleExtent={{ min: 0.1, max: 2 }}
      nodeSize={{ x: 300, y: 220 }}
      separation={{ siblings: 2, nonSiblings: 2 }}
      collapsible={false}
      nodeSvgShape={(nodeData) => ({
        shape: 'circle',
        shapeProps: {
          r: 20,
          fill: getNodeColor(nodeData.data), // Dynamic color
          stroke: '#065f46',
          strokeWidth: 4,
        },
      })}
      styles={{
        nodes: {
          node: {
            name: { fontSize: '1.5rem', fontWeight: 'bold', fill: '#111' },
            attributes: { fontSize: '1rem', fill: '#4b5563' },
          },
        },
        links: {
          stroke: '#065f46',
          strokeWidth: 2.5,
        },
      }}
    />
  </div>
</div>
)
};

export default GeneralTree;
