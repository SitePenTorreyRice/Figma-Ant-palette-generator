/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/code.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@ant-design/colors/lib/generate.js":
/*!*********************************************************!*\
  !*** ./node_modules/@ant-design/colors/lib/generate.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var tinycolor2_1 = __importDefault(__webpack_require__(/*! tinycolor2 */ "./node_modules/tinycolor2/tinycolor.js"));
var hueStep = 2; // 色相阶梯
var saturationStep = 16; // 饱和度阶梯，浅色部分
var saturationStep2 = 5; // 饱和度阶梯，深色部分
var brightnessStep1 = 5; // 亮度阶梯，浅色部分
var brightnessStep2 = 15; // 亮度阶梯，深色部分
var lightColorCount = 5; // 浅色数量，主色上
var darkColorCount = 4; // 深色数量，主色下
// 暗色主题颜色映射关系表
var darkColorMap = [
    { index: 7, opacity: 0.15 },
    { index: 6, opacity: 0.25 },
    { index: 5, opacity: 0.3 },
    { index: 5, opacity: 0.45 },
    { index: 5, opacity: 0.65 },
    { index: 5, opacity: 0.85 },
    { index: 4, opacity: 0.9 },
    { index: 3, opacity: 0.95 },
    { index: 2, opacity: 0.97 },
    { index: 1, opacity: 0.98 },
];
function getHue(hsv, i, light) {
    var hue;
    // 根据色相不同，色相转向不同
    if (Math.round(hsv.h) >= 60 && Math.round(hsv.h) <= 240) {
        hue = light ? Math.round(hsv.h) - hueStep * i : Math.round(hsv.h) + hueStep * i;
    }
    else {
        hue = light ? Math.round(hsv.h) + hueStep * i : Math.round(hsv.h) - hueStep * i;
    }
    if (hue < 0) {
        hue += 360;
    }
    else if (hue >= 360) {
        hue -= 360;
    }
    return hue;
}
function getSaturation(hsv, i, light) {
    // grey color don't change saturation
    if (hsv.h === 0 && hsv.s === 0) {
        return hsv.s;
    }
    var saturation;
    if (light) {
        saturation = Math.round(hsv.s * 100) - saturationStep * i;
    }
    else if (i === darkColorCount) {
        saturation = Math.round(hsv.s * 100) + saturationStep;
    }
    else {
        saturation = Math.round(hsv.s * 100) + saturationStep2 * i;
    }
    // 边界值修正
    if (saturation > 100) {
        saturation = 100;
    }
    // 第一格的 s 限制在 6-10 之间
    if (light && i === lightColorCount && saturation > 10) {
        saturation = 10;
    }
    if (saturation < 6) {
        saturation = 6;
    }
    return saturation;
}
function getValue(hsv, i, light) {
    if (light) {
        return Math.round(hsv.v * 100) + brightnessStep1 * i;
    }
    return Math.round(hsv.v * 100) - brightnessStep2 * i;
}
function generate(color, opts) {
    if (opts === void 0) { opts = {}; }
    var patterns = [];
    var pColor = tinycolor2_1.default(color);
    for (var i = lightColorCount; i > 0; i -= 1) {
        var hsv = pColor.toHsv();
        var colorString = tinycolor2_1.default({
            h: getHue(hsv, i, true),
            s: getSaturation(hsv, i, true),
            v: getValue(hsv, i, true),
        }).toHexString();
        patterns.push(colorString);
    }
    patterns.push(pColor.toHexString());
    for (var i = 1; i <= darkColorCount; i += 1) {
        var hsv = pColor.toHsv();
        var colorString = tinycolor2_1.default({
            h: getHue(hsv, i),
            s: getSaturation(hsv, i),
            v: getValue(hsv, i),
        }).toHexString();
        patterns.push(colorString);
    }
    // dark theme patterns
    if (opts.theme === 'dark') {
        return darkColorMap.map(function (_a) {
            var index = _a.index, opacity = _a.opacity;
            var darkColorString = tinycolor2_1.default
                .mix(opts.backgroundColor || '#141414', patterns[index], opacity * 100)
                .toHexString();
            return darkColorString;
        });
    }
    return patterns;
}
exports.default = generate;


/***/ }),

/***/ "./node_modules/@ant-design/colors/lib/index.js":
/*!******************************************************!*\
  !*** ./node_modules/@ant-design/colors/lib/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var generate_1 = __importDefault(__webpack_require__(/*! ./generate */ "./node_modules/@ant-design/colors/lib/generate.js"));
exports.generate = generate_1.default;
var presetPrimaryColors = {
    red: '#F5222D',
    volcano: '#FA541C',
    orange: '#FA8C16',
    gold: '#FAAD14',
    yellow: '#FADB14',
    lime: '#A0D911',
    green: '#52C41A',
    cyan: '#13C2C2',
    blue: '#1890FF',
    geekblue: '#2F54EB',
    purple: '#722ED1',
    magenta: '#EB2F96',
    grey: '#666666',
};
exports.presetPrimaryColors = presetPrimaryColors;
var presetPalettes = {};
exports.presetPalettes = presetPalettes;
var presetDarkPalettes = {};
exports.presetDarkPalettes = presetDarkPalettes;
Object.keys(presetPrimaryColors).forEach(function (key) {
    presetPalettes[key] = generate_1.default(presetPrimaryColors[key]);
    presetPalettes[key].primary = presetPalettes[key][5];
    // dark presetPalettes
    presetDarkPalettes[key] = generate_1.default(presetPrimaryColors[key], {
        theme: 'dark',
        backgroundColor: '#141414',
    });
    presetDarkPalettes[key].primary = presetDarkPalettes[key][5];
});
var red = presetPalettes.red;
exports.red = red;
var volcano = presetPalettes.volcano;
exports.volcano = volcano;
var gold = presetPalettes.gold;
exports.gold = gold;
var orange = presetPalettes.orange;
exports.orange = orange;
var yellow = presetPalettes.yellow;
exports.yellow = yellow;
var lime = presetPalettes.lime;
exports.lime = lime;
var green = presetPalettes.green;
exports.green = green;
var cyan = presetPalettes.cyan;
exports.cyan = cyan;
var blue = presetPalettes.blue;
exports.blue = blue;
var geekblue = presetPalettes.geekblue;
exports.geekblue = geekblue;
var purple = presetPalettes.purple;
exports.purple = purple;
var magenta = presetPalettes.magenta;
exports.magenta = magenta;
var grey = presetPalettes.grey;
exports.grey = grey;


/***/ }),

