require('polyfills');

var CONST = require('const')
var Extend = require('utils/object/Extend')

/**
 * @namespace Phaser
 */

var Phaser = {
    Animations: require('animations'),
    Cache: require('cache'),
    Cameras: {
        Scene2D: require('cameras/2d')
    },
    Core: {
        Config: require('core/Config'),
        CreateRenderer: require('core/CreateRenderer'),
        Events: require('core/events'),
        TimeStep: require('core/TimeStep'),
        VisibilityHandler: require('core/VisibilityHandler')
    },
    Class: require('utils/Class'),
    Display: {
        Masks: require('display/mask')
    },
    Events: require('events/EventEmitter'),
    Game: require('core/Game'),
    GameObjects: {
        DisplayList: require('gameobjects/DisplayList'),
        UpdateList: require('gameobjects/UpdateList'),

        GameObjectFactory: require('gameobjects/GameObjectFactory'),

        Components: require('gameobjects/components'),

        BuildGameObject: require('gameobjects/BuildGameObject'),
        BuildGameObjectAnimation: require('gameobjects/BuildGameObjectAnimation'),
        GameObject: require('gameobjects/GameObject'),

        Container: require('gameobjects/container/Container'),
        Group: require('gameobjects/group/Group'),

        Graphics: require('gameobjects/graphics/Graphics.js'),
        Image: require('gameobjects/image/Image'),
        Sprite: require('gameobjects/sprite/Sprite'),
        TileSprite: require('gameobjects/tilesprite/TileSprite'),
        Text: require('gameobjects/text/static/Text'),
        RetroFont: require('gameobjects/bitmaptext/RetroFont'),
        Zone: require('gameobjects/zone/Zone'),
        Container: require('gameobjects/container/Container'),

        Particles: require('gameobjects/particles'),

        Shape: require('gameobjects/shape/Shape'),
        IsoBox: require('gameobjects/shape/isobox/IsoBox'),
        Arc: require('gameobjects/shape/arc/Arc'),
        Rectangle: require('gameobjects/shape/rectangle/Rectangle'),

        Factories: {
            Container: require('gameobjects/container/ContainerFactory'),
            Group: require('gameobjects/group/GroupFactory'),
            Zone: require('gameobjects/zone/ZoneFactory'),

            Graphics: require('gameobjects/graphics/GraphicsFactory'),
            Image: require('gameobjects/image/ImageFactory'),
            Sprite: require('gameobjects/sprite/SpriteFactory'),
            TileSprite: require('gameobjects/tilesprite/TileSpriteFactory'),

            Text: require('gameobjects/text/static/TextFactory'),
            StaticBitmapText: require('gameobjects/bitmaptext/static/BitmapTextFactory'),

            IsoBox: require('gameobjects/shape/isobox/IsoBoxFactory'),
            Arc: require('gameobjects/shape/arc/ArcFactory'),
            Rectangle: require('gameobjects/shape/rectangle/RectangleFactory'),

            Particles: require('gameobjects/particles/ParticleManagerFactory')
        },
        Creators: {
            Sprite: require('gameobjects/sprite/SpriteCreator'),
            Graphics: require('gameobjects/graphics/GraphicsCreator'),
            Particles: require('gameobjects/particles/ParticleManagerCreator'),
        }
    },
    Geom: require('geom'),
    Input: {
        CreateInteractiveObject: require('input/CreateInteractiveObject'),
        Events: require('input/events'),
        InputManager: require('input/InputManager'),
        InputPlugin: require('input/InputPlugin'),
        InputPluginCache: require('input/InputPluginCache'),
        Mouse: require('input/mouse'),
        Pointer: require('input/Pointer'),
        Touch: require('input/touch')
    },
    Loader: {
        FileTypes: {
            AudioFile: require('loader/filetypes/AudioFile'),
            HTML5AudioFile: require('loader/filetypes/HTML5AudioFile'),
            ImageFile: require('loader/filetypes/ImageFile'),
            SpriteSheetFile: require('loader/filetypes/SpriteSheetFile'),
            AtlasJSONFile: require('loader/filetypes/AtlasJSONFile')
        },
        File: require('loader/File'),
        FileTypesManager: require('loader/FileTypesManager'),
        GetURL: require('loader/GetURL'),
        LoaderPlugin: require('loader/LoaderPlugin'),
        MergeXHRSettings: require('loader/MergeXHRSettings'),
        XHRLoader: require('loader/XHRLoader'),
        XHRSettings: require('loader/XHRSettings')
    },
    Math: require('math'),
    Physics: require('physics'),
    // Physics: {
    //     Arcade: require('physics/arcade'),
    //     Matter: require('physics/matter-js'),
    // },
    Plugins: require('plugins'),
    Renderer: require('renderer'),
    Scale: require('scale'),
    Scene: require('scene/Scene'),
    Scenes: require('scene'),
    Sound: require('sound'),
    Structs: require('structs'),
    Textures: {
        Events: require('textures/events'),
        Parsers: {
            Image: require('textures/parsers/Image'),
            SpriteSheet: require('textures/parsers/SpriteSheet'),
        },
        Texture: require('textures/Texture'),
        TextureManager: require('textures/TextureManager'),
        TextureSource: require('textures/TextureSource')
    },
    Time: require('time'),
    Tweens: require('tweens'),
    Utils: require('utils')
};

Phaser = Extend(false, Phaser, CONST)

module.exports = Phaser

global.Phaser = Phaser
