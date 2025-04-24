
const Loadpet = () => {
    fetch(`https://openapi.programming-hero.com/api/peddy/pets`)
        .then(res => res.json())
        .then((data) => displayPet(data.pets
            
        ))

        .catch((error) => console.log(error))

        

};
//sortPet
const sortPet = () => {
    fetch(`https://openapi.programming-hero.com/api/peddy/pets`)
        .then(res => res.json())
        .then((data) => {
          const pet = (data.pets)
          document.getElementById('sortByPetPrice').addEventListener('click',function(){
            const PetContainer = document.getElementById('petContainer');
            PetContainer.innerText=""; 
            const sortedPet =pet.sort((a,b)=>b.price -a.price);
            displayPet(sortedPet);
            
          })

        })
        
        .catch((error) => console.log(error))
        
        

};

sortPet()

//displayPet
  const displayPet = (pet) => {
    const PetContainer = document.getElementById('petContainer');
    //  console.log(pet)
    
      if(pet.length == 0){
        PetContainer.classList.remove("grid")
        PetContainer.innerHTML=`
        <div class=" min-h-[] w-[] lg:min-h-[500px] lg:w-[1100px] md:min-h-[300px] md:w-[900px] mx-auto flex flex-col gap-5 justify-center items-center">
            
        <img class=" p-20 h-[] w-[] mx-auto " src="images/error.webp"/>
  
        <p class=" mb-10 font-bold lg:text-2xl md:text-2xl ">Oops!! Sorry, There is no   content here</p>
        
        </div> 
  
        `
  
      }else{
        PetContainer.classList.add("grid")
      }
   
      pet.forEach(element => {
        
          // console.log(element)
        
          const card = document.createElement('div');
          card.innerHTML =`
                  <div class="card w-80 bg-base-100 shadow-sm mx-auto">
                       <div class="card-body">
                      <div>
                           <img class="rounded-xl" src=${element.image}/>
                      </div>
                          <p class="font-bold text-xl">${element.pet_name}</p>
                          ${element.breed == undefined ? `<span>Breed : Not Found </span>`: `Breed : ${element.breed} `}
                         
                          ${element.date_of_birth == null ? `<span><i class="fa-solid fa-cake-candles"></i> Birth : Not Available</span>`:`<span><i class="fa-solid fa-cake-candles"></i> Birth ${element.date_of_birth} </span> `}
                          ${element.gender == undefined ? `<span><i class="fa-solid fa-mercury"></i> Gender :  Not Found </span>`:`<span><i class="fa-solid fa-mercury"></i> Gender : ${element.gender} </span>`}
                           ${element.price == null ? `<span><i class="fa-solid fa-dollar-sign"></i> Price : Negotiable</span>`:`<span><i class="fa-solid fa-dollar-sign"></i> Price : ${element.price} $</span>`}
                         
                          <div class="divider"></div>
                          <div class="flex justify-between" >
                              <button id="likepet" onclick="loadimage(${element.petId})" class="btn rounded-xl  font-bold text-[#0E7A81]"><i class=" like border-cyan-950 text-black fa-solid fa-thumbs-up"></i></button>
                              <button id="Btn-${element.petId}" onclick="startCountdownModal(${element.petId})" class="btn rounded-xl  font-bold text-[#0E7A81] addoptpet ">Adopt</button>
                              <button id="devails" onclick="loadDetails(${element.petId})" class="btn rounded-xl  font-bold text-[#0E7A81]">Details</i></button>
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
    // console.log(data)
    const detailsContainer = document.getElementById('modalcontent');
    document.getElementById('showmodal').click();
    detailsContainer.innerHTML=`

        <img class="rounded-2xl object-cover h-70 w-full " src=${data.petData.image}/>
         <p class="font-bold text-xl mt-2">${data.petData.pet_name}</p>
        <div class=" flex justify-between">
       
                    <div>
                           <div> ${data.petData.breed == undefined ? `<span>Breed : Not Found </span>`: `Breed : ${data.petData.breed} `}</div>
                   <div>${data.petData.date_of_birth == null ? `<span><i class="fa-solid fa-cake-candles"></i> Birth : Not Available</span>`:`<span><i class="fa-solid fa-cake-candles"></i> Birth ${data.petData.date_of_birth} </span> `}</div>
                   
                    </div>   
                  
                  <div>
                      <div> ${data.petData.gender == undefined ? `<span><i class="fa-solid fa-mercury"></i> Gender :  Not Found </span>`:`<span><i class="fa-solid fa-mercury"></i> Gender : ${data.petData.gender} </span>`}</div>
                   <div> ${data.petData.price == null ? `<span><i class="fa-solid fa-dollar-sign"></i> Price : Negotiable</span>`:`<span><i class="fa-solid fa-dollar-sign"></i> Price : ${data.petData.price} $</span>`}</div>
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
   divs.style.width="80px"
   divs.style.height="60px"
   divs.innerHTML=`

    <img class="rounded-sm mx-auto" src=${image}/>
   `
   likepet.append(divs)

}


//shoeAddoptModal
function startCountdownModal(adopt) {
    const modal = document.getElementById('modal');
    const count = document.getElementById('count');
    let i = 3;

    modal.classList.remove('hidden');
    count.textContent = i;
   const addoptBtn = document.getElementById(`Btn-${adopt}`)
   addoptBtn.disabled=true
   addoptBtn.classList.add('addopts')
    const timer = setInterval(() => {
      i--;
      if (i > 0) {
        count.textContent = i;
      } else {
        clearInterval(timer);
        modal.classList.add('hidden');
      }
    }, 1000);
  }


Loadpet()