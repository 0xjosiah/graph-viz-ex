import React from 'react';
import ForceGraph from 'react-force-graph-2d';
import { testData } from './resources/testData';
import { formatGraphData } from './utils/utils';

function App() {
  let data = formatGraphData(testData)

  function nodePaint(node, color, ctx) {
    let { id, x, y } = node
    ctx.fillStyle = color;
    [
      () => { ctx.fillRect(x - 6, y - 4, 12, 8); }, // rectangle
      () => { ctx.beginPath(); ctx.moveTo(x, y - 5); ctx.lineTo(x - 5, y + 5); ctx.lineTo(x + 5, y + 5); ctx.fill(); }, // triangle
      () => { ctx.beginPath(); ctx.arc(x, y, 5, 0, 2 * Math.PI, false); ctx.fill(); }, // circle
      () => { ctx.font = '10px Sans-Serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText('Text', x, y); } // text
    ][id%4]();
  }
  // nodeCanvasObject fn for coloring random shaps from above
  // (node, ctx) => nodePaint(node, getColor(), ctx)

  // gen a number persistent color from around the palette
  const getColor = n => '#' + ((n * 1234567) % Math.pow(2, 24)).toString(16).padStart(6, '0');

  return (
    <ForceGraph
      graphData={data}
      nodeAutoColorBy={'type'}
      nodeLabel={'name'}
      // nodeCanvasObject={(node, ctx, globalScale) => {
      //   const label = node.name?.toString() ?? 'no label';
      //   const fontSize = 12/globalScale;
      //   ctx.font = `${fontSize}px Sans-Serif`;
      //   const textWidth = ctx.measureText(label).width;
      //   const bckgDimensions = [textWidth, fontSize].map(n => n + fontSize * 0.2); // some padding

      //   ctx.fillStyle = 'rgba(255, 255, 55, 0.8)';
      //   // ctx.fillRect((node.x ?? 1) - bckgDimensions[0] / 2, (node.y ?? 1) - bckgDimensions[1] / 2, bckgDimensions[0], bckgDimensions[1]);
      //   ctx.beginPath(); ctx.arc(node.x, node.y, 5, 0, 2 * Math.PI, false); ctx.fill();

      //   ctx.textAlign = 'center';
      //   ctx.textBaseline = 'middle';
      //   ctx.fillStyle = node.color;
      //   ctx.fillText(label, (node.x ?? 1), (node.y ?? 1));

      //   node.__bckgDimensions = bckgDimensions; // to re-use in nodePointerAreaPaint
      // }}
    />
  );
}

export default App;
