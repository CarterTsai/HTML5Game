var stage = new Kinetic.Stage({
  container: 'game',
  width: 600,
  height: 400,
});

var layer = new Kinetic.Layer();

var rect = new Kinetic.Rect({
  x: 10,
  y: 120,
  width: 15,
  height: 150,
  fill: 'red',
  stroke: 'black',
  strokeWidth: 4
});

layer.add(rect);
stage.add(layer);

window.addEventListener('keydown', function(e) {
    var old_x = rect.attrs.x;
    var old_y = rect.attrs.y;
 //   if (e.keyCode == 37) //Left Arrow Key
//        rect.setAttrs({x:old_x-10});
    if (e.keyCode == 38) //Up Arrow Key
        rect.setAttrs({y:old_y-15});
//    if (e.keyCode == 39) //Right Arrow Key
//        rect.setAttrs({x:old_x+10});
    if (e.keyCode == 40) //Top Arrow Key
        rect.setAttrs({y:old_y+15});
    layer.draw();
});
