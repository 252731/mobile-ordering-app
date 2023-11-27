import { menuArray } from "./data.js"
import { v4 as uuidv4 } from 'https://jspm.dev/uuid'
uuidv4() // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'

var order = [];
// const completeOrderBtn = document.getElementById("complete-order-btn")
// completeOrderBtn.addEventListener('click',function(){
//     let modal=``
//     modal.innerHTML+=
//     `
//     <div class="modal" id="modal">
//     <h2 class='enter-card-details'>Enter card details</h2>
//     <form id="consent-form">
//         <input type="text" id="userFullName" name="userFullname" placeholder="Enter your name"
//             aria-label="Enter your name" required>
//         <input type="text" id="userCardInfo" name="userCardInfo" placeholder="Enter card number"
//             aria-label="Enter card number" required>
//         <input type="text" id="userCardCvv" name="userCardCvv" placeholder="Enter CVV"
//             aria-label="Enter card CVV" required>
//         <div class="modal-pay-btns" id="modal-pay-btns">
//             <button type="Pay" class="pay-btn" id="pay-btn">Pay</button>
//         </div>
//     </form>
// </div>
    
//     `


// })

// document.getElementById('pay-btn').addEventListener('click', function(){
//     modal.style.display='none'
//     let message=``
//     message.innerHTML+=`
//     <p>Thanks,${userFullName}! Your order is on its way!</p>
//     `
    
    
// })



document.addEventListener('click', function (e) {
    if (e.target.id) {
        order.push(menuArray[e.target.id])
        render()
    }
        
    })

    function remove(index) {
        order.splice(index, 1);
        render();
    }
    remove()



function getMenuHtml() {
    let menuHtml = ``
    menuArray.forEach(function (item) {

        menuHtml += `
<div class="container">
    <div class="menu-inner">
        <img src="${item.emoji}" class="emoji">

        <div>
            <p class="item-name">${item.name}</p>
            <p class="text-ingredients">${item.ingredients}</p>
            <p class="price">$ ${item.price} </p>
            
            <div>
            <button class="add-btn" id="${item.id}"> + </button>
            </div>   
        </div>            
    </div>
 </div> 
 `

    })
    return menuHtml

}


function getTotalOrder() {
    let orderHtml = ``
    let totalCost=0
    let index=0

    orderHtml += `
    <div class="total-order">
        <div class="order-inner">
        <div><p class="Your-order"> Your order </p></div>`
    order.forEach(function (item, index) {
        index+=1
        totalCost+=item.price
        orderHtml += `<div><p class="item"> ` + item.name + ` </p>
                            <button onclick="remove(${index})" class="remove" > remove </button>
                            <p class="item-price">$`+ item.price + `</p>
                           </div>`
        
    })
   


    orderHtml += `<hr />
                            <p class="total-price">Total price:</p> <p class="totalCost">$`+totalCost+`</p>
                            <button class="complete-order" id="complete-order-btn"> Complete order </button>
                
        </div >
    </div >
        `
    return orderHtml
}



function render() {
    document.getElementById("menu").innerHTML = getMenuHtml()
    document.getElementById("total-order").innerHTML = getTotalOrder()

}
render()


function orderTotalWindow () {
    document.getElementById('total-order').classList.toggle('hidden')

}



