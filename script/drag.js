console.log(document.getElementsByClassName('object'))
for (object of document.getElementsByClassName('object')) {
    top_int = parseInt(object.offsetTop)
    left_int = parseInt(object.offsetLeft)
    object.style.backgroundColor = 'rgb(' + top_int / 5 % 256 + ' ' + left_int / 5 % 256 + ' ' + (top_int + left_int) / 10 % 256 + ')'
}

box1.onpointermove = function (event) {
    if (event.buttons) {
        this.draggable = false
        this.style.position = 'absolute'
        this.style.top = this.offsetTop + event.movementY + 'px'
        this.style.left = this.offsetLeft + event.movementX + 'px'
        this.style.margin = 0 + 'px';
        this.setPointerCapture(event.pointerId)
        top_int = parseInt(this.style.top)
        left_int = parseInt(this.style.left)
        this.style.backgroundColor = 'rgb(' + top_int / 5 % 256 + ' ' + left_int / 5 % 256 + ' ' + (top_int + left_int) / 5 % 256 + ')'
    }
}

box2.onpointermove = function (event) {
    if (event.buttons) {
        this.draggable = false
        this.style.position = 'absolute'
        this.style.top = this.offsetTop + event.movementY + 'px'
        this.style.left = this.offsetLeft + event.movementX + 'px'
        this.style.margin = 0 + 'px';
        this.setPointerCapture(event.pointerId)
        top_int = parseInt(this.style.top)
        left_int = parseInt(this.style.left)
        this.style.backgroundColor = 'rgb(' + top_int / 5 % 256 + ' ' + left_int / 5 % 256 + ' ' + (top_int + left_int) / 5 % 256 + ')'
    }
}

box3.onpointermove = function (event) {
    if (event.buttons) {
        this.draggable = false
        this.style.position = 'absolute'
        this.style.top = this.offsetTop + event.movementY + 'px'
        this.style.left = this.offsetLeft + event.movementX + 'px'
        this.style.margin = 0 + 'px';
        this.setPointerCapture(event.pointerId)
        top_int = parseInt(this.style.top)
        left_int = parseInt(this.style.left)
        this.style.backgroundColor = 'rgb(' + top_int / 5 % 256 + ' ' + left_int / 5 % 256 + ' ' + (top_int + left_int) / 5 % 256 + ')'
    }
}