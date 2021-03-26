input.onButtonPressed(Button.A, function () {
    mojBrod.move(-1)
})
input.onButtonPressed(Button.AB, function () {
    Oruzje = game.createSprite(mojBrod.get(LedSpriteProperty.X), mojBrod.get(LedSpriteProperty.Y))
    Oruzje.change(LedSpriteProperty.Brightness, 88)
    for (let index = 0; index < 4; index++) {
        Oruzje.change(LedSpriteProperty.Y, -1)
        basic.pause(15)
        if (Oruzje.isTouching(protivnik)) {
            game.addScore(1)
            Oruzje.delete()
            protivnik.delete()
        }
    }
    if (Oruzje.get(LedSpriteProperty.Y) <= 0) {
        Oruzje.delete()
    }
})
input.onButtonPressed(Button.B, function () {
    mojBrod.move(1)
})
let protivnik: game.LedSprite = null
let Oruzje: game.LedSprite = null
let mojBrod: game.LedSprite = null
led.setDisplayMode(DisplayMode.Greyscale)
mojBrod = game.createSprite(2, 3)
game.setScore(0)
basic.forever(function () {
    protivnik = game.createSprite(randint(0, 4), 0)
    protivnik.change(LedSpriteProperty.Brightness, 150)
    basic.pause(200)
    protivnik.turn(Direction.Right, 90)
    for (let index = 0; index < 4; index++) {
        protivnik.move(1)
        basic.pause(200)
        if (protivnik.isTouching(mojBrod)) {
            game.gameOver()
        }
    }
    if (protivnik.isTouchingEdge()) {
        protivnik.delete()
    }
})
