function getRandomInt() {
    return
}

function computeResult() {
    const num = document.forms.compute.elements.num.value;
    const prime = 896165628569n
    var count = BigInt(num)
    var ans = 1n
    var temp = BigInt(Math.floor(Math.random() * 896165628568));

    while (count > 0) {
        if (count % 2n == 1n) {
            ans = (ans * temp) % prime;
            count = (count - 1n) / 2n;
        } else {
            count /= 2n;
        }
        temp = temp ** 2n % prime;
    }

    document.getElementById("result").innerHTML = "$KEY^x = " + String(ans) + " mod 896165628569";
}