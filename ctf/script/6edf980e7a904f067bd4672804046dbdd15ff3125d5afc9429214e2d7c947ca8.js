
num = "9582757113557749571145486293"

function compute(num) {
    const prime = 9582757113557749571145486293n
    var count = BigInt(num)
    var ans = 1n
    var temp = 7649848476699584725179826977n

    while (count > 0) {
        console.log("temp:" + temp)
        if (count % 2n == 1n) {
            ans = (ans * temp) % prime;
            count = (count - 1n) / 2n;
        } else {
            count /= 2n;
        }
        temp = temp ** 2n % prime;
    }

    const ans_string = String(ans).match(/.{2}/g).map(x => String.fromCharCode(x)).join("");

    console.log(ans_string)
    return ans_string

}

compute(num)


