.yui3-autogrow {
    position: relative;
    border: 1px solid #aaa;
    background: #fff;
    min-height: 50px;
    width: 300px;
}
.yui3-autogrow pre,
.yui3-autogrow textarea {
    outline: 0;
    padding: 0;
    margin: 0;
    border: 0;
    font-size: 13px;
}
.yui3-autogrow > textarea,
.yui3-autogrow > pre {
    background: transparent;
    /* Make the text soft-wrap */
    white-space: pre-wrap;
    word-wrap: break-word;
}
.yui3-autogrow > textarea {
    /* The border-box box model is used to allow
     * padding whilst still keeping the overall width
     * at exactly that of the containing element.
     */
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    -ms-box-sizing: border-box;
    box-sizing: border-box;
    width: 100%;
    /* This height is used when JS is disabled */
    height: 100px;
}
.yui3-autogrow > textarea {
    /* Hide any scrollbars */
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    /* Remove WebKit user-resize widget */
    resize: none;
}
.yui3-autogrow > pre {
    /* Hide the text; just using it for sizing */
    /* visibility: hidden; */
}
