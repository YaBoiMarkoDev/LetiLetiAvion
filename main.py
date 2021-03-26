def on_button_pressed_a():
    mojBrod.move(1)
input.on_button_pressed(Button.A, on_button_pressed_a)

mojBrod: game.LedSprite = None
led.set_display_mode(DisplayMode.GREYSCALE)
mojBrod = game.create_sprite(2, 3)
protivnik = game.create_sprite(2, 1)

def on_forever():
    
    
        global protivnik
        protivnik = game.create_sprite(randint(0, 4), 0)
        protivnik.change(LedSpriteProperty.BRIGHTNESS, 150)
        basic.pause(100)
        protivnik.turn(Direction.RIGHT, 90)
        for index in range(4):
            protivnik.move(1)
            basic.pause(500)
            if protivnik.is_touching(mojBrod):
                game.game_over()
        if protivnik.is_touching_edge():
            protivnik.delete()
    
    
basic.forever(on_forever)