/***/ "./node_modules/tinycolor2/tinycolor.js":
/*!**********************************************!*\
  !*** ./node_modules/tinycolor2/tinycolor.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;// TinyColor v1.4.1
// https://github.com/bgrins/TinyColor
// Brian Grinstead, MIT License

(function(Math) {

var trimLeft = /^\s+/,
    trimRight = /\s+$/,
    tinyCounter = 0,
    mathRound = Math.round,
    mathMin = Math.min,
    mathMax = Math.max,
    mathRandom = Math.random;

function tinycolor (color, opts) {

    color = (color) ? color : '';
    opts = opts || { };

    // If input is already a tinycolor, return itself
    if (color instanceof tinycolor) {
       return color;
    }
    // If we are called as a function, call using new instead
    if (!(this instanceof tinycolor)) {
        return new tinycolor(color, opts);
    }

    var rgb = inputToRGB(color);
    this._originalInput = color,
    this._r = rgb.r,
    this._g = rgb.g,
    this._b = rgb.b,
    this._a = rgb.a,
    this._roundA = mathRound(100*this._a) / 100,
    this._format = opts.format || rgb.format;
    this._gradientType = opts.gradientType;

    // Don't let the range of [0,255] come back in [0,1].
    // Potentially lose a little bit of precision here, but will fix issues where
    // .5 gets interpreted as half of the total, instead of half of 1
    // If it was supposed to be 128, this was already taken care of by `inputToRgb`
    if (this._r < 1) { this._r = mathRound(this._r); }
    if (this._g < 1) { this._g = mathRound(this._g); }
    if (this._b < 1) { this._b = mathRound(this._b); }

    this._ok = rgb.ok;
    this._tc_id = tinyCounter++;
}

tinycolor.prototype = {
    isDark: function() {
        return this.getBrightness() < 128;
    },
    isLight: function() {
        return !this.isDark();
    },
    isValid: function() {
        return this._ok;
    },
    getOriginalInput: function() {
      return this._originalInput;
    },
    getFormat: function() {
        return this._format;
    },
    getAlpha: function() {
        return this._a;
    },
    getBrightness: function() {
        //http://www.w3.org/TR/AERT#color-contrast
        var rgb = this.toRgb();
        return (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000;
    },
    getLuminance: function() {
        //http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
        var rgb = this.toRgb();
        var RsRGB, GsRGB, BsRGB, R, G, B;
        RsRGB = rgb.r/255;
        GsRGB = rgb.g/255;
        BsRGB = rgb.b/255;

        if (RsRGB <= 0.03928) {R = RsRGB / 12.92;} else {R = Math.pow(((RsRGB + 0.055) / 1.055), 2.4);}
        if (GsRGB <= 0.03928) {G = GsRGB / 12.92;} else {G = Math.pow(((GsRGB + 0.055) / 1.055), 2.4);}
        if (BsRGB <= 0.03928) {B = BsRGB / 12.92;} else {B = Math.pow(((BsRGB + 0.055) / 1.055), 2.4);}
        return (0.2126 * R) + (0.7152 * G) + (0.0722 * B);
    },
    setAlpha: function(value) {
        this._a = boundAlpha(value);
        this._roundA = mathRound(100*this._a) / 100;
        return this;
    },
    toHsv: function() {
        var hsv = rgbToHsv(this._r, this._g, this._b);
        return { h: hsv.h * 360, s: hsv.s, v: hsv.v, a: this._a };
    },
    toHsvString: function() {
        var hsv = rgbToHsv(this._r, this._g, this._b);
        var h = mathRound(hsv.h * 360), s = mathRound(hsv.s * 100), v = mathRound(hsv.v * 100);
        return (this._a == 1) ?
          "hsv("  + h + ", " + s + "%, " + v + "%)" :
          "hsva(" + h + ", " + s + "%, " + v + "%, "+ this._roundA + ")";
    },
    toHsl: function() {
        var hsl = rgbToHsl(this._r, this._g, this._b);
        return { h: hsl.h * 360, s: hsl.s, l: hsl.l, a: this._a };
    },
    toHslString: function() {
        var hsl = rgbToHsl(this._r, this._g, this._b);
        var h = mathRound(hsl.h * 360), s = mathRound(hsl.s * 100), l = mathRound(hsl.l * 100);
        return (this._a == 1) ?
          "hsl("  + h + ", " + s + "%, " + l + "%)" :
          "hsla(" + h + ", " + s + "%, " + l + "%, "+ this._roundA + ")";
    },
    toHex: function(allow3Char) {
        return rgbToHex(this._r, this._g, this._b, allow3Char);
    },
    toHexString: function(allow3Char) {
        return '#' + this.toHex(allow3Char);
    },
    toHex8: function(allow4Char) {
        return rgbaToHex(this._r, this._g, this._b, this._a, allow4Char);
    },
    toHex8String: function(allow4Char) {
        return '#' + this.toHex8(allow4Char);
    },
    toRgb: function() {
        return { r: mathRound(this._r), g: mathRound(this._g), b: mathRound(this._b), a: this._a };
    },
    toRgbString: function() {
        return (this._a == 1) ?
          "rgb("  + mathRound(this._r) + ", " + mathRound(this._g) + ", " + mathRound(this._b) + ")" :
          "rgba(" + mathRound(this._r) + ", " + mathRound(this._g) + ", " + mathRound(this._b) + ", " + this._roundA + ")";
    },
    toPercentageRgb: function() {
        return { r: mathRound(bound01(this._r, 255) * 100) + "%", g: mathRound(bound01(this._g, 255) * 100) + "%", b: mathRound(bound01(this._b, 255) * 100) + "%", a: this._a };
    },
    toPercentageRgbString: function() {
        return (this._a == 1) ?
          "rgb("  + mathRound(bound01(this._r, 255) * 100) + "%, " + mathRound(bound01(this._g, 255) * 100) + "%, " + mathRound(bound01(this._b, 255) * 100) + "%)" :
          "rgba(" + mathRound(bound01(this._r, 255) * 100) + "%, " + mathRound(bound01(this._g, 255) * 100) + "%, " + mathRound(bound01(this._b, 255) * 100) + "%, " + this._roundA + ")";
    },
    toName: function() {
        if (this._a === 0) {
            return "transparent";
        }

        if (this._a < 1) {
            return false;
        }

        return hexNames[rgbToHex(this._r, this._g, this._b, true)] || false;
    },
    toFilter: function(secondColor) {
        var hex8String = '#' + rgbaToArgbHex(this._r, this._g, this._b, this._a);
        var secondHex8String = hex8String;
        var gradientType = this._gradientType ? "GradientType = 1, " : "";

        if (secondColor) {
            var s = tinycolor(secondColor);
            secondHex8String = '#' + rgbaToArgbHex(s._r, s._g, s._b, s._a);
        }

        return "progid:DXImageTransform.Microsoft.gradient("+gradientType+"startColorstr="+hex8String+",endColorstr="+secondHex8String+")";
    },
    toString: function(format) {
        var formatSet = !!format;
        format = format || this._format;

        var formattedString = false;
        var hasAlpha = this._a < 1 && this._a >= 0;
        var needsAlphaFormat = !formatSet && hasAlpha && (format === "hex" || format === "hex6" || format === "hex3" || format === "hex4" || format === "hex8" || format === "name");

        if (needsAlphaFormat) {
            // Special case for "transparent", all other non-alpha formats
            // will return rgba when there is transparency.
            if (format === "name" && this._a === 0) {
                return this.toName();
            }
            return this.toRgbString();
        }
        if (format === "rgb") {
            formattedString = this.toRgbString();
        }
        if (format === "prgb") {
            formattedString = this.toPercentageRgbString();
        }
        if (format === "hex" || format === "hex6") {
            formattedString = this.toHexString();
        }
        if (format === "hex3") {
            formattedString = this.toHexString(true);
        }
        if (format === "hex4") {
            formattedString = this.toHex8String(true);
        }
        if (format === "hex8") {
            formattedString = this.toHex8String();
        }
        if (format === "name") {
            formattedString = this.toName();
        }
        if (format === "hsl") {
            formattedString = this.toHslString();
        }
        if (format === "hsv") {
            formattedString = this.toHsvString();
        }

        return formattedString || this.toHexString();
    },
    clone: function() {
        return tinycolor(this.toString());
    },

    _applyModification: function(fn, args) {
        var color = fn.apply(null, [this].concat([].slice.call(args)));
        this._r = color._r;
        this._g = color._g;
        this._b = color._b;
        this.setAlpha(color._a);
        return this;
    },
    lighten: function() {
        return this._applyModification(lighten, arguments);
    },
    brighten: function() {
        return this._applyModification(brighten, arguments);
    },
    darken: function() {
        return this._applyModification(darken, arguments);
    },
    desaturate: function() {
        return this._applyModification(desaturate, arguments);
    },
    saturate: function() {
        return this._applyModification(saturate, arguments);
    },
    greyscale: function() {
        return this._applyModification(greyscale, arguments);
    },
    spin: function() {
        return this._applyModification(spin, arguments);
    },

    _applyCombination: function(fn, args) {
        return fn.apply(null, [this].concat([].slice.call(args)));
    },
    analogous: function() {
        return this._applyCombination(analogous, arguments);
    },
    complement: function() {
        return this._applyCombination(complement, arguments);
    },
    monochromatic: function() {
        return this._applyCombination(monochromatic, arguments);
    },
    splitcomplement: function() {
        return this._applyCombination(splitcomplement, arguments);
    },
    triad: function() {
        return this._applyCombination(triad, arguments);
    },
    tetrad: function() {
        return this._applyCombination(tetrad, arguments);
    }
};

// If input is an object, force 1 into "1.0" to handle ratios properly
// String input requires "1.0" as input, so 1 will be treated as 1
tinycolor.fromRatio = function(color, opts) {
    if (typeof color == "object") {
        var newColor = {};
        for (var i in color) {
            if (color.hasOwnProperty(i)) {
                if (i === "a") {
                    newColor[i] = color[i];
                }
                else {
                    newColor[i] = convertToPercentage(color[i]);
                }
            }
        }
        color = newColor;
    }

    return tinycolor(color, opts);
};

// Given a string or object, convert that input to RGB
// Possible string inputs:
//
//     "red"
//     "#f00" or "f00"
//     "#ff0000" or "ff0000"
//     "#ff000000" or "ff000000"
//     "rgb 255 0 0" or "rgb (255, 0, 0)"
//     "rgb 1.0 0 0" or "rgb (1, 0, 0)"
//     "rgba (255, 0, 0, 1)" or "rgba 255, 0, 0, 1"
//     "rgba (1.0, 0, 0, 1)" or "rgba 1.0, 0, 0, 1"
//     "hsl(0, 100%, 50%)" or "hsl 0 100% 50%"
//     "hsla(0, 100%, 50%, 1)" or "hsla 0 100% 50%, 1"
//     "hsv(0, 100%, 100%)" or "hsv 0 100% 100%"
//
function inputToRGB(color) {

    var rgb = { r: 0, g: 0, b: 0 };
    var a = 1;
    var s = null;
    var v = null;
    var l = null;
    var ok = false;
    var format = false;

    if (typeof color == "string") {
        color = stringInputToObject(color);
    }

    if (typeof color == "object") {
        if (isValidCSSUnit(color.r) && isValidCSSUnit(color.g) && isValidCSSUnit(color.b)) {
            rgb = rgbToRgb(color.r, color.g, color.b);
            ok = true;
            format = String(color.r).substr(-1) === "%" ? "prgb" : "rgb";
        }
        else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.v)) {
            s = convertToPercentage(color.s);
            v = convertToPercentage(color.v);
            rgb = hsvToRgb(color.h, s, v);
            ok = true;
            format = "hsv";
        }
        else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.l)) {
            s = convertToPercentage(color.s);
            l = convertToPercentage(color.l);
            rgb = hslToRgb(color.h, s, l);
            ok = true;
            format = "hsl";
        }

        if (color.hasOwnProperty("a")) {
            a = color.a;
        }
    }

    a = boundAlpha(a);

    return {
        ok: ok,
        format: color.format || format,
        r: mathMin(255, mathMax(rgb.r, 0)),
        g: mathMin(255, mathMax(rgb.g, 0)),
        b: mathMin(255, mathMax(rgb.b, 0)),
        a: a
    };
}


// Conversion Functions
// --------------------

// `rgbToHsl`, `rgbToHsv`, `hslToRgb`, `hsvToRgb` modified from:
// <http://mjijackson.com/2008/02/rgb-to-hsl-and-rgb-to-hsv-color-model-conversion-algorithms-in-javascript>

// `rgbToRgb`
// Handle bounds / percentage checking to conform to CSS color spec
// <http://www.w3.org/TR/css3-color/>
// *Assumes:* r, g, b in [0, 255] or [0, 1]
// *Returns:* { r, g, b } in [0, 255]
function rgbToRgb(r, g, b){
    return {
        r: bound01(r, 255) * 255,
        g: bound01(g, 255) * 255,
        b: bound01(b, 255) * 255
    };
}

// `rgbToHsl`
// Converts an RGB color value to HSL.
// *Assumes:* r, g, and b are contained in [0, 255] or [0, 1]
// *Returns:* { h, s, l } in [0,1]
function rgbToHsl(r, g, b) {

    r = bound01(r, 255);
    g = bound01(g, 255);
    b = bound01(b, 255);

    var max = mathMax(r, g, b), min = mathMin(r, g, b);
    var h, s, l = (max + min) / 2;

    if(max == min) {
        h = s = 0; // achromatic
    }
    else {
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch(max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }

        h /= 6;
    }

    return { h: h, s: s, l: l };
}

// `hslToRgb`
// Converts an HSL color value to RGB.
// *Assumes:* h is contained in [0, 1] or [0, 360] and s and l are contained [0, 1] or [0, 100]
// *Returns:* { r, g, b } in the set [0, 255]
function hslToRgb(h, s, l) {
    var r, g, b;

    h = bound01(h, 360);
    s = bound01(s, 100);
    l = bound01(l, 100);

    function hue2rgb(p, q, t) {
        if(t < 0) t += 1;
        if(t > 1) t -= 1;
        if(t < 1/6) return p + (q - p) * 6 * t;
        if(t < 1/2) return q;
        if(t < 2/3) return p + (q - p) * (2/3 - t) * 6;
        return p;
    }

    if(s === 0) {
        r = g = b = l; // achromatic
    }
    else {
        var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        var p = 2 * l - q;
        r = hue2rgb(p, q, h + 1/3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1/3);
    }

    return { r: r * 255, g: g * 255, b: b * 255 };
}

// `rgbToHsv`
// Converts an RGB color value to HSV
// *Assumes:* r, g, and b are contained in the set [0, 255] or [0, 1]
// *Returns:* { h, s, v } in [0,1]
function rgbToHsv(r, g, b) {

    r = bound01(r, 255);
    g = bound01(g, 255);
    b = bound01(b, 255);

    var max = mathMax(r, g, b), min = mathMin(r, g, b);
    var h, s, v = max;

    var d = max - min;
    s = max === 0 ? 0 : d / max;

    if(max == min) {
        h = 0; // achromatic
    }
    else {
        switch(max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
    }
    return { h: h, s: s, v: v };
}

// `hsvToRgb`
// Converts an HSV color value to RGB.
// *Assumes:* h is contained in [0, 1] or [0, 360] and s and v are contained in [0, 1] or [0, 100]
// *Returns:* { r, g, b } in the set [0, 255]
 function hsvToRgb(h, s, v) {

    h = bound01(h, 360) * 6;
    s = bound01(s, 100);
    v = bound01(v, 100);

    var i = Math.floor(h),
        f = h - i,
        p = v * (1 - s),
        q = v * (1 - f * s),
        t = v * (1 - (1 - f) * s),
        mod = i % 6,
        r = [v, q, p, p, t, v][mod],
        g = [t, v, v, q, p, p][mod],
        b = [p, p, t, v, v, q][mod];

    return { r: r * 255, g: g * 255, b: b * 255 };
}

// `rgbToHex`
// Converts an RGB color to hex
// Assumes r, g, and b are contained in the set [0, 255]
// Returns a 3 or 6 character hex
function rgbToHex(r, g, b, allow3Char) {

    var hex = [
        pad2(mathRound(r).toString(16)),
        pad2(mathRound(g).toString(16)),
        pad2(mathRound(b).toString(16))
    ];

    // Return a 3 character hex if possible
    if (allow3Char && hex[0].charAt(0) == hex[0].charAt(1) && hex[1].charAt(0) == hex[1].charAt(1) && hex[2].charAt(0) == hex[2].charAt(1)) {
        return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0);
    }

    return hex.join("");
}

// `rgbaToHex`
// Converts an RGBA color plus alpha transparency to hex
// Assumes r, g, b are contained in the set [0, 255] and
// a in [0, 1]. Returns a 4 or 8 character rgba hex
function rgbaToHex(r, g, b, a, allow4Char) {

    var hex = [
        pad2(mathRound(r).toString(16)),
        pad2(mathRound(g).toString(16)),
        pad2(mathRound(b).toString(16)),
        pad2(convertDecimalToHex(a))
    ];

    // Return a 4 character hex if possible
    if (allow4Char && hex[0].charAt(0) == hex[0].charAt(1) && hex[1].charAt(0) == hex[1].charAt(1) && hex[2].charAt(0) == hex[2].charAt(1) && hex[3].charAt(0) == hex[3].charAt(1)) {
        return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0) + hex[3].charAt(0);
    }

    return hex.join("");
}

// `rgbaToArgbHex`
// Converts an RGBA color to an ARGB Hex8 string
// Rarely used, but required for "toFilter()"
function rgbaToArgbHex(r, g, b, a) {

    var hex = [
        pad2(convertDecimalToHex(a)),
        pad2(mathRound(r).toString(16)),
        pad2(mathRound(g).toString(16)),
        pad2(mathRound(b).toString(16))
    ];

    return hex.join("");
}

// `equals`
// Can be called with any tinycolor input
tinycolor.equals = function (color1, color2) {
    if (!color1 || !color2) { return false; }
    return tinycolor(color1).toRgbString() == tinycolor(color2).toRgbString();
};

tinycolor.random = function() {
    return tinycolor.fromRatio({
        r: mathRandom(),
        g: mathRandom(),
        b: mathRandom()
    });
};


// Modification Functions
// ----------------------
// Thanks to less.js for some of the basics here
// <https://github.com/cloudhead/less.js/blob/master/lib/less/functions.js>

function desaturate(color, amount) {
    amount = (amount === 0) ? 0 : (amount || 10);
    var hsl = tinycolor(color).toHsl();
    hsl.s -= amount / 100;
    hsl.s = clamp01(hsl.s);
    return tinycolor(hsl);
}

function saturate(color, amount) {
    amount = (amount === 0) ? 0 : (amount || 10);
    var hsl = tinycolor(color).toHsl();
    hsl.s += amount / 100;
    hsl.s = clamp01(hsl.s);
    return tinycolor(hsl);
}

function greyscale(color) {
    return tinycolor(color).desaturate(100);
}

function lighten (color, amount) {
    amount = (amount === 0) ? 0 : (amount || 10);
    var hsl = tinycolor(color).toHsl();
    hsl.l += amount / 100;
    hsl.l = clamp01(hsl.l);
    return tinycolor(hsl);
}

function brighten(color, amount) {
    amount = (amount === 0) ? 0 : (amount || 10);
    var rgb = tinycolor(color).toRgb();
    rgb.r = mathMax(0, mathMin(255, rgb.r - mathRound(255 * - (amount / 100))));
    rgb.g = mathMax(0, mathMin(255, rgb.g - mathRound(255 * - (amount / 100))));
    rgb.b = mathMax(0, mathMin(255, rgb.b - mathRound(255 * - (amount / 100))));
    return tinycolor(rgb);
}

function darken (color, amount) {
    amount = (amount === 0) ? 0 : (amount || 10);
    var hsl = tinycolor(color).toHsl();
    hsl.l -= amount / 100;
    hsl.l = clamp01(hsl.l);
    return tinycolor(hsl);
}

// Spin takes a positive or negative amount within [-360, 360] indicating the change of hue.
// Values outside of this range will be wrapped into this range.
function spin(color, amount) {
    var hsl = tinycolor(color).toHsl();
    var hue = (hsl.h + amount) % 360;
    hsl.h = hue < 0 ? 360 + hue : hue;
    return tinycolor(hsl);
}

// Combination Functions
// ---------------------
// Thanks to jQuery xColor for some of the ideas behind these
// <https://github.com/infusion/jQuery-xcolor/blob/master/jquery.xcolor.js>

function complement(color) {
    var hsl = tinycolor(color).toHsl();
    hsl.h = (hsl.h + 180) % 360;
    return tinycolor(hsl);
}

function triad(color) {
    var hsl = tinycolor(color).toHsl();
    var h = hsl.h;
    return [
        tinycolor(color),
        tinycolor({ h: (h + 120) % 360, s: hsl.s, l: hsl.l }),
        tinycolor({ h: (h + 240) % 360, s: hsl.s, l: hsl.l })
    ];
}

function tetrad(color) {
    var hsl = tinycolor(color).toHsl();
    var h = hsl.h;
    return [
        tinycolor(color),
        tinycolor({ h: (h + 90) % 360, s: hsl.s, l: hsl.l }),
        tinycolor({ h: (h + 180) % 360, s: hsl.s, l: hsl.l }),
        tinycolor({ h: (h + 270) % 360, s: hsl.s, l: hsl.l })
    ];
}

function splitcomplement(color) {
    var hsl = tinycolor(color).toHsl();
    var h = hsl.h;
    return [
        tinycolor(color),
        tinycolor({ h: (h + 72) % 360, s: hsl.s, l: hsl.l}),
        tinycolor({ h: (h + 216) % 360, s: hsl.s, l: hsl.l})
    ];
}

function analogous(color, results, slices) {
    results = results || 6;
    slices = slices || 30;

    var hsl = tinycolor(color).toHsl();
    var part = 360 / slices;
    var ret = [tinycolor(color)];

    for (hsl.h = ((hsl.h - (part * results >> 1)) + 720) % 360; --results; ) {
        hsl.h = (hsl.h + part) % 360;
        ret.push(tinycolor(hsl));
    }
    return ret;
}

function monochromatic(color, results) {
    results = results || 6;
    var hsv = tinycolor(color).toHsv();
    var h = hsv.h, s = hsv.s, v = hsv.v;
    var ret = [];
    var modification = 1 / results;

    while (results--) {
        ret.push(tinycolor({ h: h, s: s, v: v}));
        v = (v + modification) % 1;
    }

    return ret;
}

// Utility Functions
// ---------------------

tinycolor.mix = function(color1, color2, amount) {
    amount = (amount === 0) ? 0 : (amount || 50);

    var rgb1 = tinycolor(color1).toRgb();
    var rgb2 = tinycolor(color2).toRgb();

    var p = amount / 100;

    var rgba = {
        r: ((rgb2.r - rgb1.r) * p) + rgb1.r,
        g: ((rgb2.g - rgb1.g) * p) + rgb1.g,
        b: ((rgb2.b - rgb1.b) * p) + rgb1.b,
        a: ((rgb2.a - rgb1.a) * p) + rgb1.a
    };

    return tinycolor(rgba);
};


// Readability Functions
// ---------------------
// <http://www.w3.org/TR/2008/REC-WCAG20-20081211/#contrast-ratiodef (WCAG Version 2)

// `contrast`
// Analyze the 2 colors and returns the color contrast defined by (WCAG Version 2)
tinycolor.readability = function(color1, color2) {
    var c1 = tinycolor(color1);
    var c2 = tinycolor(color2);
    return (Math.max(c1.getLuminance(),c2.getLuminance())+0.05) / (Math.min(c1.getLuminance(),c2.getLuminance())+0.05);
};

// `isReadable`
// Ensure that foreground and background color combinations meet WCAG2 guidelines.
// The third argument is an optional Object.
//      the 'level' property states 'AA' or 'AAA' - if missing or invalid, it defaults to 'AA';
//      the 'size' property states 'large' or 'small' - if missing or invalid, it defaults to 'small'.
// If the entire object is absent, isReadable defaults to {level:"AA",size:"small"}.

// *Example*
//    tinycolor.isReadable("#000", "#111") => false
//    tinycolor.isReadable("#000", "#111",{level:"AA",size:"large"}) => false
tinycolor.isReadable = function(color1, color2, wcag2) {
    var readability = tinycolor.readability(color1, color2);
    var wcag2Parms, out;

    out = false;

    wcag2Parms = validateWCAG2Parms(wcag2);
    switch (wcag2Parms.level + wcag2Parms.size) {
        case "AAsmall":
        case "AAAlarge":
            out = readability >= 4.5;
            break;
        case "AAlarge":
            out = readability >= 3;
            break;
        case "AAAsmall":
            out = readability >= 7;
            break;
    }
    return out;

};

// `mostReadable`
// Given a base color and a list of possible foreground or background
// colors for that base, returns the most readable color.
// Optionally returns Black or White if the most readable color is unreadable.
// *Example*
//    tinycolor.mostReadable(tinycolor.mostReadable("#123", ["#124", "#125"],{includeFallbackColors:false}).toHexString(); // "#112255"
//    tinycolor.mostReadable(tinycolor.mostReadable("#123", ["#124", "#125"],{includeFallbackColors:true}).toHexString();  // "#ffffff"
//    tinycolor.mostReadable("#a8015a", ["#faf3f3"],{includeFallbackColors:true,level:"AAA",size:"large"}).toHexString(); // "#faf3f3"
//    tinycolor.mostReadable("#a8015a", ["#faf3f3"],{includeFallbackColors:true,level:"AAA",size:"small"}).toHexString(); // "#ffffff"
tinycolor.mostReadable = function(baseColor, colorList, args) {
    var bestColor = null;
    var bestScore = 0;
    var readability;
    var includeFallbackColors, level, size ;
    args = args || {};
    includeFallbackColors = args.includeFallbackColors ;
    level = args.level;
    size = args.size;

    for (var i= 0; i < colorList.length ; i++) {
        readability = tinycolor.readability(baseColor, colorList[i]);
        if (readability > bestScore) {
            bestScore = readability;
            bestColor = tinycolor(colorList[i]);
        }
    }

    if (tinycolor.isReadable(baseColor, bestColor, {"level":level,"size":size}) || !includeFallbackColors) {
        return bestColor;
    }
    else {
        args.includeFallbackColors=false;
        return tinycolor.mostReadable(baseColor,["#fff", "#000"],args);
    }
};


// Big List of Colors
// ------------------
// <http://www.w3.org/TR/css3-color/#svg-color>
var names = tinycolor.names = {
    aliceblue: "f0f8ff",
    antiquewhite: "faebd7",
    aqua: "0ff",
    aquamarine: "7fffd4",
    azure: "f0ffff",
    beige: "f5f5dc",
    bisque: "ffe4c4",
    black: "000",
    blanchedalmond: "ffebcd",
    blue: "00f",
    blueviolet: "8a2be2",
    brown: "a52a2a",
    burlywood: "deb887",
    burntsienna: "ea7e5d",
    cadetblue: "5f9ea0",
    chartreuse: "7fff00",
    chocolate: "d2691e",
    coral: "ff7f50",
    cornflowerblue: "6495ed",
    cornsilk: "fff8dc",
    crimson: "dc143c",
    cyan: "0ff",
    darkblue: "00008b",
    darkcyan: "008b8b",
    darkgoldenrod: "b8860b",
    darkgray: "a9a9a9",
    darkgreen: "006400",
    darkgrey: "a9a9a9",
    darkkhaki: "bdb76b",
    darkmagenta: "8b008b",
    darkolivegreen: "556b2f",
    darkorange: "ff8c00",
    darkorchid: "9932cc",
    darkred: "8b0000",
    darksalmon: "e9967a",
    darkseagreen: "8fbc8f",
    darkslateblue: "483d8b",
    darkslategray: "2f4f4f",
    darkslategrey: "2f4f4f",
    darkturquoise: "00ced1",
    darkviolet: "9400d3",
    deeppink: "ff1493",
    deepskyblue: "00bfff",
    dimgray: "696969",
    dimgrey: "696969",
    dodgerblue: "1e90ff",
    firebrick: "b22222",
    floralwhite: "fffaf0",
    forestgreen: "228b22",
    fuchsia: "f0f",
    gainsboro: "dcdcdc",
    ghostwhite: "f8f8ff",
    gold: "ffd700",
    goldenrod: "daa520",
    gray: "808080",
    green: "008000",
    greenyellow: "adff2f",
    grey: "808080",
    honeydew: "f0fff0",
    hotpink: "ff69b4",
    indianred: "cd5c5c",
    indigo: "4b0082",
    ivory: "fffff0",
    khaki: "f0e68c",
    lavender: "e6e6fa",
    lavenderblush: "fff0f5",
    lawngreen: "7cfc00",
    lemonchiffon: "fffacd",
    lightblue: "add8e6",
    lightcoral: "f08080",
    lightcyan: "e0ffff",
    lightgoldenrodyellow: "fafad2",
    lightgray: "d3d3d3",
    lightgreen: "90ee90",
    lightgrey: "d3d3d3",
    lightpink: "ffb6c1",
    lightsalmon: "ffa07a",
    lightseagreen: "20b2aa",
    lightskyblue: "87cefa",
    lightslategray: "789",
    lightslategrey: "789",
    lightsteelblue: "b0c4de",
    lightyellow: "ffffe0",
    lime: "0f0",
    limegreen: "32cd32",
    linen: "faf0e6",
    magenta: "f0f",
    maroon: "800000",
    mediumaquamarine: "66cdaa",
    mediumblue: "0000cd",
    mediumorchid: "ba55d3",
    mediumpurple: "9370db",
    mediumseagreen: "3cb371",
    mediumslateblue: "7b68ee",
    mediumspringgreen: "00fa9a",
    mediumturquoise: "48d1cc",
    mediumvioletred: "c71585",
    midnightblue: "191970",
    mintcream: "f5fffa",
    mistyrose: "ffe4e1",
    moccasin: "ffe4b5",
    navajowhite: "ffdead",
    navy: "000080",
    oldlace: "fdf5e6",
    olive: "808000",
    olivedrab: "6b8e23",
    orange: "ffa500",
    orangered: "ff4500",
    orchid: "da70d6",
    palegoldenrod: "eee8aa",
    palegreen: "98fb98",
    paleturquoise: "afeeee",
    palevioletred: "db7093",
    papayawhip: "ffefd5",
    peachpuff: "ffdab9",
    peru: "cd853f",
    pink: "ffc0cb",
    plum: "dda0dd",
    powderblue: "b0e0e6",
    purple: "800080",
    rebeccapurple: "663399",
    red: "f00",
    rosybrown: "bc8f8f",
    royalblue: "4169e1",
    saddlebrown: "8b4513",
    salmon: "fa8072",
    sandybrown: "f4a460",
    seagreen: "2e8b57",
    seashell: "fff5ee",
    sienna: "a0522d",
    silver: "c0c0c0",
    skyblue: "87ceeb",
    slateblue: "6a5acd",
    slategray: "708090",
    slategrey: "708090",
    snow: "fffafa",
    springgreen: "00ff7f",
    steelblue: "4682b4",
    tan: "d2b48c",
    teal: "008080",
    thistle: "d8bfd8",
    tomato: "ff6347",
    turquoise: "40e0d0",
    violet: "ee82ee",
    wheat: "f5deb3",
    white: "fff",
    whitesmoke: "f5f5f5",
    yellow: "ff0",
    yellowgreen: "9acd32"
};

// Make it easy to access colors via `hexNames[hex]`
var hexNames = tinycolor.hexNames = flip(names);


// Utilities
// ---------

// `{ 'name1': 'val1' }` becomes `{ 'val1': 'name1' }`
function flip(o) {
    var flipped = { };
    for (var i in o) {
        if (o.hasOwnProperty(i)) {
            flipped[o[i]] = i;
        }
    }
    return flipped;
}

// Return a valid alpha value [0,1] with all invalid values being set to 1
function boundAlpha(a) {
    a = parseFloat(a);

    if (isNaN(a) || a < 0 || a > 1) {
        a = 1;
    }

    return a;
}

// Take input from [0, n] and return it as [0, 1]
function bound01(n, max) {
    if (isOnePointZero(n)) { n = "100%"; }

    var processPercent = isPercentage(n);
    n = mathMin(max, mathMax(0, parseFloat(n)));

    // Automatically convert percentage into number
    if (processPercent) {
        n = parseInt(n * max, 10) / 100;
    }

    // Handle floating point rounding errors
    if ((Math.abs(n - max) < 0.000001)) {
        return 1;
    }

    // Convert into [0, 1] range if it isn't already
    return (n % max) / parseFloat(max);
}

// Force a number between 0 and 1
function clamp01(val) {
    return mathMin(1, mathMax(0, val));
}

// Parse a base-16 hex value into a base-10 integer
function parseIntFromHex(val) {
    return parseInt(val, 16);
}

// Need to handle 1.0 as 100%, since once it is a number, there is no difference between it and 1
// <http://stackoverflow.com/questions/7422072/javascript-how-to-detect-number-as-a-decimal-including-1-0>
function isOnePointZero(n) {
    return typeof n == "string" && n.indexOf('.') != -1 && parseFloat(n) === 1;
}

// Check to see if string passed in is a percentage
function isPercentage(n) {
    return typeof n === "string" && n.indexOf('%') != -1;
}

// Force a hex value to have 2 characters
function pad2(c) {
    return c.length == 1 ? '0' + c : '' + c;
}

// Replace a decimal with it's percentage value
function convertToPercentage(n) {
    if (n <= 1) {
        n = (n * 100) + "%";
    }

    return n;
}

// Converts a decimal to a hex value
function convertDecimalToHex(d) {
    return Math.round(parseFloat(d) * 255).toString(16);
}
// Converts a hex value to a decimal
function convertHexToDecimal(h) {
    return (parseIntFromHex(h) / 255);
}

var matchers = (function() {

    // <http://www.w3.org/TR/css3-values/#integers>
    var CSS_INTEGER = "[-\\+]?\\d+%?";

    // <http://www.w3.org/TR/css3-values/#number-value>
    var CSS_NUMBER = "[-\\+]?\\d*\\.\\d+%?";

    // Allow positive/negative integer/number.  Don't capture the either/or, just the entire outcome.
    var CSS_UNIT = "(?:" + CSS_NUMBER + ")|(?:" + CSS_INTEGER + ")";

    // Actual matching.
    // Parentheses and commas are optional, but not required.
    // Whitespace can take the place of commas or opening paren
    var PERMISSIVE_MATCH3 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";
    var PERMISSIVE_MATCH4 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";

    return {
        CSS_UNIT: new RegExp(CSS_UNIT),
        rgb: new RegExp("rgb" + PERMISSIVE_MATCH3),
        rgba: new RegExp("rgba" + PERMISSIVE_MATCH4),
        hsl: new RegExp("hsl" + PERMISSIVE_MATCH3),
        hsla: new RegExp("hsla" + PERMISSIVE_MATCH4),
        hsv: new RegExp("hsv" + PERMISSIVE_MATCH3),
        hsva: new RegExp("hsva" + PERMISSIVE_MATCH4),
        hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
        hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
    };
})();

// `isValidCSSUnit`
// Take in a single string / number and check to see if it looks like a CSS unit
// (see `matchers` above for definition).
function isValidCSSUnit(color) {
    return !!matchers.CSS_UNIT.exec(color);
}

// `stringInputToObject`
// Permissive string parsing.  Take in a number of formats, and output an object
// based on detected format.  Returns `{ r, g, b }` or `{ h, s, l }` or `{ h, s, v}`
function stringInputToObject(color) {

    color = color.replace(trimLeft,'').replace(trimRight, '').toLowerCase();
    var named = false;
    if (names[color]) {
        color = names[color];
        named = true;
    }
    else if (color == 'transparent') {
        return { r: 0, g: 0, b: 0, a: 0, format: "name" };
    }

    // Try to match string input using regular expressions.
    // Keep most of the number bounding out of this function - don't worry about [0,1] or [0,100] or [0,360]
    // Just return an object and let the conversion functions handle that.
    // This way the result will be the same whether the tinycolor is initialized with string or object.
    var match;
    if ((match = matchers.rgb.exec(color))) {
        return { r: match[1], g: match[2], b: match[3] };
    }
    if ((match = matchers.rgba.exec(color))) {
        return { r: match[1], g: match[2], b: match[3], a: match[4] };
    }
    if ((match = matchers.hsl.exec(color))) {
        return { h: match[1], s: match[2], l: match[3] };
    }
    if ((match = matchers.hsla.exec(color))) {
        return { h: match[1], s: match[2], l: match[3], a: match[4] };
    }
    if ((match = matchers.hsv.exec(color))) {
        return { h: match[1], s: match[2], v: match[3] };
    }
    if ((match = matchers.hsva.exec(color))) {
        return { h: match[1], s: match[2], v: match[3], a: match[4] };
    }
    if ((match = matchers.hex8.exec(color))) {
        return {
            r: parseIntFromHex(match[1]),
            g: parseIntFromHex(match[2]),
            b: parseIntFromHex(match[3]),
            a: convertHexToDecimal(match[4]),
            format: named ? "name" : "hex8"
        };
    }
    if ((match = matchers.hex6.exec(color))) {
        return {
            r: parseIntFromHex(match[1]),
            g: parseIntFromHex(match[2]),
            b: parseIntFromHex(match[3]),
            format: named ? "name" : "hex"
        };
    }
    if ((match = matchers.hex4.exec(color))) {
        return {
            r: parseIntFromHex(match[1] + '' + match[1]),
            g: parseIntFromHex(match[2] + '' + match[2]),
            b: parseIntFromHex(match[3] + '' + match[3]),
            a: convertHexToDecimal(match[4] + '' + match[4]),
            format: named ? "name" : "hex8"
        };
    }
    if ((match = matchers.hex3.exec(color))) {
        return {
            r: parseIntFromHex(match[1] + '' + match[1]),
            g: parseIntFromHex(match[2] + '' + match[2]),
            b: parseIntFromHex(match[3] + '' + match[3]),
            format: named ? "name" : "hex"
        };
    }

    return false;
}

function validateWCAG2Parms(parms) {
    // return valid WCAG2 parms for isReadable.
    // If input parms are invalid, return {"level":"AA", "size":"small"}
    var level, size;
    parms = parms || {"level":"AA", "size":"small"};
    level = (parms.level || "AA").toUpperCase();
    size = (parms.size || "small").toLowerCase();
    if (level !== "AA" && level !== "AAA") {
        level = "AA";
    }
    if (size !== "small" && size !== "large") {
        size = "small";
    }
    return {"level":level, "size":size};
}

// Node: Export function
if ( true && module.exports) {
    module.exports = tinycolor;
}
// AMD/requirejs: Define the module
else if (true) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {return tinycolor;}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}
// Browser: Expose to window
else {}

})(Math);


/***/ }),

