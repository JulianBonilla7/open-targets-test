// import React from 'react';
// import * as d3 from 'd3';
// import './styles.css'
// const dimensions = {
//   width: 400,
//   height: 400,
//   margin: { top: 50, right: 60, bottom: 50, left: 60 },
// };
// interface IData {
//   label: string;
//   value: number;
// }
// interface RadarChartProps {
//   data: IData[];
// }
// export const RadarChart = ({ data }: RadarChartProps) => {
//   const { width, height, margin } = dimensions;
//   const boundedDimensions = {
//     width: dimensions.width - margin.left - margin.right,
//     height: dimensions.height - margin.top - margin.bottom,
//     radius: 0,
//   };
//   boundedDimensions.radius = boundedDimensions.width / 2;

//   // This creates an array of [0, 1, 2, 3, 4, 5]
//   const angleScaleDomain = d3.range(data.length + 1);

//   // Accessor method to access `key` names from data
//   const angleScaleDomainLabels = data.map((d) => d.label);

//   const domain = d3.extent(angleScaleDomain) as [number, number];
  
  
//   const angleScale = d3
//     .scaleLinear()
//     .domain(domain)
//     .range([0, 2 * Math.PI]);

//   const getCoordinatesForAngle = (angle: number, offset = 1) => {
//     return [
//       boundedDimensions.radius * Math.cos(angle - Math.PI / 2) * offset,
//       boundedDimensions.radius * Math.sin(angle - Math.PI / 2) * offset,
//     ];
//   };

//   const allVals = data.map(item => item.value);

  
//   // data.map((array) => array.map((d) => allVals.push(d.value)));

//   const radiusScale = d3
//     .scaleLinear()
//     .domain([0, 1])
//     .range([0, boundedDimensions.radius])
//     .nice();
//   const valueTicks = radiusScale.ticks(4);
//   console.log(angleScaleDomain, angleScaleDomainLabels, domain, allVals, valueTicks);

//   const radarLineGenerator = d3
//     .lineRadial()
//     .angle((d, i) => angleScale(i))
//     .radius((d) => radiusScale(d.value))
//     .curve(d3.curveCardinalClosed);

//   return (
//     <div>
//       <svg
//         width={width}
//         height={height}
//         style={{ backgroundColor: '#fff', overflow: 'visible' }}
//       >
//         <g
//           transform={`translate(${margin.left + boundedDimensions.radius} ,${
//             margin.top + boundedDimensions.radius
//           } )`}
//         >
//           {angleScaleDomainLabels.map((label, i) => {
//             const angle = angleScale(i);
//             const [x, y] = getCoordinatesForAngle(angle);
//             const [labelX, labelY] = getCoordinatesForAngle(angle, 1.1);
//             return (
//               <g key={i} className="grid">
//                 <line x2={x} y2={y} stroke="red" className="grid-line" />
//                 <text
//                   x={labelX}
//                   y={labelY}
//                   textAnchor={
//                     labelX < 0 ? 'end' : labelX < 3 ? 'middle' : 'start'
//                   }
//                 >
//                   {label}
//                 </text>
//               </g>
//             );
//           })}

//           {valueTicks.map((tick, i) => (
//             <g key={i} className="grid">
//               <circle
//                 // style={{ filter: 'url(#dropshadow)' }}
//                 r={radiusScale(tick)}
//                 fill="#fff"
//                 // fill="#E5E2E0"
//                 stroke="red"
//                 fillOpacity={0.9}
//               />
//               <text x={5} y={-radiusScale(tick)} dy=".3em">
//                 {tick}
//               </text>
//             </g>
//           ))}

//           {/* <g>
//             <path
//               d={radarLineGenerator(data)}
//               fill="#137B80"
//               stroke="#137B80"
//               strokeWidth="2.5"
//               fillOpacity="0.1"
//             />
//           </g> */}
//         </g>
//         {/* End of bounded g */}
//       </svg>
//     </div>
//   );
// };