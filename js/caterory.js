import {fetApi} from "./fetchApi.js";
import { API_CATEGOGI } from "./contans.js";


const caterory=document.querySelector("#category__list");
fetApi(API_CATEGOGI)
.then(data=>{
    console.log(data);
    let html=data.map(item=>{
        return `
    <div class="category__item">
        ${item.name}
    </div>
        `;
    })
    caterory.innerHTML=html.join("");
    console.log(html.join(""));
})

