function drawFlowchart(country) {
  console.log(country);
  //document.querySelector("#angle").value == angle;
  d3.selectAll("#flowchart > *").remove();
  if(country=='BGD'){flowChart(flowchart.BGD);}
  else if (country=="CAN") {flowChart(flowchart.CAN);}
  else if (country=="TCD") {flowChart(flowchart.TCD);}
  else if (country=="CHN") {flowChart(flowchart.CHN);}
  else if (country=="ECU") {flowChart(flowchart.ECU);}
  else if (country=="EGY") {flowChart(flowchart.EGY);}
  else if (country=="ETH") {flowChart(flowchart.ETH);}
  else if (country=="FRA") {flowChart(flowchart.FRA);}
  else if (country=="DEU") {flowChart(flowchart.DEU);}
  else if (country=="IND") {flowChart(flowchart.IND);}
  else if (country=="KEN") {flowChart(flowchart.KEN);}
  else if (country=="LBN") {flowChart(flowchart.LBN);}
  else if (country=="PAK") {flowChart(flowchart.PAK);}
  else if (country=="SSD") {flowChart(flowchart.SSD);}
  else if (country=="SDN") {flowChart(flowchart.SDN);}
  else if (country=="SYR") {flowChart(flowchart.SYR);}
  else if (country=="TUR") {flowChart(flowchart.TUR);}
  else if (country=="UGA") {flowChart(flowchart.UGA);}
  else if (country=="GBR") {flowChart(flowchart.GBR);}
  else if (country=="TZA") {flowChart(flowchart.TZA);}
  else if (country=="USA") {flowChart(flowchart.USA);}
  else if (country=="VEN") {flowChart(flowchart.VEN);}
  else if (country=="YEM") {flowChart(flowchart.YEM);}
}