

const image = document.querySelector('.image')
const btn = document.querySelector('.btn')
const input = document.querySelector('.input')
const message = document.querySelector('.message')

btn.addEventListener('click', ()=>{
    if(input.value === ''){
        message.style.display= "block";
    }

    setTimeout(() =>{
        message.style.display= "none";
    }, 2000)
})




const fetchapi = async( name) => {
    const res = await fetch(`https://dog.ceo/api/breed/${name}/images/random`)
    const data = await  res.json()
    image.src = data.message
}


// fetch("https://dog.ceo/api/breeds/list/all")

//     .then(res => res.json())

//     .then (data => console.log(data.message))



// const loaddogs = async () =>{
//     try{
//         const res = await fetch ("https://dog.ceo/api/breeds/list/all");
//        let dog = await res.json()

      
//    let 
   
//     }catch (err){
//         console.log(err);
//     }
// }

// for(let i =0; i < i.lenght - 1; i++) {
//     console.log(i)
//    }

// loaddogs();


function trueOrFalse (isItTrue){
    if(isItTrue){
        return "Yes, it is true"
    }
    return "No, its a false"
}

console.log (trueOrFalse(false));

var names =['Hole--in-one', 'Eagle', 'Birdie', 'Pae', 'Bogey', 'double bogey', 'go home']

function golfScore(par, stroke) {
    if (stroke == 1){
        return names [0]
    } else if (stroke <= par1){
        return names[1]
    }
}
console.log(golfScore(1,1))