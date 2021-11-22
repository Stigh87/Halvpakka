function cartView() {
    let totalSum = 0;  
    let html = ` 
        <div id="" class="contentContainer">
            <div id="" class="contentHeader">
                <div id="" class="header">HANDLEKURV</div>
            </div>`

            for (let i = 0; i < model.shoppingCart.length; i++) {
                let products = model.products;
                
                const id = model.shoppingCart[i].poductId; 
                
                const count = model.shoppingCart[i].count;
                const itemPrice = products[id].onSale ? products[id].salePrice : products[id].price;
                const itemsSum = count * itemPrice;
                totalSum += itemsSum;
                model.general.cartSum = totalSum;
                html += `
                <div id="" class="contentCart">
                    <img id="cartImg" class="image" src="${products[id].pic[0]}" onclick="changeView('productView')"></img>
                    <div id="cartName" class="" onclick="changeView('productView', ${i})">${products[id].productName}</div>
                    <div id="cartCount">Antall:
                    <input type="numbers" id="countAdjust" name="adjustCount" value="${count}" onchange="adjustCount(this, ${i})"/>
                    </div>
                    <div id="cartItemSum" class="">Sum produkt: Kr.${itemsSum},-
                    <button id="remove" onclick="removeItem(${i})">X</button>
                    </div>
                </div>`
            };
    
    html += `
        <div id="" class="sum">TOTAL SUM: Kr.${totalSum},-</div>
        <button id="" class="" onclick="commit()">Bekreft Kjøp</button>     
        <button id="" class="" onclick="cancelOrder()">Avbryt Kjøp</button>`    
        
        
    html += `</div>`

return html;
};

function adjustCount(element, index) {
    model.shoppingCart[index].count = parseInt(element.value); 
    checkRemove(index);
}
function checkRemove(index) {
    if (model.shoppingCart[index].count == 0) {
        model.shoppingCart.splice([index], 1);
    }
view();
}
function removeItem(index) {
    let product = model.products.find((x) => x.id === model.shoppingCart[index].poductId);
    product.storageCount = product.storageCount + model.shoppingCart[index].count;
    model.shoppingCart.splice([index], 1);
view(); 
}

function updateCart() {
    let totalSum = 0;
    if (model.shoppingCart.length >= 1) {
    for (let i = 0; i < model.shoppingCart.length; i++) {
        let products = model.products;
        const id = model.shoppingCart[i].poductId; 
        const count = model.shoppingCart[i].count;
        const itemPrice = products[id].onSale ? products[id].salePrice : products[id].price;
        const itemsSum = count * itemPrice;
        totalSum += itemsSum;
        model.general.cartSum = totalSum;
    }} else model.general.cartSum = 0;
}
function commit() {


}

function cancelOrder() {
    for (let i = 0; i < model.shoppingCart.length; i++) {
        let products = model.products;
        const id = model.shoppingCart[i].poductId; 
        const count = model.shoppingCart[i].count;
        let found = products.find((x) => x.id === id);
        found.storageCount = found.storageCount + count;
    }
    model.shoppingCart = [];
    updateCart()
    changeView('cartView')
}