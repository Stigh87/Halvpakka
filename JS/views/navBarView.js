//navBarView
function navBar() {
    updateCart()
let html =
    `<div id="" class="container">
        <div id="" class="nav">
        <img id="" class="logo" src="${model.info.logo}" onclick="changeView('frontPageView')"></img>
        <div id="" class="header" onclick="changeView('frontPageView')">HALVPAKKA</div> 
        <div id="" class="btnContainer">`
            for (let i = 0; i < model.categories.length; i++) {
                let catI = model.categories[i];
                if ((catI.catName !== 'Høydepunkter') &&
                    (catI.catName !== 'Nyheter')) {
            html += ` 
            <div id="" class="dropMenu">
                <div id="menuBtn${i}" class="menuBtn"`
                if (catI.catName === 'Salg') html+= `onclick="changeView('subCategoryView', ${i})">`
                else html += `onclick="changeView('categoryView', ${i})">`
                html += `${catI.catName}</div>
                    <div id="" class="dropContent">`
                    for (let j = 0; j < model.subCategories.length; j++) {
                        let subCatI = model.subCategories[j];
                        if (subCatI.parentId === catI.catId) {
                            if (subCatI.sCatName === 'Salg') {
                                for (let u = 0; u < model.sale.length; u++) {
                                    let saleId = model.sale[u];
                                    html += `<div id="subMenuBtn${j}" class="subMenuBtn"
                                    onclick="changeView('productView', ${saleId})"    
                                    >${model.products[saleId].productName}</div>`
                                };
                            }; 
                            if (subCatI.sCatName !== 'Salg') {      
                                html += `<div id="subMenuBtn${j}" class="subMenuBtn"
                                onclick="changeView('subCategoryView', ${j})">${subCatI.sCatName}</div>`  
                            };    
                        };
                    };
                html+= `</div></div>`
                };    
            };
            
        html += `</div>`
            model.general.cartCount = 0;
            for (let c = 0; c < model.shoppingCart.length; c++) {
                model.general.cartCount += model.shoppingCart[c].count;
            };
        html +=`   
            <div id="" class="cart" >
                <button id="admin" class="" onclick="changeView('addWareView')">Nye varer</button>
                <div id="cartHead" class="" onclick="changeView('cartView')">Handlekurv</div>
                <img id="cartLogo" class="" src="${model.info.cart}" onclick="changeView('cartView')"></img>
                <div id="cartTotalCount" class="" onclick="changeView('cartView')">Kr. ${model.general.cartSum},- (${model.general.cartCount})</div>
            </div>
            
    </div>
    <div id="" class="footer">
    <div id="" class="footerMenu" onclick="changeView('aboutView')">About</div>
    <div id="" class="infoText">Halvpakka <br>
                                Restica Gundersen <br>
                                Stigh Gundersen <br>
                                Helgeroveien 20A <br>
                                3290 Stavern <br>
                                Norway</div>
    <div id="" class="footerMenu" onclick="changeView('termsView')">terms of sale</div>

</div>`
return html;
};
