var labelData=label.labelinfo;
var flowData=flows;
var flowmap = new Datamap({
    done: function(datamap) {
          datamap.svg.selectAll('.datamaps-subunit').on('click', function(geography) {   
          drawFlowchart(geography.id);

              //console.log(geography.geometry.coordinates[0][0]);
          var flow=flowData[geography.id]
          datamap.arc(flow, {greatArc: false, animationSpeed: 2000});
        });
        },
	scope: 'world',
	element: document.getElementById("mapflow"),
	projection: 'mercator',
    geographyConfig: {
    highlightBorderColor: '#bada55',
   popupTemplate: function(geography, data) {
      return '<div class="hoverinfo">' + geography.properties.name + '<br>Refugees Number:' +  data.number + ' '
    },
    highlightBorderWidth: 3
  },

  fills: {
 //'red': '#151B54',
 // 'blue': '#342d7e',
 // 'yellow': '#1589FF',
 // 'green': 'steelblue',
 // 'orange': '#659EC7',
 // defaultFill: '#A0DDA4'

  'red': '#151B54',
  'orange': '#342d7e',
  'yellow': '#1589FF',
  'blue': 'steelblue',
  'green': '#CCFFFF',
  defaultFill: '#A0DDA4'
},
 data:labelData
});
//flowmap.labels();