
const Loadpet = () => {
    fetch(`https://openapi.programming-hero.com/api/peddy/pets`)
        .then(res => res.json())
        .then((data) => displayPet(data.pets
            
        ))

        .catch((error) => console.log(error))

};
//displayPet
const displayPet = (pet) => {
    pet.forEach(element => {
        
        const PetContainer = document.getElementById('petContainer');
        const card = document.createElement('div');
        card.innerHTML =`
                <div class="card w-80 bg-base-100 shadow-sm mx-auto">
                     <div class="card-body">
                    <div>
                         <img class="rounded-xl" src=${element.image}/>
                    </div>
                        <p class="font-bold text-xl">${element.pet_name}</p>
                        <p>Breed : ${element.breed}</p>
                        <p><i class="fa-solid fa-cake-candles"></i> Birth : ${element.date_of_birth}</p>
                        <p><i class="fa-solid fa-mercury"></i> Gender : ${element.gender}</p>
                        <p><i class="fa-solid fa-dollar-sign"></i> Price : ${element.price} $</p>
                        <div class="divider"></div>
                        <div class="flex justify-between" >
                            <button onclick="loadimage(${element.petId})" class="btn rounded-xl bg-[#0E7A811A] font-bold text-[#0E7A81]"><i class=" border-cyan-950 text-black fa-solid fa-thumbs-up"></i></button>
                            <button id="countdownBtn" onclick="startCountdownModal()" class="btn rounded-xl bg-[#0E7A811A] font-bold text-[#0E7A81]">Adopt</button>
                            <button onclick="loadDetails(${element.petId})" class="btn rounded-xl  bg-[#0E7A811A] font-bold text-[#0E7A81]">Details</i></button>
                        </div>
                    </div>
                 </div>
                 
                
                `
      PetContainer.append(card) 
    
      
    });
}
//load details
const loadDetails =(id)=>{
    fetch(`https://openapi.programming-hero.com/api/peddy/pet/${id}`)
    .then((res)=>res.json())
    .then((detail)=>displayDetails(detail))
}

const displayDetails =(data)=>{
    console.log(data)
    const detailsContainer = document.getElementById('modalcontent');
    document.getElementById('showmodal').click();
    detailsContainer.innerHTML=`

        <img class="rounded-2xl object-cover h-70 w-full " src=${data.petData.image}/>
         <p class="font-bold text-xl mt-2">${data.petData.pet_name}</p>
        <div class="flex gap-10 mt-2">
       
                       <div> 
                            <p>Breed : ${data.petData.breed}</p>
                             <p><i class="fa-solid fa-cake-candles"></i> Birth : ${data.petData.date_of_birth}</p>
                       </div>
                       <div>
                            <p class="text-justify"><i class="fa-solid fa-mercury"></i> Gender : ${data.petData.gender}</p>
                        <p><i class="fa-solid fa-dollar-sign"></i> Price : ${data.petData.price} $</p>
                       </div>
                        

        </div>
        <div class="divider"></div>
        <P>${data.petData.pet_details}</P>
         <div class="divider"></div>
    `
   

}

//likePet
const loadimage =(id)=>{
    fetch(`https://openapi.programming-hero.com/api/peddy/pet/${id}`)
    .then((res)=>res.json())
    .then((img)=>displayLikeImg(img.petData.image))
}
//likePetDisplayImg
const displayLikeImg=(image)=>
{
   const divs = document.createElement('div') 
   const likepet = document.getElementById('likePetContainer');
   divs.style.width="60px"
   divs.style.height="60px"
   divs.innerHTML=`

    <img class="rounded-2xl mx-auto" src=${image}/>
   `
   likepet.append(divs)

}
//shoeAddoptModal
const countdown =(id)=>{
    
}


function startCountdownModal() {
    const count = document.getElementById('count');
    let i = 3;
    document.getElementById('Showmodal').click()
    count.textContent = i;

    const timer = setInterval(() => {
      i--;
      if (i > 0) {
        count.textContent = i;
      } else {
        clearInterval(timer);
        document.getElementById('Showmodal').classList.add('hidden')
      }
    }, 1000);
  }
Loadpet()