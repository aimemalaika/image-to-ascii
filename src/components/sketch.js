import imageTest from './gloria48.jpg';

const skin = 'Ñ@#W$9876543210?!abc;:+=-,._ ';
let imageLoaded;

export const setup = (p5, canvasParentRef) => {
  p5.createCanvas(400, 400).parent(canvasParentRef);
  p5.noLoop();
};

export const draw = (p5) => {
  p5.background(0);
  p5.loadImage(imageTest, (img) => {
    imageLoaded = img;
    // p5.image(imageLoaded, 0, 0, 400, 400);
    const w = p5.width / imageLoaded.width;
    const h = p5.height / imageLoaded.height;
    imageLoaded.loadPixels();
    for (let i = 0; i < imageLoaded.width; i += 1) {
      for (let j = 0; j < imageLoaded.height; j += 1) {
        const index = (i + j * imageLoaded.width) * 4;
        const r = imageLoaded.pixels[index];
        const g = imageLoaded.pixels[index + 1];
        const b = imageLoaded.pixels[index + 2];
        const avg = (r + g + b) / 3;
        p5.noStroke();
        p5.fill(avg);
        const len = skin.length;
        const charIndex = Math.floor(p5.map(avg, 0, 255, len, 0));
        p5.textSize(w);
        p5.textAlign(p5.CENTER, p5.CENTER);
        p5.text(skin.charAt(charIndex), i * w + w * 0.5, j * h + h * 0.5);
      }
    }
  });
};
