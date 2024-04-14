namespace SpriteKind {
    export const Building = SpriteKind.create()
    export const Decoration = SpriteKind.create()
    export const Exit = SpriteKind.create()
    export const WildPokemon = SpriteKind.create()
    export const Pokeball = SpriteKind.create()
    export const MyPokemon = SpriteKind.create()
    export const Npc = SpriteKind.create()
}
function setLevel () {
    music.stopAllSounds()
    destroyAll()
    scene.setBackgroundColor(6)
    resetTilemap()
    tiles.setCurrentTilemap(tilemap1)
    pokemonCenter = sprites.create(img`
        ....................e2e22e2e....................
        .................222eee22e2e222.................
        ..............222e22e2e22eee22e222..............
        ...........e22e22eeee2e22e2eeee22e22e...........
        ........eeee22e22e22e2e22e2e22e22e22eeee........
        .....222e22e22eeee22e2e22e2e22eeee22e22e222.....
        ...22eeee22e22e22e22eee22eee22e22e22e22eeee22...
        4cc22e22e22eeee22e22e2e22e2e22e22eeee22e22e22cc4
        6c6eee22e22e22e22e22e2e22e2e22e22e22e22e22eee6c6
        46622e22eeee22e22eeee2e22e2eeee22e22eeee22e22664
        46622e22e22e22eeee22e2e22e2e22eeee22e22e22e22664
        4cc22eeee22e22e22e22eee22eee22e22e22e22eeee22cc4
        6c622e22e22eeee22e22e2e22e2e22e22eeee22e22e226c6
        466eee22e22e22e22e22e2e22e2e22e22e22e22e22eee664
        46622e22eeee22e22e22e2e22e2e22e22e22eeee22e22664
        4cc22e22e22e22e22eeee2e22e2eeee22e22e22e22e22cc4
        6c622eeee22e22eeee22fffffffe22eeee22e22eeee226c6
        46622e22e22eeee22e2f2222222f22e22eeee22e22e22664
        466eee22e22e22e22ef222222222f2e22e22e22e22eee664
        4cc22e22eeee22e22ef222222222f2e22e22eeee22e22cc4
        6c622e22e22e22e22ef222fff222f2e22e22e22e22e226c6
        46622eeee22e22e22efffff6fffffee22e22e22eeee22664
        46622e22e22e22eeecf111fff111fcceee22e22e22e22664
        4cceee22e22eeecc66f111111111f666cceee22e22eeecc4
        6c622e22eeecc66666f111111111fc66666cceee22e226c6
        46622e22cc66666cc64f1111111f446cc66666cc22e22664
        46622cc6666ccc644444fffffff4444446ccc6666cc22664
        4ccc6666ccc6444bcc666666666666ccb4446ccc6666ccc4
        cccccccc6666666c................c6666666cccccccc
        64444444444446c..................c64444444444446
        66cb444444444c....................c444444444bc66
        666ccccccccccc....................ccccccccccc666
        6666444444444c....................c4444444446666
        666e2222222e4c....................c4e2222222e666
        666eeeeeeeee4c....................c4eeeeeeeee666
        666eddddddde4c....................c4eddddddde666
        666edffdffde4c....................c4edffdffde666
        666edccdccde4c....................c4edccdccde666
        666eddddddde4c....................c4eddddddde666
        c66edffdffde4c....................c4edffdffde66c
        c66edccdccde4c....................c4edccdccde66c
        cc66666666664c....................c46666666666cc
        .c66444444444c....................c44444444466c.
        ..c64eee4eee4c....................c4eee4eee46c..
        ...c4eee4eee4c....................c4eee4eee4c...
        ....644444444c....................c444444446....
        .....64eee444c....................c444eee46.....
        ......6ccc666c....................c666ccc6......
        `, SpriteKind.Building)
    pokeCenterDoor = sprites.create(img`
        ................................................
        ................................................
        ................................................
        ................................................
        ................................................
        ................................................
        ................................................
        ................................................
        ................................................
        ................................................
        ................................................
        ................................................
        ................................................
        ................................................
        ................................................
        ................................................
        ................................................
        ................................................
        ................................................
        ................................................
        ................................................
        ................................................
        ................................................
        ................................................
        ................................................
        ................................................
        ................................................
        ................cc666666666666cc................
        ...............cb44444444444444bc...............
        ..............c444444444444444444c..............
        .............cb411111111111111114bc.............
        .............cd166666666666666661dc.............
        .............c116eeeeeeeeeeeeee611c.............
        .............c16e4e44e44e44e44ee61c.............
        .............c16e4e44e44e44e44ee61c.............
        .............c66f4e4effffffe44ee66c.............
        .............c66f4effffffffff4ee66c.............
        .............c66f4effffffffffeee66c.............
        .............c66f4eeeeeeeeeeeeee66c.............
        .............c66e4e44e44e44e44ee66c.............
        .............c66e4e44e44e44e44ee66c.............
        .............c66e4e44e44e44feeee66c.............
        .............c66e4e44e44e44ffffe66c.............
        .............c66f4e44e44e44f44fe66c.............
        .............c66f4e44e44e44effee66c.............
        .............c66f4e44e44e44e44ee66c.............
        .............c66f4e44e44e44e44ee66c.............
        .............c66e4e44e44e44e44ee66c.............
        `, SpriteKind.Building)
    tiles.placeOnTile(pokeCenterDoor, tiles.getTileLocation(11, 4))
    tiles.placeOnTile(pokemonCenter, tiles.getTileLocation(11, 4))
    controller.moveSprite(playerSprite)
    if (myPokemon.length > 0) {
        for (let value of myPokemon) {
            myPoke = sprites.create(value, SpriteKind.MyPokemon)
            tiles.placeOnTile(myPoke, playerSprite.tilemapLocation())
            myPoke.follow(playerSprite, randint(50, 70))
            myPoke.changeScale(-0.1, ScaleAnchor.Middle)
            myPoke.setFlag(SpriteFlag.GhostThroughWalls, true)
        }
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.MyPokemon, function (sprite, otherSprite) {
    if (Math.percentChance(50)) {
        otherSprite.x += 16
    } else {
        otherSprite.x += -16
    }
    otherSprite.follow(sprite, 0)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    playerSprite,
    [img`
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e f f e e e f . . . 
        . . f f f f f 2 2 f f f f f . . 
        . . f f e 2 e 2 2 e 2 e f f . . 
        . . f e 2 f 2 f f 2 f 2 e f . . 
        . . f f f 2 2 e e 2 2 f f f . . 
        . f f e f 2 f e e f 2 f e f f . 
        . f e e f f e e e e f e e e f . 
        . . f e e e e e e e e e e f . . 
        . . . f e e e e e e e e f . . . 
        . . e 4 f f f f f f f f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e f f e e e f . . . 
        . . . f f f f 2 2 f f f f . . . 
        . . f f e 2 e 2 2 e 2 e f f . . 
        . . f e 2 f 2 f f f 2 f e f . . 
        . . f f f 2 f e e 2 2 f f f . . 
        . . f e 2 f f e e 2 f e e f . . 
        . f f e f f e e e f e e e f f . 
        . f f e e e e e e e e e e f f . 
        . . . f e e e e e e e e f . . . 
        . . . e f f f f f f f f 4 e . . 
        . . . 4 f 2 2 2 2 2 e d d 4 . . 
        . . . e f f f f f f e e 4 . . . 
        . . . . f f f . . . . . . . . . 
        `,img`
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e f f e e e f . . . 
        . . f f f f f 2 2 f f f f f . . 
        . . f f e 2 e 2 2 e 2 e f f . . 
        . . f e 2 f 2 f f 2 f 2 e f . . 
        . . f f f 2 2 e e 2 2 f f f . . 
        . f f e f 2 f e e f 2 f e f f . 
        . f e e f f e e e e f e e e f . 
        . . f e e e e e e e e e e f . . 
        . . . f e e e e e e e e f . . . 
        . . e 4 f f f f f f f f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e f f e e e f . . . 
        . . . f f f f 2 2 f f f f . . . 
        . . f f e 2 e 2 2 e 2 e f f . . 
        . . f e f 2 f f f 2 f 2 e f . . 
        . . f f f 2 2 e e f 2 f f f . . 
        . . f e e f 2 e e f f 2 e f . . 
        . f f e e e f e e e f f e f f . 
        . f f e e e e e e e e e e f f . 
        . . . f e e e e e e e e f . . . 
        . . e 4 f f f f f f f f e . . . 
        . . 4 d d e 2 2 2 2 2 f 4 . . . 
        . . . 4 e e f f f f f f e . . . 
        . . . . . . . . . f f f . . . . 
        `],
    200,
    false
    )
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Building, function (sprite, otherSprite) {
    if (otherSprite.image.equals(img`
        ................................................
        ................................................
        ................................................
        ................................................
        ................................................
        ................................................
        ................................................
        ................................................
        ................................................
        ................................................
        ................................................
        ................................................
        ................................................
        ................................................
        ................................................
        ................................................
        ................................................
        ................................................
        ................................................
        ................................................
        ................................................
        ................................................
        ................................................
        ................................................
        ................................................
        ................................................
        ................................................
        ................cc666666666666cc................
        ...............cb44444444444444bc...............
        ..............c444444444444444444c..............
        .............cb411111111111111114bc.............
        .............cd166666666666666661dc.............
        .............c116eeeeeeeeeeeeee611c.............
        .............c16e4e44e44e44e44ee61c.............
        .............c16e4e44e44e44e44ee61c.............
        .............c66f4e4effffffe44ee66c.............
        .............c66f4effffffffff4ee66c.............
        .............c66f4effffffffffeee66c.............
        .............c66f4eeeeeeeeeeeeee66c.............
        .............c66e4e44e44e44e44ee66c.............
        .............c66e4e44e44e44e44ee66c.............
        .............c66e4e44e44e44feeee66c.............
        .............c66e4e44e44e44ffffe66c.............
        .............c66f4e44e44e44f44fe66c.............
        .............c66f4e44e44e44effee66c.............
        .............c66f4e44e44e44e44ee66c.............
        .............c66f4e44e44e44e44ee66c.............
        .............c66e4e44e44e44e44ee66c.............
        `)) {
        sprites.destroyAllSpritesOfKind(SpriteKind.Building)
        makePokecentre()
    }
})
function setMovement (speed: number) {
    controller.moveSprite(playerSprite, speed, speed)
}
scene.onOverlapTile(SpriteKind.Player, sprites.swamp.swampTile1, function (sprite, location) {
    tiles.setTileAt(location, sprites.castle.tileDarkGrass3)
    if (Math.percentChance(15)) {
        pokemn = sprites.create(pokedex._pickRandom(), SpriteKind.WildPokemon)
        tiles.placeOnTile(pokemn, location)
        music.play(music.melodyPlayable(music.thump), music.PlaybackMode.InBackground)
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (isBattling && pokeballCount > 0) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            . . . . . f f f f f f f . . . . . 
            . . . . f 2 2 2 2 2 2 2 f . . . . 
            . . . f 2 2 2 2 2 2 2 2 2 f . . . 
            . . . f 2 2 2 2 2 2 2 2 2 f . . . 
            . . . f 2 2 2 f f f 2 2 2 f . . . 
            . . . f f f f f 1 f f f f f . . . 
            . . . f 1 1 1 f f f 1 1 1 f . . . 
            . . . f 1 1 1 1 1 1 1 1 1 f . . . 
            . . . f 1 1 1 1 1 1 1 1 1 f . . . 
            . . . . f 1 1 1 1 1 1 1 f . . . . 
            . . . . . f f f f f f f . . . . . 
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            `, playerSprite, 50, 0)
        pokeballCount += -1
        projectile.setKind(SpriteKind.Pokeball)
        animation.runImageAnimation(
        projectile,
        [img`
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            . . . . . f f f f f f f . . . . . 
            . . . . f 2 2 2 2 2 2 2 f . . . . 
            . . . f 2 2 2 2 2 2 2 2 2 f . . . 
            . . . f 2 2 2 2 2 2 2 2 2 f . . . 
            . . . f 2 2 2 f f f 2 2 2 f . . . 
            . . . f f f f f 1 f f f f f . . . 
            . . . f 1 1 1 f f f 1 1 1 f . . . 
            . . . f 1 1 1 1 1 1 1 1 1 f . . . 
            . . . f 1 1 1 1 1 1 1 1 1 f . . . 
            . . . . f 1 1 1 1 1 1 1 f . . . . 
            . . . . . f f f f f f f . . . . . 
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            . . . . . f f f f f f f . . . . . 
            . . . . f 2 2 2 2 2 2 2 f . . . . 
            . . . f 2 2 2 2 2 2 2 2 2 f . . . 
            . . . f 2 2 2 2 2 2 2 2 2 f . . . 
            . . . f 2 2 2 f f f 2 2 2 f . . . 
            . . . f f f f f 1 f f f f f . . . 
            . . . f 1 1 1 f f f 1 1 1 f . . . 
            . . . f 1 1 1 1 1 1 1 1 1 f . . . 
            . . . f 1 1 1 1 1 1 1 1 1 f . . . 
            . . . . f 1 1 1 1 1 1 1 f . . . . 
            . . . . . f f f f f f f . . . . . 
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            . . . . . f f f f f f f . . . . . 
            . . . . f 1 1 1 f 2 2 2 f . . . . 
            . . . f 1 1 1 1 f 2 2 2 2 f . . . 
            . . . f 1 1 1 1 f 2 2 2 2 f . . . 
            . . . f 1 1 1 f f f 2 2 2 f . . . 
            . . . f 1 1 1 f 5 f 2 2 2 f . . . 
            . . . f 1 1 1 f f f 2 2 2 f . . . 
            . . . f 1 1 1 1 f 2 2 2 2 f . . . 
            . . . f 1 1 1 1 f 2 2 2 2 f . . . 
            . . . . f 1 1 1 f 2 2 2 f . . . . 
            . . . . . f f f f f f f . . . . . 
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            . . . . . f f f f f f f . . . . . 
            . . . . f 1 1 1 f 2 2 2 f . . . . 
            . . . f 1 1 1 1 f 2 2 2 2 f . . . 
            . . . f 1 1 1 1 f 2 2 2 2 f . . . 
            . . . f 1 1 1 f f f 2 2 2 f . . . 
            . . . f 1 1 1 f 5 f 2 2 2 f . . . 
            . . . f 1 1 1 f f f 2 2 2 f . . . 
            . . . f 1 1 1 1 f 2 2 2 2 f . . . 
            . . . f 1 1 1 1 f 2 2 2 2 f . . . 
            . . . . f 1 1 1 f 2 2 2 f . . . . 
            . . . . . f f f f f f f . . . . . 
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            . . . . . f f f f f f f . . . . . 
            . . . . f 1 1 1 1 1 1 1 f . . . . 
            . . . f 1 1 1 1 1 1 1 1 1 f . . . 
            . . . f 1 1 1 1 1 1 1 1 1 f . . . 
            . . . f 1 1 1 f f f 1 1 1 f . . . 
            . . . f f f f f 5 f f f f f . . . 
            . . . f 2 2 2 f f f 2 2 2 f . . . 
            . . . f 2 2 2 2 2 2 2 2 2 f . . . 
            . . . f 2 2 2 2 2 2 2 2 2 f . . . 
            . . . . f 2 2 2 2 2 2 2 f . . . . 
            . . . . . f f f f f f f . . . . . 
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            . . . . . f f f f f f f . . . . . 
            . . . . f 1 1 1 1 1 1 1 f . . . . 
            . . . f 1 1 1 1 1 1 1 1 1 f . . . 
            . . . f 1 1 1 1 1 1 1 1 1 f . . . 
            . . . f 1 1 1 f f f 1 1 1 f . . . 
            . . . f f f f f 5 f f f f f . . . 
            . . . f 2 2 2 f f f 2 2 2 f . . . 
            . . . f 2 2 2 2 2 2 2 2 2 f . . . 
            . . . f 2 2 2 2 2 2 2 2 2 f . . . 
            . . . . f 2 2 2 2 2 2 2 f . . . . 
            . . . . . f f f f f f f . . . . . 
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            . . . . . f f f f f f f . . . . . 
            . . . . f 2 2 2 f 1 1 1 f . . . . 
            . . . f 2 2 2 2 f 1 1 1 1 f . . . 
            . . . f 2 2 2 2 f 1 1 1 1 f . . . 
            . . . f 2 2 2 f f f 1 1 1 f . . . 
            . . . f 2 2 2 f 1 f 1 1 1 f . . . 
            . . . f 2 2 2 f f f 1 1 1 f . . . 
            . . . f 2 2 2 2 f 1 1 1 1 f . . . 
            . . . f 2 2 2 2 f 1 1 1 1 f . . . 
            . . . . f 2 2 2 f 1 1 1 f . . . . 
            . . . . . f f f f f f f . . . . . 
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            . . . . . f f f f f f f . . . . . 
            . . . . f 2 2 2 f 1 1 1 f . . . . 
            . . . f 2 2 2 2 f 1 1 1 1 f . . . 
            . . . f 2 2 2 2 f 1 1 1 1 f . . . 
            . . . f 2 2 2 f f f 1 1 1 f . . . 
            . . . f 2 2 2 f 1 f 1 1 1 f . . . 
            . . . f 2 2 2 f f f 1 1 1 f . . . 
            . . . f 2 2 2 2 f 1 1 1 1 f . . . 
            . . . f 2 2 2 2 f 1 1 1 1 f . . . 
            . . . . f 2 2 2 f 1 1 1 f . . . . 
            . . . . . f f f f f f f . . . . . 
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            `],
        100,
        true
        )
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    playerSprite,
    [img`
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d 4 e e e f . . . 
        . . . f e 4 4 4 e e f f . . . . 
        . . . f 2 2 2 e d d 4 . . . . . 
        . . . f 2 2 2 e d d e . . . . . 
        . . . f 5 5 4 f e e f . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . . . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d e e e e e f . . . 
        . . . f e 4 e d d 4 f . . . . . 
        . . . f 2 2 e d d e f . . . . . 
        . . f f 5 5 f e e f f f . . . . 
        . . f f f f f f f f f f . . . . 
        . . . f f f . . . f f . . . . . 
        `,img`
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d 4 e e e f . . . 
        . . . f e 4 4 4 e e f f . . . . 
        . . . f 2 2 2 e d d 4 . . . . . 
        . . . f 2 2 2 e d d e . . . . . 
        . . . f 5 5 4 f e e f . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . . . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d 4 e e e f . . . 
        . . . f e 4 4 4 e d d 4 . . . . 
        . . . f 2 2 2 2 e d d e . . . . 
        . . f f 5 5 4 4 f e e f . . . . 
        . . f f f f f f f f f f . . . . 
        . . . f f f . . . f f . . . . . 
        `],
    200,
    false
    )
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Decoration, function (sprite, otherSprite) {
    if (otherSprite.image.equals(img`
        ..cccccccccccccccccccccccccccc..
        .bddddddddddddddddddddddddddddb.
        cddddddddddddddddddddddddddddddc
        cbbb3ddd33d3dddd3333dddd3d333bbc
        cddddddddddddddddddddddddddddddc
        cddddddddddddddddddddddddddddddc
        cddddddddddddddddddddddddddddddc
        cbb33dddd3bb33d33dd33ddd33333bbc
        cddddddddddddddddddddddddddddddc
        cddddddddddddddddddddddddddddddc
        cddddddddddddddddddddddddddddddc
        cb333dddd3db3dddddddd33333ddd3bc
        cddddddddddddddddddddddddddddddc
        cddddddddddddddddddddddddddddddc
        cddddddddddddddddddddddddddddddc
        cbbbbbb3333333dddd333d3dddd33bbc
        cddddddddddddddddddddddddddddddc
        cbddddddddddddddddddddddddddddbc
        cbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbc
        cbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbc
        .cccccccccccccccccccccccccccccc.
        ..cbbc....................cbbc..
        ..c33c....................c33c..
        ...cc......................cc...
        `)) {
        tiles.placeOnTile(sprite, tiles.getTileLocation(7, 5))
        game.showLongText("Nurse Joy: " + "Welcome to the PokeCenter!", DialogLayout.Bottom)
        game.showLongText("Nurse Joy: " + "What can I help you with today?", DialogLayout.Bottom)
        story.showPlayerChoices("Restock Pokeballs", "Exit")
        setMovement(0)
        if (story.checkLastAnswer("Restock Pokeballs")) {
            game.showLongText("You have " + pokeballCount + " pokeballs." + "Choose how many more you would like to add.", DialogLayout.Bottom)
            story.showPlayerChoices("10", "5", "2", "custom")
            if (story.checkLastAnswer("2")) {
                pokeballCount += 2
            } else if (story.checkLastAnswer("5")) {
                pokeballCount += 5
            } else if (story.checkLastAnswer("10")) {
                pokeballCount += 10
            } else if (story.checkLastAnswer("custom")) {
                pokeballCount += game.askForNumber("Enter a number", 2)
            }
            game.showLongText("You now have " + pokeballCount + " pokeballs.", DialogLayout.Center)
        } else {
            game.showLongText("Nurse Joy: " + "Thank you for visiting!", DialogLayout.Bottom)
        }
        setMovement(100)
    }
})
function resetTilemap () {
    tilemap1 = tilemap`level0`
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    playerSprite,
    [img`
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . f f e e 4 4 4 e f . . . 
        . . . . . 4 d d e 2 2 2 f . . . 
        . . . . . e d d e 2 2 2 f . . . 
        . . . . . f e e f 4 5 5 f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . f f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e e e d d d f . . . 
        . . . . . f 4 d d e 4 e f . . . 
        . . . . . f e d d e 2 2 f . . . 
        . . . . f f f e e f 5 5 f f . . 
        . . . . f f f f f f f f f f . . 
        . . . . . f f . . . f f f . . . 
        `,img`
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . f f e e 4 4 4 e f . . . 
        . . . . . 4 d d e 2 2 2 f . . . 
        . . . . . e d d e 2 2 2 f . . . 
        . . . . . f e e f 4 5 5 f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . f f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . 4 d d e 4 4 4 e f . . . 
        . . . . e d d e 2 2 2 2 f . . . 
        . . . . f e e f 4 4 5 5 f f . . 
        . . . . f f f f f f f f f f . . 
        . . . . . f f . . . f f f . . . 
        `],
    200,
    false
    )
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile5`, function (sprite, location) {
    if (myPokemon.length > 3) {
        tileUtil.loadConnectedMap(MapConnectionKind.Door1)
        tiles.placeOnTile(playerSprite, tiles.getTileLocation(12, 15))
    } else {
        playerSprite.y += 16
        game.showLongText("You need to catch at least 3 pokemon to proceed!", DialogLayout.Bottom)
    }
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    playerSprite,
    [img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . f f e 2 f f f f f f 2 e f f . 
        . f f f f f e e e e f f f f f . 
        . . f e f b f 4 4 f b f e f . . 
        . . f e 4 1 f d d f 1 4 e f . . 
        . . . f e 4 d d d d 4 e f e . . 
        . . f e f 2 2 2 2 e d d 4 e . . 
        . . e 4 f 2 2 2 2 e d d e . . . 
        . . . . f 4 4 5 5 f e e . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . f f f . . . . . . . . . 
        `,img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f e e 2 2 2 2 2 2 e f f . . 
        . f f e 2 f f f f f f 2 e f f . 
        . f f f f f e e e e f f f f f . 
        . . f e f b f 4 4 f b f e f . . 
        . . f e 4 1 f d d f 1 4 e f . . 
        . . e f e 4 d d d d 4 e f . . . 
        . . e 4 d d e 2 2 2 2 f e f . . 
        . . . e d d e 2 2 2 2 f 4 e . . 
        . . . . e e f 5 5 4 4 f . . . . 
        . . . . . f f f f f f f . . . . 
        . . . . . . . . . f f f . . . . 
        `],
    200,
    false
    )
})
tileUtil.onMapLoaded(function (tilemap3) {
    tileUtil.createSpritesOnTiles(tileUtil.object3, img`
        ........................
        .........fffff..........
        ......ffff666ffff.......
        ......ffff666ffff.......
        ....fffff66666fffff.....
        ...ffff222222222ffff....
        ...fff22222222222fff....
        ...f222666666666222f....
        ...f226fffffffff622f....
        ...f226fffffffff622f....
        ...ffffffeeeeeffffff....
        .fffeefbbf444fbbfeeff...
        .fffeefbff444ffbfeeff...
        .ffeee41ff222ff14eeef...
        ...ffffffdd2ddddeeef....
        ...ffffffdd2ddddeeef....
        .ffddddddf4244eeeff.....
        .ffbbbbbbf666666f66e....
        .ffbbbbbbf666666f66e....
        .ffbbbbbbf666666f224....
        ...fcccff6666666f444....
        ...fcccff6666666f444....
        ....ffffffffffff........
        .......fff...fff........
        `, SpriteKind.Npc)
    tileUtil.coverAllTiles(tileUtil.object3, sprites.castle.tilePath5)
    tileUtil.createSpritesOnTiles(tileUtil.object1, img`
        . . . . . f f 4 4 f f . . . . . 
        . . . . f 5 4 5 5 4 5 f . . . . 
        . . . f e 4 5 5 5 5 4 e f . . . 
        . . f b 7 e 4 4 4 4 e 7 b f . . 
        . . f 7 7 7 7 7 7 7 7 7 7 f . . 
        . f 7 7 e b 7 e e 7 b e 7 7 f . 
        . f 7 7 f f e e e e f f 7 7 f . 
        . f b b f b f e e f b f b b f . 
        . f b b e 1 f 4 4 f 1 e b b f . 
        f f b b f 4 4 4 4 4 4 f b b f f 
        f b b f f f e e e e f f f b b f 
        . f e e f b 7 7 7 7 b f e e f . 
        . . e 4 c 7 7 7 7 7 7 c 4 e . . 
        . . e f b 7 b 7 b 7 b b f e . . 
        . . . f f 1 d 1 d 1 d f f . . . 
        . . . . . f f b b f f . . . . . 
        `, SpriteKind.Npc)
    tileUtil.coverAllTiles(tileUtil.object1, sprites.castle.tilePath5)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.WildPokemon, function (sprite, otherSprite) {
    music.play(music.melodyPlayable(music.magicWand), music.PlaybackMode.UntilDone)
    setArena(sprite, otherSprite)
})
function setArena (p1: Sprite, p2: Sprite) {
    if (pokeballCount > 0) {
        isBattling = true
        tiles.setCurrentTilemap(tilemap`level15`)
        music.stopAllSounds()
        music.play(music.stringPlayable("C5 A B G A F G E ", 120), music.PlaybackMode.LoopingInBackground)
        tiles.placeOnTile(p2, tiles.getTileLocation(7, 5))
        tiles.placeOnTile(p1, tiles.getTileLocation(2, 6))
        controller.moveSprite(p1, 20, 20)
    } else {
        isBattling = false
        game.showLongText("You don't have any pokeballs! Go to the PokeCentre to get more.", DialogLayout.Bottom)
        setLevel()
        tiles.placeOnTile(playerSprite, playerSprite.tilemapLocation())
    }
}
function makePokecentre () {
    scene.setBackgroundColor(13)
    tiles.setCurrentTilemap(tilemap`level17`)
    fountain = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . e e 5 2 . . . . . . 
        . . . . . . e 4 5 2 . . . . . . 
        . . . . . c c c 2 2 2 . . . . . 
        . . . . e e 4 4 4 5 2 2 . . . . 
        . . e f f f c c 2 2 f f 2 2 . . 
        . e e e e 2 2 4 4 4 4 5 4 2 2 . 
        e e e e e e 2 2 4 4 4 5 4 4 2 2 
        e e e e e e 2 2 4 4 4 4 5 4 2 2 
        `, SpriteKind.Decoration)
    tiles.placeOnTile(fountain, tiles.getTileLocation(7, 8))
    nurseJoy = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . c c . . . . . . 
        . . . . . . . c 3 c . . . . . . 
        . . . . c c c 3 3 c c c . . . . 
        . . c c b c 3 3 3 3 c c c c . . 
        . c b b 3 b 3 3 3 3 b 3 b b c . 
        . c b 3 3 b b 3 3 b b 3 3 b c . 
        . . f 3 3 3 b b b b 3 3 3 c . . 
        . . f f 3 3 3 3 3 3 3 3 f f . . 
        . . f f f b f d d f b f f f . . 
        . . f f f 1 f d d f 1 f f f . . 
        . . . f d d d d d d d f f . . . 
        . . . d b b 3 3 3 3 f b b d . . 
        . . . d b b 3 b b 3 3 f d d . . 
        . . . . c 3 3 3 3 3 3 3 f . . . 
        . . . . . f f f f f f f . . . . 
        `, SpriteKind.Npc)
    tiles.placeOnTile(nurseJoy, tiles.getTileLocation(7, 1))
    desk = sprites.create(img`
        ..cccccccccccccccccccccccccccc..
        .bddddddddddddddddddddddddddddb.
        cddddddddddddddddddddddddddddddc
        cbbb3ddd33d3dddd3333dddd3d333bbc
        cddddddddddddddddddddddddddddddc
        cddddddddddddddddddddddddddddddc
        cddddddddddddddddddddddddddddddc
        cbb33dddd3bb33d33dd33ddd33333bbc
        cddddddddddddddddddddddddddddddc
        cddddddddddddddddddddddddddddddc
        cddddddddddddddddddddddddddddddc
        cb333dddd3db3dddddddd33333ddd3bc
        cddddddddddddddddddddddddddddddc
        cddddddddddddddddddddddddddddddc
        cddddddddddddddddddddddddddddddc
        cbbbbbb3333333dddd333d3dddd33bbc
        cddddddddddddddddddddddddddddddc
        cbddddddddddddddddddddddddddddbc
        cbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbc
        cbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbc
        .cccccccccccccccccccccccccccccc.
        ..cbbc....................cbbc..
        ..c33c....................c33c..
        ...cc......................cc...
        `, SpriteKind.Decoration)
    tiles.placeOnTile(desk, tiles.getTileLocation(7, 2))
    sofa = sprites.create(img`
        ...cccccccccccccccccc...
        ..cd5555555555555555dc..
        .c55555555555555555555c.
        .c55333333333333333355c.
        .c53333333333333333335c.
        .c53333333333333333335c.
        c333cccccccccccccccc333c
        c55c3555555555555553c55c
        c55c5555555555555555c55c
        c55c5555555555555555c55c
        c55c5555555555555555c55c
        c35c5555555555555555c53c
        cc33333333333333333333cc
        cc33333333333333333333cc
        cccccccccccccccccccccccc
        ..cbbc............cbbc..
        `, SpriteKind.Decoration)
    tiles.placeOnTile(sofa, tiles.getTileLocation(7, 0))
    fountain.startEffect(effects.fountain)
    tiles.placeOnTile(playerSprite, tiles.getTileLocation(7, 12))
    exitDoor = sprites.create(img`
        ..3b3b3b3b3b3b3b3b3b3b3b3b3b3b..
        .3dd3b3b3b3b3b3b3b3b3b3b3b3bdd3.
        bbdd3dddddddddddddddddddddd3ddbb
        b333dd33333333333333333333dd333b
        bbbdd3333333333333333333333ddbbb
        b33d333d3333333d3333333d3333d33b
        bbbd333333333333333333333333dbbb
        b33d333333333333333333333333d33b
        bbbd333333333333333333333333dbbb
        b33d3333333d3333333d33333333d33b
        bbbd333333333333333333333333dbbb
        b33d333333333333333333333333d33b
        bbbd333333333333333333333333dbbb
        b33d333d3333333d3333333d3333d33b
        bbbd333333333333333333333333dbbb
        b33d333333333333333333333333d33b
        bbbd333333333333333333333333dbbb
        b33d3333333d33333333d3333333d33b
        bbbdd3333333333333333333333ddbbb
        b333dd33333333333333333333dd333b
        bbdd3dddddddddddddddddddddd3ddbb
        b3dd3b3b3b3b3b3b3b3b3b3b3b3bdd3b
        .bbb3b3b3b3b3b3b3b3b3b3b3b3b3bb.
        ...bbbbbbbbbbbbbbbbbbbbbbbbbb...
        `, SpriteKind.Exit)
    tiles.placeOnTile(exitDoor, tiles.getTileLocation(7, 15))
    tiles.placeOnTile(playerSprite, tiles.getTileLocation(7, 13))
    list = [
    img`
        ..cccc.........
        .c7776c........
        c67776ccccccc..
        c67776c677777c.
        c67776c7777766c
        c67776c6666666c
        c67776cccccc66c
        c67776c77776ccc
        c67776c777776c.
        c67776c777776c.
        c67776c777776c.
        c67776c777776c.
        c67776c777776c.
        c67776c777776c.
        c67776c777776c.
        c67766c777776c.
        c66666cccccccc.
        c66666c677777c.
        c66666c7777766c
        c66666c6666666c
        c66666c6666666c
        c66666c6666666c
        .cccccccccccccc
        .cbbc.....cbbc.
        `,
    img`
        ..cccc.........
        .c5553c........
        c35553ccccccc..
        c35553c355555c.
        c35553c5555533c
        c35553c3333333c
        c35553cccccc33c
        c35553c55553ccc
        c35553c555553c.
        c35553c555553c.
        c35553c555553c.
        c35553c555553c.
        c35553c555553c.
        c35553c555553c.
        c35553c555553c.
        c35533c555553c.
        c33333cccccccc.
        c33333c355555c.
        c33333c5555533c
        c33333c3333333c
        c33333c3333333c
        c33333c3333333c
        .cccccccccccccc
        .cbbc.....cbbc.
        `,
    img`
        ..cccc.........
        .c5553c........
        c35553ccccccc..
        c35553c355555c.
        c35553c5555533c
        c35553c3333333c
        c35553cccccc33c
        c35553c55553ccc
        c35553c555553c.
        c35553c555553c.
        c35553c555553c.
        c35553c555553c.
        c35553c555553c.
        c35553c555553c.
        c35553c555553c.
        c35533c555553c.
        c33333cccccccc.
        c33333c355555c.
        c33333c5555533c
        c33333c3333333c
        c33333c3333333c
        c33333c3333333c
        .cccccccccccccc
        .cbbc.....cbbc.
        `,
    img`
        ..cccc.........
        .c7776c........
        c67776ccccccc..
        c67776c677777c.
        c67776c7777766c
        c67776c6666666c
        c67776cccccc66c
        c67776c77776ccc
        c67776c777776c.
        c67776c777776c.
        c67776c777776c.
        c67776c777776c.
        c67776c777776c.
        c67776c777776c.
        c67776c777776c.
        c67766c777776c.
        c66666cccccccc.
        c66666c677777c.
        c66666c7777766c
        c66666c6666666c
        c66666c6666666c
        c66666c6666666c
        .cccccccccccccc
        .cbbc.....cbbc.
        `,
    img`
        .........cccc..
        ........c3555c.
        ..ccccccc35553c
        .c555553c35553c
        c3355555c35553c
        c3333333c35553c
        c33cccccc35553c
        ccc35555c35553c
        .c355555c35553c
        .c355555c35553c
        .c355555c35553c
        .c355555c35553c
        .c355555c35553c
        .c355555c35553c
        .c355555c35553c
        .c355555c33553c
        .cccccccc33333c
        .c555553c33333c
        c3355555c33333c
        c3333333c33333c
        c3333333c33333c
        c3333333c33333c
        cccccccccccccc.
        .cbbc.....cbbc.
        `,
    img`
        .........cccc..
        ........c6777c.
        ..ccccccc67776c
        .c777776c67776c
        c6677777c67776c
        c6666666c67776c
        c66cccccc67776c
        ccc67777c67776c
        .c677777c67776c
        .c677777c67776c
        .c677777c67776c
        .c677777c67776c
        .c677777c67776c
        .c677777c67776c
        .c677777c67776c
        .c677777c66776c
        .cccccccc66666c
        .c777776c66666c
        c6677777c66666c
        c6666666c66666c
        c6666666c66666c
        c6666666c66666c
        cccccccccccccc.
        .cbbc.....cbbc.
        `,
    img`
        .........cccc..
        ........c6777c.
        ..ccccccc67776c
        .c777776c67776c
        c6677777c67776c
        c6666666c67776c
        c66cccccc67776c
        ccc67777c67776c
        .c677777c67776c
        .c677777c67776c
        .c677777c67776c
        .c677777c67776c
        .c677777c67776c
        .c677777c67776c
        .c677777c67776c
        .c677777c66776c
        .cccccccc66666c
        .c777776c66666c
        c6677777c66666c
        c6666666c66666c
        c6666666c66666c
        c6666666c66666c
        cccccccccccccc.
        .cbbc.....cbbc.
        `,
    img`
        .........cccc..
        ........c3555c.
        ..ccccccc35553c
        .c555553c35553c
        c3355555c35553c
        c3333333c35553c
        c33cccccc35553c
        ccc35555c35553c
        .c355555c35553c
        .c355555c35553c
        .c355555c35553c
        .c355555c35553c
        .c355555c35553c
        .c355555c35553c
        .c355555c35553c
        .c355555c33553c
        .cccccccc33333c
        .c555553c33333c
        c3355555c33333c
        c3333333c33333c
        c3333333c33333c
        c3333333c33333c
        cccccccccccccc.
        .cbbc.....cbbc.
        `
    ]
    colNumber = 0
    rowNumber = 5
    for (let value2 of list) {
        sideSofa = sprites.create(value2, SpriteKind.Decoration)
        if (rowNumber > 12) {
            rowNumber = 5
            colNumber = 15
        }
        tiles.placeOnTile(sideSofa, tiles.getTileLocation(colNumber, rowNumber))
        if (rowNumber % 2 == 1) {
            rowNumber += 3
        } else {
            rowNumber += 1
        }
    }
}
sprites.onOverlap(SpriteKind.Pokeball, SpriteKind.WildPokemon, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    animation.runMovementAnimation(
    sprite,
    animation.animationPresets(animation.bobbing),
    500,
    true
    )
    music.play(music.stringPlayable("E B C5 A B G A F ", 400), music.PlaybackMode.UntilDone)
    if (Math.percentChance(50)) {
        sprites.destroy(sprite, effects.halo, 100)
        music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
        game.showLongText("You caught the pokemon!", DialogLayout.Bottom)
        myPokemon.push(otherSprite.image)
    } else {
        sprites.destroy(sprite, effects.disintegrate, 200)
        music.play(music.melodyPlayable(music.powerDown), music.PlaybackMode.UntilDone)
        game.showLongText("Pokemon fled!", DialogLayout.Bottom)
    }
    isBattling = false
    setLevel()
    tiles.placeOnTile(playerSprite, playerSprite.tilemapLocation())
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.doorOpenNorth, function (sprite, location) {
    if (myPokemon.length > 3) {
        tileUtil.loadConnectedMap(MapConnectionKind.Door1)
        tiles.placeOnTile(playerSprite, tiles.getTileLocation(6, 15))
    } else {
        playerSprite.y += 16
        game.showLongText("You need to catch at least 3 pokemon to proceed!", DialogLayout.Bottom)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Exit, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    setLevel()
    tiles.placeOnTile(sprite, tiles.getTileLocation(11, 6))
})
function destroyAll () {
    sprites.destroyAllSpritesOfKind(SpriteKind.Decoration)
    sprites.destroyAllSpritesOfKind(SpriteKind.Npc)
    sprites.destroyAllSpritesOfKind(SpriteKind.WildPokemon)
    sprites.destroyAllSpritesOfKind(SpriteKind.MyPokemon)
}
let sideSofa: Sprite = null
let rowNumber = 0
let colNumber = 0
let list: Image[] = []
let exitDoor: Sprite = null
let sofa: Sprite = null
let desk: Sprite = null
let nurseJoy: Sprite = null
let fountain: Sprite = null
let projectile: Sprite = null
let isBattling = false
let pokemn: Sprite = null
let myPoke: Sprite = null
let pokeCenterDoor: Sprite = null
let pokemonCenter: Sprite = null
let pokeballCount = 0
let myPokemon: Image[] = []
let pokedex: Image[] = []
let playerSprite: Sprite = null
let tilemap1: tiles.TileMapData = null
tilemap1 = tilemap`level0`
let tilemap2 = tilemap`level`
tileUtil.connectMaps(tilemap1, tilemap2, MapConnectionKind.Door1)
setLevel()
playerSprite = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f e e f f f . . . . 
    . . . f e e e e e e e f f . . . 
    . . f e e e e e e e e e f f . . 
    . . f e e e e e e e e e e f . . 
    . . f e e e e e e e e e e f . . 
    . . f e e f e e e e f e e f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f 2 e 4 1 f d d f 1 4 e 2 f . 
    . . f 2 e d d d d d d e 2 f . . 
    . . . f 2 2 4 4 4 4 2 2 f . . . 
    . . e a 9 9 f f f f f 9 a e . . 
    . . 4 d a 9 9 9 f 9 9 9 d 4 . . 
    . . 4 4 f a a 9 9 a a f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
scene.cameraFollowSprite(playerSprite)
tiles.placeOnTile(playerSprite, tiles.getTileLocation(0, 0))
setMovement(100)
pokedex = [
img`
    . . f 5 . . . . . . . . 5 f . . 
    . . . 5 5 5 . . . . 5 5 5 . . . 
    . . . . 5 5 5 5 5 5 5 5 . . . . 
    . . . . 5 5 5 5 5 5 5 5 . . . . 
    . . . . 5 f f 5 5 f f 5 . . . . 
    . . . . 5 1 f 5 5 1 f 5 . . . . 
    . . . . 5 5 5 f 5 5 5 5 . . . . 
    . . . . 2 5 5 5 5 5 5 2 . . . . 
    . . . . 5 5 5 5 5 5 5 5 . . . . 
    . . . 5 5 5 5 5 5 5 5 5 5 . . f 
    . . . 5 5 5 5 5 5 5 5 5 5 . f f 
    . . . 5 5 5 5 5 5 5 5 4 4 . 5 5 
    . . . 5 5 5 5 5 5 5 5 5 5 5 5 5 
    . . . 5 5 5 5 5 5 5 5 4 4 5 5 5 
    . . . . 5 5 5 5 5 5 5 5 4 5 . . 
    . . . 5 5 5 . . . 5 5 5 . . . . 
    `,
img`
    . . . . . . . . . . b 5 b . . . 
    . . . . . . . . . b 5 b . . . . 
    . . . . . . . . . b c . . . . . 
    . . . . . . b b b b b b . . . . 
    . . . . . b b 5 5 5 5 5 b . . . 
    . . . . f f f f 1 f f f f f 1 f 
    . . . f b 5 5 f f 1 f d 4 f f 1 
    . . . . b 5 5 d f f d d 4 4 f . 
    b d d d b b d 5 5 5 4 4 4 4 4 b 
    b b d 5 5 5 b 5 5 4 4 4 4 4 b . 
    b d c 5 5 5 5 d 5 5 5 5 5 b . . 
    c d d c d 5 5 b 5 5 5 5 5 5 b . 
    c b d d c c b 5 5 5 5 5 5 5 b . 
    . c d d d d d d 5 5 5 5 5 d b . 
    . . c b d d d d d 5 5 5 b b . . 
    . . . c c c c c c c c b b . . . 
    `,
img`
    . . . . f f f f f . . . . . . . 
    . . . f 1 1 1 1 1 f . . . . . . 
    . . f d d d d 1 1 1 f . . . . . 
    . c d f d d f d 1 1 f f . . . . 
    . c d 9 d d 9 d 1 1 d d f . . . 
    c d 2 2 d d d d 1 1 b d c . . . 
    c d d d d c d d 1 1 b d c . . . 
    c c c c c d d 1 1 1 f c . . . . 
    . f d d d d 1 1 1 f f . . . . . 
    . . f f f f f 1 1 1 1 f . . . . 
    . . . . f f 1 1 1 1 1 1 f . f f 
    . . . f 1 1 f 1 1 f 1 1 f . 1 f 
    . . f 1 1 f 1 1 f 1 1 1 f . 1 f 
    . f b 4 f 4 b f b b f 1 f f 1 f 
    . f 4 4 f 4 4 f 4 4 b 1 f f f f 
    . . f f f f f f f f f f f f f . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . e e e e e e . . . . . 
    . . . . e e e e e e e e . . . . 
    . . . e e e e e e e e e e . . . 
    . . . e e f e e e e f e e . . . 
    . . . e e f e e e e f e e . . . 
    . . . e e e e e e e e e e . . . 
    . . . e e e 3 3 3 3 e e e . . . 
    . . . e e e 3 3 3 3 e e e . . . 
    . . . e e e e e e e e e e . . . 
    . . . e e e e e e e e e e . . . 
    . . . e e e e e e e e e e . . . 
    . . d d d d d d d d d d d d . . 
    . d d d d d d d d d d d d d d . 
    d d d d d d d d d d d d d d d d 
    `
]
myPokemon = []
pokeballCount = 3
let playerLocation = playerSprite.tilemapLocation()
