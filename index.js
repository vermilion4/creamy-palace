const searchBar = document.forms['search'].querySelector('input')
const list = document.querySelector('.items');
const items = list.getElementsByClassName('card');

const all = document.getElementById('all');
const cake = document.getElementById('cakes');
const cupcake = document.getElementById('cupcakes');
const sweet = document.getElementById('sweets');
const dou = document.getElementById('dous');

all.addEventListener("click",()=>{
    Array.from(items).forEach((item)=>{
        item.style.display = 'flex'
    })
})

cake.addEventListener(("click"),()=>{
    Array.from(items).forEach((item)=>{
        if(item.firstElementChild.className == "cake"){
            item.style.display = 'flex'
        }else{
            item.style.display = 'none'
        }
    })
})

cupcake.addEventListener(("click"),()=>{
    Array.from(items).forEach((item)=>{
        if(item.firstElementChild.className == "cupcake"){
            item.style.display = 'flex'
        }else{
            item.style.display = 'none'
        }
    })
})

sweet.addEventListener(("click"),()=>{
    Array.from(items).forEach((item)=>{
        if(item.firstElementChild.className == "sweet"){
            item.style.display = 'flex'
        }else{
            item.style.display = 'none'
        }
    })
})

dou.addEventListener(("click"),()=>{
    Array.from(items).forEach((item)=>{
        if(item.firstElementChild.className == "dou"){
            item.style.display = 'flex'
        }else{
            item.style.display = 'none'
        }
    })
})

searchBar.addEventListener("keyup",(e)=>{
    const term = e.target.value.toLowerCase();



    Array.from(items).forEach(function(item){
        const title = item.lastElementChild.textContent;
        if(title.toLowerCase().indexOf(term) != -1){
            item.style.display = 'flex'
        }else{
            item.style.display = 'none'
        }
    })


})