// D3.js example to create a basic graph (update with your data)
d3.select("#project1")
  .append("svg")
  .attr("width", 300)
  .attr("height", 300)
  .append("circle")
  .attr("cx", 150)
  .attr("cy", 150)
  .attr("r", 100)
  .style("fill", "green");

d3.select("#project2")
  .append("svg")
  .attr("width", 300)
  .attr("height", 300)
  .append("rect")
  .attr("x", 50)
  .attr("y", 50)
  .attr("width", 200)
  .attr("height", 200)
  .style("fill", "purple");
  
// Add more D3.js visualizations and interactive components for other projects
