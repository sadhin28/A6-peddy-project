

const LoadVideos = () => {
    fetch(`https://openapi.programming-hero.com/api/peddy/pets`)
        .then(res => res.json())
        .then((data) => displayPet(data.pets
        ))

        .catch((error) => console.log(error))

};
//displayPet
const displayPet = (pet) => {
    pet.forEach(element => {
        console.log(element)
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
                            <button class="btn rounded-xl border-cyan-200 font-bold text-[#0E7A81]"><i class=" border-cyan-950 text-black fa-solid fa-thumbs-up"></i></button>
                            <button class="btn rounded-xl border-cyan-200 font-bold text-[#0E7A81]">Adopt</button>
                            <button class="btn rounded-xl border-cyan-200 font-bold text-[#0E7A81]">Details</i></button>
                        </div>
                    </div>
                 </div>
                 
                
                `
      PetContainer.append(card) 
    });
}

LoadVideos()