import { drawProducst } from "./draw.js";
import { params } from "./variable.js";

drawProducst();

//search
const inputSeach=document.querySelector("#search input");
const ButtonSeach=document.querySelector("#search button");

const seach=()=>{
    params.q=inputSeach.value.trim(); // lang nghe thu vua nhap vao o tim iem
    drawProducst();
}


ButtonSeach.addEventListener("click",function(){
    seach();
})

inputSeach.addEventListener("keydown",function(e){
   
    if(e.key=="Enter"){
    seach();
    }
})



//search


//fiter
const filter=document.querySelector("#filter");


filter.addEventListener("change",function(e){
    console.log(e.target.value);

    switch (e.target.value){
        case "mac dinh":
            params.sort="";
            params.order="";
            break;
        
        case "gia thap den cao":
            params.sort="price";
            params.order="asc";
            break;  

        case "gia cao den thap":
            params.sort="price";
            params.order="desc";
            break;    
            
         case "gia gia nhieu":
            params.sort="discountPercentage";
            params.order="desc";
            break;    
                        

        default:
            break;    
    }
    drawProducst();
});

//fiter


// phan trang
const pagiPrew=document.querySelector("#paginationPrew");
const pagiNext=document.querySelector("#paginationNext");
const pagiNumber=document.querySelector("#paginationNumber");

pagiNext.addEventListener("click", function () {
    params.page++;
    drawProducst();
});

pagiPrew.addEventListener("click", function () {
    if (params.page > 1) {
        params.page--;
        drawProducst();
    }
});




// phan trang