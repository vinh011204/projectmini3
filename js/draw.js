import { fetApi } from "./fetchApi.js";
import { API_PRODUCTS } from "./contans.js";
import { params } from "./variable.js";

const products=document.querySelector("#products__list");

export const drawProducst= ()=>{  
    console.log(params.q);
    const api=`${API_PRODUCTS}?q=${params.q}&_sort=${params.sort}&_order=${params.order}&_page=${params.page}&_limit=${params.limit}`;// noi chuoi
    fetApi(api)
    .then(data=>{
        console.log(data);
        let html=data.map(item=>{
            console.log(item);
            console.log(typeof item.price); // <-- Dòng này sẽ giúp bạn kiểm tra kiểu dữ liệu của price

            return `
            <div class="products__item">
            <div class="products__image">
                <img src="${item.thumbnail}" alt="${item.title}">
                <div class="producst__percent">
                    ${item.discountPercentage}%
                </div>
            </div>
            <div class="producst__content">
                <h3 class="producst__title">${item.title}
                </h3>
                <div class="producst__meta">
                    <div class="producst__price">
                        ${item.price}
                    </div>
                    <div class="producst__stock">
                        con lai:${item.stock}
                    </div>
                </div>
            </div>
        </div>
     
            `;
        })
        products.innerHTML=html.join("");
        console.log(html.join(""));
        
    })
    
}