input.onButtonPressed(Button.A, function () {
    if (_of_times_pressed == 0) {
        music.play(music.tonePlayable(131, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    }
    _of_times_pressed += 1
    if (_of_times_pressed == 1) {
        music.play(music.tonePlayable(147, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    }
    if (_of_times_pressed == 2) {
        music.play(music.tonePlayable(165, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    }
    if (_of_times_pressed == 3) {
        music.play(music.tonePlayable(175, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    }
    if (_of_times_pressed == 4) {
        music.play(music.tonePlayable(196, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    }
    if (_of_times_pressed == 5) {
        music.play(music.tonePlayable(220, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    }
    if (_of_times_pressed == 6) {
        music.play(music.tonePlayable(247, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    }
    if (_of_times_pressed == 7) {
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    }
    if (_of_times_pressed == 8) {
        music.play(music.tonePlayable(294, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . . # .
        . . . . #
        # # # # #
        . . . . #
        . . . # .
        `)
    if (_of_times_pressed == 8) {
        music.play(music.tonePlayable(330, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    }
    _of_times_pressed += -1
    if (_of_times_pressed == 7) {
        music.play(music.tonePlayable(349, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    }
    if (_of_times_pressed == 6) {
        music.play(music.tonePlayable(392, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    }
    if (_of_times_pressed == 5) {
        music.play(music.tonePlayable(440, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    }
    if (_of_times_pressed == 4) {
        music.play(music.tonePlayable(494, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    }
    if (_of_times_pressed == 3) {
        music.play(music.tonePlayable(523, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    }
    if (_of_times_pressed == 2) {
        music.play(music.tonePlayable(587, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    }
    if (_of_times_pressed == 1) {
        music.play(music.tonePlayable(659, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    }
    if (_of_times_pressed == 0) {
        music.play(music.tonePlayable(698, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    }
})
let _of_times_pressed = 0
_of_times_pressed = 0
basic.showNumber(3)
basic.pause(1000)
basic.showNumber(2)
basic.pause(1000)
basic.showNumber(1)
basic.pause(1000)
basic.showLeds(`
    . # . . .
    # . . . .
    # # # # #
    # . . . .
    . # . . .
    `)
