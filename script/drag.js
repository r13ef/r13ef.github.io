$orange_box.onpointermove = function (event) {
    if (event.buttons) {
        this.draggable = false
        this.style.position = 'absolute'
        this.style.top = this.offsetTop + event.movementY + 'px'
        this.style.left = this.offsetLeft + event.movementX + 'px'
        this.style.margin = 0 + 'px';
        this.setPointerCapture(event.pointerId)
    }
}