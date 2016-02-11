var bubbleData=topOr.bubble;
var topOrmap = new Datamap({
  scope: 'world',
  element: document.getElementById("topOr"),
  projection: 'mercator',
    geographyConfig: {
    highlightBorderColor: '#bada55',
    highlightBorderWidth: 3
  },

  fills: {
  'first': '#151B54',
  'second': '#342d7e',
  'third': '#1589FF',
  'fourth': '#659EC7',
  'fifth': '#CCFFFF',
  defaultFill: '#ABDDA4'
},


bubblesConfig: {
        borderWidth: 2,
        borderColor: '#FFFFFF',
        popupOnHover: true,
         popupTemplate: function(geography, data) {
   return "<div class='hoverinfo'>" + geography.properties.name + "";
 },
        fillOpacity: 0.75,
        highlightOnHover: true,
        highlightFillColor: '#FC8D59',
        highlightBorderColor: 'rgba(250, 15, 160, 0.2)',
        highlightBorderWidth: 2,
        highlightFillOpacity: 0.85
    },
});

topOrmap.bubbles(bubbleData,{
 popupTemplate: function(geography, data) {
    return '<div class="hoverinfo">' + data.name + '<br>Refugees Number:' +  data.number + ' ';
 }
});