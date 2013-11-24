(function() {

var stage = new Kinetic.Stage({
  container: 'game',
  width: 600,
  height: 500
});

console.log(stage.attrs.width)
var layer = new Kinetic.Layer();

var rectA = new Kinetic.Rect({
    x: 10,
    y: 200,
    width: 15,
    height: 100,
    fill: 'white',
    strokeWidth: 4
});


var rectB = new Kinetic.Rect({
    x: 570,
    y: 200,
    width: 15,
    height: 100,
    fill: 'white',
    strokeWidth: 4
});

var ball = new Kinetic.Circle({
    x: 290,
    y: 250,
    radius: 7,
    fill: 'white',
    stroke: 'white',
    strokeWidth: 4
});


layer.add(rectA);
layer.add(rectB);
layer.add(ball);


stage.add(layer);

var EnvLimit = {
    top: 0, 
    bottom : stage.attrs.height - rectA.attrs.height
}

function shapeMoveByKeyboard(e, shape) {

    var old_y = shape.attrs.y;
    switch(e.keyCode) {
        case 38:
            // Up Arrow Key
            if (shape.attrs.y > EnvLimit.top)
                shape.setAttrs({y:old_y-10});
            console.log(shape.attrs.y)
            break;
        case 40:
            // Top Arrow key
            if (shape.attrs.y < EnvLimit.bottom )
                shape.setAttrs({y:old_y+10});
            console.log(shape.attrs.y)
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


/*  1. Handle the position is change, emit position to other player
 *     via socket.io
 *  2. When other player change position, that will be fired to render
 *     
 */
 
function Dispatcher (gameInfo) {
    
}

window.addEventListener('keydown', function(e) {    
    shapeMoveByKeyboard(e, rectA);
    shapeMoveByKeyboard(e, rectB);
    layer.draw();
});

})();
