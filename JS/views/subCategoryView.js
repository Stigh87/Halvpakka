function subCategoryView(index) {
//admin mode
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
                    `;
                    
                    if (model.app.currentUser == "admin") {
                        html += `
                        <div id="adminContainer2">
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
                    html += `</div>`
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
                `;
                    if (model.app.currentUser == "admin") {
                        html += `
                        <div id="adminContainer">
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
                    html += `</div>`
                }; 
            };
        };
 
     html += `</div>`
    return html;
}
