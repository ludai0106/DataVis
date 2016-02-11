function updatePie(year) {
  console.log(year);
  //document.querySelector("#angle").value = angle;
  d3.selectAll("#piechart > *").remove();
  if(year==2000){piechart(pie.zero);}
  else if(year==2001){piechart(pie.one);}
  else if(year==2002){piechart(pie.two);}
  else if(year==2003){piechart(pie.three);}
  else if(year==2004){piechart(pie.four);}
  else if(year==2005){piechart(pie.five);}
  else if(year==2006){piechart(pie.six);}
  else if(year==2007){piechart(pie.seven);}
  else if(year==2008){piechart(pie.eight);}
  else if(year==2009){piechart(pie.nine);}
  else if(year==2010){piechart(pie.ten);}
  else if(year==2011){piechart(pie.eleven);}
  else if(year==2012){piechart(pie.twelve);}
}