import * as PIXI from 'pixi.js';

const app = new PIXI.Application({ resizeTo: window });

document.body.appendChild(app.view);

// Inner radius of the circle
const radius = 100;

// The blur amount
const blurSize = 12;

// Load video
const videoTexture = PIXI.Texture.from('./assets/clouds.mp4');
const background = new PIXI.Sprite(videoTexture);
background.width = app.screen.width;
background.height = app.screen.height;
app.stage.addChild(background);

// Create grey background
const greyBackground = new PIXI.Graphics()
    .beginFill(0x888888)
    .drawRect(0, 0, app.screen.width, app.screen.height)
    .endFill();
app.stage.addChild(greyBackground);

// Create circle
const circle = new PIXI.Graphics()
    .beginFill(0xff0000)
    .drawCircle(radius + blurSize, radius + blurSize, radius)
    .endFill();

circle.filters = [new PIXI.filters.BlurFilter(blurSize)];

const bounds = new PIXI.Rectangle(0, 0, (radius + blurSize) * 2, (radius + blurSize) * 2);
const texture = app.renderer.generateTexture(circle, PIXI.SCALE_MODES.NEAREST, 1, bounds);
const focus = new PIXI.Sprite(texture);
app.stage.addChild(focus);

// Set mask
background.mask = focus;

// Mouse move event
app.stage.interactive = true;
app.stage.on('pointermove', (event) => {
    focus.position.x = event.data.global.x - focus.width / 2;
    focus.position.y = event.data.global.y - focus.height / 2;
});
