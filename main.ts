input.onButtonPressed(Button.A, function () {
    basic.showString("" + (input.lightLevel()))
})
radio.setGroup(1)
let t0 = 0
basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    `)
pins.analogWritePin(AnalogPin.P0, 1023)
basic.forever(function () {
    // Modifier la valeur de l'intensité lumineuse en fonction  de vos tests.
    if (input.lightLevel() < 10) {
        radio.sendNumber(0)
        basic.showIcon(IconNames.Happy)
        radio.setGroup(40)
    }
})
