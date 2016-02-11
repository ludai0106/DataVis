var re = new Datamap({
  scope: 'usa',
  element: document.getElementById('residence'),
  geographyConfig: {
    highlightBorderColor: '#bada55',
   popupTemplate: function(geography, data) {
      return '<div class="hoverinfo">' + geography.properties.name + 'Electoral Votes:' +  data.electoralVotes + ' '
    },
    highlightBorderWidth: 3
  },

  fills: {
  'red': '#CC4731',
  'blue': '#306596',
  'Heavy Democrat': '#667FAF',
  'green': '#A9C0DE',
  'Heavy Republican': '#CA5E5B',
  'orange': '#EAA9A8',
  defaultFill: '#ABDDA4'
},
 data:
});
re.labels();
          
          