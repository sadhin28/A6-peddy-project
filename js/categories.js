const loadCatagories = () => {
     fetch('https://openapi.programming-hero.com/api/peddy/categories')
     .then(res => res.json())
     .then((data)=>console.log(data.categories))
     .catch((error) => console.log(error) )
 }
loadCatagories()