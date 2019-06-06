const robot = require('robotjs');
const screenSize = robot.getScreenSize();
const height = (screenSize.height) - 10;
const width = screenSize.width / 2;

robot.setMouseDelay(2);

exec()
async function exec() {
	for(let i = 0; ; i++) {
		var mouse = robot.getMousePos();
		robot.moveMouse(mouse.x + 1, mouse.y);
		await sleep(4);
		var mouse = robot.getMousePos();
		robot.moveMouse(mouse.x - 1, mouse.y);
		await sleep(4);
	}
}

function sleep(sec) {
	const time = sec * 1000;
	return new Promise(resolve => setTimeout(resolve, time));
}
