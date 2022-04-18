// const skin = 'Ñ@#W$9876543210?!abc;:+=-,._ ';
import imageTest from './image.jpg';

let image;
export const setup = (p5, canvasParentRef) => {
  p5.createCanvas(400, 400).parent(canvasParentRef);
  p5.loadImage(imageTest, (img) => {
    image = img;
    p5.redraw();
  });
};

export const draw = (p5) => {
  p5.background(220);
  p5.image(image, 0, 0, 400, 400);
};
