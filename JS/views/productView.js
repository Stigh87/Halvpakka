function productView(index) {
  //admin mode
    let product = model.products[index];
    let html = ` 
        <div id="" class="contentContainer">
            <div id="" class="contentItemProduct">

                <div id="header" class="">${product.productName}</div>`;

                if (model.app.currentUser == "admin") {
                    html += `
                    <div id="adminContainer3">
                        <div id="saleTag" class="adminTag">Salg</div>
                            <div id="saleBtn" class="${model.sale.find((x)=> x === product.id) ? 'adminBtnActive' : 'adminBtn'}" onclick="slideBtn(this, ${product.id}, 'sale', ${index})">
                                        <div class="${model.sale.find((x)=> x === product.id) ? 'slideBtnActive' : 'slideBtn'}"></div>
                            </div>
                        <div id="highTag" class="adminTag">Høydepunkt</div>    
                            <div id="highBtn" class="${model.highlitghs.find((x)=> x === product.id) ? 'adminBtnActive' : 'adminBtn'}" onclick="slideBtn(this, ${product.id}, 'highlight', ${index})"> 
                                <div class="${model.highlitghs.find((x)=> x === product.id) ? 'slideBtnActive' : 'slideBtn'}"></div>
                            </div>
                    </div>`
                } else html += `<div id="adminContainer"></div>`

                html += `
                <div id="" class="infoTekst" data="">Rating: ${avarage(index)}</div>
                <img src="${product.pic[0]}" id="prodImg" class="image">
                <div id="" class="infoTekst">${product.productName}, ${product.description} ${product.productName}</div>
                <div id="" class="infoTekst">Kr. ${product.onSale ? product.salePrice : product.price},-</div>
                <hr>` 
                if (product.specs.dimensions != null) {html += `<div id="" class="infoTekst">Mål: ${product.specs.dimensions}</div>`}
                if (product.specs.weight != null) {html += `<div id="" class="infoTekst">Vekt: ${product.specs.weight}</div>`}
                if (product.specs.volume != null) {html += `<div id="" class="infoTekst">Volum: ${product.specs.volume}(L)</div>`}
                 
                    html += ` 

                        <hr>`
                         
                html+=`
                <div id="" class="infoTekst">Antall på lager: ${product.storageCount}</div>
                <button id="addBtn" class="" onclick="addToCart(${product.id}); updateCart(); changeView('productView', ${index})">KJØP</button>
                <hr>
                <img src="${product.pic[model.productPage.picIndex]}" id="" 
                        class="largeImage" onclick="nextImg(${index});"></img>
            </div>
        </div>  
        `
    return html;
    }

   