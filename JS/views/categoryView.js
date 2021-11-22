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
                   
               html += `<div id="" class="contentProduct">
                     <img id="catImg" class="image" src="${subCat.pic}" onclick="changeView('subCategoryView', ${i})"></img>
                     <div id="catName" class="imageText" onclick="changeView('subCategoryView', ${i})"></div>
                     <div id="catDesc" class="imageText" onclick="changeView('subCategoryView', ${i})">${subCat.description}</div>
                </div>`
                }; 
            };

    html += `</div>`

return html;
};


