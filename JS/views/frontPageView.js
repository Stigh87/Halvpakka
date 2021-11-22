//view

function frontPageView() {

    let html = ` 
        <div id="" class="contentContainer">
            <div id="" class="contentHeader">
                <div id="" class="header">Høydepunkter</div>
            </div>`

            for (let i = 0; i < model.highlitghs.length; i++) {
                   let id = model.highlitghs[i];

                if(id > 10) {
                    for (let j = 0; j < model.subCategories.length; j++) {
                        sCatI = model.subCategories[j];
                        if (sCatI.sCatId == id) {
                        html += `<div id="" class="contentProduct">
                                <img id="catImg" class="image" src="${sCatI.pic}" onclick="changeView('subCategoryView', ${j})"></img>
                                <div id="catName" class="imageText" onclick="changeView('subCategoryView', ${j})"></div>
                                <div id="catDesc" class="imageText" onclick="changeView('subCategoryView', ${j})">${sCatI.description}</div>
                            </div>`
                    };
                    };
                };

                if(id < 10) {
                    for (let u = 0; u < model.products.length; u++) {
                        let products = model.products[u];
                        if (products.id == id) {
                        html += `<div id="" class="contentProduct">
                                <img id="catImg" class="image" src="${products.pic[0]}" onclick="changeView('productView', ${u})"></img>
                                <div id="catName" class="imageText" onclick="changeView('productView', ${u})"></div>
                                <div id="catDesc" class="imageText" onclick="changeView('productView', ${u})">${products.description}</div>
                            </div>`
                        };
                    };
                };
            }; 
    html += `</div>`

return html;
};