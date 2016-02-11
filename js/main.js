/*console.log('Before');
<!--var countries = Datamap.prototype.worldTopo.objects.world.geometries;
for (var i = 0, j = countries.length; i < j; i++) {
  console.log(countries[i].properties);
}-->
var map = new Datamap({
	scope: 'world',
	element: document.getElementById("basic"),
	width:800,
	projection: 'mercator',
    fills: {
    defaultFill: "#ABDDA4",
    authorHasTraveledTo: "#fa0fa0"
    },
   data: {
    USA: { fillKey: "authorHasTraveledTo" },
    JPN: { fillKey: "authorHasTraveledTo" },
    ITA: { fillKey: "authorHasTraveledTo" },
    CRI: { fillKey: "authorHasTraveledTo" },
    KOR: { fillKey: "authorHasTraveledTo" },
    DEU: { fillKey: "authorHasTraveledTo" },
   }
});
console.log('After');*/
var colors = d3.scale.category10();
function drawEarth(){
var map = new Datamap({
        done: function(datamap) {
          datamap.svg.selectAll('.datamaps-subunit').on('click', function(geography) {
            console.log(geography.properties.name,geography.id);
            if (geography.properties.name=='Brazil') {
              //console.log(geography.geometry.coordinates[0][0]);
              console.log([{
        origin: {
          latitude: 61,
          longitude: -149.789549
        },
        destination: {
          latitude: -22,
          longitude: -43
        }
      }]);
              console.log(geography);
                  datamap.arc([{
        origin: {
          latitude: 61,
          longitude: -149.789549
        },
        destination: {
          latitude: -22,
          longitude: -43
        }
      }], {
        greatArc: true,
        animationSpeed: 2000
      });
            };
            if (geography.properties.name=='Canada') {
                  datamap.arc([{
        origin: {
          latitude: 61,
          longitude: -149
        },
        destination: {
          latitude: -10,
          longitude: -43
        }
      }], {
        greatArc: true,
        animationSpeed: 2000
      });
            };
        
        });
        },
        scope: 'world',
        element: document.getElementById('mapflow'),
        projection: 'orthographic',
        fills: {
          defaultFill: "#ABDDA4",
          gt50: colors(Math.random() * 20),
          eq50: colors(Math.random() * 20),
          lt25: colors(Math.random() * 10),
          gt75: colors(Math.random() * 200),
          lt50: colors(Math.random() * 20),
          eq0: colors(Math.random() * 1),
          pink: '#0fa0fa',
          gt500: colors(Math.random() * 1)
        },
        projectionConfig: {
          rotation: [97,-10],
        },
        data: {
          'USA': {fillKey: 'lt50' },
          'MEX': {fillKey: 'lt25' },
          'CAN': {fillKey: 'gt50' },
          'GTM': {fillKey: 'gt500'},
          'HND': {fillKey: 'eq50' },
          'BLZ': {fillKey: 'pink' },
          'GRL': {fillKey: 'eq0' },
          'CAN': {fillKey: 'gt50' }
        }
      });

      map.graticule();

  }
drawEarth();