// Project 1: E-Commerce Web App
const chart1 = d3.select("#chart1")
  .append("svg")
  .attr("width", 300)
  .attr("height", 300);

const data1 = [
  { language: "JavaScript", percentage: 70 },
  { language: "Node.js", percentage: 20 },
  { language: "MongoDB", percentage: 10 }
];

const arc1 = d3.arc().innerRadius(0).outerRadius(150);
const pie1 = d3.pie().value(d => d.percentage);

chart1.selectAll("path")
  .data(pie1(data1))
  .enter()
  .append("path")
  .attr("d", arc1)
  .attr("fill", (d, i) => d3.schemeCategory10[i]);

// Project 2: Real-Time Chat Application
const chart2 = d3.select("#chart2")
  .append("svg")
  .attr("width", 300)
  .attr("height", 300);

const data2 = [
  { language: "JavaScript", percentage: 60 },
  { language: "Vue.js", percentage: 30 },
  { language: "Firebase", percentage: 10 }
];

const arc2 = d3.arc().innerRadius(0).outerRadius(150);
const pie2 = d3.pie().value(d => d.percentage);

chart2.selectAll("path")
  .data(pie2(data2))
  .enter()
  .append("path")
  .attr("d", arc2)
  .attr("fill", (d, i) => d3.schemeCategory10[i]);

// Project 3: Task Management System
const chart3 = d3.select("#chart3")
  .append("svg")
  .attr("width", 300)
  .attr("height", 300);

const data3 = [
  { language: "JavaScript", percentage: 50 },
  { language: "Node.js", percentage: 25 },
  { language: "MongoDB", percentage: 15 },
  { language: "Express.js", percentage: 10 }
];

const arc3 = d3.arc().innerRadius(0).outerRadius(150);
const pie3 = d3.pie().value(d => d.percentage);

chart3.selectAll("path")
  .data(pie3(data3))
  .enter()
  .append("path")
  .attr("d", arc3)
  .attr("fill", (d, i) => d3.schemeCategory10[i]);

// Project 4: Personal Finance Tracker
const chart4 = d3.select("#chart4")
  .append("svg")
  .attr("width", 300)
  .attr("height", 300);

const data4 = [
  { language: "JavaScript", percentage: 50 },
  { language: "React.js", percentage: 30 },
  { language: "Firebase", percentage: 20 }
];

const arc4 = d3.arc().innerRadius(0).outerRadius(150);
const pie4 = d3.pie().value(d => d.percentage);

chart4.selectAll("path")
  .data(pie4(data4))
  .enter()
  .append("path")
  .attr("d", arc4)
  .attr("fill", (d, i) => d3.schemeCategory10[i]);

// Project 5: Weather Forecast Application
const chart5 = d3.select("#chart5")
  .append("svg")
  .attr("width", 300)
  .attr("height", 300);

const data5 = [
  { language: "JavaScript", percentage: 60 },
  { language: "React.js", percentage: 25 },
  { language: "OpenWeather API", percentage: 15 }
];

const arc5 = d3.arc().innerRadius(0).outerRadius(150);
const pie5 = d3.pie().value(d => d.percentage);

chart5.selectAll("path")
  .data(pie5(data5))
  .enter()
  .append("path")
  .attr("d", arc5)
  .attr("fill", (d, i) => d3.schemeCategory10[i]);

// Project 6: Social Media Analytics Dashboard
const chart6 = d3.select("#chart6")
  .append("svg")
  .attr("width", 300)
  .attr("height", 300);

const data6 = [
  { language: "JavaScript", percentage: 50 },
  { language: "Svelte", percentage: 40 },
  { language: "D3.js", percentage: 10 }
];

const arc6 = d3.arc().innerRadius(0).outerRadius(150);
const pie6 = d3.pie().value(d => d.percentage);

chart6.selectAll("path")
  .data(pie6(data6))
  .enter()
  .append("path")
  .attr("d", arc6)
  .attr("fill", (d, i) => d3.schemeCategory10[i]);

// Project 7: Real-Time Stock Market Dashboard
const chart7 = d3.select("#chart7")
  .append("svg")
  .attr("width", 300)
  .attr("height", 300);

const data7 = [
  { language: "JavaScript", percentage: 55 },
  { language: "Vue.js", percentage: 35 },
  { language: "Chart.js", percentage: 10 }
];

const arc7 = d3.arc().innerRadius(0).outerRadius(150);
const pie7 = d3.pie().value(d => d.percentage);

chart7.selectAll("path")
  .data(pie7(data7))
  .enter()
  .append("path")
  .attr("d", arc7)
  .attr("fill", (d, i) => d3.schemeCategory10[i]);

// Project 8: Blog Platform
const chart8 = d3.select("#chart8")
  .append("svg")
  .attr("width", 300)
  .attr("height", 300);

const data8 = [
  { language: "JavaScript", percentage: 60 },
  { language: "React.js", percentage: 30 },
  { language: "MongoDB", percentage: 10 }
];

const arc8 = d3.arc().innerRadius(0).outerRadius(150);
const pie8 = d3.pie().value(d => d.percentage);

chart8.selectAll("path")
  .data(pie8(data8))
  .enter()
  .append("path")
  .attr("d", arc8)
  .attr("fill", (d, i) => d3.schemeCategory10[i]);

// Project 9: Online Learning Management System
const chart9 = d3.select("#chart9")
  .append("svg")
  .attr("width", 300)
  .attr("height", 300);

const data9 = [
  { language: "JavaScript", percentage: 60 },
  { language: "React.js", percentage: 30 },
  { language: "Node.js", percentage: 10 }
];

const arc9 = d3.arc().innerRadius(0).outerRadius(150);
const pie9 = d3.pie().value(d => d.percentage);

chart9.selectAll("path")
  .data(pie9(data9))
  .enter()
  .append("path")
  .attr("d", arc9)
  .attr("fill", (d, i) => d3.schemeCategory10[i]);

// Project 10: Job Search Web App
const chart10 = d3.select("#chart10")
  .append("svg")
  .attr("width", 300)
  .attr("height", 300);

const data10 = [
  { language: "JavaScript", percentage: 50 },
  { language: "Node.js", percentage: 30 },
  { language: "MongoDB", percentage: 20 }
];

const arc10 = d3.arc().innerRadius(0).outerRadius(150);
const pie10 = d3.pie().value(d => d.percentage);

chart10.selectAll("path")
  .data(pie10(data10))
  .enter()
  .append("path")
  .attr("d", arc10)
  .attr("fill", (d, i) => d3.schemeCategory10[i]);

