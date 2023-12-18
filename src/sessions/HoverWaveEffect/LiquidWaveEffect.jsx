import React, { useEffect, useRef, useState } from "react";
import "./liquidwave.css";

const RippleEffect = () => {
  const [canva, setCanva] = useState();
  const newColor = useRef(null);

  const canvas = document.querySelector("#canvas-effect");
  useEffect(() => {
    if (canva) {
      console.log("canvas", canva);

      const canvasSettings = {
        blur: 10,
        ratio: 1,
      };

      function Coords(x, y) {
        this.x = x || null;
        this.y = y || null;
      }

      const Ripple = function Ripple(x, y, circleSize, ctx, color) {
        console.log("color", color);
        this.position = new Coords(x, y);
        this.circleSize = circleSize;
        this.maxSize = 80;
        this.opacity = 1;
        this.ctx = ctx;
        this.strokeColor = `rgba(222, 52, 52, 0.8)`;

        this.animationSpeed = 5;
        this.opacityStep =
          this.animationSpeed / (this.maxSize - circleSize) / 2;
      };

      Ripple.prototype = {
        update: function update() {
          this.circleSize = this.circleSize + this.animationSpeed;
          this.opacity = this.opacity - this.opacityStep;
          this.strokeColor = `rgba(222, 52, 52, 0.8)`;
        },
        draw: function draw() {
          this.ctx.beginPath();
          this.ctx.strokeStyle = this.strokeColor;
          this.ctx.arc(
            this.position.x,
            this.position.y,
            this.circleSize,
            0,
            2 * Math.PI
          );
          this.ctx.stroke();
        },
        setStatus: function setStatus(status) {
          this.status = status;
        },
      };

      const ctx = canva.getContext("2d");
      const ripples = [];

      const height = document.body.clientHeight;
      const width = document.body.clientWidth;

      canva.style.filter = `blur(${canvasSettings.blur}px)`;

      canva.width = width * canvasSettings.ratio;
      canva.height = height * canvasSettings.ratio;

      canva.style.width = `${width}px`;
      canva.style.height = `${height}px`;

      let animationFrame;

      const getRandomColorRGB = () => {
        const r = Math.floor(Math.random() * 256); // Random value for red (0-255)
        const g = Math.floor(Math.random() * 256); // Random value for green (0-255)
        const b = Math.floor(Math.random() * 256); // Random value for blue (0-255)
        newColor.current = `rgba(${r},${g},${b})`;
        return `rgba(${r},${g},${b})`; // Construct the RGB string
      };

      const canvasMouseOver = (e) => {
        const x = e.clientX * canvasSettings.ratio;
        const y = e.clientY * canvasSettings.ratio;
        ripples.unshift(new Ripple(x, y, 2, ctx, getRandomColorRGB()));
      };

      const animation = () => {
        ctx.clearRect(0, 0, canva.width, canva.height);

        const length = ripples.length;
        for (let i = length - 1; i >= 0; i -= 1) {
          const r = ripples[i];

          r.update();
          r.draw();

          if (r.opacity <= 0) {
            ripples[i] = null;
            delete ripples[i];
            ripples.pop();
          }
        }
        animationFrame = window.requestAnimationFrame(animation);
      };

      animation();
      canva.addEventListener("mousemove", canvasMouseOver);
    } else {
      setCanva(canvas);
      console.log("noppee");
    }
  }, [canva]);

  return (
    <>
      <canvas id="canvas-effect"></canvas>
      <div id="wrapper"></div>
    </>
  );
};

export default RippleEffect;
