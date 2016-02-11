// Initialize slider
var slider = d3.slider().min(2000).max(2012).ticks(13).stepValues([2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012])
             .showRange(true).value(2000)
             .callback(function(evt) {
             	var year=Math.floor(self.slider.value());
             	updatePie(year);
      });
// Render the slider in the div
d3.select('#slider').call(slider);
