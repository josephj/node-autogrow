/*global YUI, document */
/**
 * An utility that makes textarea expands in height to fit its contents.
 * It's a YUI implementation from the following article:
 * [Expanding Text Areas Made Elegant](http://www.alistapart.com/articles/expanding-text-areas-made-elegant/) by Neil Jenkins
 *
 * Usage:
 *
 *     // Add external JavaScript - node-autogrow.js
 *     // Add external CSS - assets/node-autogrow.css
 *
 *     YUI().use("node-autogrow", function (Y) {
 *         Y.one("textarea").plug(Y.AutoGrow);
 *     });
 *
 * Example:
 *
 *     http://josephj.com/lab/2012/node-autogrow/demo.html
 *
 *  @module node-autogrow
 *  @require node-pluginhost, classnamemanager, plugin
 */
YUI.add("node-autogrow", function (Y) {

    var _getClassName,
        _createBox;

    function AutoGrow(config) {
        this._node = config.host;
        AutoGrow.superclass.constructor.apply(this, arguments);
    }

    AutoGrow.NAME = "autogrow"; // To identify the class.
    AutoGrow.NS   = "AutoGrow"; // To identify the namespace.

    _getClassName = function (text) {
        var className;
        if (!text) {
            className = Y.ClassNameManager.getClassName(AutoGrow.NAME);
        } else {
            className = Y.ClassNameManager.getClassName(AutoGrow.NAME, text);
        }
        return className;
    };

    _createBox = function (node) {
        var el,   // The wrapper element.
            text, // The textarea element.
            range;
        text = node._node;
        el = document.createElement("div");
        el.className = _getClassName();
        if (Y.UA.ie) {
            el.applyElement(text, "outside");
        } else {
            range = document.createRange();
            range.selectNode(text);
            range.surroundContents(el);
        }
        return Y.one(el);
    };

    AutoGrow.ATTRS = {
        "boundingBox": {
            value: null,
            validator: function (value) {
                return (Y.one(value) !== null);
            },
            writeOnce: true
        }
    };

    Y.extend(AutoGrow, Y.Plugin.Base, {
        initializer: function (config) {
            var that = this,
                boundingBox,
                eventName,
                textNode,
                textEl,
                mirrorNode,
                html;

            html = "<pre><span></span><br></pre>";
            textNode = config.host;
            textEl = textNode._node;

            // Set the wrapper.
            boundingBox = Y.one(config.boundingBox) || null;
            if (!boundingBox) {
                boundingBox = _createBox(textNode);
                that._set("boundingBox", boundingBox);
            }

            // Set the mirror <pre/> element.
            if (boundingBox.getHTML().indexOf(html) === -1) {
                boundingBox.insert(html, textNode);
            }
            mirrorNode =  boundingBox.one("span");

            // Bind events.
            if (Y.UA.ie && Y.UA.ie < 9) {
                textEl.attachEvent("onpropertychange", function (e) {
                    mirrorNode.setHTML(textNode.get("value"));
                });
            } else {
                textEl.addEventListener("input", function (e) {
                    mirrorNode.setHTML(textNode.get("value"));
                }, false);
            }

            // Initalize the value.
            mirrorNode.setHTML(textNode.getHTML());
        }
    });

    Y.AutoGrow = AutoGrow;

}, "0.0.1", {
    "requires": [
        "node-pluginhost",
        "classnamemanager",
        "plugin"
    ]
});
