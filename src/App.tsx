import React from 'react';
import ForceGraph from 'react-force-graph-2d';
import { testData } from './resources/testData';

const graphData = {
  nodes: [
    { id: 'a' },
    { id: 'b' },
    { id: 'c' },
    { id: 'd' },
  ],
  links: [
    { source: 'a', target: 'b' },
    { source: 'c', target: 'a' },
    { source: 'd', target: 'a' },
  ]
}

function App() {
  console.log(testData)
  return (
    <ForceGraph graphData={graphData} />
  );
}

export default App;
