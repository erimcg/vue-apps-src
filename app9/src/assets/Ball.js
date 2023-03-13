class Ball extends HTMLElement {

    static template = document.createElement("template")

    /* https://physics.stackexchange.com/questions/256468/model-formula-for-bouncing-ball */

    constructor(container, collisions, numBalls, options) {
        super()

        this.container = container.value

        this.options = { ...{ class: "ball", atRest: false }, ...options }
        this.collisions = collisions

        this.numBalls = numBalls

        this.attachShadow({ mode: "open" })

        let link = document.createElement("link")
        link.href = "css/ball.css"
        link.type = "text/css"
        link.rel = "stylesheet"
        this.shadowRoot.append(link)

        Ball.template.innerHTML = `<div></div>`
        let clone = Ball.template.content.cloneNode(true)
        this.shadowRoot.append(clone)

        this.rootElm = this.shadowRoot.querySelector("div")
        this.rootElm.id = this.options.id
        this.rootElm.className = this.options.class

        this.image = null
        if (this.options.clipImage) {
            this.img = document.createElement("img");
            this.img.src = this.options.clipImage
            this.rootElm.appendChild(this.img)
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
            const cs = window.getComputedStyle(this.container);
            const paddingX = parseFloat(cs.paddingLeft) + parseFloat(cs.paddingRight);
            const borderX = parseFloat(cs.borderLeftWidth) + parseFloat(cs.borderRightWidth);
            const paddingY = parseFloat(cs.paddingTop) + parseFloat(cs.paddingBottom);
            const borderY = parseFloat(cs.borderTopWidth) + parseFloat(cs.borderBottomWidth);

            this.cWidth = this.container.offsetWidth - paddingX - borderX;
            this.cHeight = this.container.offsetHeight - paddingY - borderY;

            let bRect = this.rootElm.getBoundingClientRect()
            this.bWidth = bRect.width
            this.bHeight = bRect.height

            let numRows = Math.floor(this.cHeight / this.bHeight)
            let numCols = Math.floor(this.cWidth / this.bWidth)

            this.rootElm.style.position = "absolute"
            let id = Number(this.rootElm.id.substring(5))

            if (this.options.clipImage) {

                this.rootElm.style.overflow = "hidden"

                let row = (numRows - 1) - Math.floor(id / numCols)
                let col = (numCols - 1) - (id % numCols)

                this.img.width = this.bWidth
                this.img.height = this.bHeight
                this.img.style.scale = `${numCols} ${numRows}`
                this.img.style.position = "absolute"

                let topOffset = numRows % 2 == 0 ? this.bHeight / 2 : 0
                let leftOffset = numCols % 2 == 0 ? this.bWidth / 2 : 0

                this.img.style.left = ((Math.floor(numCols / 2) - col) * this.bWidth - leftOffset) + "px"
                this.img.style.top = ((Math.floor(numRows / 2) - row) * this.bHeight - topOffset) + "px"
            }

            if (this.options.class == 'floor') {
                this.rootElm.style.width = this.cWidth + "px"
            }

            if (this.atRest == true) {
                return
            }

            this.floor = this.options.floor

            let fRect = this.floor.rootElm.getBoundingClientRect()
            this.fWidth = fRect.width
            this.fHeight = fRect.height

            if (this.rootElm.id.charAt(5) == 0) {
                this.floor.rootElm.style.top = (this.cHeight - this.bHeight) + "px"
            }

            this.rootElm.style.top = -this.bHeight + "px"

            if (this.options.clipImage) {
                let bLeft = ((numCols - (id % numCols)) * this.bWidth)
                this.rootElm.style.left = bLeft + "px"
            }
            else {
                let bLeft = parseInt(Math.random() * (this.cWidth - this.bWidth))
                this.rootElm.style.left = bLeft + "px"
            }

            this.dy = Math.ceil(500 / this.options.delay)

            this.rootElm.style.visibility = "visible"

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

        //collisions.setFloor()

        let oldTop = parseInt(window.getComputedStyle(this.rootElm).getPropertyValue('top'))
        let fTop = parseInt(window.getComputedStyle(this.floor.rootElm).getPropertyValue('top'))

        if (oldTop < fTop) {
            let bTop = oldTop + this.dy
            this.rootElm.style.top = bTop + "px"

            await new Promise(r => setTimeout(r, 1));
            return this.move()
        }

        await this.collisions.positionOnFloor(this)
        this.atRest = true;
    }
}


customElements.define("g-ball", Ball)

export default Ball