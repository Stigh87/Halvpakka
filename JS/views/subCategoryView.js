function subCategoryView(index) {

    let html = ` 
        <div id="" class="contentContainer">
            <div id="" class="contentHeader">
                <div id="header" class="">${model.subCategories[index].sCatName}</div>
            </div>`

            if (index === 0) {
                for (let i = 0; i < model.sale.length; i++) {
                    let id = model.sale[i];
                    for (let j = 0; j < model.products.length; j++) {
                        let product = model.products[j];
                    if (product.id === id) {
                    html += `
                        <div id="" class="contentItem">
                                <img id="subCatImg" class="image" src="${product.pic[0]}"
                                onclick="changeView('productView', ${j})"></img>
                                 <div id="subCatName" class=""
                                    onclick="changeView('productView', ${j})">${product.productName}</div>
                            <div id="subCatDesc" class="infoTekst">${product.productName}, ${product.description}</div>
                            <div id="subCatPrice" class="infoTekst">Kr. ${product.onSale ? product.salePrice : product.price},-</div>
                        </div>`
                     };
                    }; 
                 };
            };


            if (index != 0) { 
                for (let i = 0; i < model.products.length; i++) {
                if (model.products[i].parentId === model.subCategories[index].sCatId) {
                    let product = model.products[i];
                html += `
                    <div id="" class="contentItem">
                            <img id="subCatImg" class="image" src="${product.pic[0]}"
                            onclick="changeView('productView', ${i})"></img>
                             <div id="subCatName" class=""
                                onclick="changeView('productView', ${i})">${product.productName}</div>
                        <div id="subCatDesc" class="infoTekst">${product.productName}, ${product.description}</div>
                        <div id="subCatPrice" class="infoTekst">Kr. ${product.onSale ? product.salePrice : product.price},-</div>
                    </div>`
                 }; 
             };
            };
 
     html += `</div>`
    return html;
}
