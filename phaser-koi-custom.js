/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2019 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */

require('polyfills');

var CONST = require('const');
var Extend = require('utils/object/Extend');

/**
 * @namespace Phaser
 */

var Phaser = {
    Animations: require('animations'),
    Cache: require('cache'),
    Cameras: { Scene2D: require('cameras/2d') },
    Core: require('core'),
    Class: require('utils/Class'),
    Data: require('data'),
    Display: { Masks: require('display/mask') },
    DOM: require('dom'),
    Events: require('events/EventEmitter'),
    Game: require('core/Game'),
    GameObjects: {
        DisplayList: require('gameobjects/DisplayList'),
        GameObjectCreator: require('gameobjects/GameObjectCreator'),
        GameObjectFactory: require('gameobjects/GameObjectFactory'),
        UpdateList: require('gameobjects/UpdateList'),

        Components: require('gameobjects/components'),

        BuildGameObject: require('gameobjects/BuildGameObject'),
        BuildGameObjectAnimation: require('gameobjects/BuildGameObjectAnimation'),
        GameObject: require('gameobjects/GameObject'),

        Container: require('gameobjects/container/Container'),
        Graphics: require('gameobjects/graphics/Graphics.js'),
        Group: require('gameobjects/group/Group'),
        Image: require('gameobjects/image/Image'),
        Sprite: require('gameobjects/sprite/Sprite'),
        Text: require('gameobjects/text/static/Text'),
        BitmapText: require('gameobjects/bitmaptext/static/BitmapText'),
        RetroFont: require('gameobjects/bitmaptext/RetroFont'),

        Factories: {
            Container: require('gameobjects/container/ContainerFactory'),
            Graphics: require('gameobjects/graphics/GraphicsFactory'),
            Group: require('gameobjects/group/GroupFactory'),
            Image: require('gameobjects/image/ImageFactory'),
            Sprite: require('gameobjects/sprite/SpriteFactory'),
            Text: require('gameobjects/text/static/TextFactory'),
            StaticBitmapText: require('gameobjects/bitmaptext/static/BitmapTextFactory')
        },

        Creators: {
            Container: require('gameobjects/container/ContainerCreator'),
            Graphics: require('gameobjects/graphics/GraphicsCreator'),
            Group: require('gameobjects/group/GroupCreator'),
            Image: require('gameobjects/image/ImageCreator'),
            Sprite: require('gameobjects/sprite/SpriteCreator'),
            Text: require('gameobjects/text/static/TextCreator'),
            StaticBitmapText: require('gameobjects/bitmaptext/static/BitmapTextCreator'),
        }
    },
    Geom: require('geom'),
    Input: require('input'),
    Loader: {
        FileTypes: {
            AtlasJSONFile: require('loader/filetypes/AtlasJSONFile'),
            AudioFile: require('loader/filetypes/AudioFile'),
            HTML5AudioFile: require('loader/filetypes/HTML5AudioFile'),
            ImageFile: require('loader/filetypes/ImageFile'),
            JSONFile: require('loader/filetypes/JSONFile'),
            PluginFile: require('loader/filetypes/PluginFile'),
            SpriteSheetFile: require('loader/filetypes/SpriteSheetFile'),
            XMLFile: require('loader/filetypes/XMLFile')
        },
        File: require('loader/File'),
        FileTypesManager: require('loader/FileTypesManager'),
        GetURL: require('loader/GetURL'),
        LoaderPlugin: require('loader/LoaderPlugin'),
        MergeXHRSettings: require('loader/MergeXHRSettings'),
        MultiFile: require('loader/MultiFile'),
        XHRLoader: require('loader/XHRLoader'),
        XHRSettings: require('loader/XHRSettings')
    },
    Math: require('math'),
    Physics: {
        Arcade: require('physics/arcade')
    },
    Plugins: require('plugins'),
    Renderer: require('renderer'),
    Scale: require('scale'),
    Scene: require('scene/Scene'),
    Scenes: require('scene'),
    Sound: require('sound'),
    Structs: require('structs'),
    Textures: require('textures'),
    Time: require('time'),
    Tweens: require('tweens'),
    Utils: require('utils')
};

//   Merge in the consts

Phaser = Extend(false, Phaser, CONST);

//  Export it

module.exports = Phaser;

global.Phaser = Phaser;

/*
 * "Documentation is like pizza: when it is good, it is very, very good;
 * and when it is bad, it is better than nothing."
 *  -- Dick Brandon
 */
