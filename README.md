AutoGrow Utility
================

An utility that makes textarea expands in height to fit its contents.
It's a YUI implementation from the following article:

[Expanding Text Areas Made Elegant](http://www.alistapart.com/articles/expanding-text-areas-made-elegant/) by Neil Jenkins

Usage:

    <link rel="stylesheet" href="assets/node-autogrow.css">
    <script type="text/javascript" src="http://yui.yahooapis.com/3.7.3/build/yui/yui-min.js"></script>
    <script type="text/javascript" src="node-autogrow.js"></script>
    <script>
    YUI().use("node-autogrow", function (Y) {
        Y.one("textarea").plug(Y.AutoGrow);
    });
    </script>

[See Example](http://josephj.com/lab/2012/node-autogrow/demo.html)

    

