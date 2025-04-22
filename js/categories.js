
//loadCatagories
const loadCatagories = () => {
     fetch('https://openapi.programming-hero.com/api/peddy/categories')
     .then(res => res.json())
     .then((data)=>displayCatagories(data.categories))
     .catch((error) => console.log(error) )
     
 }

//displaycatagories
function startCountdownModal() {
    const modal = document.getElementById('modal');
    const count = document.getElementById('count');
    let i = 3;

    modal.classList.remove('hidden');
    count.textContent = i;

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

//show details


loadCatagories()
