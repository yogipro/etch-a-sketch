function Editor(){
    
    

    const COMPONENTS = {
      SketchPanel:new SketchPanel(),
      ControlPanel:new ControlPanel()
    }     


    this.render = function(){
        return `<div class="EditorContainer">
            ${COMPONENTS.ControlPanel.render()}
            ${COMPONENTS.SketchPanel.render()}
        </div>`
    }
}