


function App(){
    
    const [strokeSize,setStrokeSize] = useState(10);

    const COMPONENTS = {
      Editor:new Editor()
    }     


    this.render = function(){
        return COMPONENTS.Editor.render({strokeSize});
    }
}









