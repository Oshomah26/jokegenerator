document.querySelector('.get-jokes').addEventListener('click', getJokes);

function getJokes(e){
    const number = document.querySelector('input[type="number"]').value;

    const xhr = new XMLHttpRequest();

    xhr.open('GET', `https://v2.jokeapi.dev/joke/Any?amount=${number}`, true);
    console.log(number);

    xhr.onload = function(){
        if(this.status === 200){
            const response = JSON.parse(this.responseText);
            console.log(JSON.parse(this.responseText));
            
            let output = '';

            if (response.error === false) {
                response.jokes.forEach(function(joke){
                    output += `<li>${joke.setup}</li>
                               <li>${joke.delivery}</li>`;
                });
            }else{
                output += '<li>Something went wrong</li>'
            }
            document.querySelector('.jokes').innerHTML = output;
            
        }
    }
    xhr.send();
    e.preventDefault();
}
