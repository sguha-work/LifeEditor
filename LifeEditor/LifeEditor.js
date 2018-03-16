var jQuery;
var LifeEditorMain = /** @class */ (function () {
    function LifeEditorMain() {
    }
    LifeEditorMain.prototype.getLETemplate = function () {
        return "\n            <div class=\"LifeEditor_title\">\n                \n            </div>\n            <div class=\"LifeEditor_menu\">\n                \n            </div>\n            <div class=\"LifeEditor_body\">\n                \n            </div>\n            <div class=\"LifeEditor_footer\">\n                \n            </div>\n        ";
    };
    LifeEditorMain.prototype.apply = function (jqueryElement, options) {
        var doms = jqueryElement;
        var template = this.getLETemplate();
        jQuery(doms).html(template);
    };
    return LifeEditorMain;
}());
var le = new LifeEditorMain();
var LifeEditor = le;
