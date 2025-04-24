
//loadCatagories
const loadCatagories = () => {
     fetch('https://openapi.programming-hero.com/api/peddy/categories')
     .then(res => res.json())
     .then((data)=>{
        displayCatagories(data.categories)
        // console.log(data.categories)
     })
     .catch((error) => console.log(error) )
     
 }

//displaycatagories
const displayCatagories = (data)=>{
     
     const CategoriesContainer = document.getElementById('categoriesContainer');
     data.forEach(element => {
             
            //  console.log(element.id)
         const buttonCatagories = document.createElement('div');
         buttonCatagories.innerHTML=
         `
                <button id="btn-${element.id}"  onclick="displayPetsIndividual(${element.id})"  class= "btn category-btn lg:p-6 lg:text-2xl lg:2  " ><img class="h-5 w-5 lg:h-10 lg:w-10 md:h-8 md:w-8" src=${element.category_icon} />${element.category}</button>
         `
         CategoriesContainer.append(buttonCatagories)
      
       
       
     });

     
}


//showIndividualCatagoriPet
const individualCatagory =(id)=>{
    fetch(`https://openapi.programming-hero.com/api/peddy/category/${id}`)
        .then((res)=>res.json())
        .then((data)=>{
            
            displayPet(data.data)
           
            // console.log(data.data)
          
        })
        const PetContainer = document.getElementById('petContainer');
        
        PetContainer.innerText=""; 
        
       
}

const displayPetsIndividual=(id)=>{
    fetch('https://openapi.programming-hero.com/api/peddy/categories')
    .then(res => res.json())
    .then((data)=> {
        removeActiveClass()
        individualCatagory(data.categories[id-1].category.toLowerCase())
        const activBtn = document.getElementById(`btn-${id}`)
        activBtn.classList.add('active');
        
    })
    .catch((error) => console.log(error) )
    
}


//removeActive button class
const removeActiveClass=()=>{
    const buttons = document.getElementsByClassName('category-btn');
    for(let btn of buttons){
        btn.classList.remove('active');
    }
    

}


 
loadCatagories()

