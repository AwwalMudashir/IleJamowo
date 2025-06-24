import React, { useRef, useEffect, useState } from 'react';
import Tree from 'react-d3-tree';
import familyMembers from '../family.json';

// Helper to find a member by id
const getMemberById = (id) => familyMembers.find((m) => m.id === id);

// Build first generation: Patriarch and wives
const buildFirstGen = () => {
  const patriarch = familyMembers.find((m) => m.id === 1);
  if (!patriarch) return null;
  const wives = (patriarch.spouse || []).map((wid) => {
    const wife = getMemberById(wid);
    return wife ? { name: wife.name, id: wife.id } : null;
  }).filter(Boolean);
  return {
    name: patriarch.name,
    id: patriarch.id,
    children: wives,
  };
};

// Build second generation: Each wife and her children
const buildSecondGen = () => {
  const patriarch = familyMembers.find((m) => m.id === 1);
  if (!patriarch) return null;
  const wives = (patriarch.spouse || []).map((wid) => {
    const wife = getMemberById(wid);
    if (!wife) return null;
    const children = (wife.children || []).map((cid) => {
      const child = getMemberById(cid);
      return child ? { name: child.name, id: child.id } : null;
    }).filter(Boolean);
    return {
      name: wife.name,
      id: wife.id,
      children: children.length > 0 ? children : undefined,
    };
  }).filter(Boolean);
  return {
    name: patriarch.name,
    id: patriarch.id,
    children: wives,
  };
};

// Build third generation: Patriarch → Wives → Children → Grandchildren
const buildThirdGen = () => {
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

const chartTitles = [
  'First Generation: Patriarch & Wives',
  'Second Generation: Wives & Children',
  'Third Generation: Children & Grandchildren',
];

const chartBuilders = [buildFirstGen, buildSecondGen, buildThirdGen];

const GeneralTree = () => {
  const treeContainer = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 800, height: 600 });
  const [activeGen, setActiveGen] = useState(0);

  useEffect(() => {
    if (treeContainer.current) {
      const { clientWidth, clientHeight } = treeContainer.current;
      setDimensions({ width: clientWidth, height: clientHeight });
    }
  }, []);

  const treeData = chartBuilders[activeGen]();

  return (
    <div className="p-6 bg-white rounded-md shadow-lg">
      <h1 className="text-4xl font-bold text-center text-green-700 mb-6">
        Ile-Jamowo Family Tree
      </h1>
      <div className="flex justify-center mb-6 gap-2">
        {chartTitles.map((title, idx) => (
          <button
            key={idx}
            className={`px-4 py-2 rounded font-semibold border ${activeGen === idx
              ? 'bg-green-700 text-white border-green-700'
              : 'bg-white text-green-700 border-green-700 hover:bg-green-100'
              } transition`}
            onClick={() => setActiveGen(idx)}
          >
            {title}
          </button>
        ))}
      </div>
      <div
        ref={treeContainer}
        style={{ width: '100%', height: '70vh' }}
        className="relative bg-gradient-to-b from-white to-green-100 rounded-lg border border-green-700"
      >
        {treeData && (
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
            nodeSvgShape={{
              shape: 'circle',
              shapeProps: {
                r: 20,
                fill: '#fff',
                stroke: '#065f46',
                strokeWidth: 4,
              },
            }}
            styles={{
              nodes: {
                node: {
                  name: { fontSize: '1.2rem', fontWeight: 'bold', fill: '#111' },
                  attributes: { fontSize: '1rem', fill: '#4b5563' },
                },
              },
              links: {
                stroke: '#065f46',
                strokeWidth: 2.5,
              },
            }}
          />
        )}
      </div>
      <p className="mt-4 text-center text-gray-600 text-sm">
        Switch between generations using the buttons above.
      </p>
    </div>
  );
};

export default GeneralTree;