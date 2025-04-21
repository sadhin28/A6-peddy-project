

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
        card.innerHTML =
                          
        `
                <div class="card w-80 bg-base-100 shadow-sm mx-auto">
                     <div class="card-body">
                    <div>
                         <img class="rounded-xl" src=${element.image}/>
                    </div>
                        <p class="">${element.pet_name}</p>

                    </div>
                 </div>
                 
                
                `
      PetContainer.append(card) 
    });
}

LoadVideos()