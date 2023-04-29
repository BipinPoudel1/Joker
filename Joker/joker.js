console.log("Awesome Jokes");

const joke=document.querySelector('#main');
const jokeBtn=document.querySelector('#btn');

const setHeader={
	headers:{
		Accept:"application/json"
	}
}

const generateJoke= ()=>{
	fetch('https://icanhazdadjoke.com', setHeader).then((res)=>
		res.json()	).then((data)=>{
		joke.innerHTML=data.joke;
	}).catch((error)=>{
		console.log(error);
	})
}

jokeBtn.addEventListener('click', generateJoke);
generateJoke();