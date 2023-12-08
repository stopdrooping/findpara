let images= ["жираф.jpg", "лампа.jpg", "очки.jpg", "пк.webp", "телефон.jpeg", "трацкий станок.jpg", "жираф.jpg", "лампа.jpg", "очки.jpg", "пк.webp", "телефон.jpeg", "трацкий станок.jpg"]
let mixedimages= mixarray(images);
//let cards= [];
mixedimages.forEach(element => {
    let card= document.createElement("div");
    card.classList.add("card");
    card.classList.add("flip");
    card.innerHTML= `<div class="face">
    <img src="img/${element}" alt="">
</div>
<div class="backface">
    
</div>`;
document.querySelector(".wrapper").appendChild(card);
//cards.push(card);
setTimeout(()=>card.classList.remove("flip"), 5000);
});
let cards= document.querySelectorAll(".card") //второй вариант закомментированных строк
let firstcard= null;
let secondcard= null;
let isfirst= true;
for(let i=0; i<cards.length; i++){
    let card= cards[i];
    card.addEventListener("click", function(){
        card.classList.add("flip");
        if (isfirst== true){
            isfirst= false;
            firstcard= card;
        }
        //Блок кода, когда нажимаем на вторую карточку в паре
        else{ 
            isfirst= true;
            secondcard= card;
            let firstimg= firstcard.children[0].children[0].getAttribute("src");
            let secondimg= secondcard.children[0].children[0].getAttribute("src");
            if (firstimg!= secondimg){
                setTimeout(()=>{
                    firstcard.classList.remove("flip");
                    secondcard.classList.remove("flip");
                },500)
                
            }
            console.log(firstimg, secondimg);
        }
    })
}