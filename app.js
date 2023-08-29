let bg = document.querySelector("div");
// let bgURL = " https://thecatapi.com/api/images/get?format=src&type=gif"

let btn = document.querySelector("button");

btn.addEventListener("click", async () => {
  let link = await getImages();
  console.log(link);
  
  let img = document.querySelector("#bg");
  img.setAttribute("src", link);


  let fact = await getFacts();
  // console.log(fact);

 let p = document.querySelector("#result");
//  document.getElementById("result").style.backgroundColor="white";
 document.getElementById("result").style.backdropFilter="blur(20px)";
 p.innerText = fact;
 
})




let url = "https://api.sefinek.net/api/v2/random/animal/cat"

async function getImages() {
  try {
    let res = await axios.get(url);
    // console.log(res.data.message);
    return res.data.message;

  }
  catch (error) {
    console.log("error :-", error);
    return "NO IMAGE FOUND"
  }
}

// btn.addEventListener("click", async() => {
//    let fact = await getFacts();
//    // console.log(fact);

//   let p = document.querySelector("#result");
//   p.innerText = fact;
// })




let url2 = "https://catfact.ninja/fact"

async function getFacts() {
  try {
    let res = await axios.get(url2);
    return res.data.fact;


  }
  catch (error) {
    console.log("error :-", error);
    return "NO FACT FOUND"
  }
}

