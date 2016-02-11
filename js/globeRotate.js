function globeRotate(angle) {
	console.log(angle);
	//document.querySelector('#angle').value = angle;
	d3.selectAll("#globe > *").remove();
    //d3.selectAll("#dis > *").remove();
	drawGlobe(angle);
}