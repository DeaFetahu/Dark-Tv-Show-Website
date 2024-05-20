
const app = new PIXI.Application({ backgroundAlpha: 0, resizeTo: window });

document.body.appendChild(app.view);

// Create play button that can be used to trigger the video
const button = new PIXI.Graphics()
    .beginFill(0x0, 0.5)
    .drawRoundedRect(0, 0, 100, 100, 10)
    .endFill()
    .beginFill(0xffffff)
    .moveTo(36, 30)
    .lineTo(36, 70)
    .lineTo(70, 50);

// Position the button
button.x = (app.screen.width - button.width) / 2;
button.y = (app.screen.height - button.height) / 2;

// Enable interactivity on the button
button.eventMode = 'static';
button.cursor = 'pointer';

// Add to the stage
app.stage.addChild(button);

button.on('pointertap', onPlayVideo);

function onPlayVideo()
{
    // Don't need the button anymore
    button.destroy();

    // create a video texture from a path
    const texture = PIXI.Texture.from('https://pixijs.com/assets/video.mp4');

    // create a new Sprite using the video texture (yes it's that easy)
    const videoSprite = new PIXI.Sprite(texture);

    // Stetch the fullscreen
    videoSprite.width = app.screen.width;
    videoSprite.height = app.screen.height;

    app.stage.addChild(videoSprite);
}
