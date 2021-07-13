scene.onOverlapTile(SpriteKind.Enemy, assets.tile`myTile2`, function (sprite, location) {
    sprite.setPosition(74, 55)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    controller.moveSprite(p1, 100, 10)
})
scene.onOverlapTile(SpriteKind.Projectile, assets.tile`myTile3`, function (sprite, location) {
    sprite.destroy()
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (sorcer >= 10) {
        Shoot()
    } else {
        if (sorcer < 9) {
            p1.say("Not today", 500)
        }
    }
    if ((controller.down.isPressed() && controller.up.isPressed()) == true && sorcer >= 25) {
        REshoot()
    } else {
        if ((controller.down.isPressed() && controller.up.isPressed()) == true && sorcer < 24) {
            p1.say("Not today", 500)
        }
    }
})
scene.onOverlapTile(SpriteKind.Projectile, assets.tile`myTile2`, function (sprite, location) {
    sprite.destroy()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    controller.moveSprite(p1, 100, 50)
    p1.startEffect(effects.rings, 100)
    sorcer += 1
    info.setScore(sorcer)
})
scene.onOverlapTile(SpriteKind.Projectile, assets.tile`myTile4`, function (sprite, location) {
    sprite.destroy()
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Projectile, function (sprite, otherSprite) {
    counter += 1
    sorcer += 10
    info.setScore(sorcer)
    myEnemy.y += -10
    pause(100)
    myEnemy.y += -5
    pause(100)
    myEnemy.y += -3
    pause(100)
    myEnemy.y += -1
    if (tester == 0) {
        myEnemy.follow(p1, 1 * counter)
    }
})
scene.onOverlapTile(SpriteKind.Enemy, assets.tile`myTile3`, function (sprite, location) {
    sprite.setPosition(74, 55)
})
info.onCountdownEnd(function () {
    game.over(false)
})
scene.onOverlapTile(SpriteKind.Enemy, assets.tile`myTile5`, function (sprite, location) {
    sprite.setPosition(74, 55)
})
function Shoot () {
    p1.startEffect(effects.halo, 100)
    sorcer += -10
    info.changeScoreBy(-10)
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . b b b b b b . . . . . 
        . . . b b 9 9 9 9 9 9 b b . . . 
        . . b b 9 9 9 9 9 9 9 9 b b . . 
        . b b 9 d 9 9 9 9 9 9 9 9 b b . 
        . b 9 d 9 9 9 9 9 1 1 1 9 9 b . 
        b 9 d d 9 9 9 9 9 1 1 1 9 9 9 b 
        b 9 d 9 9 9 9 9 9 1 1 1 9 9 9 b 
        b 9 3 9 9 9 9 9 9 9 9 9 1 9 9 b 
        b 5 3 d 9 9 9 9 9 9 9 9 9 9 9 b 
        b 5 3 3 9 9 9 9 9 9 9 9 9 d 9 b 
        b 5 d 3 3 9 9 9 9 9 9 9 d d 9 b 
        . b 5 3 3 3 d 9 9 9 9 d d 5 b . 
        . b d 5 3 3 3 3 3 3 3 d 5 b b . 
        . . b d 5 d 3 3 3 3 5 5 b b . . 
        . . . b b 5 5 5 5 5 5 b b . . . 
        . . . . . b b b b b b . . . . . 
        `, p1, 0, -50)
}
scene.onOverlapTile(SpriteKind.Projectile, assets.tile`myTile0`, function (sprite, location) {
    sprite.destroy()
})
scene.onOverlapTile(SpriteKind.Enemy, assets.tile`myTile0`, function (sprite, location) {
    sprite.setPosition(74, 55)
})
function REshoot () {
    p1.startEffect(effects.halo, 100)
    sorcer += -25
    info.setScore(sorcer)
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . b b b b b b . . . . . 
        . . . b b 8 8 8 8 8 8 b b . . . 
        . . b b 8 8 8 8 8 8 8 8 b b . . 
        . b b 8 c 8 8 8 8 8 8 8 8 b b . 
        . b 8 c 8 8 8 8 8 1 1 1 8 8 b . 
        b 8 c c 8 8 8 8 8 1 1 1 8 8 8 b 
        b 8 c 8 8 8 8 8 8 1 1 1 8 8 8 b 
        b 8 2 8 8 8 8 8 8 8 8 8 1 8 8 b 
        b 7 2 c 8 8 8 8 8 8 8 8 8 8 8 b 
        b 7 2 2 8 8 8 8 8 8 8 8 8 c 8 b 
        b 7 c 2 2 8 8 8 8 8 8 8 c c 8 b 
        . b 7 2 2 2 c 8 8 8 8 c c 7 b . 
        . b c 7 2 2 2 2 2 2 2 c 7 b b . 
        . . b c 7 c 2 2 2 2 7 7 b b . . 
        . . . b b 7 7 7 7 7 7 b b . . . 
        . . . . . b b b b b b . . . . . 
        `, p1, 0, -50)
    projectile.follow(myEnemy, 5)
}
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    controller.moveSprite(p1, 100, 100)
})
info.onLifeZero(function () {
    tester = 1
    if (sorcer > 500) {
        info.startCountdown(0.01 * sorcer)
    } else {
        info.startCountdown(0.5 * sorcer)
    }
    myEnemy.follow(p1, 1)
})
controller.A.onEvent(ControllerButtonEvent.Repeated, function () {
    if (sorcer > 100) {
        p1.startEffect(effects.rings, 100)
        info.changeScoreBy(1)
        sorcer += 1
    }
    controller.moveSprite(p1, 200, 40)
})
scene.onOverlapTile(SpriteKind.Enemy, assets.tile`myTile1`, function (sprite, location) {
    sprite.setPosition(74, 55)
})
scene.onOverlapTile(SpriteKind.Projectile, assets.tile`myTile5`, function (sprite, location) {
    sprite.destroy()
})
scene.onOverlapTile(SpriteKind.Projectile, assets.tile`myTile1`, function (sprite, location) {
    sprite.destroy()
})
scene.onOverlapTile(SpriteKind.Enemy, assets.tile`myTile4`, function (sprite, location) {
    sprite.setPosition(74, 55)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (tester == 0) {
        info.changeLifeBy(-1)
    }
    if (tester == 1) {
    	
    }
    sorcer += -50
    info.setScore(sorcer)
    myEnemy.setPosition(74, 45)
    myEnemy.follow(p1, 1)
    myEnemy.follow(p1, 1)
    myEnemy.follow(p1, 1)
    info.changeLifeBy(-1)
})
let projectile: Sprite = null
let myEnemy: Sprite = null
let p1: Sprite = null
let sorcer = 0
let tester = 0
let counter = 0
game.setDialogTextColor(1)
game.setDialogFrame(img`
    ..................................................................
    ....33.......33...........dddd............dddd............aaa.....
    ...a533.....393....dddddddffffd....dddddddffffd....3333...a35a....
    ...a553aaa339993.ddffffddffffffddddffffddffffffdd.39393aaa3553aa..
    ..a355555a3999993dff9fffffffffffddff9fffffffffffd339993a555555553.
    .a555555333399933ff999fffffffffffff999fffffffffff3999993a55555533.
    .a35555533339393ffff9fffffff55ffffff9fffffff55ffff399933a3555533..
    .aa355555af3333fffffffffffff55ffffffffffffff55ffff33933fa55555a...
    ...a55355afffffffffffffffffffffffffffffffffffffffff333ffa55335a...
    ...a5aaaaafffff9ffffffffffffffffffffffffffffffffffffffffaaa33aa...
    ...aa33ffff55fffffffffffffffffffffffffffffffffffff9ffffffff3333...
    ..333933fff55fffffffffffffffffffffffffffffffffffffffff55ff33393...
    ..3999933fffffffffffffffffffffffffffffffffffffffffffff55ff399993..
    ..3399993fffffffffffffffffffffffffffffffffffffffffffffffff3399993.
    ..3999933fffffffffffffffffffffffffffffffffffffffffffffffff3999933.
    ...33933ff9fffffffffffffffffffffffffffffffffffffffffffff9ff3393...
    ....33ffffffffffffffffffffffffffffffffffffffffffffffffffffff33....
    ...ddffffffffffffffffffffffffffffffffffffffffffffffffffffffffdd...
    ...dffffffffffffffffffffffffffffffffffffffffffffffffffffffffffd...
    ..dfffffffffffffffffffffffffffffffffffffffffffffffffffffffff9ffd..
    .dffff55fffffffffffffffffffffffffffffffffffffffffffffffffff999fd..
    .dffff55ffffffffffffffffffffffffffffffffffffffffffffffffffff9ffd..
    .dfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffd..
    .dffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdd..
    ..dfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdd..
    ..ddfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffd..
    ..ddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffd.
    ..dfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffd.
    ..dff9ffffffffffffffffffffffffffffffffffffffffffffffffffff55ffffd.
    ..df999fffffffffffffffffffffffffffffffffffffffffffffffffff55ffffd.
    ..dff9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffd..
    ...dffffffffffffffffffffffffffffffffffffffffffffffffffffffffffd...
    ...ddffffffffffffffffffffffffffffffffffffffffffffffffffffffffdd...
    ...ddffffffffffffffffffffffffffffffffffffffffffffffffffffffffdd...
    ...dffffffffffffffffffffffffffffffffffffffffffffffffffffffffffd...
    ..dfffffffffffffffffffffffffffffffffffffffffffffffffffffffff9ffd..
    .dffff55fffffffffffffffffffffffffffffffffffffffffffffffffff999fd..
    .dffff55ffffffffffffffffffffffffffffffffffffffffffffffffffff9ffd..
    .dfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffd..
    .dffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdd..
    ..dfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdd..
    ..ddfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffd..
    ..ddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffd.
    ..dfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffd.
    ..dff9ffffffffffffffffffffffffffffffffffffffffffffffffffff55ffffd.
    ..df999fffffffffffffffffffffffffffffffffffffffffffffffffff55ffffd.
    ..dff9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffd..
    ...dffffffffffffffffffffffffffffffffffffffffffffffffffffffffffd...
    ...ddffffffffffffffffffffffffffffffffffffffffffffffffffffffffdd...
    ....33ffffffffffffffffffffffffffffffffffffffffffffffffffffff33....
    ...3933ff9fffffffffffffffffffffffffffffffffffffffffffff9ff33933...
    .3399993fffffffffffffffffffffffffffffffffffffffffffffffff3399993..
    .3999933fffffffffffffffffffffffffffffffffffffffffffffffff3999933..
    ..399993ff55fffffffffffffffffffffffffffffffffffffffffffff3399993..
    ...39333ff55fffffffffffffffffffffffffffffffffffffffff55fff339333..
    ...3333ffffffff9fffffffffffffffffffffffffffffffffffff55ffff33aa...
    ...aa33aaaffffffffffffffffffffffffffffffffffffffff9fffffaaaaa5a...
    ...a53355aff333fffffffffffffffffffffffffffffffffffffffffa55355a...
    ...a55555af33933ffff55ffffffffffffff55fffffffffffff3333fa555553aa.
    ..3355553a339993ffff55fffffff9ffffff55fffffff9ffff39393333555553a.
    .33555555a3999993fffffffffff999fffffffffffff999ff339993333555555a.
    .355555555a399933dfffffffffff9ffddfffffffffff9ffd3999993a555553a..
    ..aa3553aaa39393.ddffffffddffffddddffffffddffffdd.399933aaa355a...
    ....a53a...3333....dffffddddddd....dffffddddddd....393.....335a...
    .....aaa............dddd............dddd...........33.......33....
    ..................................................................
    `)
