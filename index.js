/**
 * Return the chart container.
 * @return DOM
 */
function getChartContainer() {
  const data = [4, 8, 15, 16, 23, 42];

  // Create an empty (detached) chart container.
  const div = d3
    .create("div")
    .style("font", "10px sans-serif")
    .style("text-align", "right")
    .style("color", "white");

  div
    .selectAll("div") // Define the initial (empty) selection for the bars.
    .data(data) // Bind this selection to the data (computing enter, update and exit).
    .join("div") // Join the selection and the data, appending the entering bars.
    .style("background", "steelblue")
    .style("padding", "3px")
    .style("margin", "1px")
    .style("width", (d) => `${d * 10}px`) // Set the width as a function of data.
    .text((d) => d); // Set the text of each bar as the data.

  return div.node();
}

// app div
const app = document.getElementById("app");

// append Chart Container into app div
app.appendChild(getChartContainer());
