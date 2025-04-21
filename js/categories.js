//loadCatagories
const loadCatagories = () => {
     fetch('https://openapi.programming-hero.com/api/peddy/categories')
     .then(res => res.json())
     .then((data)=>displayCatagories(data.categories))
     .catch((error) => console.log(error) )
 }

//displaycatagories
const displayCatagories = (data)=>{
     const CategoriesContainer = document.getElementById('categoriesContainer');
     data.forEach(element => {
          console.log()
         const buttonCatagories = document.createElement('div');
         buttonCatagories.innerHTML=`
       
                <button  class= "btn lg:p-6 lg:text-2xl lg:2  " ><img class="h-5 w-5 lg:h-10 lg:w-10 md:h-8 md:w-8" src=${element.category_icon} />${element.category}</button>
          

         `
         CategoriesContainer.append(buttonCatagories)
     });
}
loadCatagories()
