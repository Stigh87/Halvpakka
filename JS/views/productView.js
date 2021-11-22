function productView(index) {
  
    let product = model.products[index];
    let html = ` 
        <div id="" class="contentContainer">
            <div id="" class="contentItemProduct">

                <div id="header" class="">${product.productName}</div>
                <div id="" class="infoTekst" data="">Rating: ${avarage(index)}</div>
                <img src="${product.pic[0]}" id="" class="image"></img>
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

   