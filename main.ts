namespace SpriteKind {
    export const Words1 = SpriteKind.create()
    export const PlayerBattler = SpriteKind.create()
}
// Title screen set-up
let charselectposition = 0
let Point2: Sprite = null
let Hero3: Sprite = null
let Hero2: Sprite = null
let Hero1: Sprite = null
let CharSelectText: Sprite = null
let WIP: Sprite = null
let mainmenuposition = 0
let Point: Sprite = null
let Other: Sprite = null
let Play: Sprite = null
let Title: Sprite = null
let Screen = 0
// Title & Tilemap
if (Screen == 0) {
    tiles.setCurrentTilemap(tilemap`level1`)
    Title = sprites.create(img`
        dddddddddddddddddddddddddddddddddddddddddddddddd
        dffffffffffffffffffffffffffffffffffffffffffffffd
        dffff444fffffffffff44fffff44fffffffff4fffffffffd
        dffff44444fffffffff44fffff44ffffffff444f44444ffd
        dffffff44444fffffff44ffff44ffffffffff4ff4f4f4ffd
        dffffff44f44ffff44f44ffff44ffffffffffffffffffffd
        dffffff44ffff44f4444fffff44ff4444ffffffffffffffd
        dffffff44ffff44fff4444ff44ff44ff44fffffffffffffd
        dfffff44fffffffff44f44ff44ff444ff44ffffffffffffd
        dfffff44ffff44fff44fffff44ff4f44444ffffffffffffd
        dfffff44ffff44fff44ffff44fff4ffffffffffffffffffd
        dffff44ffff44fff44fffff44fff44fffffffffffffffffd
        dffff44ffff44fff44fffff44ffff4444ffffffffffffffd
        dffffffffffffffffffffffffffffffffffffffffffffffd
        dffffffffffffffffffffffffffffffffffffffffffffffd
        dddddddddddddddddddddddddddddddddddddddddddddddd
        `, SpriteKind.Words1)
    Title.setScale(3, ScaleAnchor.Middle)
    Title.setPosition(80, 35)
}
if (Screen == 0) {
    Play = sprites.create(img`
        d d d d d d d d d d d d d d d d d d d d d d d d 
        d f f f f f f f f f f f f f f f f f f f f f f d 
        d f f f f f d f d d d f d f f d d d f d f d f d 
        d f f f f d d f d f d f d f f d f d f d f d f d 
        d f f f d d f f d d d f d f f d d d f d d d f d 
        d f d f d f f f d f f f d f f d f d f f d f f d 
        d f f d f f f f d f f f d f f d f d f f d f f d 
        d f d f d f f f d f f f d d f d f d f f d f f d 
        d f f f f f f f f f f f f f f f f f f f f f f d 
        d d d d d d d d d d d d d d d d d d d d d d d d 
        `, SpriteKind.Words1)
    Play.setScale(1.75, ScaleAnchor.Middle)
    Play.setPosition(35, 80)
}
if (Screen == 0) {
    Other = sprites.create(img`
        d d d d d d d d d d d d d d d d d d d d d d d d 
        d f f f f f f f f f f f f f f f f f f f f f f d 
        d f d d d f d d d f d f d f d d d f d d d f f d 
        d f d f d f f d f f d f d f d f f f d f d f f d 
        d f d f d f f d f f d d d f d d d f d d d f f d 
        d f d f d f f d f f d f d f d f f f d d f f f d 
        d f d f d f f d f f d f d f d f f f d f d f f d 
        d f d d d f f d f f d f d f d d d f d f d f f d 
        d f f f f f f f f f f f f f f f f f f f f f f d 
        d d d d d d d d d d d d d d d d d d d d d d d d 
        `, SpriteKind.Words1)
    Other.setScale(1.75, ScaleAnchor.Middle)
    Other.setPosition(35, 103)
}
if (Screen == 0) {
    Point = sprites.create(img`
        . . . . . . . . . . . . 
        . . . . . . . f f f f . 
        . . . . . f f f d d f f 
        . . . f f f d d f f d f 
        . . f f d d f f f f d f 
        . f f d d f f f f f d f 
        f f d f f f f f f d f . 
        . f f d d f f f f f d f 
        . . f f d d f f f f d f 
        . . . f f f d d f f d f 
        . . . . . f f f d d f f 
        . . . . . . . f f f f . 
        `, SpriteKind.Words1)
    Point.setScale(1, ScaleAnchor.Middle)
    Point.setPosition(65, 80)
}
// Title Screen "Play" button
forever(function () {
    if (controller.down.isPressed() && Screen == 0) {
        Point.setPosition(65, 103)
        mainmenuposition = 1
    }
    if (controller.A.isPressed() && (mainmenuposition == 0 && Screen == 0)) {
        Screen = 1
        sprites.destroy(Title)
        sprites.destroy(Play)
        sprites.destroy(Other)
        sprites.destroy(Point)
    }
})
// Title screen "Other" button
forever(function () {
    if (controller.up.isPressed() && Screen == 0) {
        Point.setPosition(65, 80)
        mainmenuposition = 0
    }
    if (controller.A.isPressed() && (mainmenuposition == 1 && Screen == 0)) {
        Screen = 2
        sprites.destroy(Title)
        sprites.destroy(Other)
        sprites.destroy(Play)
        sprites.destroy(Point)
    }
})
forever(function () {
    if (Screen == 2) {
        WIP = sprites.create(img`
            ................................
            ........1.......................
            ..................11............
            ...................1............
            .............1.....1............
            1...11..1...1111...1............
            1.1.1...1...1..1................
            .1111...1...1.1.................
            .1.11...1....1.....1............
            ......1...1..1..1..1............
            .............1..................
            .............1..................
            ................................
            ................................
            ................................
            ................................
            `, SpriteKind.Words1)
    }
})
forever(function () {
    if (Screen == 1) {
        CharSelectText = sprites.create(img`
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdd
            ddfffffffffff4ffffffffffffffffffffffffffffffffffffffffffffffffdd
            ddffff444ffff4fffffffffffffffffffffffffffffff4ffffffffffffffffdd
            ddff444f44ff44ffffff444fffffffff444ffffffffff4ffffffffffffffffdd
            ddf44ffff4ff4fffffff4f444fffffff4f444ff444ff44ffffffffffffffffdd
            ddf4ffffffff4f4444ffffff4ff444ffffff4f44f44ff44ff4444fff444fffdd
            ddf4ffffffff444ff4ff44444ff4f4ff44444f4ffffff4ff44ff4fff4f4fffdd
            ddf4ffff4fff44fff4f44ff4ff44fff44ff4ff4fffff44ff44444ff44fffffdd
            ddf44f444fff4fff44ff4444ff4fffff4444ff44f4ff4fff4ffffff4ffffffdd
            ddff444fffffffff4ffffff4ff4ffffffff4fff444ff4fff44fffff4ffffffdd
            ddfffffffffffffffffffffffffffffffffffffffffffffff444ffffffffffdd
            ddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdd
            ddffff444fffffffffffffffffffffffffffffffffff444444ffffffffffffdd
            ddfff44444ffffffff4ffffffffffffffffffffffff44ffff44fffffffffffdd
            ddfff4fff4ffffffff4fffffffffffffff4ffffffff4ffffff44ffffffffffdd
            ddfff444ffff4444ff4ffffffff444ffff4fffffff4444444ff4ffffffffffdd
            ddfffff444f44ff4ff4ff4444f44f44f444ffffff4ffffff4ff444ffffffffdd
            ddfffffff4f44444ff4f44ff4f4fffffff444fff4fffffff4ff4ff4fffffffdd
            ddfff44ff4f4fffff44f44444f4fffffff4ffffff4ffffff4ff4ff4fffffffdd
            ddffff4444f44ffff4ff4fffff44f4fff44ffffff4444f444ff4ff4fffffffdd
            ddffffffffff444ff4ff44fffff444fff4ffffffff4f444ffff4ff4fffffffdd
            ddfffffffffffffffffff444fffffffff4ffffffff4ffffffff4f44fffffffdd
            ddffffffffffffffffffffffffffffffffffffffff4fff444ff444ffffffffdd
            ddffffffffffffffffffffffffffffffffffffffff44f4ff44f4ffffffffffdd
            ddfffffffffffffffffffffffffffffffffffffffff444fff444ffffffffffdd
            ddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdd
            ddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdd
            ddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            `, SpriteKind.Words1)
        CharSelectText.setScale(2, ScaleAnchor.Middle)
        CharSelectText.setPosition(80, 40)
        Hero1 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 2 2 2 2 . . . . . . 
            . . . . . 2 2 2 2 2 2 . . . . . 
            . . . . 2 2 2 2 2 2 2 2 . . . . 
            . . . 2 2 2 2 2 2 2 2 2 2 . . . 
            . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
            . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
            . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
            . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
            . . . 2 2 2 2 2 2 2 2 2 2 . . . 
            . . . . 2 2 2 2 2 2 2 2 . . . . 
            . . . . . 2 2 2 2 2 2 . . . . . 
            . . . . . . 2 2 2 2 . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.PlayerBattler)
        Hero1.setScale(2, ScaleAnchor.Middle)
        Hero1.setPosition(30, 100)
        Hero2 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 7 7 7 7 . . . . . . 
            . . . . . 7 7 7 7 7 7 . . . . . 
            . . . . 7 7 7 7 7 7 7 7 . . . . 
            . . . 7 7 7 7 7 7 7 7 7 7 . . . 
            . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
            . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
            . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
            . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
            . . . 7 7 7 7 7 7 7 7 7 7 . . . 
            . . . . 7 7 7 7 7 7 7 7 . . . . 
            . . . . . 7 7 7 7 7 7 . . . . . 
            . . . . . . 7 7 7 7 . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.PlayerBattler)
        Hero2.setPosition(80, 100)
        Hero2.setScale(2, ScaleAnchor.Middle)
        Hero3 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 8 8 8 8 . . . . . . 
            . . . . . 8 8 8 8 8 8 . . . . . 
            . . . . 8 8 8 8 8 8 8 8 . . . . 
            . . . 8 8 8 8 8 8 8 8 8 8 . . . 
            . . 8 8 8 8 8 8 8 8 8 8 8 8 . . 
            . . 8 8 8 8 8 8 8 8 8 8 8 8 . . 
            . . 8 8 8 8 8 8 8 8 8 8 8 8 . . 
            . . 8 8 8 8 8 8 8 8 8 8 8 8 . . 
            . . . 8 8 8 8 8 8 8 8 8 8 . . . 
            . . . . 8 8 8 8 8 8 8 8 . . . . 
            . . . . . 8 8 8 8 8 8 . . . . . 
            . . . . . . 8 8 8 8 . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.PlayerBattler)
        Hero3.setPosition(130, 100)
        Hero3.setScale(2, ScaleAnchor.Middle)
        Point2 = sprites.create(img`
            . f f f f . . f f f f . 
            f f d d d f f d d d f f 
            f d f f f d d f f f d f 
            f d f f f f f f f f d f 
            f f d f f f f f f d f f 
            . f d f f f f f f d f . 
            . f f d f f f f d f f . 
            . . f d d f f d d f . . 
            . . f f d f f d f f . . 
            . . . f f d d f f . . . 
            . . . . f f f f . . . . 
            . . . . . f f . . . . . 
            `, SpriteKind.Words1)
        Point2.setPosition(30, 80)
        charselectposition = 1
        pauseUntil(() => false)
    }
})
forever(function () {
    if (Screen == 1) {
        if (controller.right.isPressed() && charselectposition == 1) {
            charselectposition = 2
        }
        if (controller.left.isPressed() && charselectposition == 2) {
            charselectposition = 1
        }
        if (controller.right.isPressed() || charselectposition == 2) {
            charselectposition = 3
        }
        if (controller.left.isPressed() && charselectposition == 3) {
            charselectposition = 2
        }
    }
    if (Screen == 1) {
        if (charselectposition == 1) {
            Point2.setPosition(30, 80)
        }
        if (charselectposition == 2) {
            Point2.setPosition(80, 80)
        }
        if (charselectposition == 3) {
            Point2.setPosition(130, 80)
        }
    }
})
