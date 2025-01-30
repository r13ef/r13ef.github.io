const hashedAnswer = "670ee22747b0bff47d8f658290063f1d7e039832cd8753f8f7320925e2e22aaa240ac9d580cdb5b82e3cd3c23a75f0ef23c05eb109c57679e2d0f77779be1b7b"

function computeResult() {
    var flag = "Sorry, this is not the flag.";
    if (flag = "FLAG") {
        digestAnswer(flag).then((digestFlag) => {
            if (digestFlag == hashedAnswer) {
                createNextURL(flag).then((nextUrl) => {
                    right(nextUrl);
                })
            } else {
                miss();
            }
        }
        );
    }
}


async function getData() {
    const url = "https://r13ef.github.io/ctf/strage/f7bd616b6c841d2538735f76d1e02b57.txt";
    try {
        const response = await fetch(url);
        const crypt = await response.body;
        console.log(crypt);
    } catch (error) {
        console.error(error.message);
    }
}

