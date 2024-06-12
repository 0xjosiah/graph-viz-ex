import React from 'react';
import ForceGraph from 'react-force-graph-2d';
import { testData } from './resources/testData';
import { formatGraphData } from './utils/utils';

function App() {
  let data = formatGraphData(testData)
  return (
    <ForceGraph
      graphData={data}
      nodeAutoColorBy={'type'}
      nodeLabel={'name'}
    />
  );
}

export default App;
