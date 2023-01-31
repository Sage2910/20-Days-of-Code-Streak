<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Canvas Drawing App</title>
    <style>
      canvas {
        border: 1px solid black;
      }
    </style>
  </head>
  <body>
    <canvas id="drawing" width="500" height="500"></canvas>
    <br><br>
    <button id="clear">Clear Canvas</button>
    <script>
      const canvas = document.getElementById("drawing");
      const context = canvas.getContext("2d");
      let isDrawing = false;
      let x = 0;
      let y = 0;

      canvas.addEventListener("mousedown", event => {
        x = event.clientX;
        y = event.clientY;
        isDrawing = true;
      });

      canvas.addEventListener("mousemove", event => {
        if (isDrawing === true) {
          drawLine(context, x, y, event.clientX, event.clientY);
          x = event.clientX;
          y = event.clientY;
        }
      });

      window.addEventListener("mouseup", () => {
        if (isDrawing === true) {
          isDrawing = false;
        }
      });

      function drawLine(context, x1, y1, x2, y2) {
        context.beginPath();
        context.moveTo(x1, y1);
        context.lineTo(x2, y2);
        context.stroke();
      }

      const clearButton = document.getElementById("clear");
      clearButton.addEventListener("click", () => {
        context.clearRect(0, 0, canvas.width, canvas.height);
      });
    </script>
  </body>
</html>
