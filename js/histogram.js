var margin = {top: 20, right: 20, bottom: 30, left: 80},
    width = 1000 - margin.left - margin.right,
    height = 200 - margin.top - margin.bottom;

var x = d3.scale.ordinal()
    .rangeRoundBands([0, 700], .1);

var y = d3.scale.linear()
    .range([height, 0]);

var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom");

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left");

var tip = d3.tip()
  .attr('class', 'd3-tip')
  .offset([-10, 0])
  .html(function(d) {
    return "<strong>Frequency:</strong> <span style='color:red'>" + d.number + "</span>";
  })

var svg = d3.select("#histogram").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + width/4 + "," + height/10 + ")");
var data=[
   {"year":'2000',"number":20147873},
   {"year":'2001',"number":18775731},
   {"year":'2002',"number":19938504},
   {"year":'2003',"number":16103713},
   {"year":'2004',"number":18916627},
   {"year":'2005',"number":20089695},
   {"year":'2006',"number":32013777},
   {"year":'2007',"number":29968934},
   {"year":'2008',"number":34462633},
   {"year":'2009',"number":36466028},
   {"year":'2010',"number":33924436},
   {"year":'2011',"number":35440128},
   {"year":'2012',"number":35836997}
  ];

  x.domain(data.map(function(d) { return d.year; }));
  y.domain([0, d3.max(data, function(d) { return d.number; })]);

  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis);

  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
    .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .text("number");

  svg.call(tip);

  svg.selectAll(".bar")
      .data(data)
    .enter().append("rect")
      .attr("class", "bar")
      .attr("x", function(d) { return x(d.year); })
      .attr("width", x.rangeBand())
      .attr("y", function(d) { return y(d.number); })
      .attr("height", function(d) { return height - y(d.number); })
      .on("mouseover", function(d) {
            //tip.show
            updateMap(d.year);
        });

function type(d) {
  d.number = +d.number;
  return d;
}
