
class Lock extends HTMLElement {

    static template = document.createElement("template")

    constructor() {
        super()

        this.attachShadow({ mode: "open" })

        let link = document.createElement("link")
        link.href = "css/lock.css"
        link.type = "text/css"
        link.rel = "stylesheet"
        this.shadowRoot.append(link)

        Lock.template.innerHTML = `<div class="lock">
        <div .class="number"></div>
        
        </div>`
        let clone = Lock.template.content.cloneNode(true)
        this.shadowRoot.append(clone)

        this.lock = this.shadowRoot.querySelector("div")

    }

    connectedCallback() {
        setTimeout(async () => {
            lock.getElementB
            


        }, 100)
    }
}

customElements.define("custom-lock", Lock)

export default Lock
