var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["89571d7b-96f6-47c8-bdec-f87db94ea8c0","e15d6203-4d78-494c-bdd3-070cd6057dea","2bed68ca-e2f6-4941-86ca-612b7e1691b0","18732f24-220a-4d66-8fd6-cebc88319455","4424dc32-1452-4ae1-9e0a-c429a2a4d9d0","f54a9083-11de-4f5e-865f-72dd79abad1c","61ee09f0-6ba0-4e3f-9cc4-459d619c845c","74954c69-69b0-4fe6-a780-d8c4b673f7c8","6186a6f8-ce5b-4895-b02e-3f9c82eaf993","9aa6223e-cafc-4a10-9706-33e25c411cd7","32d00c65-49e6-450d-9376-caa45bf4c8a9","2b3a6a99-cc28-43d4-be27-a566cba4c0c5","b5969eaa-3523-4c43-83f7-310f66336196"],"propsByKey":{"89571d7b-96f6-47c8-bdec-f87db94ea8c0":{"name":"b","sourceUrl":"assets/api/v1/animation-library/gamelab/Vg6bYwboQcGip.4oRoqXobcX2rE5QGop/category_backgrounds/background_underwater_17.png","frameSize":{"x":400,"y":399},"frameCount":1,"looping":true,"frameDelay":2,"version":"Vg6bYwboQcGip.4oRoqXobcX2rE5QGop","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":399},"rootRelativePath":"assets/api/v1/animation-library/gamelab/Vg6bYwboQcGip.4oRoqXobcX2rE5QGop/category_backgrounds/background_underwater_17.png"},"e15d6203-4d78-494c-bdd3-070cd6057dea":{"name":"enemy1","sourceUrl":"assets/api/v1/animation-library/gamelab/h5iaduJc2clM0M6koq2mdRkgWrUCcW5Y/category_animals/shark.png","frameSize":{"x":397,"y":185},"frameCount":1,"looping":true,"frameDelay":2,"version":"h5iaduJc2clM0M6koq2mdRkgWrUCcW5Y","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":397,"y":185},"rootRelativePath":"assets/api/v1/animation-library/gamelab/h5iaduJc2clM0M6koq2mdRkgWrUCcW5Y/category_animals/shark.png"},"2bed68ca-e2f6-4941-86ca-612b7e1691b0":{"name":"enemy2","sourceUrl":"assets/api/v1/animation-library/gamelab/lpzeUr6rae_3HTY4HN3rU4wij2dR9AhP/category_animals/prehistoric_11.png","frameSize":{"x":340,"y":134},"frameCount":1,"looping":true,"frameDelay":2,"version":"lpzeUr6rae_3HTY4HN3rU4wij2dR9AhP","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":340,"y":134},"rootRelativePath":"assets/api/v1/animation-library/gamelab/lpzeUr6rae_3HTY4HN3rU4wij2dR9AhP/category_animals/prehistoric_11.png"},"18732f24-220a-4d66-8fd6-cebc88319455":{"name":"enemy3","sourceUrl":"assets/api/v1/animation-library/gamelab/gZXm7_rHkc3iQhOsf_8Nme791jY2ad6U/category_animals/prehistoric_17.png","frameSize":{"x":232,"y":182},"frameCount":1,"looping":true,"frameDelay":2,"version":"gZXm7_rHkc3iQhOsf_8Nme791jY2ad6U","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":232,"y":182},"rootRelativePath":"assets/api/v1/animation-library/gamelab/gZXm7_rHkc3iQhOsf_8Nme791jY2ad6U/category_animals/prehistoric_17.png"},"4424dc32-1452-4ae1-9e0a-c429a2a4d9d0":{"name":"fish","sourceUrl":"assets/api/v1/animation-library/gamelab/aNRXyLdSoIzAXdOjVWpSGNAPrl.zdi8e/category_animals/tropicalfish_01.png","frameSize":{"x":400,"y":198},"frameCount":1,"looping":true,"frameDelay":2,"version":"aNRXyLdSoIzAXdOjVWpSGNAPrl.zdi8e","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":198},"rootRelativePath":"assets/api/v1/animation-library/gamelab/aNRXyLdSoIzAXdOjVWpSGNAPrl.zdi8e/category_animals/tropicalfish_01.png"},"f54a9083-11de-4f5e-865f-72dd79abad1c":{"name":"fish_pink_1","sourceUrl":"assets/api/v1/animation-library/gamelab/0fbafj_tH03NNJjycS77mGDU0mtt7Hel/category_animals/fish_pink.png","frameSize":{"x":67,"y":47},"frameCount":2,"looping":true,"frameDelay":2,"version":"0fbafj_tH03NNJjycS77mGDU0mtt7Hel","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":134,"y":47},"rootRelativePath":"assets/api/v1/animation-library/gamelab/0fbafj_tH03NNJjycS77mGDU0mtt7Hel/category_animals/fish_pink.png"},"61ee09f0-6ba0-4e3f-9cc4-459d619c845c":{"name":"key","sourceUrl":null,"frameSize":{"x":63,"y":65},"frameCount":1,"looping":true,"frameDelay":12,"version":"4T7Eb4ozk1bXUGlcdHjxOzBshWADs_fW","categories":["household_objects"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":63,"y":65},"rootRelativePath":"assets/61ee09f0-6ba0-4e3f-9cc4-459d619c845c.png"},"74954c69-69b0-4fe6-a780-d8c4b673f7c8":{"name":"Jaula","sourceUrl":"assets/api/v1/animation-library/gamelab/ddThs7CoZE7kuVmxcwVrmRFCUjzWF2Z9/category_video_games/glass_frame.png","frameSize":{"x":128,"y":128},"frameCount":1,"looping":true,"frameDelay":2,"version":"ddThs7CoZE7kuVmxcwVrmRFCUjzWF2Z9","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":128,"y":128},"rootRelativePath":"assets/api/v1/animation-library/gamelab/ddThs7CoZE7kuVmxcwVrmRFCUjzWF2Z9/category_video_games/glass_frame.png"},"6186a6f8-ce5b-4895-b02e-3f9c82eaf993":{"name":"space_1","sourceUrl":"assets/api/v1/animation-library/gamelab/qoFFPgWiydir6HZwldQy.Fmh8NmNhTI9/category_backgrounds/background_space.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"qoFFPgWiydir6HZwldQy.Fmh8NmNhTI9","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/qoFFPgWiydir6HZwldQy.Fmh8NmNhTI9/category_backgrounds/background_space.png"},"9aa6223e-cafc-4a10-9706-33e25c411cd7":{"name":"bg_landscape21_1","sourceUrl":"assets/api/v1/animation-library/gamelab/GTrVmut4s5PswM6hx254yCcDWLNhhmVk/category_backgrounds/bg_landscape21.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"GTrVmut4s5PswM6hx254yCcDWLNhhmVk","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/GTrVmut4s5PswM6hx254yCcDWLNhhmVk/category_backgrounds/bg_landscape21.png"},"32d00c65-49e6-450d-9376-caa45bf4c8a9":{"name":"nave","sourceUrl":"assets/api/v1/animation-library/gamelab/wBEKDcgL5b8g5A6wxZLQFwn3w4yafsXs/category_stickers/sticker_27.png","frameSize":{"x":400,"y":242},"frameCount":1,"looping":true,"frameDelay":2,"version":"wBEKDcgL5b8g5A6wxZLQFwn3w4yafsXs","categories":["stickers"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":242},"rootRelativePath":"assets/api/v1/animation-library/gamelab/wBEKDcgL5b8g5A6wxZLQFwn3w4yafsXs/category_stickers/sticker_27.png"},"2b3a6a99-cc28-43d4-be27-a566cba4c0c5":{"name":"alienBlue_climb_1","sourceUrl":"assets/api/v1/animation-library/gamelab/ZI8D0N2hB_jr_fYbqYaF7uIO9ehQQcnO/category_fantasy/alienBlue_climb.png","frameSize":{"x":68,"y":94},"frameCount":2,"looping":true,"frameDelay":2,"version":"ZI8D0N2hB_jr_fYbqYaF7uIO9ehQQcnO","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":136,"y":94},"rootRelativePath":"assets/api/v1/animation-library/gamelab/ZI8D0N2hB_jr_fYbqYaF7uIO9ehQQcnO/category_fantasy/alienBlue_climb.png"},"b5969eaa-3523-4c43-83f7-310f66336196":{"name":"coin_gold_1","sourceUrl":"assets/api/v1/animation-library/gamelab/pUFPchUgZRoy5C6YtEEkLfSDmZWPxW.y/category_board_games_and_cards/coin_gold.png","frameSize":{"x":61,"y":61},"frameCount":1,"looping":true,"frameDelay":2,"version":"pUFPchUgZRoy5C6YtEEkLfSDmZWPxW.y","categories":["board_games_and_cards"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":61,"y":61},"rootRelativePath":"assets/api/v1/animation-library/gamelab/pUFPchUgZRoy5C6YtEEkLfSDmZWPxW.y/category_board_games_and_cards/coin_gold.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----


var b = createSprite(200,200);
 b.setAnimation("b")
 
var fish = createSprite(200,345,200,345)
fish.shapeColor="red"

var fish2 = createSprite(350,355,20,20)
fish2.setAnimation("fish_pink_1");
fish2.scale = .6

 var jaula = createSprite(350,355,50,50)
 jaula.setAnimation("Jaula");
jaula.scale = .5

var enemy1 = createSprite(200,280,10,10)
enemy1.shapeColor="red"

var enemy2 = createSprite(200,180,10,10)
enemy2.shapeColor="red"

var enemy3 = createSprite(200,80,10,10)
enemy3.shapeColor="red"

var key = createSprite(200,15,200,20)
key.shapeColor="red"
key.setAnimation("key");
key.scale = .4


var goal =0;
var death = 0

fish.setAnimation("fish");
fish.scale=.13;
enemy1.setAnimation("enemy1");
enemy1.scale=.25;
enemy2.setAnimation("enemy2");
enemy2.scale=.25;
enemy3.setAnimation("enemy3");
enemy3.scale=.25;

enemy1.setVelocity(-12,0);
enemy2.setVelocity(12,0);
enemy3.setVelocity(-12,0);

function draw() {
 background("skyblue");
   
//fondo(b);

createEdgeSprites()




fish.bounceOff(jaula)
enemy1.bounceOff(edges)
enemy2.bounceOff(edges)
enemy3.bounceOff(edges)
fish.bounceOff(edges)


if(keyDown(UP_ARROW)){
  fish.y=fish.y-5
}

if(keyDown(DOWN_ARROW)){
  fish.y=fish.y+5
}

if(keyDown(LEFT_ARROW)){
  fish.x=fish.x-5
}

if(keyDown(RIGHT_ARROW)){
  fish.x=fish.x+5
}





//Si el pez toca a algun enemigo se reinicia a su punto de partida
if(fish.isTouching(enemy1)|| fish.isTouching(enemy2)|| fish.isTouching(enemy3)){
  playSound("assets/category_alerts/cartoon_negative_bling.mp3")
  fish.x=200
  fish.y=350
  death = death+1
}

//Si el pez toca la llave el pez es liberado
if(fish.isTouching(key)){
  playSound("assets/category_achievements/vibrant_game_game_gold_tresure_chest_open.mp3")
  fish.x=200
  fish.y=350
  goal=goal+1
  jaula.destroy()
}

//Si el pez toca al pez2 este desaparece y la llave cambia a una moneda de oro para asi poder jugar libremente
if (fish.isTouching(fish2)) {
  fish.x=200;
  fish.y=350;
fish2.destroy(); 
key.setAnimation("coin_gold_1");
  
}











textSize(20);
  fill("green");
  text("Goals:"+goal,15,334);
  

textSize(20);
  fill("green");
  text("Death:"+death,15,355);
  
drawSprites()
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