game.setDialogCursor(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . 6 6 6 6 . . . . . . 
    . . . . 6 6 6 5 5 6 6 6 . . . . 
    . . . 6 7 7 7 6 6 6 6 6 6 . . . 
    . . 6 7 7 7 7 8 8 8 1 1 6 6 . . 
    . . 6 7 7 7 7 8 8 8 1 1 5 6 . . 
    . 6 7 7 7 7 8 8 8 8 8 5 5 6 6 . 
    . 6 7 7 7 8 8 8 6 6 6 6 5 6 6 . 
    . 6 6 7 7 8 8 6 6 6 6 6 6 6 6 . 
    . 6 8 7 7 8 8 6 6 6 6 6 6 6 6 . 
    . . 6 8 7 7 8 6 6 6 6 6 8 6 . . 
    . . 6 8 8 7 8 8 6 6 6 8 6 6 . . 
    . . . 6 8 8 8 8 8 8 8 8 6 . . . 
    . . . . 6 6 8 8 8 8 6 6 . . . . 
    . . . . . . 6 6 6 6 . . . . . . 
    . . . . . . . . . . . . . . . . 
    `)
game.showLongText("On a very far galaxy...", DialogLayout.Top)
game.showLongText("...a battle was about to begin.", DialogLayout.Top)
game.splash("Charge With \"A\"")
game.splash("Shoot With \"B\"")
game.splash("As U shoot to red, he will become MORE faster")
game.splash("OBJECTIVE: Scape from red one")
game.splash("When U run out of lives")
game.splash("You will have half your score seconds at that moment")
game.splash("to win more points")
game.splash("Good luck!")
info.setLife(3)
counter = 1
tester = 0
sorcer = 0
info.setScore(sorcer)
p1 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . 6 6 6 6 . . . . . . 
    . . . . 6 6 6 5 5 6 6 6 . . . . 
    . . . 6 7 7 7 6 6 6 6 6 6 . . . 
    . . 6 7 7 7 7 8 8 8 1 1 6 6 . . 
    . . 6 7 7 7 7 8 8 8 1 1 5 6 . . 
    . 6 7 7 7 7 8 8 8 8 8 5 5 6 6 . 
    . 6 7 7 7 8 8 8 6 6 6 6 5 6 6 . 
    . 6 6 7 7 8 8 6 6 6 6 6 6 6 6 . 
    . 6 8 7 7 8 8 6 6 6 6 6 6 6 6 . 
    . . 6 8 7 7 8 6 6 6 6 6 8 6 . . 
    . . 6 8 8 7 8 8 6 6 6 8 6 6 . . 
    . . . 6 8 8 8 8 8 8 8 8 6 . . . 
    . . . . 6 6 8 8 8 8 6 6 . . . . 
    . . . . . . 6 6 6 6 . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
animation.runImageAnimation(
p1,
[img`
    . . . . . . . . . . . . . . . . 
    . . . . . . 6 6 6 6 . . . . . . 
    . . . . 6 6 6 5 5 6 6 6 . . . . 
    . . . 7 7 7 7 6 6 6 6 6 6 . . . 
    . . 6 7 7 7 7 8 8 8 1 1 6 6 . . 
    . . 7 7 7 7 7 8 8 8 1 1 5 6 . . 
    . 6 7 7 7 7 8 8 8 8 8 5 5 6 6 . 
    . 6 7 7 7 8 8 8 6 6 6 6 5 6 6 . 
    . 6 6 7 7 8 8 6 6 6 6 6 6 6 6 . 
    . 6 8 7 7 8 8 6 6 6 6 6 6 6 6 . 
    . . 6 8 7 7 8 6 6 6 6 6 8 6 . . 
    . . 6 8 8 7 8 8 6 6 6 8 6 6 . . 
    . . . 6 8 8 8 8 8 8 8 8 6 . . . 
    . . . . 6 6 8 8 8 8 6 6 . . . . 
    . . . . . . 6 6 6 6 . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . 7 . . . . 6 6 6 6 . . . . . . 
    . . . . 6 6 6 5 5 6 6 6 . . 7 . 
    . . . 7 7 7 7 6 6 6 6 6 6 . . . 
    . . 6 7 7 7 7 8 8 8 1 1 6 6 . . 
    . . 7 7 7 7 7 8 8 8 1 1 5 6 . . 
    . 6 7 7 7 7 8 8 8 8 8 5 5 6 6 . 
    . 6 7 7 7 8 8 8 6 6 6 6 5 6 6 . 
    . 6 6 7 7 8 8 6 6 6 6 6 6 6 6 . 
    . 6 8 7 7 8 8 6 6 6 6 6 6 6 6 . 
    . . 6 8 7 7 8 6 6 6 6 6 8 6 . . 
    . . 6 8 8 7 8 8 6 6 6 8 6 6 . . 
    . . . 6 8 8 8 8 8 8 8 8 6 . . . 
    . . . . 6 6 8 8 8 8 6 6 . . . . 
    . . . . . . 6 6 6 6 . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . 7 . . . . 6 6 6 6 . . . . . . 
    . 7 . . 6 6 6 5 5 6 6 6 . . 7 7 
    . . . 7 7 7 7 6 6 6 6 6 6 . . . 
    . . 6 7 7 7 7 8 8 8 1 1 6 6 . . 
    . . 7 7 7 7 7 8 8 8 1 1 5 6 . . 
    . 6 7 7 7 7 8 8 8 8 8 5 5 6 6 . 
    . 6 7 7 7 8 8 8 6 6 6 6 5 6 6 . 
    . 6 6 7 7 8 8 6 6 6 6 6 6 6 6 . 
    . 6 8 7 7 8 8 6 6 6 6 6 6 6 6 . 
    . . 6 8 7 7 8 6 6 6 6 6 8 6 . . 
    . . 6 8 8 7 8 8 6 6 6 8 6 6 . . 
    8 . . 6 8 8 8 8 8 8 8 8 6 . . . 
    8 . . . 6 6 8 8 8 8 6 6 . . 8 . 
    . . . . . . 6 6 6 6 . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . 8 . . . 6 6 6 6 . . . . . . 
    . 8 . . 6 6 6 5 5 6 6 6 . . . 8 
    . . . 7 7 7 7 6 6 6 6 6 6 . . . 
    . . 6 7 7 7 7 8 8 8 1 1 6 6 . 8 
    . . 7 7 7 7 7 8 8 8 1 1 5 6 . . 
    . 6 7 7 7 7 8 8 8 8 8 5 5 6 6 . 
    . 6 7 7 7 8 8 8 6 6 6 6 5 6 6 . 
    . 6 6 7 7 8 8 6 6 6 6 6 6 6 6 . 
    . 6 8 7 7 8 8 6 6 6 6 6 6 6 6 . 
    . . 6 8 7 7 8 6 6 6 6 6 8 6 . . 
    . . 6 8 8 7 8 8 6 6 6 8 6 6 . . 
    8 . . 6 8 8 8 8 8 8 8 8 6 . . . 
    . 8 . . 6 6 8 8 8 8 6 6 . . . . 
    . . . . . . 6 6 6 6 . . . 8 8 . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . 9 . . . . 6 6 6 6 . . . . . . 
    . 9 . . 6 6 6 5 5 6 6 6 . . . . 
    . . . 7 7 7 7 6 6 6 6 6 6 . . 6 
    . . 6 7 7 7 7 8 8 8 1 1 6 6 . 6 
    . . 7 7 7 7 7 8 8 8 1 1 5 6 . 6 
    . 6 7 7 7 7 8 8 8 8 8 5 5 6 6 . 
    . 6 7 7 7 8 8 8 6 6 6 6 5 6 6 . 
    . 6 6 7 7 8 8 6 6 6 6 6 6 6 6 . 
    . 6 8 7 7 8 8 6 6 6 6 6 6 6 6 . 
    . . 6 8 7 7 8 6 6 6 6 6 8 6 . . 
    . . 6 8 8 7 8 8 6 6 6 8 6 6 . . 
    . 7 . 6 8 8 8 8 8 8 8 8 6 . . . 
    7 7 . . 6 6 8 8 8 8 6 6 . . 7 . 
    . . . . . . 6 6 6 6 . . . . 7 . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . 6 . . . . . . . . . . . . . 
    9 9 . . . . 6 6 6 6 . . . . . 9 
    9 . 7 . 6 6 6 5 5 6 6 6 . . 7 6 
    . 6 . 7 7 7 7 6 6 6 6 6 6 . 7 7 
    . . 6 7 7 7 7 8 8 8 1 1 6 6 . . 
    . . 7 7 7 7 7 8 8 8 1 1 5 6 . . 
    . 6 7 7 7 7 8 8 8 8 8 5 5 6 6 . 
    . 6 7 7 7 8 8 8 6 6 6 6 5 6 6 . 
    . 6 6 7 7 8 8 6 6 6 6 6 6 6 6 . 
    . 6 8 7 7 8 8 6 6 6 6 6 6 6 6 . 
    . 7 6 8 7 7 8 6 6 6 6 6 8 6 . . 
    6 7 6 8 8 7 8 8 6 6 6 8 6 6 . . 
    6 . . 6 8 8 8 8 8 8 8 8 6 . . 9 
    . . . . 6 6 8 8 8 8 6 6 . . . 6 
    9 9 . . . . 6 6 6 6 . . . . . 7 
    . . . . . . . . . . . . . . . 7 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . 9 9 . . 6 6 6 6 . . 6 6 . . 
    . 7 9 . 6 6 6 5 5 6 6 6 . . . . 
    7 . . 7 7 7 7 6 6 6 6 6 6 . 6 . 
    7 . 6 7 7 7 7 8 8 8 1 1 6 6 . . 
    . . 7 7 7 7 7 8 8 8 1 1 5 6 . 8 
    . 6 7 7 7 7 8 8 8 8 8 5 5 6 6 . 
    . 6 7 7 7 8 8 8 6 6 6 6 5 6 6 . 
    . 6 6 7 7 8 8 6 6 6 6 6 6 6 6 . 
    . 6 8 7 7 8 8 6 6 6 6 6 6 6 6 . 
    . . 6 8 7 7 8 6 6 6 6 6 8 6 . . 
    . . 6 8 8 7 8 8 6 6 6 8 6 6 . 8 
    . . . 6 8 8 8 8 8 8 8 8 6 . . . 
    7 6 7 . 6 6 8 8 8 8 6 6 . 8 8 . 
    . . 6 . . . 6 6 6 6 . . . . 8 . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . 6 . . 6 6 6 6 . . . . 8 . 
    8 8 . . 6 6 6 5 5 6 6 6 . . . . 
    . 6 . 7 7 7 7 6 6 6 6 6 6 . 8 . 
    8 . 6 7 7 7 7 8 8 8 1 1 6 6 . 8 
    . . 7 7 7 7 7 8 8 8 1 1 5 6 . . 
    . 6 7 7 7 7 8 8 8 8 8 5 5 6 6 . 
    . 6 7 7 7 8 8 8 6 6 6 6 5 6 6 . 
    . 6 6 7 7 8 8 6 6 6 6 6 6 6 6 . 
    . 6 8 7 7 8 8 6 6 6 6 6 6 6 6 6 
    . . 6 8 7 7 8 6 6 6 6 6 8 6 . . 
    . . 6 8 8 7 8 8 6 6 6 8 6 6 6 . 
    . 6 . 6 8 8 8 8 8 8 8 8 6 . . . 
    7 7 6 . 6 6 8 8 8 8 6 6 . . . 6 
    . . 7 . . . 6 6 6 6 . . . . 7 . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . 6 6 6 6 . . . . . . 
    6 6 . . 6 6 6 5 5 6 6 6 . . . 7 
    . . . 7 7 7 7 6 6 6 6 6 6 . . . 
    . . 6 7 7 7 7 8 8 8 1 1 6 6 . . 
    . . 7 7 7 7 7 8 8 8 1 1 5 6 . . 
    . 6 7 7 7 7 8 8 8 8 8 5 5 6 6 . 
    . 6 7 7 7 8 8 8 6 6 6 6 5 6 6 . 
    . 6 6 7 7 8 8 6 6 6 6 6 6 6 6 . 
    . 6 8 7 7 8 8 6 6 6 6 6 6 6 6 . 
    . . 6 8 7 7 8 6 6 6 6 6 8 6 . . 
    . . 6 8 8 7 8 8 6 6 6 8 6 6 . . 
    . . . 6 8 8 8 8 8 8 8 8 6 . . . 
    . 8 . . 6 6 8 8 8 8 6 6 . . 9 . 
    . . . . . . 6 6 6 6 . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . 6 6 6 6 . . . . . . 
    . . . . 6 6 6 5 5 6 6 6 . . . . 
    . . . 7 7 7 7 6 6 6 6 6 6 . . . 
    . . 6 7 7 7 7 8 8 8 1 1 6 6 . . 
    . . 7 7 7 7 7 8 8 8 1 1 5 6 . . 
    . 6 7 7 7 7 8 8 8 8 8 5 5 6 6 . 
    . 6 7 7 7 8 8 8 6 6 6 6 5 6 6 . 
    . 6 6 7 7 8 8 6 6 6 6 6 6 6 6 . 
    . 6 8 7 7 8 8 6 6 6 6 6 6 6 6 . 
    . . 6 8 7 7 8 6 6 6 6 6 8 6 . . 
    . . 6 8 8 7 8 8 6 6 6 8 6 6 . . 
    . . . 6 8 8 8 8 8 8 8 8 6 . . . 
    . . . . 6 6 8 8 8 8 6 6 . . . . 
    . . . . . . 6 6 6 6 . . . . . . 
    . . . . . . . . . . . . . . . . 
    `],
50,
true
)
myEnemy = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . 4 4 4 4 . . . . . . 
    . . . . 4 4 4 5 5 4 4 4 . . . . 
    . . . 4 3 3 3 4 4 4 4 4 4 . . . 
    . . 4 3 3 3 3 2 2 2 1 1 4 4 . . 
    . . 4 3 3 3 3 2 2 2 1 1 5 4 . . 
    . 4 3 3 3 3 2 2 2 2 2 5 5 4 4 . 
    . 4 3 3 3 2 2 2 4 4 4 4 5 4 4 . 
    . 4 4 3 3 2 2 4 4 4 4 4 4 4 4 . 
    . 4 2 3 3 2 2 4 4 4 4 4 4 4 4 . 
    . . 4 2 3 3 2 4 4 4 4 4 2 4 . . 
    . . 4 2 2 3 2 2 4 4 4 2 4 4 . . 
    . . . 4 2 2 2 2 2 2 2 2 4 . . . 
    . . . . 4 4 2 2 2 2 4 4 . . . . 
    . . . . . . 4 4 4 4 . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
animation.runImageAnimation(
myEnemy,
[img`
    . . . . . . . . . . . . . . . . 
    . . . . . . 4 4 4 4 . . . . . . 
    . . . . 4 4 4 5 5 4 4 4 . . . . 
    . . . 3 3 3 3 4 4 4 4 4 4 . . . 
    . . 4 3 3 3 3 2 2 2 1 1 4 4 . . 
    . . 3 3 3 3 3 2 2 2 1 1 5 4 . . 
    . 4 3 3 3 3 2 2 2 2 2 5 5 4 4 . 
    . 4 3 3 3 2 2 2 4 4 4 4 5 4 4 . 
    . 4 4 3 3 2 2 4 4 4 4 4 4 4 4 . 
    . 4 2 3 3 2 2 4 4 4 4 4 4 4 4 . 
    . . 4 2 3 3 2 4 4 4 4 4 2 4 . . 
    . . 4 2 2 3 2 2 4 4 4 2 4 4 . . 
    . . . 4 2 2 2 2 2 2 2 2 4 . . . 
    . . . . 4 4 2 2 2 2 4 4 . . . . 
    . . . . . . 4 4 4 4 . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . 5 5 . . . 4 4 4 4 . . . . . 4 
    . . . . 4 4 4 5 5 4 4 4 . . . . 
    . . . 3 3 3 3 4 4 4 4 4 4 . . 4 
    . . 4 3 3 3 3 2 2 2 1 1 4 4 . . 
    . . 3 3 3 3 3 2 2 2 1 1 5 4 . . 
    . 4 3 3 3 3 2 2 2 2 2 5 5 4 4 . 
    . 4 3 3 3 2 2 2 4 4 4 4 5 4 4 . 
    . 4 4 3 3 2 2 4 4 4 4 4 4 4 4 . 
    . 4 2 3 3 2 2 4 4 4 4 4 4 4 4 . 
    . . 4 2 3 3 2 4 4 4 4 4 2 4 . . 
    . . 4 2 2 3 2 2 4 4 4 2 4 4 . . 
    . . . 4 2 2 2 2 2 2 2 2 4 . . . 
    . . . . 4 4 2 2 2 2 4 4 . . . . 
    . 5 . . . . 4 4 4 4 . . . . . . 
    . . . . . . . . . . . . . . 5 . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . 5 . . . . 4 4 4 4 . . . . . . 
    . 4 4 . 4 4 4 5 5 4 4 4 . . 4 4 
    . 5 . 3 3 3 3 4 4 4 4 4 4 . . . 
    . . 4 3 3 3 3 2 2 2 1 1 4 4 . . 
    . . 3 3 3 3 3 2 2 2 1 1 5 4 . . 
    . 4 3 3 3 3 2 2 2 2 2 5 5 4 4 . 
    . 4 3 3 3 2 2 2 4 4 4 4 5 4 4 . 
    . 4 4 3 3 2 2 4 4 4 4 4 4 4 4 . 
    . 4 2 3 3 2 2 4 4 4 4 4 4 4 4 . 
    . . 4 2 3 3 2 4 4 4 4 4 2 4 . . 
    . . 4 2 2 3 2 2 4 4 4 2 4 4 . . 
    . . . 4 2 2 2 2 2 2 2 2 4 . . . 
    5 . . . 4 4 2 2 2 2 4 4 . . . . 
    . 5 . . . . 4 4 4 4 . . . . . 5 
    . . 4 4 . . . . . . . . . . 5 . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . 5 . . . 4 4 4 4 . . . . . . 
    5 . . . 4 4 4 5 5 4 4 4 . . 2 . 
    . 4 . 3 3 3 3 4 4 4 4 4 4 . 2 2 
    . . 4 3 3 3 3 2 2 2 1 1 4 4 . 5 
    4 . 3 3 3 3 3 2 2 2 1 1 5 4 . . 
    . 4 3 3 3 3 2 2 2 2 2 5 5 4 4 . 
    . 4 3 3 3 2 2 2 4 4 4 4 5 4 4 . 
    . 4 4 3 3 2 2 4 4 4 4 4 4 4 4 . 
    . 4 2 3 3 2 2 4 4 4 4 4 4 4 4 . 
    . . 4 2 3 3 2 4 4 4 4 4 2 4 . . 
    . . 4 2 2 3 2 2 4 4 4 2 4 4 . . 
    . . . 4 2 2 2 2 2 2 2 2 4 . . . 
    . 4 . . 4 4 2 2 2 2 4 4 . . . . 
    . 2 . . . . 4 4 4 4 . . . . 5 . 
    . 4 . . . . . . . . . . . . 2 5 
    `,img`
    . . . . . . . . . . . . . . . . 
    . 2 . . . . 4 4 4 4 . . . . . . 
    . 4 4 . 4 4 4 5 5 4 4 4 . 4 . 4 
    . . . 3 3 3 3 4 4 4 4 4 4 . . . 
    2 . 4 3 3 3 3 2 2 2 1 1 4 4 . 2 
    . . 3 3 3 3 3 2 2 2 1 1 5 4 . . 
    . 4 3 3 3 3 2 2 2 2 2 5 5 4 4 . 
    . 4 3 3 3 2 2 2 4 4 4 4 5 4 4 . 
    . 4 4 3 3 2 2 4 4 4 4 4 4 4 4 . 
    . 4 2 3 3 2 2 4 4 4 4 4 4 4 4 . 
    . . 4 2 3 3 2 4 4 4 4 4 2 4 . . 
    . . 4 2 2 3 2 2 4 4 4 2 4 4 . . 
    . . . 4 2 2 2 2 2 2 2 2 4 . . . 
    . . . . 4 4 2 2 2 2 4 4 . . . . 
    4 . 4 . . . 4 4 4 4 . . . 2 . 4 
    . . . 2 . . . . . . . . . 2 . . 
    `,img`
    . . . . 5 4 . . . 5 . . . . . . 
    . . . . . . 4 4 4 4 . 5 . . 4 . 
    5 . . . 4 4 4 5 5 4 4 4 . . 5 . 
    . 5 . 3 3 3 3 4 4 4 4 4 4 . 4 . 
    . . 4 3 3 3 3 2 2 2 1 1 4 4 . . 
    . . 3 3 3 3 3 2 2 2 1 1 5 4 . . 
    . 4 3 3 3 3 2 2 2 2 2 5 5 4 4 . 
    . 4 3 3 3 2 2 2 4 4 4 4 5 4 4 . 
    . 4 4 3 3 2 2 4 4 4 4 4 4 4 4 . 
    . 4 2 3 3 2 2 4 4 4 4 4 4 4 4 . 
    5 . 4 2 3 3 2 4 4 4 4 4 2 4 . . 
    . . 4 2 2 3 2 2 4 4 4 2 4 4 . . 
    . 4 . 4 2 2 2 2 2 2 2 2 4 . . . 
    . 5 . . 4 4 2 2 2 2 4 4 . 4 . 5 
    . . . . . . 4 4 4 4 . . . 5 . . 
    . 5 . . . . 5 . . 5 . . . . . 4 
    `,img`
    . . . . 5 . . . . . . . . . . . 
    . . . . . . 4 4 4 4 . . . 5 5 . 
    . . 5 . 4 4 4 5 5 4 4 4 . . . . 
    . . . 3 3 3 3 4 4 4 4 4 4 . . . 
    . . 4 3 3 3 3 2 2 2 1 1 4 4 . 4 
    4 . 3 3 3 3 3 2 2 2 1 1 5 4 . . 
    . 4 3 3 3 3 2 2 2 2 2 5 5 4 4 . 
    . 4 3 3 3 2 2 2 4 4 4 4 5 4 4 . 
    5 4 4 3 3 2 2 4 4 4 4 4 4 4 4 5 
    4 4 2 3 3 2 2 4 4 4 4 4 4 4 4 . 
    . . 4 2 3 3 2 4 4 4 4 4 2 4 . . 
    5 . 4 2 2 3 2 2 4 4 4 2 4 4 . . 
    . . . 4 2 2 2 2 2 2 2 2 4 . 4 5 
    . 5 . . 4 4 2 2 2 2 4 4 . . . . 
    . . . . . . 4 4 4 4 . . . . 5 5 
    . . . 4 . . . . . . . . 5 . . . 
    `,img`
    4 . . . . . . . . . . 5 . . 5 . 
    . . 4 . . . 4 4 4 4 . . . . 4 . 
    4 . . . 4 4 4 5 5 4 4 4 . . . . 
    . . . 3 3 3 3 4 4 4 4 4 4 . 2 . 
    . . 4 3 3 3 3 2 2 2 1 1 4 4 . . 
    4 . 3 3 3 3 3 2 2 2 1 1 5 4 . 4 
    4 4 3 3 3 3 2 2 2 2 2 5 5 4 4 . 
    . 4 3 3 3 2 2 2 4 4 4 4 5 4 4 . 
    . 4 4 3 3 2 2 4 4 4 4 4 4 4 4 . 
    . 4 2 3 3 2 2 4 4 4 4 4 4 4 4 2 
    . . 4 2 3 3 2 4 4 4 4 4 2 4 . . 
    . . 4 2 2 3 2 2 4 4 4 2 4 4 . 4 
    . . 4 4 2 2 2 2 2 2 2 2 4 . . . 
    . 4 . . 4 4 2 2 2 2 4 4 . . . . 
    . . . . . . 4 4 4 4 . . . 5 . . 
    . 2 . 5 2 . . . . . . . . . . . 
    `,img`
    . . . . . 4 . . . . . . . . . . 
    . . . . . . 4 4 4 4 . . 4 . 2 . 
    . . 2 . 4 4 4 5 5 4 4 4 . . . . 
    5 . . 3 3 3 3 4 4 4 4 4 4 . . 2 
    . . 4 3 3 3 3 2 2 2 1 1 4 4 . . 
    . . 3 3 3 3 3 2 2 2 1 1 5 4 . . 
    . 4 3 3 3 3 2 2 2 2 2 5 5 4 4 . 
    . 4 3 3 3 2 2 2 4 4 4 4 5 4 4 . 
    5 4 4 3 3 2 2 4 4 4 4 4 4 4 4 . 
    . 4 2 3 3 2 2 4 4 4 4 4 4 4 4 . 
    . . 4 2 3 3 2 4 4 4 4 4 2 4 . . 
    . . 4 2 2 3 2 2 4 4 4 2 4 4 . . 
    2 . . 4 2 2 2 2 2 2 2 2 4 . . . 
    . . . . 4 4 2 2 2 2 4 4 . . . . 
    . . . 2 . . 4 4 4 4 . . . . 5 . 
    . . . . . . . . 5 . . 2 . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . 4 4 4 4 . . . . . . 
    . . . . 4 4 4 5 5 4 4 4 . . . . 
    . . . 3 3 3 3 4 4 4 4 4 4 . . . 
    . . 4 3 3 3 3 2 2 2 1 1 4 4 . . 
    . . 3 3 3 3 3 2 2 2 1 1 5 4 . . 
    . 4 3 3 3 3 2 2 2 2 2 5 5 4 4 . 
    . 4 3 3 3 2 2 2 4 4 4 4 5 4 4 . 
    . 4 4 3 3 2 2 4 4 4 4 4 4 4 4 . 
    . 4 2 3 3 2 2 4 4 4 4 4 4 4 4 . 
    . . 4 2 3 3 2 4 4 4 4 4 2 4 . . 
    . . 4 2 2 3 2 2 4 4 4 2 4 4 . . 
    . . . 4 2 2 2 2 2 2 2 2 4 . . . 
    . . . . 4 4 2 2 2 2 4 4 . . . . 
    . . . . . . 4 4 4 4 . . . . . . 
    . . . . . . . . . . . . . . . . 
    `],
50,
true
)
tiles.setTilemap(tilemap`level1`)
scene.cameraFollowSprite(p1)
p1.setStayInScreen(true)
myEnemy.setStayInScreen(false)
myEnemy.setPosition(78, 3)
myEnemy.setKind(SpriteKind.Enemy)
p1.setPosition(78, 100)
p1.setKind(SpriteKind.Player)
controller.moveSprite(p1, 100, 0)
myEnemy.follow(p1, 1)
forever(function () {
	
})
forever(function () {
    pause(randint(1, 100000))
    myEnemy.x += randint(-100, 100)
    myEnemy.y += randint(-100, 100)
})
game.onUpdateInterval(500, function () {
    if (sorcer >= 1000) {
        controller.moveSprite(p1, 100, 100)
    }
})
