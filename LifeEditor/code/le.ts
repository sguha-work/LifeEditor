let jQuery;
class LifeEditorMain {
    constructor() {
        

    }

    private getLETemplate() {
        return `
            <div class="LifeEditor_title">
                
            </div>
            <div class="LifeEditor_menu">
                
            </div>
            <div class="LifeEditor_body">
                
            </div>
            <div class="LifeEditor_footer">
                
            </div>
        `;
    }

    public apply(jqueryElement: any, options?: object) {
        let doms = jqueryElement;
        let template = this.getLETemplate();
        jQuery(doms).html(template);
    }
}

let le = new LifeEditorMain();
let LifeEditor = le;