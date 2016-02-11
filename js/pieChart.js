function piechart(dataset) {
        'use strict';

        var width = 400;
        var height = 500;
        var radius = Math.min(width, height) / 2.5;
        var donutWidth = 50;
        var legendRectSize = 18;                                  // NEW
        var legendSpacing = 4;                                    // NEW

        //var color = d3.scale.category20b();
        var colors = ["skyblue", "black","palegreen","orange","mediumpurple"];
        var color = d3.scale.linear()
                    .range(colors)
                    .domain([0,1,2,3,4])

        var svg = d3.select('#piechart')
          .append('svg')
          .attr('width', width)
          .attr('height', height)
          .append('g')
          .attr('transform', 'translate(' + (width / 1.8) + 
            ',' + (height / 2.2) + ')');

        var arc = d3.svg.arc()
          .innerRadius(radius - donutWidth)
          .outerRadius(radius);

        var pie = d3.layout.pie()
          .value(function(d) { return d.count; })
          .sort(null);

         var tooltip = d3.select('#piechart')                               // NEW
          .append('div')                                                // NEW
          .attr('class', 'tooltip')
          .attr('transform', 'translate(' + (width / 2) + ',' + (height / 2) + ')');                                   // NEW
                      
        tooltip.append('div')                                           // NEW
          .attr('class', 'label');                                      // NEW
             
        tooltip.append('div')                                           // NEW
          .attr('class', 'count');                                      // NEW

        tooltip.append('div')                                           // NEW
          .attr('class', 'percent');                          

        var path = svg.selectAll('path')
          .data(pie(dataset))
          .enter()
          .append('path')
          .attr('d', arc)
          .attr('fill', function(d, i) { 
            return color(i);
          });

        path.on('mouseover', function(d) {                            // NEW
            var total = d3.sum(dataset.map(function(d) {                // NEW
              return d.count;                                           // NEW
            }));                                                        // NEW
            var percent = Math.round(1000 * d.data.count / total) / 10; // NEW
            tooltip.select('.label').html(d.data.label);                // NEW
            tooltip.select('.count').html(d.data.count);                // NEW
            tooltip.select('.percent').html(percent + '%');             // NEW
            tooltip.style('display', 'block');                          // NEW
          });                                                           // NEW
          
          path.on('mouseout', function() {                              // NEW
            tooltip.style('display', 'none');                           // NEW
          });                                
        
        var legend = svg.selectAll('.legend')                     // NEW
          .data(color.domain())                                   // NEW
          .enter()                                                // NEW
          .append('g')                                            // NEW
          .attr('class', 'legend')                                // NEW
          .attr('transform', function(d, i) {                     // NEW
            var height = legendRectSize + legendSpacing;          // NEW
            var offset =  height * color.domain().length / 2;     // NEW
            var horz = -2 * legendRectSize;                       // NEW
            var vert = i * height - offset;                       // NEW
            return 'translate(' + horz + ',' + vert + ')';        // NEW
          });                                                     // NEW

        legend.append('rect')                                     // NEW
          .attr('width', legendRectSize)                          // NEW
          .attr('height', legendRectSize)                         // NEW
          .style('fill', color)                                   // NEW
          .style('stroke', color);                                // NEW

       var labels=['Refugee','ReturnedRefugee','IDPs','ReturnedIDPs','AsylumSeeker']
          
        legend.append('text')                                     // NEW
          .attr('x', legendRectSize + legendSpacing)              // NEW
          .attr('y', legendRectSize - legendSpacing)              // NEW
          .text(function(d,i) { return labels[i]; });                       // NEW

      }
    piechart(pie.zero);