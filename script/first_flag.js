const hashedAnswer = "84c69b4bd46fe07a6a14ee39d97cff0a031360dbd299ad3aacd3865257c399151b4f2558a9db2667b778089031f9d365a4d7e0824a050738456a4a253899b9d4"

function submit_answer() {
    const answerForm = document.forms.answer;
    const flag = answerForm.elements.flag.value;

    digestAnswer(flag).then((digestFlag) => {
        if (digestFlag == hashedAnswer) {
            createNextURL(flag).then((nextUrl) => {
                document.location = "ctf/" + nextUrl + ".html";
            })
        } else {
            element = document.getElementById('comment');
            element.innerHTML = '<font color="red">Unfortunately, your answer is not correct.</font>';
            element.style.padding = "10px";
        }
    }
    );

}