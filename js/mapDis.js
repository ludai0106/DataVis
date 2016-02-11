var colors = d3.scale.category10();
function mapDis(yeardata){
var mapDis = new Datamap({
  element: document.getElementById("mapDis"),
  setProjection: function(element, options) {
         var projection = d3.geo.equirectangular()
           .center([-97, 20])
           .scale(130)
           .translate([element.offsetWidth / 3.5, element.offsetHeight / 2.3]);
        var path = d3.geo.path()
               .projection(projection);                                              
        return {path: path, projection: projection};
        },
  geographyConfig: {
        borderWidth: 1,
        borderColor: '#000000',
         highlightBorderColor: '#bada55',
        popupTemplate: function(geography, data) {
        return '<div class="hoverinfo">' + geography.properties.name + '<br>Refugees Number: ' +  data.number +  ' '
        },
        highlightBorderWidth: 3
        },
   fills: {
          defaultFill: "#ABDDA4",
          class1: 'crimson',
          class2: 'coral',
          class3: 'lightpink',
          class4: 'gold',
          class5: 'steelblue',
          class6: 'lightskyblue',
          class7: 'mediumseagreen',
        },
     fills: {
          defaultFill: "#F0FFFF",
          class1: '#151B54',
          class2: '#342d7e',
          class3: '#1589FF',
          class4: 'steelblue',
          class5: '#659EC7',
          class6: 'lightskyblue',
          class7: '#CCFFFF',
        },

/*    <li><span style='background:#151B54;'></span><br>>=1million</li>
    <li><span style='background:#0020C2;'></span><br>0.5~1million</li>
    <li><span style='background:#1589FF;'></span><br>0.3~0.5million</li>
    <li><span style='background:steelblue;'></span><br>0.1~0.3million</li>
    <li><span style='background:#659EC7;'></span><br>50~100thousand</li>
    <li><span style='background:lightskyblue;'></span><br>10~50thousand</li>
    <li><span style='background:#CCFFFF;'></span><br>0~10thousand</li>
    <li><span style='background:#F0FFFF;'></span><br>None</li>
*/
    data:yeardata
});
mapDis.graticule();
/*    //legendTitle : "Total Downloads",
    reverse: true,
    defaultFillName: "None",
    labels: {
      class1: ">=1million",
      class2: "0.5~1million",
      class3: "0.3~0.5million",
      class4: "0.1~0.3million",
      class5: "50~100thousand",
      class6: "10~50thousand",
      class7: "0~10thousand"
    }
  });*/
}
mapDis(years.zero);