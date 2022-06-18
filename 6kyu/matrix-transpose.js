// Write a function that outputs the transpose of a matrix - a new matrix where the columns and rows of the original are swapped.

// For example, the transpose of:

// | 1 2 3 |
// | 4 5 6 |
// is

// | 1 4 |
// | 2 5 |
// | 3 6 |
// The input to your function will be an array of matrix rows. You can assume that each row has the same length, and that the height and width of the matrix are both positive.

// My solution
function transpose(matrix) {
	const rows = matrix.length;
	const col = matrix[0].length;
	const res = Array.from({ length: col }, () => []);

	for (const row of matrix) {
		for (let i = 0; i < row.length; i++) {
			res[i].push(row[i]);
		}
	}
	return res;
}
