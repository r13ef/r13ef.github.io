const hashedAnswer = "14a3d8aeb8ae74db2a2819462b7f1b414f4a52f2457f9163e69577f287c6d47454f8ed8aa45d251a4a94c987c667baca4dbbe9f093d2f3844465a44ce1382218"

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