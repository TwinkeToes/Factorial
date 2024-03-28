 
    
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('button').onclick = function () {
        let number = Math.abs( document.getElementById('number').value );

        if (number > 0) {
            let factorial = 1;
            for (let i = 1; i <= number; i++) {
                factorial *= i;
            }

            document.getElementById("myText").innerHTML = 'The value for number is ' + factorial;
        }
    };
});
