var stage = new Kinetic.Stage({
  container: 'game',
  width: 600,
  height: 500,
});

var layer = new Kinetic.Layer();

var rectA = new Kinetic.Rect({
    x: 10,
    y: stage.getHeight() / 2,
    width: 15,
    height: 100,
    fill: 'white',
    strokeWidth: 4
});


var rectB = new Kinetic.Rect({
    x: 570,
    y: 150,
    width: 15,
    height: 100,
    fill: 'white',
    strokeWidth: 4
});

var ball = new Kinetic.Circle({
    x: stage.getWidth() / 2,
    y: stage.getHeight() / 2,
    radius: 7,
    fill: 'white',
    stroke: 'white',
    strokeWidth: 4
});


layer.add(rectA);
layer.add(rectB);
layer.add(ball);


stage.add(layer);


function shapeMoveByKeyboard(e, shape) {

    var old_y = shape.attrs.y;
    switch(e.keyCode) {
        case 38:
            // Up Arrow Key
            shape.setAttrs({y:old_y-10});
            break;
        case 40:
            // Top Arrow key
            shape.setAttrs({y:old_y+10});
            break;
        case 37:
            // Left Arrow Key
            break; 
        case 39:
            // Right Arrow Key
            break;
        default:
            break;
    }
}

window.addEventListener('keydown', function(e) {    
    shapeMoveByKeyboard(e, rectA);
    shapeMoveByKeyboard(e, rectB);
    layer.draw();
});
