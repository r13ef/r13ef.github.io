const hashedAnswer = "05afbec8b11d07232d12ac75a6f1d9fe3d01e9861f6eb7b310670c389f120eb659812cb94e0c4e11d65eb58ac5fde013be949234bba39c8940edf6bff6bc6d44"

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