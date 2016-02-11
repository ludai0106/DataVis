var globeData=globe.labelinfo;
var colors = d3.scale.category10();
function drawGlobe(rotation){
var globe = new Datamap({
        scope: 'world',
        element: document.getElementById('globe'),
        setProjection: function(element, options) {
         var projection = d3.geo.orthographic()
           .center([-97, 20])
           .scale(250)
           .clipAngle(90)
           .rotate([rotation, -10])
           .translate([element.offsetWidth / 3, element.offsetHeight / 3.5]);
        var path = d3.geo.path()
               .projection(projection);                                              
        return {path: path, projection: projection};
        },
        //projection: 'orthographic',
        geographyConfig: {
         highlightBorderColor: '#bada55',
        popupTemplate: function(geography, data) {
        return '<div class="hoverinfo">' + geography.properties.name + '<br>MoveIn Refugees: ' +  data.Movein + '<br>MoveOut Refugees: ' + data.Moveout+ ' '
        },
        highlightBorderWidth: 3
        },

        fills: {
          defaultFill: "#ABDDA4",
          class1: colors(Math.random() * 20),
          class2: colors(Math.random() * 20),
          class3: colors(Math.random() * 10),
          class4: colors(Math.random() * 200),
          class5: colors(Math.random() * 20),
          class6: colors(Math.random() * 1),
          class7: '#0fa0fa',
          class8: colors(Math.random() * 1)
        },

        data: globeData
      });
      globe.graticule();
          
}
drawGlobe(-10);
          