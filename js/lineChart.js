$(function lineChart() {
    $('#lineChart').highcharts({
        title: {
            text: 'Refugee by Type',
            x: -20 //center
        },
        subtitle: {
            text: 'Data source: UNHCR',
            x: -20
        },
        xAxis: {
            categories: ['2000','2001','2002','2003','2004','2005','2006','2007','2008','2009','2010','2011','2012']
        },
        yAxis: {
            title: {
                text: 'People'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            valueSuffix: ' people'
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        series: [{
            name: 'Refugees',
            data: [12064599,12031996,10594055,9592795,9568144,8661988,9877703,9679646,10489812,10396538,10549679,10404806,10496768]
        }, {
            name: 'Returned Refugees',
            data: [767792,462429,2425015,1094991,1434319,1105661,733556,730574,603793,251453,197626,531907,525751]
        }, {
            name: 'IDPs',
            data: [998501,5096502,4646641,4181701,5426539,6616791,12794268,13740317,14442227,15628057,14697804,15473378,17670368]
        }, {
            name: 'Returned IDPs',
            data: [369055,240950,1179038,237798,146516,519430,1864171,2070131,1361436,2229540,2923233,3245804,1545486]
        }, {
            name: 'Asylum Seekers',
            data: [947926,943854,1093755,996428,885249,802174,741291,741110,825043,989169,837445,895284,933262]
        }]
    });
});