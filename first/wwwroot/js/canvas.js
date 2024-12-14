function drawLine(canvasId, startX, startY, endX, endY) {
    var canvas = document.getElementById(canvasId);
    var context = canvas.getContext("2d");

    // Calculate the dx and dy
    var dx = endX - startX;
    var dy = endY - startY;

    // Determine the number of steps for the line drawing
    var steps = Math.max(Math.abs(dx), Math.abs(dy));

    // Incremental steps for x and y
    var xIncrement = dx / steps;
    var yIncrement = dy / steps;

    // Starting points
    var x = startX;
    var y = startY;

    // Draw the line
    for (var i = 0; i <= steps; i++) {
        context.fillRect(Math.round(x), Math.round(y), 1, 1); // Draw pixel
        x += xIncrement;
        y += yIncrement;
    }
}
