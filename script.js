const t = document.getElementById("timer");
function setTime() {
		const date = new Date()
	const currentT = formatAMPM(date)
	t.innerText = `${date.getMonth()}/${date.getDate()}/${date.getFullYear()}, ${currentT}`
		
}


function formatAMPM(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
	  var seconds = date.getSeconds();

  var ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0'+minutes : minutes;
  var strTime = hours + ':' + minutes + ':' + seconds+ ' ' + ampm;
  return strTime;
}
setInterval(()=>{
	setTime()
},1000,)
