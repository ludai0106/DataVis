function updateMap(year) {
  console.log(year);
  //document.querySelector('#angle').value = angle;
  d3.selectAll("#mapDis > *").remove();
  if(year=='2000'){mapDis(years.zero);}
  else if(year=='2001'){mapDis(years.one);}
  else if(year=='2002'){mapDis(years.two);}
  else if(year=='2003'){mapDis(years.three);}
  else if(year=='2004'){mapDis(years.four);}
  else if(year=='2005'){mapDis(years.five);}
  else if(year=='2006'){mapDis(years.six);}
  else if(year=='2007'){mapDis(years.seven);}
  else if(year=='2008'){mapDis(years.eight);}
  else if(year=='2009'){mapDis(years.nine);}
  else if(year=='2010'){mapDis(years.ten);}
  else if(year=='2011'){mapDis(years.eleven);}
  else if(year=='2012'){mapDis(years.twelve);}
}