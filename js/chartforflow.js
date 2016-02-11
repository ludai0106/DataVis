function flowChart(dataset) {
        'use strict';

        console.log(dataset)

        var width = 200;
        var height = 300;
        var radius = 90;
        var donutWidth = 20;
        var legendRectSize = 18;
        var legendSpacing = 4;

        var color = d3.scale.category10();

        var svg = d3.select('#flowchart')
          .append('svg')
          .attr('width', width)
          .attr('height', height)
          .append('g')
          .attr('transform', 'translate(' + (width / 1.9) + 
            ',' + (height / 1.7) + ')');

        var arc = d3.svg.arc()
          .innerRadius(radius - donutWidth)
          .outerRadius(radius);

        var pie = d3.layout.pie()
          .value(function(d) { return d.Refugee; })
          .sort(null);

        var tooltip = d3.select('#flowchart')                               // NEW
          .append('div')                                                // NEW
          .attr('class', 'tooltip');                                    // NEW
                      
        tooltip.append('div')                                           // NEW
          .attr('class', 'label');                                      // NEW
             
        tooltip.append('div')                                           // NEW
          .attr('class', 'count');                                      // NEW

        tooltip.append('div')                                           // NEW
          .attr('class', 'percent');         
                                       // NEW

          dataset.forEach(function(d) {
            d.Refugee = +d.Refugee;
          });

          var path = svg.selectAll('path')
            .data(pie(dataset))
            .enter()
            .append('path')
            .attr('d', arc)
            .attr('fill', function(d, i) { 
              return color(d.data.Origin); 
            });

          path.on('mouseover', function(d) {                            // NEW
            var total = d3.sum(dataset.map(function(d) {                // NEW
              return d.Refugee;                                           // NEW
            }));                                                        // NEW
            var percent = Math.round(1000 * d.data.Refugee / total) / 10; // NEW
            tooltip.select('.label').html(d.data.Origin);                // NEW
            tooltip.select('.count').html(d.data.Refugee);                // NEW
            tooltip.select('.percent').html(percent + '%');             // NEW
            tooltip.style('display', 'block');                          // NEW
          });                                                           // NEW
          
          path.on('mouseout', function() {                              // NEW
            tooltip.style('display', 'none');                           // NEW
          });                                                           // NEW

            
          var legend = svg.selectAll('.legend')
            .data(color.domain())
            .enter()
            .append('g')
            .attr('class', 'legend')
            .attr('transform', function(d, i) {
              var height = legendRectSize + legendSpacing;
              var offset =  height * color.domain().length / 2;
              var horz = -2 * legendRectSize;
              var vert = i * height - offset;
              return 'translate(' + horz + ',' + vert + ')';
            });

          legend.append('rect')
            .attr('width', legendRectSize)
            .attr('height', legendRectSize)                                   
            .style('fill', color)
            .style('stroke', color);
            
          legend.append('text')
            .attr('x', legendRectSize + legendSpacing)
            .attr('y', legendRectSize - legendSpacing)
            .text(function(d) { return d; });

  
      }