/***/ "./src/code.ts":
/*!*********************!*\
  !*** ./src/code.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_ant_design_colors_lib_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/@ant-design/colors/lib/index */ "./node_modules/@ant-design/colors/lib/index.js");
/* harmony import */ var _node_modules_ant_design_colors_lib_index__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_ant_design_colors_lib_index__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_tinycolor2_tinycolor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/tinycolor2/tinycolor */ "./node_modules/tinycolor2/tinycolor.js");
/* harmony import */ var _node_modules_tinycolor2_tinycolor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_tinycolor2_tinycolor__WEBPACK_IMPORTED_MODULE_1__);
figma.showUI(__html__, { height: 400 });


// Generate color palettes by a given color
function formatRgb(color) {
    let clr = _node_modules_tinycolor2_tinycolor__WEBPACK_IMPORTED_MODULE_1___default()(color);
    return {
        r: clr._r / 255,
        g: clr._g / 255,
        b: clr._b / 255
    };
}
function createColorBlocks(primaryColor, darkBgColor) {
    let colorsLight = Object(_node_modules_ant_design_colors_lib_index__WEBPACK_IMPORTED_MODULE_0__["generate"])(primaryColor);
    let colorsDark = Object(_node_modules_ant_design_colors_lib_index__WEBPACK_IMPORTED_MODULE_0__["generate"])(primaryColor, {
        theme: 'dark',
        backgroundColor: darkBgColor
    });
    const colorSets = [colorsLight, colorsDark];
    colorSets.forEach(function (colors, idx) {
        const nodes = [];
        for (let i = 0; i < colors.length; i++) {
            const rect = figma.createRectangle();
            rect.x = i * 128;
            if (idx > 0) {
                rect.y = 152;
            }
            //rect.fills = [{type: 'SOLID', color: {r:1, g:1, b: 1 }}]
            rect.fills = [{ type: 'SOLID', color: formatRgb(colors[i]) }];
            figma.currentPage.appendChild(rect);
            nodes.push(rect);
            figma.currentPage.selection = nodes;
            figma.viewport.scrollAndZoomIntoView(nodes);
        }
    });
}
figma.ui.onmessage = msg => {
    if (msg.type === 'generate') {
        createColorBlocks(msg.primaryHex, msg.darkBgHex);
    }
    figma.closePlugin();
};


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BhbnQtZGVzaWduL2NvbG9ycy9saWIvZ2VuZXJhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BhbnQtZGVzaWduL2NvbG9ycy9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Rpbnljb2xvcjIvdGlueWNvbG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9jb2RlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRmE7QUFDYjtBQUNBLDRDQUE0QztBQUM1QztBQUNBLDhDQUE4QyxjQUFjO0FBQzVELG1DQUFtQyxtQkFBTyxDQUFDLDBEQUFZO0FBQ3ZELGdCQUFnQjtBQUNoQix3QkFBd0I7QUFDeEIsd0JBQXdCO0FBQ3hCLHdCQUF3QjtBQUN4Qix5QkFBeUI7QUFDekIsd0JBQXdCO0FBQ3hCLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0EsS0FBSywwQkFBMEI7QUFDL0IsS0FBSywwQkFBMEI7QUFDL0IsS0FBSyx5QkFBeUI7QUFDOUIsS0FBSywwQkFBMEI7QUFDL0IsS0FBSywwQkFBMEI7QUFDL0IsS0FBSywwQkFBMEI7QUFDL0IsS0FBSyx5QkFBeUI7QUFDOUIsS0FBSywwQkFBMEI7QUFDL0IsS0FBSywwQkFBMEI7QUFDL0IsS0FBSywwQkFBMEI7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixXQUFXO0FBQ3JDO0FBQ0E7QUFDQSxpQ0FBaUMsT0FBTztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixxQkFBcUI7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2hIYTtBQUNiO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQsaUNBQWlDLG1CQUFPLENBQUMscUVBQVk7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDOURBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLG9CQUFvQjs7QUFFcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsOEJBQThCO0FBQ3BELHNCQUFzQiw4QkFBOEI7QUFDcEQsc0JBQXNCLDhCQUE4Qjs7QUFFcEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsK0JBQStCLG1CQUFtQixPQUFPO0FBQ3pELCtCQUErQixtQkFBbUIsT0FBTztBQUN6RCwrQkFBK0IsbUJBQW1CLE9BQU87QUFDekQ7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEIsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsZ0JBQWdCO0FBQ2hCLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLGdCQUFnQjtBQUNoQixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsVUFBVTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFVBQVU7QUFDekI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNEQUFzRDtBQUN0RCx3Q0FBd0M7QUFDeEMsd0NBQXdDO0FBQ3hDOztBQUVBO0FBQ0E7O0FBRUEsWUFBWTtBQUNaOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsVUFBVTtBQUN6QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsWUFBWTtBQUNaOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsVUFBVTtBQUN6Qjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBLHNEQUFzRDtBQUN0RCx3Q0FBd0M7QUFDeEMsd0NBQXdDO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFVBQVU7QUFDekI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsY0FBYztBQUMzQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHlDQUF5QztBQUM1RCxtQkFBbUIseUNBQXlDO0FBQzVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQix3Q0FBd0M7QUFDM0QsbUJBQW1CLHlDQUF5QztBQUM1RCxtQkFBbUIseUNBQXlDO0FBQzVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQix1Q0FBdUM7QUFDMUQsbUJBQW1CLHdDQUF3QztBQUMzRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsK0RBQStELFdBQVc7QUFDMUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0QkFBNEIsa0JBQWtCO0FBQzlDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyREFBMkQsd0JBQXdCOztBQUVuRjtBQUNBO0FBQ0EsMkNBQTJDLHdCQUF3QjtBQUNuRTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEVBQThFLDRCQUE0QixnQkFBZ0I7QUFDMUgsOEVBQThFLDJCQUEyQixnQkFBZ0I7QUFDekgscURBQXFELG9EQUFvRCxnQkFBZ0I7QUFDekgscURBQXFELG9EQUFvRCxnQkFBZ0I7QUFDekg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGtCQUFrQix1QkFBdUI7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9EQUFvRCwwQkFBMEI7QUFDOUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUEsS0FBSyxrQkFBa0IsWUFBWSxrQkFBa0I7QUFDckQ7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0QkFBNEIsWUFBWTs7QUFFeEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFFO0FBQ2pFLCtCQUErQixFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUU7QUFDakUsK0JBQStCLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUU7QUFDakYsK0JBQStCLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUU7QUFDakY7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esd0NBQXdDLFVBQVUsT0FBTyxVQUFVLE9BQU8sU0FBUztBQUNuRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMkNBQTJDO0FBQzNDO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQSxJQUFJLEtBQTZCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBLFNBQVMsSUFBMEM7QUFDbkQsSUFBSSxtQ0FBTyxhQUFhLGtCQUFrQjtBQUFBLG9HQUFDO0FBQzNDO0FBQ0E7QUFDQSxLQUFLLEVBRUo7O0FBRUQsQ0FBQzs7Ozs7Ozs7Ozs7OztBQzFxQ0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQUF3QixjQUFjO0FBQ2tDO0FBQ1g7QUFDN0Q7QUFDQTtBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsMEZBQVE7QUFDOUIscUJBQXFCLDBGQUFRO0FBQzdCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLG1CQUFtQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLHVCQUF1QixpQkFBaUI7QUFDckUsMkJBQTJCLDZDQUE2QztBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImNvZGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9jb2RlLnRzXCIpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgdGlueWNvbG9yMl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJ0aW55Y29sb3IyXCIpKTtcbnZhciBodWVTdGVwID0gMjsgLy8g6Imy55u46Zi25qKvXG52YXIgc2F0dXJhdGlvblN0ZXAgPSAxNjsgLy8g6aWx5ZKM5bqm6Zi25qKv77yM5rWF6Imy6YOo5YiGXG52YXIgc2F0dXJhdGlvblN0ZXAyID0gNTsgLy8g6aWx5ZKM5bqm6Zi25qKv77yM5rex6Imy6YOo5YiGXG52YXIgYnJpZ2h0bmVzc1N0ZXAxID0gNTsgLy8g5Lqu5bqm6Zi25qKv77yM5rWF6Imy6YOo5YiGXG52YXIgYnJpZ2h0bmVzc1N0ZXAyID0gMTU7IC8vIOS6ruW6pumYtuair++8jOa3seiJsumDqOWIhlxudmFyIGxpZ2h0Q29sb3JDb3VudCA9IDU7IC8vIOa1heiJsuaVsOmHj++8jOS4u+iJsuS4ilxudmFyIGRhcmtDb2xvckNvdW50ID0gNDsgLy8g5rex6Imy5pWw6YeP77yM5Li76Imy5LiLXG4vLyDmmpfoibLkuLvpopjpopzoibLmmKDlsITlhbPns7vooahcbnZhciBkYXJrQ29sb3JNYXAgPSBbXG4gICAgeyBpbmRleDogNywgb3BhY2l0eTogMC4xNSB9LFxuICAgIHsgaW5kZXg6IDYsIG9wYWNpdHk6IDAuMjUgfSxcbiAgICB7IGluZGV4OiA1LCBvcGFjaXR5OiAwLjMgfSxcbiAgICB7IGluZGV4OiA1LCBvcGFjaXR5OiAwLjQ1IH0sXG4gICAgeyBpbmRleDogNSwgb3BhY2l0eTogMC42NSB9LFxuICAgIHsgaW5kZXg6IDUsIG9wYWNpdHk6IDAuODUgfSxcbiAgICB7IGluZGV4OiA0LCBvcGFjaXR5OiAwLjkgfSxcbiAgICB7IGluZGV4OiAzLCBvcGFjaXR5OiAwLjk1IH0sXG4gICAgeyBpbmRleDogMiwgb3BhY2l0eTogMC45NyB9LFxuICAgIHsgaW5kZXg6IDEsIG9wYWNpdHk6IDAuOTggfSxcbl07XG5mdW5jdGlvbiBnZXRIdWUoaHN2LCBpLCBsaWdodCkge1xuICAgIHZhciBodWU7XG4gICAgLy8g5qC55o2u6Imy55u45LiN5ZCM77yM6Imy55u46L2s5ZCR5LiN5ZCMXG4gICAgaWYgKE1hdGgucm91bmQoaHN2LmgpID49IDYwICYmIE1hdGgucm91bmQoaHN2LmgpIDw9IDI0MCkge1xuICAgICAgICBodWUgPSBsaWdodCA/IE1hdGgucm91bmQoaHN2LmgpIC0gaHVlU3RlcCAqIGkgOiBNYXRoLnJvdW5kKGhzdi5oKSArIGh1ZVN0ZXAgKiBpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgaHVlID0gbGlnaHQgPyBNYXRoLnJvdW5kKGhzdi5oKSArIGh1ZVN0ZXAgKiBpIDogTWF0aC5yb3VuZChoc3YuaCkgLSBodWVTdGVwICogaTtcbiAgICB9XG4gICAgaWYgKGh1ZSA8IDApIHtcbiAgICAgICAgaHVlICs9IDM2MDtcbiAgICB9XG4gICAgZWxzZSBpZiAoaHVlID49IDM2MCkge1xuICAgICAgICBodWUgLT0gMzYwO1xuICAgIH1cbiAgICByZXR1cm4gaHVlO1xufVxuZnVuY3Rpb24gZ2V0U2F0dXJhdGlvbihoc3YsIGksIGxpZ2h0KSB7XG4gICAgLy8gZ3JleSBjb2xvciBkb24ndCBjaGFuZ2Ugc2F0dXJhdGlvblxuICAgIGlmIChoc3YuaCA9PT0gMCAmJiBoc3YucyA9PT0gMCkge1xuICAgICAgICByZXR1cm4gaHN2LnM7XG4gICAgfVxuICAgIHZhciBzYXR1cmF0aW9uO1xuICAgIGlmIChsaWdodCkge1xuICAgICAgICBzYXR1cmF0aW9uID0gTWF0aC5yb3VuZChoc3YucyAqIDEwMCkgLSBzYXR1cmF0aW9uU3RlcCAqIGk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGkgPT09IGRhcmtDb2xvckNvdW50KSB7XG4gICAgICAgIHNhdHVyYXRpb24gPSBNYXRoLnJvdW5kKGhzdi5zICogMTAwKSArIHNhdHVyYXRpb25TdGVwO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgc2F0dXJhdGlvbiA9IE1hdGgucm91bmQoaHN2LnMgKiAxMDApICsgc2F0dXJhdGlvblN0ZXAyICogaTtcbiAgICB9XG4gICAgLy8g6L6555WM5YC85L+u5q2jXG4gICAgaWYgKHNhdHVyYXRpb24gPiAxMDApIHtcbiAgICAgICAgc2F0dXJhdGlvbiA9IDEwMDtcbiAgICB9XG4gICAgLy8g56ys5LiA5qC855qEIHMg6ZmQ5Yi25ZyoIDYtMTAg5LmL6Ze0XG4gICAgaWYgKGxpZ2h0ICYmIGkgPT09IGxpZ2h0Q29sb3JDb3VudCAmJiBzYXR1cmF0aW9uID4gMTApIHtcbiAgICAgICAgc2F0dXJhdGlvbiA9IDEwO1xuICAgIH1cbiAgICBpZiAoc2F0dXJhdGlvbiA8IDYpIHtcbiAgICAgICAgc2F0dXJhdGlvbiA9IDY7XG4gICAgfVxuICAgIHJldHVybiBzYXR1cmF0aW9uO1xufVxuZnVuY3Rpb24gZ2V0VmFsdWUoaHN2LCBpLCBsaWdodCkge1xuICAgIGlmIChsaWdodCkge1xuICAgICAgICByZXR1cm4gTWF0aC5yb3VuZChoc3YudiAqIDEwMCkgKyBicmlnaHRuZXNzU3RlcDEgKiBpO1xuICAgIH1cbiAgICByZXR1cm4gTWF0aC5yb3VuZChoc3YudiAqIDEwMCkgLSBicmlnaHRuZXNzU3RlcDIgKiBpO1xufVxuZnVuY3Rpb24gZ2VuZXJhdGUoY29sb3IsIG9wdHMpIHtcbiAgICBpZiAob3B0cyA9PT0gdm9pZCAwKSB7IG9wdHMgPSB7fTsgfVxuICAgIHZhciBwYXR0ZXJucyA9IFtdO1xuICAgIHZhciBwQ29sb3IgPSB0aW55Y29sb3IyXzEuZGVmYXVsdChjb2xvcik7XG4gICAgZm9yICh2YXIgaSA9IGxpZ2h0Q29sb3JDb3VudDsgaSA+IDA7IGkgLT0gMSkge1xuICAgICAgICB2YXIgaHN2ID0gcENvbG9yLnRvSHN2KCk7XG4gICAgICAgIHZhciBjb2xvclN0cmluZyA9IHRpbnljb2xvcjJfMS5kZWZhdWx0KHtcbiAgICAgICAgICAgIGg6IGdldEh1ZShoc3YsIGksIHRydWUpLFxuICAgICAgICAgICAgczogZ2V0U2F0dXJhdGlvbihoc3YsIGksIHRydWUpLFxuICAgICAgICAgICAgdjogZ2V0VmFsdWUoaHN2LCBpLCB0cnVlKSxcbiAgICAgICAgfSkudG9IZXhTdHJpbmcoKTtcbiAgICAgICAgcGF0dGVybnMucHVzaChjb2xvclN0cmluZyk7XG4gICAgfVxuICAgIHBhdHRlcm5zLnB1c2gocENvbG9yLnRvSGV4U3RyaW5nKCkpO1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDw9IGRhcmtDb2xvckNvdW50OyBpICs9IDEpIHtcbiAgICAgICAgdmFyIGhzdiA9IHBDb2xvci50b0hzdigpO1xuICAgICAgICB2YXIgY29sb3JTdHJpbmcgPSB0aW55Y29sb3IyXzEuZGVmYXVsdCh7XG4gICAgICAgICAgICBoOiBnZXRIdWUoaHN2LCBpKSxcbiAgICAgICAgICAgIHM6IGdldFNhdHVyYXRpb24oaHN2LCBpKSxcbiAgICAgICAgICAgIHY6IGdldFZhbHVlKGhzdiwgaSksXG4gICAgICAgIH0pLnRvSGV4U3RyaW5nKCk7XG4gICAgICAgIHBhdHRlcm5zLnB1c2goY29sb3JTdHJpbmcpO1xuICAgIH1cbiAgICAvLyBkYXJrIHRoZW1lIHBhdHRlcm5zXG4gICAgaWYgKG9wdHMudGhlbWUgPT09ICdkYXJrJykge1xuICAgICAgICByZXR1cm4gZGFya0NvbG9yTWFwLm1hcChmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgIHZhciBpbmRleCA9IF9hLmluZGV4LCBvcGFjaXR5ID0gX2Eub3BhY2l0eTtcbiAgICAgICAgICAgIHZhciBkYXJrQ29sb3JTdHJpbmcgPSB0aW55Y29sb3IyXzEuZGVmYXVsdFxuICAgICAgICAgICAgICAgIC5taXgob3B0cy5iYWNrZ3JvdW5kQ29sb3IgfHwgJyMxNDE0MTQnLCBwYXR0ZXJuc1tpbmRleF0sIG9wYWNpdHkgKiAxMDApXG4gICAgICAgICAgICAgICAgLnRvSGV4U3RyaW5nKCk7XG4gICAgICAgICAgICByZXR1cm4gZGFya0NvbG9yU3RyaW5nO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHBhdHRlcm5zO1xufVxuZXhwb3J0cy5kZWZhdWx0ID0gZ2VuZXJhdGU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBnZW5lcmF0ZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL2dlbmVyYXRlXCIpKTtcbmV4cG9ydHMuZ2VuZXJhdGUgPSBnZW5lcmF0ZV8xLmRlZmF1bHQ7XG52YXIgcHJlc2V0UHJpbWFyeUNvbG9ycyA9IHtcbiAgICByZWQ6ICcjRjUyMjJEJyxcbiAgICB2b2xjYW5vOiAnI0ZBNTQxQycsXG4gICAgb3JhbmdlOiAnI0ZBOEMxNicsXG4gICAgZ29sZDogJyNGQUFEMTQnLFxuICAgIHllbGxvdzogJyNGQURCMTQnLFxuICAgIGxpbWU6ICcjQTBEOTExJyxcbiAgICBncmVlbjogJyM1MkM0MUEnLFxuICAgIGN5YW46ICcjMTNDMkMyJyxcbiAgICBibHVlOiAnIzE4OTBGRicsXG4gICAgZ2Vla2JsdWU6ICcjMkY1NEVCJyxcbiAgICBwdXJwbGU6ICcjNzIyRUQxJyxcbiAgICBtYWdlbnRhOiAnI0VCMkY5NicsXG4gICAgZ3JleTogJyM2NjY2NjYnLFxufTtcbmV4cG9ydHMucHJlc2V0UHJpbWFyeUNvbG9ycyA9IHByZXNldFByaW1hcnlDb2xvcnM7XG52YXIgcHJlc2V0UGFsZXR0ZXMgPSB7fTtcbmV4cG9ydHMucHJlc2V0UGFsZXR0ZXMgPSBwcmVzZXRQYWxldHRlcztcbnZhciBwcmVzZXREYXJrUGFsZXR0ZXMgPSB7fTtcbmV4cG9ydHMucHJlc2V0RGFya1BhbGV0dGVzID0gcHJlc2V0RGFya1BhbGV0dGVzO1xuT2JqZWN0LmtleXMocHJlc2V0UHJpbWFyeUNvbG9ycykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgcHJlc2V0UGFsZXR0ZXNba2V5XSA9IGdlbmVyYXRlXzEuZGVmYXVsdChwcmVzZXRQcmltYXJ5Q29sb3JzW2tleV0pO1xuICAgIHByZXNldFBhbGV0dGVzW2tleV0ucHJpbWFyeSA9IHByZXNldFBhbGV0dGVzW2tleV1bNV07XG4gICAgLy8gZGFyayBwcmVzZXRQYWxldHRlc1xuICAgIHByZXNldERhcmtQYWxldHRlc1trZXldID0gZ2VuZXJhdGVfMS5kZWZhdWx0KHByZXNldFByaW1hcnlDb2xvcnNba2V5XSwge1xuICAgICAgICB0aGVtZTogJ2RhcmsnLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMTQxNDE0JyxcbiAgICB9KTtcbiAgICBwcmVzZXREYXJrUGFsZXR0ZXNba2V5XS5wcmltYXJ5ID0gcHJlc2V0RGFya1BhbGV0dGVzW2tleV1bNV07XG59KTtcbnZhciByZWQgPSBwcmVzZXRQYWxldHRlcy5yZWQ7XG5leHBvcnRzLnJlZCA9IHJlZDtcbnZhciB2b2xjYW5vID0gcHJlc2V0UGFsZXR0ZXMudm9sY2FubztcbmV4cG9ydHMudm9sY2FubyA9IHZvbGNhbm87XG52YXIgZ29sZCA9IHByZXNldFBhbGV0dGVzLmdvbGQ7XG5leHBvcnRzLmdvbGQgPSBnb2xkO1xudmFyIG9yYW5nZSA9IHByZXNldFBhbGV0dGVzLm9yYW5nZTtcbmV4cG9ydHMub3JhbmdlID0gb3JhbmdlO1xudmFyIHllbGxvdyA9IHByZXNldFBhbGV0dGVzLnllbGxvdztcbmV4cG9ydHMueWVsbG93ID0geWVsbG93O1xudmFyIGxpbWUgPSBwcmVzZXRQYWxldHRlcy5saW1lO1xuZXhwb3J0cy5saW1lID0gbGltZTtcbnZhciBncmVlbiA9IHByZXNldFBhbGV0dGVzLmdyZWVuO1xuZXhwb3J0cy5ncmVlbiA9IGdyZWVuO1xudmFyIGN5YW4gPSBwcmVzZXRQYWxldHRlcy5jeWFuO1xuZXhwb3J0cy5jeWFuID0gY3lhbjtcbnZhciBibHVlID0gcHJlc2V0UGFsZXR0ZXMuYmx1ZTtcbmV4cG9ydHMuYmx1ZSA9IGJsdWU7XG52YXIgZ2Vla2JsdWUgPSBwcmVzZXRQYWxldHRlcy5nZWVrYmx1ZTtcbmV4cG9ydHMuZ2Vla2JsdWUgPSBnZWVrYmx1ZTtcbnZhciBwdXJwbGUgPSBwcmVzZXRQYWxldHRlcy5wdXJwbGU7XG5leHBvcnRzLnB1cnBsZSA9IHB1cnBsZTtcbnZhciBtYWdlbnRhID0gcHJlc2V0UGFsZXR0ZXMubWFnZW50YTtcbmV4cG9ydHMubWFnZW50YSA9IG1hZ2VudGE7XG52YXIgZ3JleSA9IHByZXNldFBhbGV0dGVzLmdyZXk7XG5leHBvcnRzLmdyZXkgPSBncmV5O1xuIiwiLy8gVGlueUNvbG9yIHYxLjQuMVxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2Jncmlucy9UaW55Q29sb3Jcbi8vIEJyaWFuIEdyaW5zdGVhZCwgTUlUIExpY2Vuc2VcblxuKGZ1bmN0aW9uKE1hdGgpIHtcblxudmFyIHRyaW1MZWZ0ID0gL15cXHMrLyxcbiAgICB0cmltUmlnaHQgPSAvXFxzKyQvLFxuICAgIHRpbnlDb3VudGVyID0gMCxcbiAgICBtYXRoUm91bmQgPSBNYXRoLnJvdW5kLFxuICAgIG1hdGhNaW4gPSBNYXRoLm1pbixcbiAgICBtYXRoTWF4ID0gTWF0aC5tYXgsXG4gICAgbWF0aFJhbmRvbSA9IE1hdGgucmFuZG9tO1xuXG5mdW5jdGlvbiB0aW55Y29sb3IgKGNvbG9yLCBvcHRzKSB7XG5cbiAgICBjb2xvciA9IChjb2xvcikgPyBjb2xvciA6ICcnO1xuICAgIG9wdHMgPSBvcHRzIHx8IHsgfTtcblxuICAgIC8vIElmIGlucHV0IGlzIGFscmVhZHkgYSB0aW55Y29sb3IsIHJldHVybiBpdHNlbGZcbiAgICBpZiAoY29sb3IgaW5zdGFuY2VvZiB0aW55Y29sb3IpIHtcbiAgICAgICByZXR1cm4gY29sb3I7XG4gICAgfVxuICAgIC8vIElmIHdlIGFyZSBjYWxsZWQgYXMgYSBmdW5jdGlvbiwgY2FsbCB1c2luZyBuZXcgaW5zdGVhZFxuICAgIGlmICghKHRoaXMgaW5zdGFuY2VvZiB0aW55Y29sb3IpKSB7XG4gICAgICAgIHJldHVybiBuZXcgdGlueWNvbG9yKGNvbG9yLCBvcHRzKTtcbiAgICB9XG5cbiAgICB2YXIgcmdiID0gaW5wdXRUb1JHQihjb2xvcik7XG4gICAgdGhpcy5fb3JpZ2luYWxJbnB1dCA9IGNvbG9yLFxuICAgIHRoaXMuX3IgPSByZ2IucixcbiAgICB0aGlzLl9nID0gcmdiLmcsXG4gICAgdGhpcy5fYiA9IHJnYi5iLFxuICAgIHRoaXMuX2EgPSByZ2IuYSxcbiAgICB0aGlzLl9yb3VuZEEgPSBtYXRoUm91bmQoMTAwKnRoaXMuX2EpIC8gMTAwLFxuICAgIHRoaXMuX2Zvcm1hdCA9IG9wdHMuZm9ybWF0IHx8IHJnYi5mb3JtYXQ7XG4gICAgdGhpcy5fZ3JhZGllbnRUeXBlID0gb3B0cy5ncmFkaWVudFR5cGU7XG5cbiAgICAvLyBEb24ndCBsZXQgdGhlIHJhbmdlIG9mIFswLDI1NV0gY29tZSBiYWNrIGluIFswLDFdLlxuICAgIC8vIFBvdGVudGlhbGx5IGxvc2UgYSBsaXR0bGUgYml0IG9mIHByZWNpc2lvbiBoZXJlLCBidXQgd2lsbCBmaXggaXNzdWVzIHdoZXJlXG4gICAgLy8gLjUgZ2V0cyBpbnRlcnByZXRlZCBhcyBoYWxmIG9mIHRoZSB0b3RhbCwgaW5zdGVhZCBvZiBoYWxmIG9mIDFcbiAgICAvLyBJZiBpdCB3YXMgc3VwcG9zZWQgdG8gYmUgMTI4LCB0aGlzIHdhcyBhbHJlYWR5IHRha2VuIGNhcmUgb2YgYnkgYGlucHV0VG9SZ2JgXG4gICAgaWYgKHRoaXMuX3IgPCAxKSB7IHRoaXMuX3IgPSBtYXRoUm91bmQodGhpcy5fcik7IH1cbiAgICBpZiAodGhpcy5fZyA8IDEpIHsgdGhpcy5fZyA9IG1hdGhSb3VuZCh0aGlzLl9nKTsgfVxuICAgIGlmICh0aGlzLl9iIDwgMSkgeyB0aGlzLl9iID0gbWF0aFJvdW5kKHRoaXMuX2IpOyB9XG5cbiAgICB0aGlzLl9vayA9IHJnYi5vaztcbiAgICB0aGlzLl90Y19pZCA9IHRpbnlDb3VudGVyKys7XG59XG5cbnRpbnljb2xvci5wcm90b3R5cGUgPSB7XG4gICAgaXNEYXJrOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0QnJpZ2h0bmVzcygpIDwgMTI4O1xuICAgIH0sXG4gICAgaXNMaWdodDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiAhdGhpcy5pc0RhcmsoKTtcbiAgICB9LFxuICAgIGlzVmFsaWQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fb2s7XG4gICAgfSxcbiAgICBnZXRPcmlnaW5hbElucHV0OiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLl9vcmlnaW5hbElucHV0O1xuICAgIH0sXG4gICAgZ2V0Rm9ybWF0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Zvcm1hdDtcbiAgICB9LFxuICAgIGdldEFscGhhOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2E7XG4gICAgfSxcbiAgICBnZXRCcmlnaHRuZXNzOiBmdW5jdGlvbigpIHtcbiAgICAgICAgLy9odHRwOi8vd3d3LnczLm9yZy9UUi9BRVJUI2NvbG9yLWNvbnRyYXN0XG4gICAgICAgIHZhciByZ2IgPSB0aGlzLnRvUmdiKCk7XG4gICAgICAgIHJldHVybiAocmdiLnIgKiAyOTkgKyByZ2IuZyAqIDU4NyArIHJnYi5iICogMTE0KSAvIDEwMDA7XG4gICAgfSxcbiAgICBnZXRMdW1pbmFuY2U6IGZ1bmN0aW9uKCkge1xuICAgICAgICAvL2h0dHA6Ly93d3cudzMub3JnL1RSLzIwMDgvUkVDLVdDQUcyMC0yMDA4MTIxMS8jcmVsYXRpdmVsdW1pbmFuY2VkZWZcbiAgICAgICAgdmFyIHJnYiA9IHRoaXMudG9SZ2IoKTtcbiAgICAgICAgdmFyIFJzUkdCLCBHc1JHQiwgQnNSR0IsIFIsIEcsIEI7XG4gICAgICAgIFJzUkdCID0gcmdiLnIvMjU1O1xuICAgICAgICBHc1JHQiA9IHJnYi5nLzI1NTtcbiAgICAgICAgQnNSR0IgPSByZ2IuYi8yNTU7XG5cbiAgICAgICAgaWYgKFJzUkdCIDw9IDAuMDM5MjgpIHtSID0gUnNSR0IgLyAxMi45Mjt9IGVsc2Uge1IgPSBNYXRoLnBvdygoKFJzUkdCICsgMC4wNTUpIC8gMS4wNTUpLCAyLjQpO31cbiAgICAgICAgaWYgKEdzUkdCIDw9IDAuMDM5MjgpIHtHID0gR3NSR0IgLyAxMi45Mjt9IGVsc2Uge0cgPSBNYXRoLnBvdygoKEdzUkdCICsgMC4wNTUpIC8gMS4wNTUpLCAyLjQpO31cbiAgICAgICAgaWYgKEJzUkdCIDw9IDAuMDM5MjgpIHtCID0gQnNSR0IgLyAxMi45Mjt9IGVsc2Uge0IgPSBNYXRoLnBvdygoKEJzUkdCICsgMC4wNTUpIC8gMS4wNTUpLCAyLjQpO31cbiAgICAgICAgcmV0dXJuICgwLjIxMjYgKiBSKSArICgwLjcxNTIgKiBHKSArICgwLjA3MjIgKiBCKTtcbiAgICB9LFxuICAgIHNldEFscGhhOiBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICB0aGlzLl9hID0gYm91bmRBbHBoYSh2YWx1ZSk7XG4gICAgICAgIHRoaXMuX3JvdW5kQSA9IG1hdGhSb3VuZCgxMDAqdGhpcy5fYSkgLyAxMDA7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG4gICAgdG9Ic3Y6IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgaHN2ID0gcmdiVG9Ic3YodGhpcy5fciwgdGhpcy5fZywgdGhpcy5fYik7XG4gICAgICAgIHJldHVybiB7IGg6IGhzdi5oICogMzYwLCBzOiBoc3YucywgdjogaHN2LnYsIGE6IHRoaXMuX2EgfTtcbiAgICB9LFxuICAgIHRvSHN2U3RyaW5nOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGhzdiA9IHJnYlRvSHN2KHRoaXMuX3IsIHRoaXMuX2csIHRoaXMuX2IpO1xuICAgICAgICB2YXIgaCA9IG1hdGhSb3VuZChoc3YuaCAqIDM2MCksIHMgPSBtYXRoUm91bmQoaHN2LnMgKiAxMDApLCB2ID0gbWF0aFJvdW5kKGhzdi52ICogMTAwKTtcbiAgICAgICAgcmV0dXJuICh0aGlzLl9hID09IDEpID9cbiAgICAgICAgICBcImhzdihcIiAgKyBoICsgXCIsIFwiICsgcyArIFwiJSwgXCIgKyB2ICsgXCIlKVwiIDpcbiAgICAgICAgICBcImhzdmEoXCIgKyBoICsgXCIsIFwiICsgcyArIFwiJSwgXCIgKyB2ICsgXCIlLCBcIisgdGhpcy5fcm91bmRBICsgXCIpXCI7XG4gICAgfSxcbiAgICB0b0hzbDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBoc2wgPSByZ2JUb0hzbCh0aGlzLl9yLCB0aGlzLl9nLCB0aGlzLl9iKTtcbiAgICAgICAgcmV0dXJuIHsgaDogaHNsLmggKiAzNjAsIHM6IGhzbC5zLCBsOiBoc2wubCwgYTogdGhpcy5fYSB9O1xuICAgIH0sXG4gICAgdG9Ic2xTdHJpbmc6IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgaHNsID0gcmdiVG9Ic2wodGhpcy5fciwgdGhpcy5fZywgdGhpcy5fYik7XG4gICAgICAgIHZhciBoID0gbWF0aFJvdW5kKGhzbC5oICogMzYwKSwgcyA9IG1hdGhSb3VuZChoc2wucyAqIDEwMCksIGwgPSBtYXRoUm91bmQoaHNsLmwgKiAxMDApO1xuICAgICAgICByZXR1cm4gKHRoaXMuX2EgPT0gMSkgP1xuICAgICAgICAgIFwiaHNsKFwiICArIGggKyBcIiwgXCIgKyBzICsgXCIlLCBcIiArIGwgKyBcIiUpXCIgOlxuICAgICAgICAgIFwiaHNsYShcIiArIGggKyBcIiwgXCIgKyBzICsgXCIlLCBcIiArIGwgKyBcIiUsIFwiKyB0aGlzLl9yb3VuZEEgKyBcIilcIjtcbiAgICB9LFxuICAgIHRvSGV4OiBmdW5jdGlvbihhbGxvdzNDaGFyKSB7XG4gICAgICAgIHJldHVybiByZ2JUb0hleCh0aGlzLl9yLCB0aGlzLl9nLCB0aGlzLl9iLCBhbGxvdzNDaGFyKTtcbiAgICB9LFxuICAgIHRvSGV4U3RyaW5nOiBmdW5jdGlvbihhbGxvdzNDaGFyKSB7XG4gICAgICAgIHJldHVybiAnIycgKyB0aGlzLnRvSGV4KGFsbG93M0NoYXIpO1xuICAgIH0sXG4gICAgdG9IZXg4OiBmdW5jdGlvbihhbGxvdzRDaGFyKSB7XG4gICAgICAgIHJldHVybiByZ2JhVG9IZXgodGhpcy5fciwgdGhpcy5fZywgdGhpcy5fYiwgdGhpcy5fYSwgYWxsb3c0Q2hhcik7XG4gICAgfSxcbiAgICB0b0hleDhTdHJpbmc6IGZ1bmN0aW9uKGFsbG93NENoYXIpIHtcbiAgICAgICAgcmV0dXJuICcjJyArIHRoaXMudG9IZXg4KGFsbG93NENoYXIpO1xuICAgIH0sXG4gICAgdG9SZ2I6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4geyByOiBtYXRoUm91bmQodGhpcy5fciksIGc6IG1hdGhSb3VuZCh0aGlzLl9nKSwgYjogbWF0aFJvdW5kKHRoaXMuX2IpLCBhOiB0aGlzLl9hIH07XG4gICAgfSxcbiAgICB0b1JnYlN0cmluZzogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiAodGhpcy5fYSA9PSAxKSA/XG4gICAgICAgICAgXCJyZ2IoXCIgICsgbWF0aFJvdW5kKHRoaXMuX3IpICsgXCIsIFwiICsgbWF0aFJvdW5kKHRoaXMuX2cpICsgXCIsIFwiICsgbWF0aFJvdW5kKHRoaXMuX2IpICsgXCIpXCIgOlxuICAgICAgICAgIFwicmdiYShcIiArIG1hdGhSb3VuZCh0aGlzLl9yKSArIFwiLCBcIiArIG1hdGhSb3VuZCh0aGlzLl9nKSArIFwiLCBcIiArIG1hdGhSb3VuZCh0aGlzLl9iKSArIFwiLCBcIiArIHRoaXMuX3JvdW5kQSArIFwiKVwiO1xuICAgIH0sXG4gICAgdG9QZXJjZW50YWdlUmdiOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHsgcjogbWF0aFJvdW5kKGJvdW5kMDEodGhpcy5fciwgMjU1KSAqIDEwMCkgKyBcIiVcIiwgZzogbWF0aFJvdW5kKGJvdW5kMDEodGhpcy5fZywgMjU1KSAqIDEwMCkgKyBcIiVcIiwgYjogbWF0aFJvdW5kKGJvdW5kMDEodGhpcy5fYiwgMjU1KSAqIDEwMCkgKyBcIiVcIiwgYTogdGhpcy5fYSB9O1xuICAgIH0sXG4gICAgdG9QZXJjZW50YWdlUmdiU3RyaW5nOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLl9hID09IDEpID9cbiAgICAgICAgICBcInJnYihcIiAgKyBtYXRoUm91bmQoYm91bmQwMSh0aGlzLl9yLCAyNTUpICogMTAwKSArIFwiJSwgXCIgKyBtYXRoUm91bmQoYm91bmQwMSh0aGlzLl9nLCAyNTUpICogMTAwKSArIFwiJSwgXCIgKyBtYXRoUm91bmQoYm91bmQwMSh0aGlzLl9iLCAyNTUpICogMTAwKSArIFwiJSlcIiA6XG4gICAgICAgICAgXCJyZ2JhKFwiICsgbWF0aFJvdW5kKGJvdW5kMDEodGhpcy5fciwgMjU1KSAqIDEwMCkgKyBcIiUsIFwiICsgbWF0aFJvdW5kKGJvdW5kMDEodGhpcy5fZywgMjU1KSAqIDEwMCkgKyBcIiUsIFwiICsgbWF0aFJvdW5kKGJvdW5kMDEodGhpcy5fYiwgMjU1KSAqIDEwMCkgKyBcIiUsIFwiICsgdGhpcy5fcm91bmRBICsgXCIpXCI7XG4gICAgfSxcbiAgICB0b05hbWU6IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAodGhpcy5fYSA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIFwidHJhbnNwYXJlbnRcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLl9hIDwgMSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGhleE5hbWVzW3JnYlRvSGV4KHRoaXMuX3IsIHRoaXMuX2csIHRoaXMuX2IsIHRydWUpXSB8fCBmYWxzZTtcbiAgICB9LFxuICAgIHRvRmlsdGVyOiBmdW5jdGlvbihzZWNvbmRDb2xvcikge1xuICAgICAgICB2YXIgaGV4OFN0cmluZyA9ICcjJyArIHJnYmFUb0FyZ2JIZXgodGhpcy5fciwgdGhpcy5fZywgdGhpcy5fYiwgdGhpcy5fYSk7XG4gICAgICAgIHZhciBzZWNvbmRIZXg4U3RyaW5nID0gaGV4OFN0cmluZztcbiAgICAgICAgdmFyIGdyYWRpZW50VHlwZSA9IHRoaXMuX2dyYWRpZW50VHlwZSA/IFwiR3JhZGllbnRUeXBlID0gMSwgXCIgOiBcIlwiO1xuXG4gICAgICAgIGlmIChzZWNvbmRDb2xvcikge1xuICAgICAgICAgICAgdmFyIHMgPSB0aW55Y29sb3Ioc2Vjb25kQ29sb3IpO1xuICAgICAgICAgICAgc2Vjb25kSGV4OFN0cmluZyA9ICcjJyArIHJnYmFUb0FyZ2JIZXgocy5fciwgcy5fZywgcy5fYiwgcy5fYSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gXCJwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoXCIrZ3JhZGllbnRUeXBlK1wic3RhcnRDb2xvcnN0cj1cIitoZXg4U3RyaW5nK1wiLGVuZENvbG9yc3RyPVwiK3NlY29uZEhleDhTdHJpbmcrXCIpXCI7XG4gICAgfSxcbiAgICB0b1N0cmluZzogZnVuY3Rpb24oZm9ybWF0KSB7XG4gICAgICAgIHZhciBmb3JtYXRTZXQgPSAhIWZvcm1hdDtcbiAgICAgICAgZm9ybWF0ID0gZm9ybWF0IHx8IHRoaXMuX2Zvcm1hdDtcblxuICAgICAgICB2YXIgZm9ybWF0dGVkU3RyaW5nID0gZmFsc2U7XG4gICAgICAgIHZhciBoYXNBbHBoYSA9IHRoaXMuX2EgPCAxICYmIHRoaXMuX2EgPj0gMDtcbiAgICAgICAgdmFyIG5lZWRzQWxwaGFGb3JtYXQgPSAhZm9ybWF0U2V0ICYmIGhhc0FscGhhICYmIChmb3JtYXQgPT09IFwiaGV4XCIgfHwgZm9ybWF0ID09PSBcImhleDZcIiB8fCBmb3JtYXQgPT09IFwiaGV4M1wiIHx8IGZvcm1hdCA9PT0gXCJoZXg0XCIgfHwgZm9ybWF0ID09PSBcImhleDhcIiB8fCBmb3JtYXQgPT09IFwibmFtZVwiKTtcblxuICAgICAgICBpZiAobmVlZHNBbHBoYUZvcm1hdCkge1xuICAgICAgICAgICAgLy8gU3BlY2lhbCBjYXNlIGZvciBcInRyYW5zcGFyZW50XCIsIGFsbCBvdGhlciBub24tYWxwaGEgZm9ybWF0c1xuICAgICAgICAgICAgLy8gd2lsbCByZXR1cm4gcmdiYSB3aGVuIHRoZXJlIGlzIHRyYW5zcGFyZW5jeS5cbiAgICAgICAgICAgIGlmIChmb3JtYXQgPT09IFwibmFtZVwiICYmIHRoaXMuX2EgPT09IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50b05hbWUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRvUmdiU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGZvcm1hdCA9PT0gXCJyZ2JcIikge1xuICAgICAgICAgICAgZm9ybWF0dGVkU3RyaW5nID0gdGhpcy50b1JnYlN0cmluZygpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChmb3JtYXQgPT09IFwicHJnYlwiKSB7XG4gICAgICAgICAgICBmb3JtYXR0ZWRTdHJpbmcgPSB0aGlzLnRvUGVyY2VudGFnZVJnYlN0cmluZygpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChmb3JtYXQgPT09IFwiaGV4XCIgfHwgZm9ybWF0ID09PSBcImhleDZcIikge1xuICAgICAgICAgICAgZm9ybWF0dGVkU3RyaW5nID0gdGhpcy50b0hleFN0cmluZygpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChmb3JtYXQgPT09IFwiaGV4M1wiKSB7XG4gICAgICAgICAgICBmb3JtYXR0ZWRTdHJpbmcgPSB0aGlzLnRvSGV4U3RyaW5nKHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChmb3JtYXQgPT09IFwiaGV4NFwiKSB7XG4gICAgICAgICAgICBmb3JtYXR0ZWRTdHJpbmcgPSB0aGlzLnRvSGV4OFN0cmluZyh0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZm9ybWF0ID09PSBcImhleDhcIikge1xuICAgICAgICAgICAgZm9ybWF0dGVkU3RyaW5nID0gdGhpcy50b0hleDhTdHJpbmcoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZm9ybWF0ID09PSBcIm5hbWVcIikge1xuICAgICAgICAgICAgZm9ybWF0dGVkU3RyaW5nID0gdGhpcy50b05hbWUoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZm9ybWF0ID09PSBcImhzbFwiKSB7XG4gICAgICAgICAgICBmb3JtYXR0ZWRTdHJpbmcgPSB0aGlzLnRvSHNsU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGZvcm1hdCA9PT0gXCJoc3ZcIikge1xuICAgICAgICAgICAgZm9ybWF0dGVkU3RyaW5nID0gdGhpcy50b0hzdlN0cmluZygpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZvcm1hdHRlZFN0cmluZyB8fCB0aGlzLnRvSGV4U3RyaW5nKCk7XG4gICAgfSxcbiAgICBjbG9uZTogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aW55Y29sb3IodGhpcy50b1N0cmluZygpKTtcbiAgICB9LFxuXG4gICAgX2FwcGx5TW9kaWZpY2F0aW9uOiBmdW5jdGlvbihmbiwgYXJncykge1xuICAgICAgICB2YXIgY29sb3IgPSBmbi5hcHBseShudWxsLCBbdGhpc10uY29uY2F0KFtdLnNsaWNlLmNhbGwoYXJncykpKTtcbiAgICAgICAgdGhpcy5fciA9IGNvbG9yLl9yO1xuICAgICAgICB0aGlzLl9nID0gY29sb3IuX2c7XG4gICAgICAgIHRoaXMuX2IgPSBjb2xvci5fYjtcbiAgICAgICAgdGhpcy5zZXRBbHBoYShjb2xvci5fYSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG4gICAgbGlnaHRlbjogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hcHBseU1vZGlmaWNhdGlvbihsaWdodGVuLCBhcmd1bWVudHMpO1xuICAgIH0sXG4gICAgYnJpZ2h0ZW46IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYXBwbHlNb2RpZmljYXRpb24oYnJpZ2h0ZW4sIGFyZ3VtZW50cyk7XG4gICAgfSxcbiAgICBkYXJrZW46IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYXBwbHlNb2RpZmljYXRpb24oZGFya2VuLCBhcmd1bWVudHMpO1xuICAgIH0sXG4gICAgZGVzYXR1cmF0ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hcHBseU1vZGlmaWNhdGlvbihkZXNhdHVyYXRlLCBhcmd1bWVudHMpO1xuICAgIH0sXG4gICAgc2F0dXJhdGU6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYXBwbHlNb2RpZmljYXRpb24oc2F0dXJhdGUsIGFyZ3VtZW50cyk7XG4gICAgfSxcbiAgICBncmV5c2NhbGU6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYXBwbHlNb2RpZmljYXRpb24oZ3JleXNjYWxlLCBhcmd1bWVudHMpO1xuICAgIH0sXG4gICAgc3BpbjogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hcHBseU1vZGlmaWNhdGlvbihzcGluLCBhcmd1bWVudHMpO1xuICAgIH0sXG5cbiAgICBfYXBwbHlDb21iaW5hdGlvbjogZnVuY3Rpb24oZm4sIGFyZ3MpIHtcbiAgICAgICAgcmV0dXJuIGZuLmFwcGx5KG51bGwsIFt0aGlzXS5jb25jYXQoW10uc2xpY2UuY2FsbChhcmdzKSkpO1xuICAgIH0sXG4gICAgYW5hbG9nb3VzOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FwcGx5Q29tYmluYXRpb24oYW5hbG9nb3VzLCBhcmd1bWVudHMpO1xuICAgIH0sXG4gICAgY29tcGxlbWVudDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hcHBseUNvbWJpbmF0aW9uKGNvbXBsZW1lbnQsIGFyZ3VtZW50cyk7XG4gICAgfSxcbiAgICBtb25vY2hyb21hdGljOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FwcGx5Q29tYmluYXRpb24obW9ub2Nocm9tYXRpYywgYXJndW1lbnRzKTtcbiAgICB9LFxuICAgIHNwbGl0Y29tcGxlbWVudDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hcHBseUNvbWJpbmF0aW9uKHNwbGl0Y29tcGxlbWVudCwgYXJndW1lbnRzKTtcbiAgICB9LFxuICAgIHRyaWFkOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FwcGx5Q29tYmluYXRpb24odHJpYWQsIGFyZ3VtZW50cyk7XG4gICAgfSxcbiAgICB0ZXRyYWQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYXBwbHlDb21iaW5hdGlvbih0ZXRyYWQsIGFyZ3VtZW50cyk7XG4gICAgfVxufTtcblxuLy8gSWYgaW5wdXQgaXMgYW4gb2JqZWN0LCBmb3JjZSAxIGludG8gXCIxLjBcIiB0byBoYW5kbGUgcmF0aW9zIHByb3Blcmx5XG4vLyBTdHJpbmcgaW5wdXQgcmVxdWlyZXMgXCIxLjBcIiBhcyBpbnB1dCwgc28gMSB3aWxsIGJlIHRyZWF0ZWQgYXMgMVxudGlueWNvbG9yLmZyb21SYXRpbyA9IGZ1bmN0aW9uKGNvbG9yLCBvcHRzKSB7XG4gICAgaWYgKHR5cGVvZiBjb2xvciA9PSBcIm9iamVjdFwiKSB7XG4gICAgICAgIHZhciBuZXdDb2xvciA9IHt9O1xuICAgICAgICBmb3IgKHZhciBpIGluIGNvbG9yKSB7XG4gICAgICAgICAgICBpZiAoY29sb3IuaGFzT3duUHJvcGVydHkoaSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoaSA9PT0gXCJhXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3Q29sb3JbaV0gPSBjb2xvcltpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld0NvbG9yW2ldID0gY29udmVydFRvUGVyY2VudGFnZShjb2xvcltpXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbG9yID0gbmV3Q29sb3I7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRpbnljb2xvcihjb2xvciwgb3B0cyk7XG59O1xuXG4vLyBHaXZlbiBhIHN0cmluZyBvciBvYmplY3QsIGNvbnZlcnQgdGhhdCBpbnB1dCB0byBSR0Jcbi8vIFBvc3NpYmxlIHN0cmluZyBpbnB1dHM6XG4vL1xuLy8gICAgIFwicmVkXCJcbi8vICAgICBcIiNmMDBcIiBvciBcImYwMFwiXG4vLyAgICAgXCIjZmYwMDAwXCIgb3IgXCJmZjAwMDBcIlxuLy8gICAgIFwiI2ZmMDAwMDAwXCIgb3IgXCJmZjAwMDAwMFwiXG4vLyAgICAgXCJyZ2IgMjU1IDAgMFwiIG9yIFwicmdiICgyNTUsIDAsIDApXCJcbi8vICAgICBcInJnYiAxLjAgMCAwXCIgb3IgXCJyZ2IgKDEsIDAsIDApXCJcbi8vICAgICBcInJnYmEgKDI1NSwgMCwgMCwgMSlcIiBvciBcInJnYmEgMjU1LCAwLCAwLCAxXCJcbi8vICAgICBcInJnYmEgKDEuMCwgMCwgMCwgMSlcIiBvciBcInJnYmEgMS4wLCAwLCAwLCAxXCJcbi8vICAgICBcImhzbCgwLCAxMDAlLCA1MCUpXCIgb3IgXCJoc2wgMCAxMDAlIDUwJVwiXG4vLyAgICAgXCJoc2xhKDAsIDEwMCUsIDUwJSwgMSlcIiBvciBcImhzbGEgMCAxMDAlIDUwJSwgMVwiXG4vLyAgICAgXCJoc3YoMCwgMTAwJSwgMTAwJSlcIiBvciBcImhzdiAwIDEwMCUgMTAwJVwiXG4vL1xuZnVuY3Rpb24gaW5wdXRUb1JHQihjb2xvcikge1xuXG4gICAgdmFyIHJnYiA9IHsgcjogMCwgZzogMCwgYjogMCB9O1xuICAgIHZhciBhID0gMTtcbiAgICB2YXIgcyA9IG51bGw7XG4gICAgdmFyIHYgPSBudWxsO1xuICAgIHZhciBsID0gbnVsbDtcbiAgICB2YXIgb2sgPSBmYWxzZTtcbiAgICB2YXIgZm9ybWF0ID0gZmFsc2U7XG5cbiAgICBpZiAodHlwZW9mIGNvbG9yID09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgY29sb3IgPSBzdHJpbmdJbnB1dFRvT2JqZWN0KGNvbG9yKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGNvbG9yID09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgaWYgKGlzVmFsaWRDU1NVbml0KGNvbG9yLnIpICYmIGlzVmFsaWRDU1NVbml0KGNvbG9yLmcpICYmIGlzVmFsaWRDU1NVbml0KGNvbG9yLmIpKSB7XG4gICAgICAgICAgICByZ2IgPSByZ2JUb1JnYihjb2xvci5yLCBjb2xvci5nLCBjb2xvci5iKTtcbiAgICAgICAgICAgIG9rID0gdHJ1ZTtcbiAgICAgICAgICAgIGZvcm1hdCA9IFN0cmluZyhjb2xvci5yKS5zdWJzdHIoLTEpID09PSBcIiVcIiA/IFwicHJnYlwiIDogXCJyZ2JcIjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpc1ZhbGlkQ1NTVW5pdChjb2xvci5oKSAmJiBpc1ZhbGlkQ1NTVW5pdChjb2xvci5zKSAmJiBpc1ZhbGlkQ1NTVW5pdChjb2xvci52KSkge1xuICAgICAgICAgICAgcyA9IGNvbnZlcnRUb1BlcmNlbnRhZ2UoY29sb3Iucyk7XG4gICAgICAgICAgICB2ID0gY29udmVydFRvUGVyY2VudGFnZShjb2xvci52KTtcbiAgICAgICAgICAgIHJnYiA9IGhzdlRvUmdiKGNvbG9yLmgsIHMsIHYpO1xuICAgICAgICAgICAgb2sgPSB0cnVlO1xuICAgICAgICAgICAgZm9ybWF0ID0gXCJoc3ZcIjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpc1ZhbGlkQ1NTVW5pdChjb2xvci5oKSAmJiBpc1ZhbGlkQ1NTVW5pdChjb2xvci5zKSAmJiBpc1ZhbGlkQ1NTVW5pdChjb2xvci5sKSkge1xuICAgICAgICAgICAgcyA9IGNvbnZlcnRUb1BlcmNlbnRhZ2UoY29sb3Iucyk7XG4gICAgICAgICAgICBsID0gY29udmVydFRvUGVyY2VudGFnZShjb2xvci5sKTtcbiAgICAgICAgICAgIHJnYiA9IGhzbFRvUmdiKGNvbG9yLmgsIHMsIGwpO1xuICAgICAgICAgICAgb2sgPSB0cnVlO1xuICAgICAgICAgICAgZm9ybWF0ID0gXCJoc2xcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb2xvci5oYXNPd25Qcm9wZXJ0eShcImFcIikpIHtcbiAgICAgICAgICAgIGEgPSBjb2xvci5hO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYSA9IGJvdW5kQWxwaGEoYSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBvazogb2ssXG4gICAgICAgIGZvcm1hdDogY29sb3IuZm9ybWF0IHx8IGZvcm1hdCxcbiAgICAgICAgcjogbWF0aE1pbigyNTUsIG1hdGhNYXgocmdiLnIsIDApKSxcbiAgICAgICAgZzogbWF0aE1pbigyNTUsIG1hdGhNYXgocmdiLmcsIDApKSxcbiAgICAgICAgYjogbWF0aE1pbigyNTUsIG1hdGhNYXgocmdiLmIsIDApKSxcbiAgICAgICAgYTogYVxuICAgIH07XG59XG5cblxuLy8gQ29udmVyc2lvbiBGdW5jdGlvbnNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIGByZ2JUb0hzbGAsIGByZ2JUb0hzdmAsIGBoc2xUb1JnYmAsIGBoc3ZUb1JnYmAgbW9kaWZpZWQgZnJvbTpcbi8vIDxodHRwOi8vbWppamFja3Nvbi5jb20vMjAwOC8wMi9yZ2ItdG8taHNsLWFuZC1yZ2ItdG8taHN2LWNvbG9yLW1vZGVsLWNvbnZlcnNpb24tYWxnb3JpdGhtcy1pbi1qYXZhc2NyaXB0PlxuXG4vLyBgcmdiVG9SZ2JgXG4vLyBIYW5kbGUgYm91bmRzIC8gcGVyY2VudGFnZSBjaGVja2luZyB0byBjb25mb3JtIHRvIENTUyBjb2xvciBzcGVjXG4vLyA8aHR0cDovL3d3dy53My5vcmcvVFIvY3NzMy1jb2xvci8+XG4vLyAqQXNzdW1lczoqIHIsIGcsIGIgaW4gWzAsIDI1NV0gb3IgWzAsIDFdXG4vLyAqUmV0dXJuczoqIHsgciwgZywgYiB9IGluIFswLCAyNTVdXG5mdW5jdGlvbiByZ2JUb1JnYihyLCBnLCBiKXtcbiAgICByZXR1cm4ge1xuICAgICAgICByOiBib3VuZDAxKHIsIDI1NSkgKiAyNTUsXG4gICAgICAgIGc6IGJvdW5kMDEoZywgMjU1KSAqIDI1NSxcbiAgICAgICAgYjogYm91bmQwMShiLCAyNTUpICogMjU1XG4gICAgfTtcbn1cblxuLy8gYHJnYlRvSHNsYFxuLy8gQ29udmVydHMgYW4gUkdCIGNvbG9yIHZhbHVlIHRvIEhTTC5cbi8vICpBc3N1bWVzOiogciwgZywgYW5kIGIgYXJlIGNvbnRhaW5lZCBpbiBbMCwgMjU1XSBvciBbMCwgMV1cbi8vICpSZXR1cm5zOiogeyBoLCBzLCBsIH0gaW4gWzAsMV1cbmZ1bmN0aW9uIHJnYlRvSHNsKHIsIGcsIGIpIHtcblxuICAgIHIgPSBib3VuZDAxKHIsIDI1NSk7XG4gICAgZyA9IGJvdW5kMDEoZywgMjU1KTtcbiAgICBiID0gYm91bmQwMShiLCAyNTUpO1xuXG4gICAgdmFyIG1heCA9IG1hdGhNYXgociwgZywgYiksIG1pbiA9IG1hdGhNaW4ociwgZywgYik7XG4gICAgdmFyIGgsIHMsIGwgPSAobWF4ICsgbWluKSAvIDI7XG5cbiAgICBpZihtYXggPT0gbWluKSB7XG4gICAgICAgIGggPSBzID0gMDsgLy8gYWNocm9tYXRpY1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdmFyIGQgPSBtYXggLSBtaW47XG4gICAgICAgIHMgPSBsID4gMC41ID8gZCAvICgyIC0gbWF4IC0gbWluKSA6IGQgLyAobWF4ICsgbWluKTtcbiAgICAgICAgc3dpdGNoKG1heCkge1xuICAgICAgICAgICAgY2FzZSByOiBoID0gKGcgLSBiKSAvIGQgKyAoZyA8IGIgPyA2IDogMCk7IGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBnOiBoID0gKGIgLSByKSAvIGQgKyAyOyBicmVhaztcbiAgICAgICAgICAgIGNhc2UgYjogaCA9IChyIC0gZykgLyBkICsgNDsgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBoIC89IDY7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgaDogaCwgczogcywgbDogbCB9O1xufVxuXG4vLyBgaHNsVG9SZ2JgXG4vLyBDb252ZXJ0cyBhbiBIU0wgY29sb3IgdmFsdWUgdG8gUkdCLlxuLy8gKkFzc3VtZXM6KiBoIGlzIGNvbnRhaW5lZCBpbiBbMCwgMV0gb3IgWzAsIDM2MF0gYW5kIHMgYW5kIGwgYXJlIGNvbnRhaW5lZCBbMCwgMV0gb3IgWzAsIDEwMF1cbi8vICpSZXR1cm5zOiogeyByLCBnLCBiIH0gaW4gdGhlIHNldCBbMCwgMjU1XVxuZnVuY3Rpb24gaHNsVG9SZ2IoaCwgcywgbCkge1xuICAgIHZhciByLCBnLCBiO1xuXG4gICAgaCA9IGJvdW5kMDEoaCwgMzYwKTtcbiAgICBzID0gYm91bmQwMShzLCAxMDApO1xuICAgIGwgPSBib3VuZDAxKGwsIDEwMCk7XG5cbiAgICBmdW5jdGlvbiBodWUycmdiKHAsIHEsIHQpIHtcbiAgICAgICAgaWYodCA8IDApIHQgKz0gMTtcbiAgICAgICAgaWYodCA+IDEpIHQgLT0gMTtcbiAgICAgICAgaWYodCA8IDEvNikgcmV0dXJuIHAgKyAocSAtIHApICogNiAqIHQ7XG4gICAgICAgIGlmKHQgPCAxLzIpIHJldHVybiBxO1xuICAgICAgICBpZih0IDwgMi8zKSByZXR1cm4gcCArIChxIC0gcCkgKiAoMi8zIC0gdCkgKiA2O1xuICAgICAgICByZXR1cm4gcDtcbiAgICB9XG5cbiAgICBpZihzID09PSAwKSB7XG4gICAgICAgIHIgPSBnID0gYiA9IGw7IC8vIGFjaHJvbWF0aWNcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHZhciBxID0gbCA8IDAuNSA/IGwgKiAoMSArIHMpIDogbCArIHMgLSBsICogcztcbiAgICAgICAgdmFyIHAgPSAyICogbCAtIHE7XG4gICAgICAgIHIgPSBodWUycmdiKHAsIHEsIGggKyAxLzMpO1xuICAgICAgICBnID0gaHVlMnJnYihwLCBxLCBoKTtcbiAgICAgICAgYiA9IGh1ZTJyZ2IocCwgcSwgaCAtIDEvMyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgcjogciAqIDI1NSwgZzogZyAqIDI1NSwgYjogYiAqIDI1NSB9O1xufVxuXG4vLyBgcmdiVG9Ic3ZgXG4vLyBDb252ZXJ0cyBhbiBSR0IgY29sb3IgdmFsdWUgdG8gSFNWXG4vLyAqQXNzdW1lczoqIHIsIGcsIGFuZCBiIGFyZSBjb250YWluZWQgaW4gdGhlIHNldCBbMCwgMjU1XSBvciBbMCwgMV1cbi8vICpSZXR1cm5zOiogeyBoLCBzLCB2IH0gaW4gWzAsMV1cbmZ1bmN0aW9uIHJnYlRvSHN2KHIsIGcsIGIpIHtcblxuICAgIHIgPSBib3VuZDAxKHIsIDI1NSk7XG4gICAgZyA9IGJvdW5kMDEoZywgMjU1KTtcbiAgICBiID0gYm91bmQwMShiLCAyNTUpO1xuXG4gICAgdmFyIG1heCA9IG1hdGhNYXgociwgZywgYiksIG1pbiA9IG1hdGhNaW4ociwgZywgYik7XG4gICAgdmFyIGgsIHMsIHYgPSBtYXg7XG5cbiAgICB2YXIgZCA9IG1heCAtIG1pbjtcbiAgICBzID0gbWF4ID09PSAwID8gMCA6IGQgLyBtYXg7XG5cbiAgICBpZihtYXggPT0gbWluKSB7XG4gICAgICAgIGggPSAwOyAvLyBhY2hyb21hdGljXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBzd2l0Y2gobWF4KSB7XG4gICAgICAgICAgICBjYXNlIHI6IGggPSAoZyAtIGIpIC8gZCArIChnIDwgYiA/IDYgOiAwKTsgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIGc6IGggPSAoYiAtIHIpIC8gZCArIDI7IGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBiOiBoID0gKHIgLSBnKSAvIGQgKyA0OyBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBoIC89IDY7XG4gICAgfVxuICAgIHJldHVybiB7IGg6IGgsIHM6IHMsIHY6IHYgfTtcbn1cblxuLy8gYGhzdlRvUmdiYFxuLy8gQ29udmVydHMgYW4gSFNWIGNvbG9yIHZhbHVlIHRvIFJHQi5cbi8vICpBc3N1bWVzOiogaCBpcyBjb250YWluZWQgaW4gWzAsIDFdIG9yIFswLCAzNjBdIGFuZCBzIGFuZCB2IGFyZSBjb250YWluZWQgaW4gWzAsIDFdIG9yIFswLCAxMDBdXG4vLyAqUmV0dXJuczoqIHsgciwgZywgYiB9IGluIHRoZSBzZXQgWzAsIDI1NV1cbiBmdW5jdGlvbiBoc3ZUb1JnYihoLCBzLCB2KSB7XG5cbiAgICBoID0gYm91bmQwMShoLCAzNjApICogNjtcbiAgICBzID0gYm91bmQwMShzLCAxMDApO1xuICAgIHYgPSBib3VuZDAxKHYsIDEwMCk7XG5cbiAgICB2YXIgaSA9IE1hdGguZmxvb3IoaCksXG4gICAgICAgIGYgPSBoIC0gaSxcbiAgICAgICAgcCA9IHYgKiAoMSAtIHMpLFxuICAgICAgICBxID0gdiAqICgxIC0gZiAqIHMpLFxuICAgICAgICB0ID0gdiAqICgxIC0gKDEgLSBmKSAqIHMpLFxuICAgICAgICBtb2QgPSBpICUgNixcbiAgICAgICAgciA9IFt2LCBxLCBwLCBwLCB0LCB2XVttb2RdLFxuICAgICAgICBnID0gW3QsIHYsIHYsIHEsIHAsIHBdW21vZF0sXG4gICAgICAgIGIgPSBbcCwgcCwgdCwgdiwgdiwgcV1bbW9kXTtcblxuICAgIHJldHVybiB7IHI6IHIgKiAyNTUsIGc6IGcgKiAyNTUsIGI6IGIgKiAyNTUgfTtcbn1cblxuLy8gYHJnYlRvSGV4YFxuLy8gQ29udmVydHMgYW4gUkdCIGNvbG9yIHRvIGhleFxuLy8gQXNzdW1lcyByLCBnLCBhbmQgYiBhcmUgY29udGFpbmVkIGluIHRoZSBzZXQgWzAsIDI1NV1cbi8vIFJldHVybnMgYSAzIG9yIDYgY2hhcmFjdGVyIGhleFxuZnVuY3Rpb24gcmdiVG9IZXgociwgZywgYiwgYWxsb3czQ2hhcikge1xuXG4gICAgdmFyIGhleCA9IFtcbiAgICAgICAgcGFkMihtYXRoUm91bmQocikudG9TdHJpbmcoMTYpKSxcbiAgICAgICAgcGFkMihtYXRoUm91bmQoZykudG9TdHJpbmcoMTYpKSxcbiAgICAgICAgcGFkMihtYXRoUm91bmQoYikudG9TdHJpbmcoMTYpKVxuICAgIF07XG5cbiAgICAvLyBSZXR1cm4gYSAzIGNoYXJhY3RlciBoZXggaWYgcG9zc2libGVcbiAgICBpZiAoYWxsb3czQ2hhciAmJiBoZXhbMF0uY2hhckF0KDApID09IGhleFswXS5jaGFyQXQoMSkgJiYgaGV4WzFdLmNoYXJBdCgwKSA9PSBoZXhbMV0uY2hhckF0KDEpICYmIGhleFsyXS5jaGFyQXQoMCkgPT0gaGV4WzJdLmNoYXJBdCgxKSkge1xuICAgICAgICByZXR1cm4gaGV4WzBdLmNoYXJBdCgwKSArIGhleFsxXS5jaGFyQXQoMCkgKyBoZXhbMl0uY2hhckF0KDApO1xuICAgIH1cblxuICAgIHJldHVybiBoZXguam9pbihcIlwiKTtcbn1cblxuLy8gYHJnYmFUb0hleGBcbi8vIENvbnZlcnRzIGFuIFJHQkEgY29sb3IgcGx1cyBhbHBoYSB0cmFuc3BhcmVuY3kgdG8gaGV4XG4vLyBBc3N1bWVzIHIsIGcsIGIgYXJlIGNvbnRhaW5lZCBpbiB0aGUgc2V0IFswLCAyNTVdIGFuZFxuLy8gYSBpbiBbMCwgMV0uIFJldHVybnMgYSA0IG9yIDggY2hhcmFjdGVyIHJnYmEgaGV4XG5mdW5jdGlvbiByZ2JhVG9IZXgociwgZywgYiwgYSwgYWxsb3c0Q2hhcikge1xuXG4gICAgdmFyIGhleCA9IFtcbiAgICAgICAgcGFkMihtYXRoUm91bmQocikudG9TdHJpbmcoMTYpKSxcbiAgICAgICAgcGFkMihtYXRoUm91bmQoZykudG9TdHJpbmcoMTYpKSxcbiAgICAgICAgcGFkMihtYXRoUm91bmQoYikudG9TdHJpbmcoMTYpKSxcbiAgICAgICAgcGFkMihjb252ZXJ0RGVjaW1hbFRvSGV4KGEpKVxuICAgIF07XG5cbiAgICAvLyBSZXR1cm4gYSA0IGNoYXJhY3RlciBoZXggaWYgcG9zc2libGVcbiAgICBpZiAoYWxsb3c0Q2hhciAmJiBoZXhbMF0uY2hhckF0KDApID09IGhleFswXS5jaGFyQXQoMSkgJiYgaGV4WzFdLmNoYXJBdCgwKSA9PSBoZXhbMV0uY2hhckF0KDEpICYmIGhleFsyXS5jaGFyQXQoMCkgPT0gaGV4WzJdLmNoYXJBdCgxKSAmJiBoZXhbM10uY2hhckF0KDApID09IGhleFszXS5jaGFyQXQoMSkpIHtcbiAgICAgICAgcmV0dXJuIGhleFswXS5jaGFyQXQoMCkgKyBoZXhbMV0uY2hhckF0KDApICsgaGV4WzJdLmNoYXJBdCgwKSArIGhleFszXS5jaGFyQXQoMCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGhleC5qb2luKFwiXCIpO1xufVxuXG4vLyBgcmdiYVRvQXJnYkhleGBcbi8vIENvbnZlcnRzIGFuIFJHQkEgY29sb3IgdG8gYW4gQVJHQiBIZXg4IHN0cmluZ1xuLy8gUmFyZWx5IHVzZWQsIGJ1dCByZXF1aXJlZCBmb3IgXCJ0b0ZpbHRlcigpXCJcbmZ1bmN0aW9uIHJnYmFUb0FyZ2JIZXgociwgZywgYiwgYSkge1xuXG4gICAgdmFyIGhleCA9IFtcbiAgICAgICAgcGFkMihjb252ZXJ0RGVjaW1hbFRvSGV4KGEpKSxcbiAgICAgICAgcGFkMihtYXRoUm91bmQocikudG9TdHJpbmcoMTYpKSxcbiAgICAgICAgcGFkMihtYXRoUm91bmQoZykudG9TdHJpbmcoMTYpKSxcbiAgICAgICAgcGFkMihtYXRoUm91bmQoYikudG9TdHJpbmcoMTYpKVxuICAgIF07XG5cbiAgICByZXR1cm4gaGV4LmpvaW4oXCJcIik7XG59XG5cbi8vIGBlcXVhbHNgXG4vLyBDYW4gYmUgY2FsbGVkIHdpdGggYW55IHRpbnljb2xvciBpbnB1dFxudGlueWNvbG9yLmVxdWFscyA9IGZ1bmN0aW9uIChjb2xvcjEsIGNvbG9yMikge1xuICAgIGlmICghY29sb3IxIHx8ICFjb2xvcjIpIHsgcmV0dXJuIGZhbHNlOyB9XG4gICAgcmV0dXJuIHRpbnljb2xvcihjb2xvcjEpLnRvUmdiU3RyaW5nKCkgPT0gdGlueWNvbG9yKGNvbG9yMikudG9SZ2JTdHJpbmcoKTtcbn07XG5cbnRpbnljb2xvci5yYW5kb20gPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGlueWNvbG9yLmZyb21SYXRpbyh7XG4gICAgICAgIHI6IG1hdGhSYW5kb20oKSxcbiAgICAgICAgZzogbWF0aFJhbmRvbSgpLFxuICAgICAgICBiOiBtYXRoUmFuZG9tKClcbiAgICB9KTtcbn07XG5cblxuLy8gTW9kaWZpY2F0aW9uIEZ1bmN0aW9uc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gVGhhbmtzIHRvIGxlc3MuanMgZm9yIHNvbWUgb2YgdGhlIGJhc2ljcyBoZXJlXG4vLyA8aHR0cHM6Ly9naXRodWIuY29tL2Nsb3VkaGVhZC9sZXNzLmpzL2Jsb2IvbWFzdGVyL2xpYi9sZXNzL2Z1bmN0aW9ucy5qcz5cblxuZnVuY3Rpb24gZGVzYXR1cmF0ZShjb2xvciwgYW1vdW50KSB7XG4gICAgYW1vdW50ID0gKGFtb3VudCA9PT0gMCkgPyAwIDogKGFtb3VudCB8fCAxMCk7XG4gICAgdmFyIGhzbCA9IHRpbnljb2xvcihjb2xvcikudG9Ic2woKTtcbiAgICBoc2wucyAtPSBhbW91bnQgLyAxMDA7XG4gICAgaHNsLnMgPSBjbGFtcDAxKGhzbC5zKTtcbiAgICByZXR1cm4gdGlueWNvbG9yKGhzbCk7XG59XG5cbmZ1bmN0aW9uIHNhdHVyYXRlKGNvbG9yLCBhbW91bnQpIHtcbiAgICBhbW91bnQgPSAoYW1vdW50ID09PSAwKSA/IDAgOiAoYW1vdW50IHx8IDEwKTtcbiAgICB2YXIgaHNsID0gdGlueWNvbG9yKGNvbG9yKS50b0hzbCgpO1xuICAgIGhzbC5zICs9IGFtb3VudCAvIDEwMDtcbiAgICBoc2wucyA9IGNsYW1wMDEoaHNsLnMpO1xuICAgIHJldHVybiB0aW55Y29sb3IoaHNsKTtcbn1cblxuZnVuY3Rpb24gZ3JleXNjYWxlKGNvbG9yKSB7XG4gICAgcmV0dXJuIHRpbnljb2xvcihjb2xvcikuZGVzYXR1cmF0ZSgxMDApO1xufVxuXG5mdW5jdGlvbiBsaWdodGVuIChjb2xvciwgYW1vdW50KSB7XG4gICAgYW1vdW50ID0gKGFtb3VudCA9PT0gMCkgPyAwIDogKGFtb3VudCB8fCAxMCk7XG4gICAgdmFyIGhzbCA9IHRpbnljb2xvcihjb2xvcikudG9Ic2woKTtcbiAgICBoc2wubCArPSBhbW91bnQgLyAxMDA7XG4gICAgaHNsLmwgPSBjbGFtcDAxKGhzbC5sKTtcbiAgICByZXR1cm4gdGlueWNvbG9yKGhzbCk7XG59XG5cbmZ1bmN0aW9uIGJyaWdodGVuKGNvbG9yLCBhbW91bnQpIHtcbiAgICBhbW91bnQgPSAoYW1vdW50ID09PSAwKSA/IDAgOiAoYW1vdW50IHx8IDEwKTtcbiAgICB2YXIgcmdiID0gdGlueWNvbG9yKGNvbG9yKS50b1JnYigpO1xuICAgIHJnYi5yID0gbWF0aE1heCgwLCBtYXRoTWluKDI1NSwgcmdiLnIgLSBtYXRoUm91bmQoMjU1ICogLSAoYW1vdW50IC8gMTAwKSkpKTtcbiAgICByZ2IuZyA9IG1hdGhNYXgoMCwgbWF0aE1pbigyNTUsIHJnYi5nIC0gbWF0aFJvdW5kKDI1NSAqIC0gKGFtb3VudCAvIDEwMCkpKSk7XG4gICAgcmdiLmIgPSBtYXRoTWF4KDAsIG1hdGhNaW4oMjU1LCByZ2IuYiAtIG1hdGhSb3VuZCgyNTUgKiAtIChhbW91bnQgLyAxMDApKSkpO1xuICAgIHJldHVybiB0aW55Y29sb3IocmdiKTtcbn1cblxuZnVuY3Rpb24gZGFya2VuIChjb2xvciwgYW1vdW50KSB7XG4gICAgYW1vdW50ID0gKGFtb3VudCA9PT0gMCkgPyAwIDogKGFtb3VudCB8fCAxMCk7XG4gICAgdmFyIGhzbCA9IHRpbnljb2xvcihjb2xvcikudG9Ic2woKTtcbiAgICBoc2wubCAtPSBhbW91bnQgLyAxMDA7XG4gICAgaHNsLmwgPSBjbGFtcDAxKGhzbC5sKTtcbiAgICByZXR1cm4gdGlueWNvbG9yKGhzbCk7XG59XG5cbi8vIFNwaW4gdGFrZXMgYSBwb3NpdGl2ZSBvciBuZWdhdGl2ZSBhbW91bnQgd2l0aGluIFstMzYwLCAzNjBdIGluZGljYXRpbmcgdGhlIGNoYW5nZSBvZiBodWUuXG4vLyBWYWx1ZXMgb3V0c2lkZSBvZiB0aGlzIHJhbmdlIHdpbGwgYmUgd3JhcHBlZCBpbnRvIHRoaXMgcmFuZ2UuXG5mdW5jdGlvbiBzcGluKGNvbG9yLCBhbW91bnQpIHtcbiAgICB2YXIgaHNsID0gdGlueWNvbG9yKGNvbG9yKS50b0hzbCgpO1xuICAgIHZhciBodWUgPSAoaHNsLmggKyBhbW91bnQpICUgMzYwO1xuICAgIGhzbC5oID0gaHVlIDwgMCA/IDM2MCArIGh1ZSA6IGh1ZTtcbiAgICByZXR1cm4gdGlueWNvbG9yKGhzbCk7XG59XG5cbi8vIENvbWJpbmF0aW9uIEZ1bmN0aW9uc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBUaGFua3MgdG8galF1ZXJ5IHhDb2xvciBmb3Igc29tZSBvZiB0aGUgaWRlYXMgYmVoaW5kIHRoZXNlXG4vLyA8aHR0cHM6Ly9naXRodWIuY29tL2luZnVzaW9uL2pRdWVyeS14Y29sb3IvYmxvYi9tYXN0ZXIvanF1ZXJ5Lnhjb2xvci5qcz5cblxuZnVuY3Rpb24gY29tcGxlbWVudChjb2xvcikge1xuICAgIHZhciBoc2wgPSB0aW55Y29sb3IoY29sb3IpLnRvSHNsKCk7XG4gICAgaHNsLmggPSAoaHNsLmggKyAxODApICUgMzYwO1xuICAgIHJldHVybiB0aW55Y29sb3IoaHNsKTtcbn1cblxuZnVuY3Rpb24gdHJpYWQoY29sb3IpIHtcbiAgICB2YXIgaHNsID0gdGlueWNvbG9yKGNvbG9yKS50b0hzbCgpO1xuICAgIHZhciBoID0gaHNsLmg7XG4gICAgcmV0dXJuIFtcbiAgICAgICAgdGlueWNvbG9yKGNvbG9yKSxcbiAgICAgICAgdGlueWNvbG9yKHsgaDogKGggKyAxMjApICUgMzYwLCBzOiBoc2wucywgbDogaHNsLmwgfSksXG4gICAgICAgIHRpbnljb2xvcih7IGg6IChoICsgMjQwKSAlIDM2MCwgczogaHNsLnMsIGw6IGhzbC5sIH0pXG4gICAgXTtcbn1cblxuZnVuY3Rpb24gdGV0cmFkKGNvbG9yKSB7XG4gICAgdmFyIGhzbCA9IHRpbnljb2xvcihjb2xvcikudG9Ic2woKTtcbiAgICB2YXIgaCA9IGhzbC5oO1xuICAgIHJldHVybiBbXG4gICAgICAgIHRpbnljb2xvcihjb2xvciksXG4gICAgICAgIHRpbnljb2xvcih7IGg6IChoICsgOTApICUgMzYwLCBzOiBoc2wucywgbDogaHNsLmwgfSksXG4gICAgICAgIHRpbnljb2xvcih7IGg6IChoICsgMTgwKSAlIDM2MCwgczogaHNsLnMsIGw6IGhzbC5sIH0pLFxuICAgICAgICB0aW55Y29sb3IoeyBoOiAoaCArIDI3MCkgJSAzNjAsIHM6IGhzbC5zLCBsOiBoc2wubCB9KVxuICAgIF07XG59XG5cbmZ1bmN0aW9uIHNwbGl0Y29tcGxlbWVudChjb2xvcikge1xuICAgIHZhciBoc2wgPSB0aW55Y29sb3IoY29sb3IpLnRvSHNsKCk7XG4gICAgdmFyIGggPSBoc2wuaDtcbiAgICByZXR1cm4gW1xuICAgICAgICB0aW55Y29sb3IoY29sb3IpLFxuICAgICAgICB0aW55Y29sb3IoeyBoOiAoaCArIDcyKSAlIDM2MCwgczogaHNsLnMsIGw6IGhzbC5sfSksXG4gICAgICAgIHRpbnljb2xvcih7IGg6IChoICsgMjE2KSAlIDM2MCwgczogaHNsLnMsIGw6IGhzbC5sfSlcbiAgICBdO1xufVxuXG5mdW5jdGlvbiBhbmFsb2dvdXMoY29sb3IsIHJlc3VsdHMsIHNsaWNlcykge1xuICAgIHJlc3VsdHMgPSByZXN1bHRzIHx8IDY7XG4gICAgc2xpY2VzID0gc2xpY2VzIHx8IDMwO1xuXG4gICAgdmFyIGhzbCA9IHRpbnljb2xvcihjb2xvcikudG9Ic2woKTtcbiAgICB2YXIgcGFydCA9IDM2MCAvIHNsaWNlcztcbiAgICB2YXIgcmV0ID0gW3Rpbnljb2xvcihjb2xvcildO1xuXG4gICAgZm9yIChoc2wuaCA9ICgoaHNsLmggLSAocGFydCAqIHJlc3VsdHMgPj4gMSkpICsgNzIwKSAlIDM2MDsgLS1yZXN1bHRzOyApIHtcbiAgICAgICAgaHNsLmggPSAoaHNsLmggKyBwYXJ0KSAlIDM2MDtcbiAgICAgICAgcmV0LnB1c2godGlueWNvbG9yKGhzbCkpO1xuICAgIH1cbiAgICByZXR1cm4gcmV0O1xufVxuXG5mdW5jdGlvbiBtb25vY2hyb21hdGljKGNvbG9yLCByZXN1bHRzKSB7XG4gICAgcmVzdWx0cyA9IHJlc3VsdHMgfHwgNjtcbiAgICB2YXIgaHN2ID0gdGlueWNvbG9yKGNvbG9yKS50b0hzdigpO1xuICAgIHZhciBoID0gaHN2LmgsIHMgPSBoc3YucywgdiA9IGhzdi52O1xuICAgIHZhciByZXQgPSBbXTtcbiAgICB2YXIgbW9kaWZpY2F0aW9uID0gMSAvIHJlc3VsdHM7XG5cbiAgICB3aGlsZSAocmVzdWx0cy0tKSB7XG4gICAgICAgIHJldC5wdXNoKHRpbnljb2xvcih7IGg6IGgsIHM6IHMsIHY6IHZ9KSk7XG4gICAgICAgIHYgPSAodiArIG1vZGlmaWNhdGlvbikgJSAxO1xuICAgIH1cblxuICAgIHJldHVybiByZXQ7XG59XG5cbi8vIFV0aWxpdHkgRnVuY3Rpb25zXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxudGlueWNvbG9yLm1peCA9IGZ1bmN0aW9uKGNvbG9yMSwgY29sb3IyLCBhbW91bnQpIHtcbiAgICBhbW91bnQgPSAoYW1vdW50ID09PSAwKSA/IDAgOiAoYW1vdW50IHx8IDUwKTtcblxuICAgIHZhciByZ2IxID0gdGlueWNvbG9yKGNvbG9yMSkudG9SZ2IoKTtcbiAgICB2YXIgcmdiMiA9IHRpbnljb2xvcihjb2xvcjIpLnRvUmdiKCk7XG5cbiAgICB2YXIgcCA9IGFtb3VudCAvIDEwMDtcblxuICAgIHZhciByZ2JhID0ge1xuICAgICAgICByOiAoKHJnYjIuciAtIHJnYjEucikgKiBwKSArIHJnYjEucixcbiAgICAgICAgZzogKChyZ2IyLmcgLSByZ2IxLmcpICogcCkgKyByZ2IxLmcsXG4gICAgICAgIGI6ICgocmdiMi5iIC0gcmdiMS5iKSAqIHApICsgcmdiMS5iLFxuICAgICAgICBhOiAoKHJnYjIuYSAtIHJnYjEuYSkgKiBwKSArIHJnYjEuYVxuICAgIH07XG5cbiAgICByZXR1cm4gdGlueWNvbG9yKHJnYmEpO1xufTtcblxuXG4vLyBSZWFkYWJpbGl0eSBGdW5jdGlvbnNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gPGh0dHA6Ly93d3cudzMub3JnL1RSLzIwMDgvUkVDLVdDQUcyMC0yMDA4MTIxMS8jY29udHJhc3QtcmF0aW9kZWYgKFdDQUcgVmVyc2lvbiAyKVxuXG4vLyBgY29udHJhc3RgXG4vLyBBbmFseXplIHRoZSAyIGNvbG9ycyBhbmQgcmV0dXJucyB0aGUgY29sb3IgY29udHJhc3QgZGVmaW5lZCBieSAoV0NBRyBWZXJzaW9uIDIpXG50aW55Y29sb3IucmVhZGFiaWxpdHkgPSBmdW5jdGlvbihjb2xvcjEsIGNvbG9yMikge1xuICAgIHZhciBjMSA9IHRpbnljb2xvcihjb2xvcjEpO1xuICAgIHZhciBjMiA9IHRpbnljb2xvcihjb2xvcjIpO1xuICAgIHJldHVybiAoTWF0aC5tYXgoYzEuZ2V0THVtaW5hbmNlKCksYzIuZ2V0THVtaW5hbmNlKCkpKzAuMDUpIC8gKE1hdGgubWluKGMxLmdldEx1bWluYW5jZSgpLGMyLmdldEx1bWluYW5jZSgpKSswLjA1KTtcbn07XG5cbi8vIGBpc1JlYWRhYmxlYFxuLy8gRW5zdXJlIHRoYXQgZm9yZWdyb3VuZCBhbmQgYmFja2dyb3VuZCBjb2xvciBjb21iaW5hdGlvbnMgbWVldCBXQ0FHMiBndWlkZWxpbmVzLlxuLy8gVGhlIHRoaXJkIGFyZ3VtZW50IGlzIGFuIG9wdGlvbmFsIE9iamVjdC5cbi8vICAgICAgdGhlICdsZXZlbCcgcHJvcGVydHkgc3RhdGVzICdBQScgb3IgJ0FBQScgLSBpZiBtaXNzaW5nIG9yIGludmFsaWQsIGl0IGRlZmF1bHRzIHRvICdBQSc7XG4vLyAgICAgIHRoZSAnc2l6ZScgcHJvcGVydHkgc3RhdGVzICdsYXJnZScgb3IgJ3NtYWxsJyAtIGlmIG1pc3Npbmcgb3IgaW52YWxpZCwgaXQgZGVmYXVsdHMgdG8gJ3NtYWxsJy5cbi8vIElmIHRoZSBlbnRpcmUgb2JqZWN0IGlzIGFic2VudCwgaXNSZWFkYWJsZSBkZWZhdWx0cyB0byB7bGV2ZWw6XCJBQVwiLHNpemU6XCJzbWFsbFwifS5cblxuLy8gKkV4YW1wbGUqXG4vLyAgICB0aW55Y29sb3IuaXNSZWFkYWJsZShcIiMwMDBcIiwgXCIjMTExXCIpID0+IGZhbHNlXG4vLyAgICB0aW55Y29sb3IuaXNSZWFkYWJsZShcIiMwMDBcIiwgXCIjMTExXCIse2xldmVsOlwiQUFcIixzaXplOlwibGFyZ2VcIn0pID0+IGZhbHNlXG50aW55Y29sb3IuaXNSZWFkYWJsZSA9IGZ1bmN0aW9uKGNvbG9yMSwgY29sb3IyLCB3Y2FnMikge1xuICAgIHZhciByZWFkYWJpbGl0eSA9IHRpbnljb2xvci5yZWFkYWJpbGl0eShjb2xvcjEsIGNvbG9yMik7XG4gICAgdmFyIHdjYWcyUGFybXMsIG91dDtcblxuICAgIG91dCA9IGZhbHNlO1xuXG4gICAgd2NhZzJQYXJtcyA9IHZhbGlkYXRlV0NBRzJQYXJtcyh3Y2FnMik7XG4gICAgc3dpdGNoICh3Y2FnMlBhcm1zLmxldmVsICsgd2NhZzJQYXJtcy5zaXplKSB7XG4gICAgICAgIGNhc2UgXCJBQXNtYWxsXCI6XG4gICAgICAgIGNhc2UgXCJBQUFsYXJnZVwiOlxuICAgICAgICAgICAgb3V0ID0gcmVhZGFiaWxpdHkgPj0gNC41O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJBQWxhcmdlXCI6XG4gICAgICAgICAgICBvdXQgPSByZWFkYWJpbGl0eSA+PSAzO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJBQUFzbWFsbFwiOlxuICAgICAgICAgICAgb3V0ID0gcmVhZGFiaWxpdHkgPj0gNztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICByZXR1cm4gb3V0O1xuXG59O1xuXG4vLyBgbW9zdFJlYWRhYmxlYFxuLy8gR2l2ZW4gYSBiYXNlIGNvbG9yIGFuZCBhIGxpc3Qgb2YgcG9zc2libGUgZm9yZWdyb3VuZCBvciBiYWNrZ3JvdW5kXG4vLyBjb2xvcnMgZm9yIHRoYXQgYmFzZSwgcmV0dXJucyB0aGUgbW9zdCByZWFkYWJsZSBjb2xvci5cbi8vIE9wdGlvbmFsbHkgcmV0dXJucyBCbGFjayBvciBXaGl0ZSBpZiB0aGUgbW9zdCByZWFkYWJsZSBjb2xvciBpcyB1bnJlYWRhYmxlLlxuLy8gKkV4YW1wbGUqXG4vLyAgICB0aW55Y29sb3IubW9zdFJlYWRhYmxlKHRpbnljb2xvci5tb3N0UmVhZGFibGUoXCIjMTIzXCIsIFtcIiMxMjRcIiwgXCIjMTI1XCJdLHtpbmNsdWRlRmFsbGJhY2tDb2xvcnM6ZmFsc2V9KS50b0hleFN0cmluZygpOyAvLyBcIiMxMTIyNTVcIlxuLy8gICAgdGlueWNvbG9yLm1vc3RSZWFkYWJsZSh0aW55Y29sb3IubW9zdFJlYWRhYmxlKFwiIzEyM1wiLCBbXCIjMTI0XCIsIFwiIzEyNVwiXSx7aW5jbHVkZUZhbGxiYWNrQ29sb3JzOnRydWV9KS50b0hleFN0cmluZygpOyAgLy8gXCIjZmZmZmZmXCJcbi8vICAgIHRpbnljb2xvci5tb3N0UmVhZGFibGUoXCIjYTgwMTVhXCIsIFtcIiNmYWYzZjNcIl0se2luY2x1ZGVGYWxsYmFja0NvbG9yczp0cnVlLGxldmVsOlwiQUFBXCIsc2l6ZTpcImxhcmdlXCJ9KS50b0hleFN0cmluZygpOyAvLyBcIiNmYWYzZjNcIlxuLy8gICAgdGlueWNvbG9yLm1vc3RSZWFkYWJsZShcIiNhODAxNWFcIiwgW1wiI2ZhZjNmM1wiXSx7aW5jbHVkZUZhbGxiYWNrQ29sb3JzOnRydWUsbGV2ZWw6XCJBQUFcIixzaXplOlwic21hbGxcIn0pLnRvSGV4U3RyaW5nKCk7IC8vIFwiI2ZmZmZmZlwiXG50aW55Y29sb3IubW9zdFJlYWRhYmxlID0gZnVuY3Rpb24oYmFzZUNvbG9yLCBjb2xvckxpc3QsIGFyZ3MpIHtcbiAgICB2YXIgYmVzdENvbG9yID0gbnVsbDtcbiAgICB2YXIgYmVzdFNjb3JlID0gMDtcbiAgICB2YXIgcmVhZGFiaWxpdHk7XG4gICAgdmFyIGluY2x1ZGVGYWxsYmFja0NvbG9ycywgbGV2ZWwsIHNpemUgO1xuICAgIGFyZ3MgPSBhcmdzIHx8IHt9O1xuICAgIGluY2x1ZGVGYWxsYmFja0NvbG9ycyA9IGFyZ3MuaW5jbHVkZUZhbGxiYWNrQ29sb3JzIDtcbiAgICBsZXZlbCA9IGFyZ3MubGV2ZWw7XG4gICAgc2l6ZSA9IGFyZ3Muc2l6ZTtcblxuICAgIGZvciAodmFyIGk9IDA7IGkgPCBjb2xvckxpc3QubGVuZ3RoIDsgaSsrKSB7XG4gICAgICAgIHJlYWRhYmlsaXR5ID0gdGlueWNvbG9yLnJlYWRhYmlsaXR5KGJhc2VDb2xvciwgY29sb3JMaXN0W2ldKTtcbiAgICAgICAgaWYgKHJlYWRhYmlsaXR5ID4gYmVzdFNjb3JlKSB7XG4gICAgICAgICAgICBiZXN0U2NvcmUgPSByZWFkYWJpbGl0eTtcbiAgICAgICAgICAgIGJlc3RDb2xvciA9IHRpbnljb2xvcihjb2xvckxpc3RbaV0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRpbnljb2xvci5pc1JlYWRhYmxlKGJhc2VDb2xvciwgYmVzdENvbG9yLCB7XCJsZXZlbFwiOmxldmVsLFwic2l6ZVwiOnNpemV9KSB8fCAhaW5jbHVkZUZhbGxiYWNrQ29sb3JzKSB7XG4gICAgICAgIHJldHVybiBiZXN0Q29sb3I7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBhcmdzLmluY2x1ZGVGYWxsYmFja0NvbG9ycz1mYWxzZTtcbiAgICAgICAgcmV0dXJuIHRpbnljb2xvci5tb3N0UmVhZGFibGUoYmFzZUNvbG9yLFtcIiNmZmZcIiwgXCIjMDAwXCJdLGFyZ3MpO1xuICAgIH1cbn07XG5cblxuLy8gQmlnIExpc3Qgb2YgQ29sb3JzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS1cbi8vIDxodHRwOi8vd3d3LnczLm9yZy9UUi9jc3MzLWNvbG9yLyNzdmctY29sb3I+XG52YXIgbmFtZXMgPSB0aW55Y29sb3IubmFtZXMgPSB7XG4gICAgYWxpY2VibHVlOiBcImYwZjhmZlwiLFxuICAgIGFudGlxdWV3aGl0ZTogXCJmYWViZDdcIixcbiAgICBhcXVhOiBcIjBmZlwiLFxuICAgIGFxdWFtYXJpbmU6IFwiN2ZmZmQ0XCIsXG4gICAgYXp1cmU6IFwiZjBmZmZmXCIsXG4gICAgYmVpZ2U6IFwiZjVmNWRjXCIsXG4gICAgYmlzcXVlOiBcImZmZTRjNFwiLFxuICAgIGJsYWNrOiBcIjAwMFwiLFxuICAgIGJsYW5jaGVkYWxtb25kOiBcImZmZWJjZFwiLFxuICAgIGJsdWU6IFwiMDBmXCIsXG4gICAgYmx1ZXZpb2xldDogXCI4YTJiZTJcIixcbiAgICBicm93bjogXCJhNTJhMmFcIixcbiAgICBidXJseXdvb2Q6IFwiZGViODg3XCIsXG4gICAgYnVybnRzaWVubmE6IFwiZWE3ZTVkXCIsXG4gICAgY2FkZXRibHVlOiBcIjVmOWVhMFwiLFxuICAgIGNoYXJ0cmV1c2U6IFwiN2ZmZjAwXCIsXG4gICAgY2hvY29sYXRlOiBcImQyNjkxZVwiLFxuICAgIGNvcmFsOiBcImZmN2Y1MFwiLFxuICAgIGNvcm5mbG93ZXJibHVlOiBcIjY0OTVlZFwiLFxuICAgIGNvcm5zaWxrOiBcImZmZjhkY1wiLFxuICAgIGNyaW1zb246IFwiZGMxNDNjXCIsXG4gICAgY3lhbjogXCIwZmZcIixcbiAgICBkYXJrYmx1ZTogXCIwMDAwOGJcIixcbiAgICBkYXJrY3lhbjogXCIwMDhiOGJcIixcbiAgICBkYXJrZ29sZGVucm9kOiBcImI4ODYwYlwiLFxuICAgIGRhcmtncmF5OiBcImE5YTlhOVwiLFxuICAgIGRhcmtncmVlbjogXCIwMDY0MDBcIixcbiAgICBkYXJrZ3JleTogXCJhOWE5YTlcIixcbiAgICBkYXJra2hha2k6IFwiYmRiNzZiXCIsXG4gICAgZGFya21hZ2VudGE6IFwiOGIwMDhiXCIsXG4gICAgZGFya29saXZlZ3JlZW46IFwiNTU2YjJmXCIsXG4gICAgZGFya29yYW5nZTogXCJmZjhjMDBcIixcbiAgICBkYXJrb3JjaGlkOiBcIjk5MzJjY1wiLFxuICAgIGRhcmtyZWQ6IFwiOGIwMDAwXCIsXG4gICAgZGFya3NhbG1vbjogXCJlOTk2N2FcIixcbiAgICBkYXJrc2VhZ3JlZW46IFwiOGZiYzhmXCIsXG4gICAgZGFya3NsYXRlYmx1ZTogXCI0ODNkOGJcIixcbiAgICBkYXJrc2xhdGVncmF5OiBcIjJmNGY0ZlwiLFxuICAgIGRhcmtzbGF0ZWdyZXk6IFwiMmY0ZjRmXCIsXG4gICAgZGFya3R1cnF1b2lzZTogXCIwMGNlZDFcIixcbiAgICBkYXJrdmlvbGV0OiBcIjk0MDBkM1wiLFxuICAgIGRlZXBwaW5rOiBcImZmMTQ5M1wiLFxuICAgIGRlZXBza3libHVlOiBcIjAwYmZmZlwiLFxuICAgIGRpbWdyYXk6IFwiNjk2OTY5XCIsXG4gICAgZGltZ3JleTogXCI2OTY5NjlcIixcbiAgICBkb2RnZXJibHVlOiBcIjFlOTBmZlwiLFxuICAgIGZpcmVicmljazogXCJiMjIyMjJcIixcbiAgICBmbG9yYWx3aGl0ZTogXCJmZmZhZjBcIixcbiAgICBmb3Jlc3RncmVlbjogXCIyMjhiMjJcIixcbiAgICBmdWNoc2lhOiBcImYwZlwiLFxuICAgIGdhaW5zYm9ybzogXCJkY2RjZGNcIixcbiAgICBnaG9zdHdoaXRlOiBcImY4ZjhmZlwiLFxuICAgIGdvbGQ6IFwiZmZkNzAwXCIsXG4gICAgZ29sZGVucm9kOiBcImRhYTUyMFwiLFxuICAgIGdyYXk6IFwiODA4MDgwXCIsXG4gICAgZ3JlZW46IFwiMDA4MDAwXCIsXG4gICAgZ3JlZW55ZWxsb3c6IFwiYWRmZjJmXCIsXG4gICAgZ3JleTogXCI4MDgwODBcIixcbiAgICBob25leWRldzogXCJmMGZmZjBcIixcbiAgICBob3RwaW5rOiBcImZmNjliNFwiLFxuICAgIGluZGlhbnJlZDogXCJjZDVjNWNcIixcbiAgICBpbmRpZ286IFwiNGIwMDgyXCIsXG4gICAgaXZvcnk6IFwiZmZmZmYwXCIsXG4gICAga2hha2k6IFwiZjBlNjhjXCIsXG4gICAgbGF2ZW5kZXI6IFwiZTZlNmZhXCIsXG4gICAgbGF2ZW5kZXJibHVzaDogXCJmZmYwZjVcIixcbiAgICBsYXduZ3JlZW46IFwiN2NmYzAwXCIsXG4gICAgbGVtb25jaGlmZm9uOiBcImZmZmFjZFwiLFxuICAgIGxpZ2h0Ymx1ZTogXCJhZGQ4ZTZcIixcbiAgICBsaWdodGNvcmFsOiBcImYwODA4MFwiLFxuICAgIGxpZ2h0Y3lhbjogXCJlMGZmZmZcIixcbiAgICBsaWdodGdvbGRlbnJvZHllbGxvdzogXCJmYWZhZDJcIixcbiAgICBsaWdodGdyYXk6IFwiZDNkM2QzXCIsXG4gICAgbGlnaHRncmVlbjogXCI5MGVlOTBcIixcbiAgICBsaWdodGdyZXk6IFwiZDNkM2QzXCIsXG4gICAgbGlnaHRwaW5rOiBcImZmYjZjMVwiLFxuICAgIGxpZ2h0c2FsbW9uOiBcImZmYTA3YVwiLFxuICAgIGxpZ2h0c2VhZ3JlZW46IFwiMjBiMmFhXCIsXG4gICAgbGlnaHRza3libHVlOiBcIjg3Y2VmYVwiLFxuICAgIGxpZ2h0c2xhdGVncmF5OiBcIjc4OVwiLFxuICAgIGxpZ2h0c2xhdGVncmV5OiBcIjc4OVwiLFxuICAgIGxpZ2h0c3RlZWxibHVlOiBcImIwYzRkZVwiLFxuICAgIGxpZ2h0eWVsbG93OiBcImZmZmZlMFwiLFxuICAgIGxpbWU6IFwiMGYwXCIsXG4gICAgbGltZWdyZWVuOiBcIjMyY2QzMlwiLFxuICAgIGxpbmVuOiBcImZhZjBlNlwiLFxuICAgIG1hZ2VudGE6IFwiZjBmXCIsXG4gICAgbWFyb29uOiBcIjgwMDAwMFwiLFxuICAgIG1lZGl1bWFxdWFtYXJpbmU6IFwiNjZjZGFhXCIsXG4gICAgbWVkaXVtYmx1ZTogXCIwMDAwY2RcIixcbiAgICBtZWRpdW1vcmNoaWQ6IFwiYmE1NWQzXCIsXG4gICAgbWVkaXVtcHVycGxlOiBcIjkzNzBkYlwiLFxuICAgIG1lZGl1bXNlYWdyZWVuOiBcIjNjYjM3MVwiLFxuICAgIG1lZGl1bXNsYXRlYmx1ZTogXCI3YjY4ZWVcIixcbiAgICBtZWRpdW1zcHJpbmdncmVlbjogXCIwMGZhOWFcIixcbiAgICBtZWRpdW10dXJxdW9pc2U6IFwiNDhkMWNjXCIsXG4gICAgbWVkaXVtdmlvbGV0cmVkOiBcImM3MTU4NVwiLFxuICAgIG1pZG5pZ2h0Ymx1ZTogXCIxOTE5NzBcIixcbiAgICBtaW50Y3JlYW06IFwiZjVmZmZhXCIsXG4gICAgbWlzdHlyb3NlOiBcImZmZTRlMVwiLFxuICAgIG1vY2Nhc2luOiBcImZmZTRiNVwiLFxuICAgIG5hdmFqb3doaXRlOiBcImZmZGVhZFwiLFxuICAgIG5hdnk6IFwiMDAwMDgwXCIsXG4gICAgb2xkbGFjZTogXCJmZGY1ZTZcIixcbiAgICBvbGl2ZTogXCI4MDgwMDBcIixcbiAgICBvbGl2ZWRyYWI6IFwiNmI4ZTIzXCIsXG4gICAgb3JhbmdlOiBcImZmYTUwMFwiLFxuICAgIG9yYW5nZXJlZDogXCJmZjQ1MDBcIixcbiAgICBvcmNoaWQ6IFwiZGE3MGQ2XCIsXG4gICAgcGFsZWdvbGRlbnJvZDogXCJlZWU4YWFcIixcbiAgICBwYWxlZ3JlZW46IFwiOThmYjk4XCIsXG4gICAgcGFsZXR1cnF1b2lzZTogXCJhZmVlZWVcIixcbiAgICBwYWxldmlvbGV0cmVkOiBcImRiNzA5M1wiLFxuICAgIHBhcGF5YXdoaXA6IFwiZmZlZmQ1XCIsXG4gICAgcGVhY2hwdWZmOiBcImZmZGFiOVwiLFxuICAgIHBlcnU6IFwiY2Q4NTNmXCIsXG4gICAgcGluazogXCJmZmMwY2JcIixcbiAgICBwbHVtOiBcImRkYTBkZFwiLFxuICAgIHBvd2RlcmJsdWU6IFwiYjBlMGU2XCIsXG4gICAgcHVycGxlOiBcIjgwMDA4MFwiLFxuICAgIHJlYmVjY2FwdXJwbGU6IFwiNjYzMzk5XCIsXG4gICAgcmVkOiBcImYwMFwiLFxuICAgIHJvc3licm93bjogXCJiYzhmOGZcIixcbiAgICByb3lhbGJsdWU6IFwiNDE2OWUxXCIsXG4gICAgc2FkZGxlYnJvd246IFwiOGI0NTEzXCIsXG4gICAgc2FsbW9uOiBcImZhODA3MlwiLFxuICAgIHNhbmR5YnJvd246IFwiZjRhNDYwXCIsXG4gICAgc2VhZ3JlZW46IFwiMmU4YjU3XCIsXG4gICAgc2Vhc2hlbGw6IFwiZmZmNWVlXCIsXG4gICAgc2llbm5hOiBcImEwNTIyZFwiLFxuICAgIHNpbHZlcjogXCJjMGMwYzBcIixcbiAgICBza3libHVlOiBcIjg3Y2VlYlwiLFxuICAgIHNsYXRlYmx1ZTogXCI2YTVhY2RcIixcbiAgICBzbGF0ZWdyYXk6IFwiNzA4MDkwXCIsXG4gICAgc2xhdGVncmV5OiBcIjcwODA5MFwiLFxuICAgIHNub3c6IFwiZmZmYWZhXCIsXG4gICAgc3ByaW5nZ3JlZW46IFwiMDBmZjdmXCIsXG4gICAgc3RlZWxibHVlOiBcIjQ2ODJiNFwiLFxuICAgIHRhbjogXCJkMmI0OGNcIixcbiAgICB0ZWFsOiBcIjAwODA4MFwiLFxuICAgIHRoaXN0bGU6IFwiZDhiZmQ4XCIsXG4gICAgdG9tYXRvOiBcImZmNjM0N1wiLFxuICAgIHR1cnF1b2lzZTogXCI0MGUwZDBcIixcbiAgICB2aW9sZXQ6IFwiZWU4MmVlXCIsXG4gICAgd2hlYXQ6IFwiZjVkZWIzXCIsXG4gICAgd2hpdGU6IFwiZmZmXCIsXG4gICAgd2hpdGVzbW9rZTogXCJmNWY1ZjVcIixcbiAgICB5ZWxsb3c6IFwiZmYwXCIsXG4gICAgeWVsbG93Z3JlZW46IFwiOWFjZDMyXCJcbn07XG5cbi8vIE1ha2UgaXQgZWFzeSB0byBhY2Nlc3MgY29sb3JzIHZpYSBgaGV4TmFtZXNbaGV4XWBcbnZhciBoZXhOYW1lcyA9IHRpbnljb2xvci5oZXhOYW1lcyA9IGZsaXAobmFtZXMpO1xuXG5cbi8vIFV0aWxpdGllc1xuLy8gLS0tLS0tLS0tXG5cbi8vIGB7ICduYW1lMSc6ICd2YWwxJyB9YCBiZWNvbWVzIGB7ICd2YWwxJzogJ25hbWUxJyB9YFxuZnVuY3Rpb24gZmxpcChvKSB7XG4gICAgdmFyIGZsaXBwZWQgPSB7IH07XG4gICAgZm9yICh2YXIgaSBpbiBvKSB7XG4gICAgICAgIGlmIChvLmhhc093blByb3BlcnR5KGkpKSB7XG4gICAgICAgICAgICBmbGlwcGVkW29baV1dID0gaTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmxpcHBlZDtcbn1cblxuLy8gUmV0dXJuIGEgdmFsaWQgYWxwaGEgdmFsdWUgWzAsMV0gd2l0aCBhbGwgaW52YWxpZCB2YWx1ZXMgYmVpbmcgc2V0IHRvIDFcbmZ1bmN0aW9uIGJvdW5kQWxwaGEoYSkge1xuICAgIGEgPSBwYXJzZUZsb2F0KGEpO1xuXG4gICAgaWYgKGlzTmFOKGEpIHx8IGEgPCAwIHx8IGEgPiAxKSB7XG4gICAgICAgIGEgPSAxO1xuICAgIH1cblxuICAgIHJldHVybiBhO1xufVxuXG4vLyBUYWtlIGlucHV0IGZyb20gWzAsIG5dIGFuZCByZXR1cm4gaXQgYXMgWzAsIDFdXG5mdW5jdGlvbiBib3VuZDAxKG4sIG1heCkge1xuICAgIGlmIChpc09uZVBvaW50WmVybyhuKSkgeyBuID0gXCIxMDAlXCI7IH1cblxuICAgIHZhciBwcm9jZXNzUGVyY2VudCA9IGlzUGVyY2VudGFnZShuKTtcbiAgICBuID0gbWF0aE1pbihtYXgsIG1hdGhNYXgoMCwgcGFyc2VGbG9hdChuKSkpO1xuXG4gICAgLy8gQXV0b21hdGljYWxseSBjb252ZXJ0IHBlcmNlbnRhZ2UgaW50byBudW1iZXJcbiAgICBpZiAocHJvY2Vzc1BlcmNlbnQpIHtcbiAgICAgICAgbiA9IHBhcnNlSW50KG4gKiBtYXgsIDEwKSAvIDEwMDtcbiAgICB9XG5cbiAgICAvLyBIYW5kbGUgZmxvYXRpbmcgcG9pbnQgcm91bmRpbmcgZXJyb3JzXG4gICAgaWYgKChNYXRoLmFicyhuIC0gbWF4KSA8IDAuMDAwMDAxKSkge1xuICAgICAgICByZXR1cm4gMTtcbiAgICB9XG5cbiAgICAvLyBDb252ZXJ0IGludG8gWzAsIDFdIHJhbmdlIGlmIGl0IGlzbid0IGFscmVhZHlcbiAgICByZXR1cm4gKG4gJSBtYXgpIC8gcGFyc2VGbG9hdChtYXgpO1xufVxuXG4vLyBGb3JjZSBhIG51bWJlciBiZXR3ZWVuIDAgYW5kIDFcbmZ1bmN0aW9uIGNsYW1wMDEodmFsKSB7XG4gICAgcmV0dXJuIG1hdGhNaW4oMSwgbWF0aE1heCgwLCB2YWwpKTtcbn1cblxuLy8gUGFyc2UgYSBiYXNlLTE2IGhleCB2YWx1ZSBpbnRvIGEgYmFzZS0xMCBpbnRlZ2VyXG5mdW5jdGlvbiBwYXJzZUludEZyb21IZXgodmFsKSB7XG4gICAgcmV0dXJuIHBhcnNlSW50KHZhbCwgMTYpO1xufVxuXG4vLyBOZWVkIHRvIGhhbmRsZSAxLjAgYXMgMTAwJSwgc2luY2Ugb25jZSBpdCBpcyBhIG51bWJlciwgdGhlcmUgaXMgbm8gZGlmZmVyZW5jZSBiZXR3ZWVuIGl0IGFuZCAxXG4vLyA8aHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy83NDIyMDcyL2phdmFzY3JpcHQtaG93LXRvLWRldGVjdC1udW1iZXItYXMtYS1kZWNpbWFsLWluY2x1ZGluZy0xLTA+XG5mdW5jdGlvbiBpc09uZVBvaW50WmVybyhuKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBuID09IFwic3RyaW5nXCIgJiYgbi5pbmRleE9mKCcuJykgIT0gLTEgJiYgcGFyc2VGbG9hdChuKSA9PT0gMTtcbn1cblxuLy8gQ2hlY2sgdG8gc2VlIGlmIHN0cmluZyBwYXNzZWQgaW4gaXMgYSBwZXJjZW50YWdlXG5mdW5jdGlvbiBpc1BlcmNlbnRhZ2Uobikge1xuICAgIHJldHVybiB0eXBlb2YgbiA9PT0gXCJzdHJpbmdcIiAmJiBuLmluZGV4T2YoJyUnKSAhPSAtMTtcbn1cblxuLy8gRm9yY2UgYSBoZXggdmFsdWUgdG8gaGF2ZSAyIGNoYXJhY3RlcnNcbmZ1bmN0aW9uIHBhZDIoYykge1xuICAgIHJldHVybiBjLmxlbmd0aCA9PSAxID8gJzAnICsgYyA6ICcnICsgYztcbn1cblxuLy8gUmVwbGFjZSBhIGRlY2ltYWwgd2l0aCBpdCdzIHBlcmNlbnRhZ2UgdmFsdWVcbmZ1bmN0aW9uIGNvbnZlcnRUb1BlcmNlbnRhZ2Uobikge1xuICAgIGlmIChuIDw9IDEpIHtcbiAgICAgICAgbiA9IChuICogMTAwKSArIFwiJVwiO1xuICAgIH1cblxuICAgIHJldHVybiBuO1xufVxuXG4vLyBDb252ZXJ0cyBhIGRlY2ltYWwgdG8gYSBoZXggdmFsdWVcbmZ1bmN0aW9uIGNvbnZlcnREZWNpbWFsVG9IZXgoZCkge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKHBhcnNlRmxvYXQoZCkgKiAyNTUpLnRvU3RyaW5nKDE2KTtcbn1cbi8vIENvbnZlcnRzIGEgaGV4IHZhbHVlIHRvIGEgZGVjaW1hbFxuZnVuY3Rpb24gY29udmVydEhleFRvRGVjaW1hbChoKSB7XG4gICAgcmV0dXJuIChwYXJzZUludEZyb21IZXgoaCkgLyAyNTUpO1xufVxuXG52YXIgbWF0Y2hlcnMgPSAoZnVuY3Rpb24oKSB7XG5cbiAgICAvLyA8aHR0cDovL3d3dy53My5vcmcvVFIvY3NzMy12YWx1ZXMvI2ludGVnZXJzPlxuICAgIHZhciBDU1NfSU5URUdFUiA9IFwiWy1cXFxcK10/XFxcXGQrJT9cIjtcblxuICAgIC8vIDxodHRwOi8vd3d3LnczLm9yZy9UUi9jc3MzLXZhbHVlcy8jbnVtYmVyLXZhbHVlPlxuICAgIHZhciBDU1NfTlVNQkVSID0gXCJbLVxcXFwrXT9cXFxcZCpcXFxcLlxcXFxkKyU/XCI7XG5cbiAgICAvLyBBbGxvdyBwb3NpdGl2ZS9uZWdhdGl2ZSBpbnRlZ2VyL251bWJlci4gIERvbid0IGNhcHR1cmUgdGhlIGVpdGhlci9vciwganVzdCB0aGUgZW50aXJlIG91dGNvbWUuXG4gICAgdmFyIENTU19VTklUID0gXCIoPzpcIiArIENTU19OVU1CRVIgKyBcIil8KD86XCIgKyBDU1NfSU5URUdFUiArIFwiKVwiO1xuXG4gICAgLy8gQWN0dWFsIG1hdGNoaW5nLlxuICAgIC8vIFBhcmVudGhlc2VzIGFuZCBjb21tYXMgYXJlIG9wdGlvbmFsLCBidXQgbm90IHJlcXVpcmVkLlxuICAgIC8vIFdoaXRlc3BhY2UgY2FuIHRha2UgdGhlIHBsYWNlIG9mIGNvbW1hcyBvciBvcGVuaW5nIHBhcmVuXG4gICAgdmFyIFBFUk1JU1NJVkVfTUFUQ0gzID0gXCJbXFxcXHN8XFxcXChdKyhcIiArIENTU19VTklUICsgXCIpWyx8XFxcXHNdKyhcIiArIENTU19VTklUICsgXCIpWyx8XFxcXHNdKyhcIiArIENTU19VTklUICsgXCIpXFxcXHMqXFxcXCk/XCI7XG4gICAgdmFyIFBFUk1JU1NJVkVfTUFUQ0g0ID0gXCJbXFxcXHN8XFxcXChdKyhcIiArIENTU19VTklUICsgXCIpWyx8XFxcXHNdKyhcIiArIENTU19VTklUICsgXCIpWyx8XFxcXHNdKyhcIiArIENTU19VTklUICsgXCIpWyx8XFxcXHNdKyhcIiArIENTU19VTklUICsgXCIpXFxcXHMqXFxcXCk/XCI7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBDU1NfVU5JVDogbmV3IFJlZ0V4cChDU1NfVU5JVCksXG4gICAgICAgIHJnYjogbmV3IFJlZ0V4cChcInJnYlwiICsgUEVSTUlTU0lWRV9NQVRDSDMpLFxuICAgICAgICByZ2JhOiBuZXcgUmVnRXhwKFwicmdiYVwiICsgUEVSTUlTU0lWRV9NQVRDSDQpLFxuICAgICAgICBoc2w6IG5ldyBSZWdFeHAoXCJoc2xcIiArIFBFUk1JU1NJVkVfTUFUQ0gzKSxcbiAgICAgICAgaHNsYTogbmV3IFJlZ0V4cChcImhzbGFcIiArIFBFUk1JU1NJVkVfTUFUQ0g0KSxcbiAgICAgICAgaHN2OiBuZXcgUmVnRXhwKFwiaHN2XCIgKyBQRVJNSVNTSVZFX01BVENIMyksXG4gICAgICAgIGhzdmE6IG5ldyBSZWdFeHAoXCJoc3ZhXCIgKyBQRVJNSVNTSVZFX01BVENINCksXG4gICAgICAgIGhleDM6IC9eIz8oWzAtOWEtZkEtRl17MX0pKFswLTlhLWZBLUZdezF9KShbMC05YS1mQS1GXXsxfSkkLyxcbiAgICAgICAgaGV4NjogL14jPyhbMC05YS1mQS1GXXsyfSkoWzAtOWEtZkEtRl17Mn0pKFswLTlhLWZBLUZdezJ9KSQvLFxuICAgICAgICBoZXg0OiAvXiM/KFswLTlhLWZBLUZdezF9KShbMC05YS1mQS1GXXsxfSkoWzAtOWEtZkEtRl17MX0pKFswLTlhLWZBLUZdezF9KSQvLFxuICAgICAgICBoZXg4OiAvXiM/KFswLTlhLWZBLUZdezJ9KShbMC05YS1mQS1GXXsyfSkoWzAtOWEtZkEtRl17Mn0pKFswLTlhLWZBLUZdezJ9KSQvXG4gICAgfTtcbn0pKCk7XG5cbi8vIGBpc1ZhbGlkQ1NTVW5pdGBcbi8vIFRha2UgaW4gYSBzaW5nbGUgc3RyaW5nIC8gbnVtYmVyIGFuZCBjaGVjayB0byBzZWUgaWYgaXQgbG9va3MgbGlrZSBhIENTUyB1bml0XG4vLyAoc2VlIGBtYXRjaGVyc2AgYWJvdmUgZm9yIGRlZmluaXRpb24pLlxuZnVuY3Rpb24gaXNWYWxpZENTU1VuaXQoY29sb3IpIHtcbiAgICByZXR1cm4gISFtYXRjaGVycy5DU1NfVU5JVC5leGVjKGNvbG9yKTtcbn1cblxuLy8gYHN0cmluZ0lucHV0VG9PYmplY3RgXG4vLyBQZXJtaXNzaXZlIHN0cmluZyBwYXJzaW5nLiAgVGFrZSBpbiBhIG51bWJlciBvZiBmb3JtYXRzLCBhbmQgb3V0cHV0IGFuIG9iamVjdFxuLy8gYmFzZWQgb24gZGV0ZWN0ZWQgZm9ybWF0LiAgUmV0dXJucyBgeyByLCBnLCBiIH1gIG9yIGB7IGgsIHMsIGwgfWAgb3IgYHsgaCwgcywgdn1gXG5mdW5jdGlvbiBzdHJpbmdJbnB1dFRvT2JqZWN0KGNvbG9yKSB7XG5cbiAgICBjb2xvciA9IGNvbG9yLnJlcGxhY2UodHJpbUxlZnQsJycpLnJlcGxhY2UodHJpbVJpZ2h0LCAnJykudG9Mb3dlckNhc2UoKTtcbiAgICB2YXIgbmFtZWQgPSBmYWxzZTtcbiAgICBpZiAobmFtZXNbY29sb3JdKSB7XG4gICAgICAgIGNvbG9yID0gbmFtZXNbY29sb3JdO1xuICAgICAgICBuYW1lZCA9IHRydWU7XG4gICAgfVxuICAgIGVsc2UgaWYgKGNvbG9yID09ICd0cmFuc3BhcmVudCcpIHtcbiAgICAgICAgcmV0dXJuIHsgcjogMCwgZzogMCwgYjogMCwgYTogMCwgZm9ybWF0OiBcIm5hbWVcIiB9O1xuICAgIH1cblxuICAgIC8vIFRyeSB0byBtYXRjaCBzdHJpbmcgaW5wdXQgdXNpbmcgcmVndWxhciBleHByZXNzaW9ucy5cbiAgICAvLyBLZWVwIG1vc3Qgb2YgdGhlIG51bWJlciBib3VuZGluZyBvdXQgb2YgdGhpcyBmdW5jdGlvbiAtIGRvbid0IHdvcnJ5IGFib3V0IFswLDFdIG9yIFswLDEwMF0gb3IgWzAsMzYwXVxuICAgIC8vIEp1c3QgcmV0dXJuIGFuIG9iamVjdCBhbmQgbGV0IHRoZSBjb252ZXJzaW9uIGZ1bmN0aW9ucyBoYW5kbGUgdGhhdC5cbiAgICAvLyBUaGlzIHdheSB0aGUgcmVzdWx0IHdpbGwgYmUgdGhlIHNhbWUgd2hldGhlciB0aGUgdGlueWNvbG9yIGlzIGluaXRpYWxpemVkIHdpdGggc3RyaW5nIG9yIG9iamVjdC5cbiAgICB2YXIgbWF0Y2g7XG4gICAgaWYgKChtYXRjaCA9IG1hdGNoZXJzLnJnYi5leGVjKGNvbG9yKSkpIHtcbiAgICAgICAgcmV0dXJuIHsgcjogbWF0Y2hbMV0sIGc6IG1hdGNoWzJdLCBiOiBtYXRjaFszXSB9O1xuICAgIH1cbiAgICBpZiAoKG1hdGNoID0gbWF0Y2hlcnMucmdiYS5leGVjKGNvbG9yKSkpIHtcbiAgICAgICAgcmV0dXJuIHsgcjogbWF0Y2hbMV0sIGc6IG1hdGNoWzJdLCBiOiBtYXRjaFszXSwgYTogbWF0Y2hbNF0gfTtcbiAgICB9XG4gICAgaWYgKChtYXRjaCA9IG1hdGNoZXJzLmhzbC5leGVjKGNvbG9yKSkpIHtcbiAgICAgICAgcmV0dXJuIHsgaDogbWF0Y2hbMV0sIHM6IG1hdGNoWzJdLCBsOiBtYXRjaFszXSB9O1xuICAgIH1cbiAgICBpZiAoKG1hdGNoID0gbWF0Y2hlcnMuaHNsYS5leGVjKGNvbG9yKSkpIHtcbiAgICAgICAgcmV0dXJuIHsgaDogbWF0Y2hbMV0sIHM6IG1hdGNoWzJdLCBsOiBtYXRjaFszXSwgYTogbWF0Y2hbNF0gfTtcbiAgICB9XG4gICAgaWYgKChtYXRjaCA9IG1hdGNoZXJzLmhzdi5leGVjKGNvbG9yKSkpIHtcbiAgICAgICAgcmV0dXJuIHsgaDogbWF0Y2hbMV0sIHM6IG1hdGNoWzJdLCB2OiBtYXRjaFszXSB9O1xuICAgIH1cbiAgICBpZiAoKG1hdGNoID0gbWF0Y2hlcnMuaHN2YS5leGVjKGNvbG9yKSkpIHtcbiAgICAgICAgcmV0dXJuIHsgaDogbWF0Y2hbMV0sIHM6IG1hdGNoWzJdLCB2OiBtYXRjaFszXSwgYTogbWF0Y2hbNF0gfTtcbiAgICB9XG4gICAgaWYgKChtYXRjaCA9IG1hdGNoZXJzLmhleDguZXhlYyhjb2xvcikpKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICByOiBwYXJzZUludEZyb21IZXgobWF0Y2hbMV0pLFxuICAgICAgICAgICAgZzogcGFyc2VJbnRGcm9tSGV4KG1hdGNoWzJdKSxcbiAgICAgICAgICAgIGI6IHBhcnNlSW50RnJvbUhleChtYXRjaFszXSksXG4gICAgICAgICAgICBhOiBjb252ZXJ0SGV4VG9EZWNpbWFsKG1hdGNoWzRdKSxcbiAgICAgICAgICAgIGZvcm1hdDogbmFtZWQgPyBcIm5hbWVcIiA6IFwiaGV4OFwiXG4gICAgICAgIH07XG4gICAgfVxuICAgIGlmICgobWF0Y2ggPSBtYXRjaGVycy5oZXg2LmV4ZWMoY29sb3IpKSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcjogcGFyc2VJbnRGcm9tSGV4KG1hdGNoWzFdKSxcbiAgICAgICAgICAgIGc6IHBhcnNlSW50RnJvbUhleChtYXRjaFsyXSksXG4gICAgICAgICAgICBiOiBwYXJzZUludEZyb21IZXgobWF0Y2hbM10pLFxuICAgICAgICAgICAgZm9ybWF0OiBuYW1lZCA/IFwibmFtZVwiIDogXCJoZXhcIlxuICAgICAgICB9O1xuICAgIH1cbiAgICBpZiAoKG1hdGNoID0gbWF0Y2hlcnMuaGV4NC5leGVjKGNvbG9yKSkpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHI6IHBhcnNlSW50RnJvbUhleChtYXRjaFsxXSArICcnICsgbWF0Y2hbMV0pLFxuICAgICAgICAgICAgZzogcGFyc2VJbnRGcm9tSGV4KG1hdGNoWzJdICsgJycgKyBtYXRjaFsyXSksXG4gICAgICAgICAgICBiOiBwYXJzZUludEZyb21IZXgobWF0Y2hbM10gKyAnJyArIG1hdGNoWzNdKSxcbiAgICAgICAgICAgIGE6IGNvbnZlcnRIZXhUb0RlY2ltYWwobWF0Y2hbNF0gKyAnJyArIG1hdGNoWzRdKSxcbiAgICAgICAgICAgIGZvcm1hdDogbmFtZWQgPyBcIm5hbWVcIiA6IFwiaGV4OFwiXG4gICAgICAgIH07XG4gICAgfVxuICAgIGlmICgobWF0Y2ggPSBtYXRjaGVycy5oZXgzLmV4ZWMoY29sb3IpKSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcjogcGFyc2VJbnRGcm9tSGV4KG1hdGNoWzFdICsgJycgKyBtYXRjaFsxXSksXG4gICAgICAgICAgICBnOiBwYXJzZUludEZyb21IZXgobWF0Y2hbMl0gKyAnJyArIG1hdGNoWzJdKSxcbiAgICAgICAgICAgIGI6IHBhcnNlSW50RnJvbUhleChtYXRjaFszXSArICcnICsgbWF0Y2hbM10pLFxuICAgICAgICAgICAgZm9ybWF0OiBuYW1lZCA/IFwibmFtZVwiIDogXCJoZXhcIlxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVXQ0FHMlBhcm1zKHBhcm1zKSB7XG4gICAgLy8gcmV0dXJuIHZhbGlkIFdDQUcyIHBhcm1zIGZvciBpc1JlYWRhYmxlLlxuICAgIC8vIElmIGlucHV0IHBhcm1zIGFyZSBpbnZhbGlkLCByZXR1cm4ge1wibGV2ZWxcIjpcIkFBXCIsIFwic2l6ZVwiOlwic21hbGxcIn1cbiAgICB2YXIgbGV2ZWwsIHNpemU7XG4gICAgcGFybXMgPSBwYXJtcyB8fCB7XCJsZXZlbFwiOlwiQUFcIiwgXCJzaXplXCI6XCJzbWFsbFwifTtcbiAgICBsZXZlbCA9IChwYXJtcy5sZXZlbCB8fCBcIkFBXCIpLnRvVXBwZXJDYXNlKCk7XG4gICAgc2l6ZSA9IChwYXJtcy5zaXplIHx8IFwic21hbGxcIikudG9Mb3dlckNhc2UoKTtcbiAgICBpZiAobGV2ZWwgIT09IFwiQUFcIiAmJiBsZXZlbCAhPT0gXCJBQUFcIikge1xuICAgICAgICBsZXZlbCA9IFwiQUFcIjtcbiAgICB9XG4gICAgaWYgKHNpemUgIT09IFwic21hbGxcIiAmJiBzaXplICE9PSBcImxhcmdlXCIpIHtcbiAgICAgICAgc2l6ZSA9IFwic21hbGxcIjtcbiAgICB9XG4gICAgcmV0dXJuIHtcImxldmVsXCI6bGV2ZWwsIFwic2l6ZVwiOnNpemV9O1xufVxuXG4vLyBOb2RlOiBFeHBvcnQgZnVuY3Rpb25cbmlmICh0eXBlb2YgbW9kdWxlICE9PSBcInVuZGVmaW5lZFwiICYmIG1vZHVsZS5leHBvcnRzKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSB0aW55Y29sb3I7XG59XG4vLyBBTUQvcmVxdWlyZWpzOiBEZWZpbmUgdGhlIG1vZHVsZVxuZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG4gICAgZGVmaW5lKGZ1bmN0aW9uICgpIHtyZXR1cm4gdGlueWNvbG9yO30pO1xufVxuLy8gQnJvd3NlcjogRXhwb3NlIHRvIHdpbmRvd1xuZWxzZSB7XG4gICAgd2luZG93LnRpbnljb2xvciA9IHRpbnljb2xvcjtcbn1cblxufSkoTWF0aCk7XG4iLCJmaWdtYS5zaG93VUkoX19odG1sX18sIHsgaGVpZ2h0OiA0MDAgfSk7XG5pbXBvcnQgeyBnZW5lcmF0ZSB9IGZyb20gJy4uL25vZGVfbW9kdWxlcy9AYW50LWRlc2lnbi9jb2xvcnMvbGliL2luZGV4JztcbmltcG9ydCB0aW55Y29sb3IgZnJvbSBcIi4uL25vZGVfbW9kdWxlcy90aW55Y29sb3IyL3Rpbnljb2xvclwiO1xuLy8gR2VuZXJhdGUgY29sb3IgcGFsZXR0ZXMgYnkgYSBnaXZlbiBjb2xvclxuZnVuY3Rpb24gZm9ybWF0UmdiKGNvbG9yKSB7XG4gICAgbGV0IGNsciA9IHRpbnljb2xvcihjb2xvcik7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcjogY2xyLl9yIC8gMjU1LFxuICAgICAgICBnOiBjbHIuX2cgLyAyNTUsXG4gICAgICAgIGI6IGNsci5fYiAvIDI1NVxuICAgIH07XG59XG5mdW5jdGlvbiBjcmVhdGVDb2xvckJsb2NrcyhwcmltYXJ5Q29sb3IsIGRhcmtCZ0NvbG9yKSB7XG4gICAgbGV0IGNvbG9yc0xpZ2h0ID0gZ2VuZXJhdGUocHJpbWFyeUNvbG9yKTtcbiAgICBsZXQgY29sb3JzRGFyayA9IGdlbmVyYXRlKHByaW1hcnlDb2xvciwge1xuICAgICAgICB0aGVtZTogJ2RhcmsnLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGRhcmtCZ0NvbG9yXG4gICAgfSk7XG4gICAgY29uc3QgY29sb3JTZXRzID0gW2NvbG9yc0xpZ2h0LCBjb2xvcnNEYXJrXTtcbiAgICBjb2xvclNldHMuZm9yRWFjaChmdW5jdGlvbiAoY29sb3JzLCBpZHgpIHtcbiAgICAgICAgY29uc3Qgbm9kZXMgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb2xvcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHJlY3QgPSBmaWdtYS5jcmVhdGVSZWN0YW5nbGUoKTtcbiAgICAgICAgICAgIHJlY3QueCA9IGkgKiAxMjg7XG4gICAgICAgICAgICBpZiAoaWR4ID4gMCkge1xuICAgICAgICAgICAgICAgIHJlY3QueSA9IDE1MjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vcmVjdC5maWxscyA9IFt7dHlwZTogJ1NPTElEJywgY29sb3I6IHtyOjEsIGc6MSwgYjogMSB9fV1cbiAgICAgICAgICAgIHJlY3QuZmlsbHMgPSBbeyB0eXBlOiAnU09MSUQnLCBjb2xvcjogZm9ybWF0UmdiKGNvbG9yc1tpXSkgfV07XG4gICAgICAgICAgICBmaWdtYS5jdXJyZW50UGFnZS5hcHBlbmRDaGlsZChyZWN0KTtcbiAgICAgICAgICAgIG5vZGVzLnB1c2gocmVjdCk7XG4gICAgICAgICAgICBmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb24gPSBub2RlcztcbiAgICAgICAgICAgIGZpZ21hLnZpZXdwb3J0LnNjcm9sbEFuZFpvb21JbnRvVmlldyhub2Rlcyk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmZpZ21hLnVpLm9ubWVzc2FnZSA9IG1zZyA9PiB7XG4gICAgaWYgKG1zZy50eXBlID09PSAnZ2VuZXJhdGUnKSB7XG4gICAgICAgIGNyZWF0ZUNvbG9yQmxvY2tzKG1zZy5wcmltYXJ5SGV4LCBtc2cuZGFya0JnSGV4KTtcbiAgICB9XG4gICAgZmlnbWEuY2xvc2VQbHVnaW4oKTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9