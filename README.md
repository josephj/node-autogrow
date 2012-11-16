AutoGrow Utility
================

An utility that makes textarea expands in height to fit its contents.
It's a YUI implementation from the following article:

[Expanding Text Areas Made Elegant](http://www.alistapart.com/articles/expanding-text-areas-made-elegant/) by Neil Jenkins

Usage:

    // Add external CSS - assets/node-autogrow.css
    // Add YUI seed JavaScript ( Check http://yuilibrary.com )
    // Add external JavaScript - node-autogrow.js

    YUI().use("node-autogrow", function (Y) {
        Y.one("textarea").plug(Y.AutoGrow);
    });

[See Example](http://josephj.com/lab/2012/node-autogrow/demo.html)

    

