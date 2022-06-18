// Oh no! Santa's little elves are sick this year. He has to distribute the presents on his own.

// But he has only 24 hours left. Can he do it?

// Your Task:
// You will get an array as input with time durations as string in the following format: HH:MM:SS. Each duration represents the time taken by Santa to deliver a present. Determine whether he can do it in 24 hours or not. In case the time required to deliver all of the presents is exactly 24 hours, Santa can complete the delivery ;-) .

// My solution
function determineTime(durations) {
	let hours = 0;
	let min = 0;
	let sec = 0;
	durations.map(v => v.split(':').map((v, i) => (i === 0 ? (hours += v * 1) : i === 1 ? (min += v * 1) : (sec += v * 1))));
	min += sec / 60;
	hours += min / 60;
	return hours <= 24;
}
