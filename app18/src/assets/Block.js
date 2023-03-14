class Block extends HTMLElement {

    static template = document.createElement("template")
    
    constructor() {
        super()

        this.container = container.value

        this.options = { ...{ class: "ball", atRest: false}, ...options }
        this.collisions = collisions

        this.attachShadow({ mode: "open" })

        let link = document.createElement("link")
        link.href = "css/ball.css"
        link.type = "text/css"
        link.rel = "stylesheet"
        this.shadowRoot.append(link)

        Block.template.innerHTML = `<div></div>`
        let clone = Block.template.content.cloneNode(true)
        this.shadowRoot.append(clone)

        this.rootElm = this.shadowRoot.querySelector("div")
        this.rootElm.id = this.options.id
        this.rootElm.className = this.options.class

        if (this.options.hasOwnProperty("style")) {
            this.rootElm.setAttribute("style", this.options.style)
        }

        if (this.options.hasOwnProperty("color")) {
            this.rootElm.style.backgroundColor = this.options.color
        }

        this.rootElm.style.visibility = "hidden"

        this.atRest = this.options.atRest
        this.setFloor = false
    }

    connectedCallback() {
        setTimeout(async () => {

            let cRect = this.container.getBoundingClientRect()
            this.cWidth = cRect.width
            this.cHeight = cRect.height

            let bRect = this.rootElm.getBoundingClientRect()
            this.bWidth = bRect.width
            this.bHeight = bRect.height

            if (this.options.class == 'floor') {
                this.rootElm.style.width = this.cWidth + "px"
            }

            if (this.atRest == true) {
                return
            }

            this.floor = this.options.floor

            if (this.rootElm.id.charAt(5) == 0) {
                this.floor.rootElm.style.top = (this.cHeight - this.bHeight) + "px"
                this.rootElm.style.backgroundColor = "black"
            }
            
            this.dy = Math.ceil(500 / this.options.delay)

            let fRect = this.floor.rootElm.getBoundingClientRect()
            this.fWidth = fRect.width
            this.fHeight = fRect.height

            this.rootElm.style.top = -this.bHeight + "px"
           
            let bLeft = parseInt(Math.random() * (this.cWidth - this.bWidth))
            this.rootElm.style.left = bLeft + "px"
            
            this.move()

        }, 100)
    }

    sleep(time) {
        return new Promise(resolve => {
            setTimeout(resolve, time);
        })
    }

    async move() {
        if (this.atRest == true) {
            return
        }

        this.rootElm.style.visibility = "visible"

        let oldTop = parseInt(window.getComputedStyle(this.rootElm).getPropertyValue('top'))
        let fTop = parseInt(window.getComputedStyle(this.floor.rootElm).getPropertyValue('top'))

        if (oldTop < fTop) {
            let bTop = oldTop + this.dy
            this.rootElm.style.top = bTop + "px"

            await this.sleep(1)
            return this.move()
        }

        if (await this.collisions.hasRoom(this) == false) {
            this.rootElm.style.top = (oldTop - this.bHeight) + "px"
            this.rootElm.style.backgroundColor = "black"
            this.floor.rootElm.style.top = (fTop - this.bHeight) + "px"
            return await this.move()
        }
        else {
            this.atRest = true;
            return
        }
    }
}


customElements.define("action-block", Ball)

export default Ball