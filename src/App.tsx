import React from 'react';
import ForceGraph from 'react-force-graph-2d';

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
  return (
    <ForceGraph graphData={graphData} />
  );
}

export default App;
