
    // Initialize canvas and context
    const canvas = document.getElementById('myCanvas');
    const context = canvas.getContext('2d');
    drawAxes();

    function DDA() {
        // const x1 = 100;
        const x1 = parseFloat(prompt("Enter x1"))
        // const y1 = 700;
        const y1 = parseFloat(prompt("Enter y1"))
        // const x2 = 600;
        const x2 = parseFloat(prompt("Enter x2"))

        // const y2 = 300;
        const y2 = parseFloat(prompt("Enter y2"))

        const dx = x2 - x1;
        const dy = y2 - y1;

        const k = Math.abs(dx);//length to loop and loop 

        if (Math.abs(dx) < Math.abs(dy)) {
            k = dy;
        }

        // How much changE in each step
        const xInc = dx / k;
        const yInc = dy / k;

        // drawing start 
        let x = x1;
        let y = y1;

        // Loop to write new points each time 
        for (let i = 0; i <= k; i++) {
            drawPixelAt(x, y)
            x += xInc;
            y += yInc;
        }
    }


    function BSA() {
        const x1 = parseInt(prompt("Enter x1"));
        const y1 = parseInt(prompt("Enter y1"));
        const x2 = parseInt(prompt("Enter x2"));
        const y2 = parseInt(prompt("Enter y2"));

        const dx = Math.abs(x2 - x1);
        const dy = Math.abs(y2 - y1);
        const m = (dy / dx);

        const dxTemp = x2 - x1;
        const dyTemp = y2 - y1;

        let forX = 1;
        let forY = 1;

        if (dxTemp < 0) {
            forX = -1;
        }
        if (dyTemp < 0) {
            forY = -1;
        }

        let x = x1, y = y1;
        let p;

        if (m <= 1) {
            p = 2 * dy - dx;
            while (106) {
                drawPixelAt(x, y);
                if (x === x2 && y === y2) {
                    break;
                }
                if (p >= 0) {
                    x += forX;
                    y += forY;
                    p += (2 * dy) - (2 * dx);
                } else if (p < 0) {
                    x += forX;
                    p += (2 * dy);
                }
            }
        } else if (m > 1) {
            p = 2 * dx - dy;
            while (106) {
                drawPixelAt(x, y);
                if (x === x2 && y === y2) {
                    break;
                }
                if (p >= 0) {
                    x += forX;
                    y += forY;
                    p += (2 * dx) - (2 * dy);
                } else if (p < 0) {
                    y += forY;
                    p += (2 * dx);
                }
            }
        }
    }


    function drawAxes() {
        context.strokeStyle = "#000";
        context.beginPath();
        //  X axis
        context.moveTo(0, canvas.height / 2);
        context.lineTo(canvas.width, canvas.height / 2);
        context.stroke();

        //  Y axis
        context.beginPath();
        context.moveTo(canvas.width / 2, 0);
        context.lineTo(canvas.width / 2, canvas.height);
        context.stroke();
    }

    function drawPixelAt(x, y) {
        const canvasX = canvas.width / 2 + x;
        const canvasY = canvas.height / 2 - y;
        context.fillRect(Math.round(canvasX), Math.round(canvasY), 2, 2) // context.fillRect(x, y, width, height)
    }
