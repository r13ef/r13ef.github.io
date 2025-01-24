function miss() {
    element = document.getElementById('comment');
    element.innerHTML = '<font color="red">Unfortunately, your answer is not correct.</font>';
    element.style.padding = "10px";
}

function right(nextURL) {
    element = document.getElementById('comment');
    element.innerHTML = '<bf>Congratulations!!</bf> You can go to <a href=\"' + nextURL + '.html\">next</a>.';
    element.style.padding = "10px";
}

function submit_answer() {
    const answerForm = document.forms.answer;
    const flag = answerForm.elements.flag.value;

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