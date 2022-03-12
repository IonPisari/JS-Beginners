// this is the button component model

class Button {
    constructor(propText){
        this.propText = propText
        this.count = 0

    }
    //what in here 
    mount(rootElement, onClickCB){
        this.root = rootElement
        this.onClickCB = onClickCB
        this.render()
    }
    render(){
        this.root.innerHTML = `<button>${this.propText}</button>`
        this.root.firstElementChild.addEventListener('click', this.onClick.bind(this))
    }
    onClick() {
        this.onClickCB()
        this.count++
        console.log(this.count)
    }
}