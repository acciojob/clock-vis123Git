const t = document.getElementById("timer");
function setTime() {
		const date = new Date()
	const currentT = data.currentTime()
	t.innerText = `${date.getMonth()}/${date.getDate()}/${date.getFullYear()}, `
		
}
setTime()