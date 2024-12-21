function anim() {
    const getInnerBox = document.getElementById('inner');
    let possition = 0;

    const interval = setInterval(moving, 1);

    function moving() {
        possition++;

        if (possition < 350) {
            getInnerBox.style.top = `${possition}px`;
            getInnerBox.style.left = `${possition}px`;
            console.log('I am clicked')
        }
        else{
            clearInterval(interval)
        }
    }

}