function addWareView() {
    let catChooser = model.addWare.categoryChooser;
    let product = model.addProduct;
    let specs = product.specs;
    let html = `
        <div id="" class="inputContainer">
            <br>
            </br>
            <div>Produktnavn:</div>
            <input type="text" id="" class="" name="productName" value="${product.productName}" onchange="model.addProduct.productName = this.value"></br>
            <div>Ordinær Pris:</div>
            <input type="number" id="" class="" name="productPrice" value="${product.price}" onchange="model.addProduct.price = this.value"></br>
            <div>Salg Pris:</div>
            <input type="number" id="" class="" name="productSalePrice" value="${product.salePrice}" onchange="model.addProduct.salePrice = this.value"></br>
            <div>Beskrivelse:</div>
            <input type="text" id="" class="" name="productDescription" value="${product.description}" onchange="model.addProduct.description = this.value"><br>
            <div>På salg?:</div>
            <select id="" class="" name="productSale" value="this.value" onchange="model.addProduct.onSale = this.value">
                <option value=false ${product.onSale === false ? 'selected' : ''} >Nei</option>
                <option value=true ${product.onSale === true ? 'selected' : ''}>Ja</option>
            </select>
            <div>Kategori:</div>
            <select id="categoryChooser" class="" name="categoryChooser" onchange="selectCat(this.value)">`
            html += `<option value="">${catChooser.name}</option>`
                
                for (let i = 0; i < model.categories.length; i++) {
                    let cat = model.categories[i];
                    if ((cat.catId != 0 ) && (cat.catId != 1) && (cat.catId !=  10)) {
                    html += `<option value="${cat.catId}" ${catChooser.name == cat.catName ? 'selected' : ''}>${cat.catName}</option>`
                }};
                html += `</select>`

                if(catChooser.value != 0) {
                    
                html += `</select>
                        <select id="subCategoryChooser" class="" name="productSubCategory" onchange="model.addProduct.parentId = this.value">
                <option value="">Underkategori</option>`    
                for (let j = 0; j < model.subCategories.length; j++) {
                    let sCat = model.subCategories[j];
                    if (catChooser.value == sCat.parentId) {
                   
                    html += `<option value="${sCat.sCatId ? sCat.sCatId : ''}">${sCat.sCatName}</option>`
                
                }}};

            html+= `</select>
                <button id="" class="" onclick="changeView('addCategoriesView')">Ny Kategori</button>
            <br>
            </br>
            <div>Bilder:</div>
                <img id="newImage" class="image"/>
                <input type="file" id="productPic" class="" name="productPic" onchange="addFile(this)" multiple/>
                <br>
                </br>
                <button id="" class="" onclick="addImage()">ADD</button>
            <br>
            </br>
            <div>Spesifikasjoner:</div>
                <div>Dimensjoner:</div>
                <input type="text" id="" class="" name="productDimensions" value="${specs.dimensions}" onchange="model.addProduct.specs.dimensions = this.value"></br>
                <div>Vekt:</div>
                <input type="text" id="" class="" name="productWeigth" value="${specs.weight}" onchange="model.addProduct.specs.weight = this.value"></br>
                <div>Volum:</div>
                <input type="text" id="" class="" name="productVolume" value="${specs.volume}" onchange="model.addProduct.specs.volume = this.value"></br>
                <div>Annet:</div>
                <input type="text" id="" class="" name="productOther" value="${specs.other}" onchange="model.addProduct.specs.other = this.value"></br>
            <div>Lagerbeholdning:</div>
            <input type="number" id="" class="" name="productHolding" value="${product.storageCount}" onchange="model.addProduct.storageCount = this.value"></br>
            <br>
            </br>
            <button id="" class="" onclick="createWare()">Ferdig</button>
        </div>
        `
    return html;
    };


async function addFile(element) {
model.byteArray = await element.files[0].arrayBuffer();
showImage('newImage', model.byteArray);
}

function showImage(imageId, imageBytes) {
    const blob = new Blob([imageBytes], {
        type: "image/png"
    });
    const urlCreator = window.URL || window.webkitURL;
    const imageURL = urlCreator.createObjectURL(blob);
    document.getElementById(imageId).src = imageURL;
    addImage()
}
function addImage() {
    model.addProduct.pic.push(newImage.src)
}

function selectCat(value) {
    let catChooser = model.addWare.categoryChooser;
    catChooser.value = value
    let found = model.categories.find((x) => x.catId == value);
    catChooser.name = found.catName;
view();
}

  
function createWare() {
let product = model.addProduct;
let specs = product.specs;
let newId = createId()
    if (product.onSale !== "false") {
        model.sale.push(newId);
    }
   model.products.push(
        {
        id: newId,
        parentId: parseInt(product.parentId),
        productNr: createProdNr(),
        rating: [],
        ratingSum: 0,
        onSale: product.onSale === "true" ? true : false,
        productName: product.productName,
        price: product.price,
        salePrice: product.salePrice,
        description: product.description,
        storageCount: product.storageCount,
        specs: {
            dimensions: specs.dimensions,
            weight: specs.weight,
            volume: specs.volume,
            other: specs.other,
        },
        pic: model.addProduct.pic,
    },
    );
   
clearModel()
}

function clearModel() {
    model.addProduct = {
        id: 0,
        parentId: 0,
        productNr: '',
        productName: '',
        price: 0,
        salePrice: 0,
        pic: [],
        description: '',
        specs: {
            dimensions: '',
            weight: '',
            volume: '',
            other: '',
        },  
        storageCount: 0,
        rating: [],
        ratingSum: 0,
        onSale: false,
        };
view();
};


function createId() {
    //lag ny produktID
    let newId = 0;
    for(let i = 0; i < model.products.length; i++) {
        newId = model.products[i].id
    }
    return newId +1;
}
function createProdNr() {
    //lag nytt produktnr
    let newProdNr = 0000;
    for(let i = 0; i < model.products.length; i++) {
        newProdNr = model.products[i].productNr
    }
    return newProdNr +1;
}

function newCategory() {

}

function newSubCategory() {

}