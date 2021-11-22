function addCategoriesView() {
   
    let html = `
        <div id="" class="inputContainer">
            <br>
            </br>
            <div>Kategori Navn:</div>
            <input type="text" id="" class="" name="catName" value="${model.addCat.catName}" onchange="model.addCat.catName = this.value">
            <button id="" class="" onclick="addCat()">Legg til</button>
            <br>
            </br>
            <hr>
            <div>Underkategori Navn:</div>
            <input type="text" id="" class="" name="sCatName" value="${model.addSubCat.sCatName}" onchange="model.addSubCat.sCatName = this.value"></br>
            <div>Beskrivelse:</div>
            <input type="text" id="" class="" name="sCatDesc" value="${model.addSubCat.description}" onchange="model.addSubCat.description = this.value"></br>
            <div>Underkategori av:</div>
            <select id="" class="" name="addSubCatChooser" value="${model.addSubCat.parentName}" onchange="model.addSubCat.parentId = this.value">
                <option value="" selected>Velg</option>` 
                for (let i = 0; i < model.categories.length; i++) {
                    let cat = model.categories[i];
                    if ((cat.catId != 0 ) && (cat.catId != 1) && (cat.catId !=  10)) {
                    html += `<option value="${cat.catId}">${cat.catName}</option>`
                }};
                html += `</select>
                <br>
                </br>
                <div>Bilder:</div>
                    <img id="newCatImg" class="image"/>
                    <input type="file" id="productPic" class="" name="productPic" onchange="addPicture(this)" multiple/>
                    <button id="" class="" onclick="addCatImage()">ADD</button>
                <br>
                </br>
                <button id="" class="" onclick="addSubCat()">Legg til</button>
           
           

            <br>
            </br>
            <button id="" class="" onclick="changeView('addWareView')">Ferdig</button>
        </div>
        `
    return html;
    };

function addCat() {
    model.categories.push(
        {
        catId: newCatId("cat"), 
        catName: model.addCat.catName,
        },
    );
    model.addCat.catName = '';
    model.addCat.catId = null;
view();
}

function addSubCat() {
    model.subCategories.push(
        {
        sCatId: newCatId("subCat"), 
        sCatName: model.addSubCat.sCatName,
        parentId: parseInt(model.addSubCat.parentId),
        pic: model.addSubCat.pic,
        description: model.addSubCat.description,
        },
    );
    model.addSubCat = {
        sCatId: '', 
        parentId: '', 
        sCatName: '',
        description: '',
        pic: newCatImg.src,
    };
view();        
}

function newCatId(value) {
        let newId = 0;
        if(value === "cat") {
            for(let i = 0; i < model.categories.length; i++) {
                newId = model.categories[i].catId;
            }
            return newId +1;
        };
        if(value === "subCat"){
            for(let i = 0; i < model.subCategories.length; i++) {
                newId = model.subCategories[i].sCatId
            }
            return newId +1;
        };
    }

async function addPicture(element) {
    model.byteArray = await element.files[0].arrayBuffer();
    showImage('newCatImg', model.byteArray);
    }
    
    function showImage(imageId, imageBytes) {
        const blob = new Blob([imageBytes], {
            type: "image/png"
        });
        const urlCreator = window.URL || window.webkitURL;
        const imageURL = urlCreator.createObjectURL(blob);
        document.getElementById(imageId).src = imageURL;
    }
    function addCatImage() {
        model.addSubCat.pic = newCatImg.src;
        
        
    }