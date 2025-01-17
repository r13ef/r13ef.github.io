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

function enlarge(x) {
    console.log(x)
    if (x.style.width) {
        x.style.width = parseInt(x.style.width) + 2 + "px";
    } else {
        x.style.width = "100px";
    }

    if (x.style.height) {
        x.style.height = parseInt(x.style.height) + 2 + "px";
    } else {
        x.style.height = "100px";
    }


}