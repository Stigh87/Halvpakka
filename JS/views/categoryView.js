function categoryView(index) {
    catId = model.categories[index].catId;
    let html = ` 
        <div id="" class="contentContainer">
            <div id="" class="contentHeader">
                <div id="" class="header">${model.categories[index].catName}</div>
            </div>`

            for (let i = 0; i < model.subCategories.length; i++) {
                let subCat = model.subCategories[i];
                if (subCat.parentId ===  catId) {
                   
               html += `
               <div id="" class="contentProduct">
                     <img id="catImg" class="image" src="${subCat.pic}" onclick="changeView('subCategoryView', ${i})"></img>
                     <div id="catName" class="imageText" onclick="changeView('subCategoryView', ${i})"></div>
                     <div id="catDesc" class="imageText" onclick="changeView('subCategoryView', ${i})">${subCat.description}</div>`;

                if(model.app.currentUser == 'admin') {     
                 html += `<div id="adminContainer">
                        <div id="saleTag" class="adminTag hidden">Salg</div>
                         <div id="saleBtn" class="adminBtnActive hidden" onclick="slideBtn(this)">
                                     <div class="slideBtnActive hidden"></div>
                        </div>
                        <div id="highTag" class="adminTag">Høydepunkt</div>    
                         <div id="highBtn" class="${model.highlitghs.find((x)=> x === subCat.sCatId) ? 'adminBtnActive' : 'adminBtn'}" onclick="slideBtn(this, ${subCat.sCatId}, 'highlight', ${index})"> 
                             <div class="${model.highlitghs.find((x)=> x === subCat.sCatId) ? 'slideBtnActive' : 'slideBtn'}"></div>
                        </div>
                    </div>`;
                } else html += `<div id="adminContainer"></div>`
                html += `</div>`
                }; 
            };

    html += `</div>`

return html;
};


