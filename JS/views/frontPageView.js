//view

function frontPageView() {

    let html = ` 
        <div id="" class="contentContainer">
            <div id="" class="contentHeader">
                <div id="" class="contHeader">Høydepunkter</div>
            </div>`

            for (let i = 0; i < model.highlitghs.length; i++) {
                   let id = model.highlitghs[i];

                if(id >= 200) {
                    for (let j = 0; j < model.subCategories.length; j++) {
                        sCatI = model.subCategories[j];
                        if (sCatI.sCatId == id) {
                        html += `<div id="" class="contentProduct">
                                <img id="catImg" class="image" src="${sCatI.pic}" onclick="changeView('subCategoryView', ${j})"></img>
                                <div id="catName" class="imageText" onclick="changeView('subCategoryView', ${j})"></div>
                                <div id="catDesc" class="imageText" onclick="changeView('subCategoryView', ${j})">${sCatI.description}</div>`;
                                if (model.app.currentUser == "admin") {
                                    html += `
                                    <div id="adminContainer2">
                                        <div id="saleTag" class="adminTag hidden">Salg</div>
                                            <div id="saleBtn" class="${model.sale.find((x)=> x === sCatI.sCatId) ? 'adminBtnActive' : 'adminBtn'} hidden" onclick="slideBtn(this, ${sCatI.sCatId}, 'sale')">
                                                        <div class="${model.sale.find((x)=> x === sCatI.sCatId) ? 'slideBtnActive' : 'slideBtn'} hidden"></div>
                                            </div>
                                        <div id="highTag" class="adminTag">Høydepunkt</div>    
                                            <div id="highBtn" class="${model.highlitghs.find((x)=> x === sCatI.sCatId) ? 'adminBtnActive' : 'adminBtn'}" onclick="slideBtn(this, ${sCatI.sCatId}, 'highlight')"> 
                                                <div class="${model.highlitghs.find((x)=> x === sCatI.sCatId) ? 'slideBtnActive' : 'slideBtn'}"></div>
                                            </div>
                                    </div>`
                            } else html += `<div id="adminContainer"></div>`
                            html += `</div>`
                        };
                    };
                };
           

                if(id < 200) {
                    for (let u = 0; u < model.products.length; u++) {
                        let products = model.products[u];
                        if (products.id == id) {
                        html += `<div id="" class="contentProduct">
                                <img id="catImg" class="image" src="${products.pic[0]}" onclick="changeView('productView', ${u})"></img>
                                <div id="catName" class="imageText" onclick="changeView('productView', ${u})"></div>
                                <div id="catDesc" class="imageText" onclick="changeView('productView', ${u})">${products.description}</div>`;
                                if (model.app.currentUser == "admin") {
                                    html += `
                                    <div id="adminContainer2">
                                        <div id="saleTag" class="adminTag">Salg</div>
                                            <div id="saleBtn" class="${model.sale.find((x)=> x === products.id) ? 'adminBtnActive' : 'adminBtn'}" onclick="slideBtn(this, ${products.id}, 'sale')">
                                                        <div class="${model.sale.find((x)=> x === products.id) ? 'slideBtnActive' : 'slideBtn'}"></div>
                                            </div>
                                        <div id="highTag" class="adminTag">Høydepunkt</div>    
                                            <div id="highBtn" class="${model.highlitghs.find((x)=> x === products.id) ? 'adminBtnActive' : 'adminBtn'}" onclick="slideBtn(this, ${products.id}, 'highlight')"> 
                                                <div class="${model.highlitghs.find((x)=> x === products.id) ? 'slideBtnActive' : 'slideBtn'}"></div>
                                            </div>
                                    </div>`
                            } else html += `<div id="adminContainer"></div>`
                            html += `</div>`



                        
                        };
                    };
                };
             }; 
    html += `</div>`

return html;
};