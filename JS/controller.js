// Controller
function goCategoryView(index) {
    if (index === 0) model.app.currentPage = "subCategoryView";
    else model.app.currentPage = "categoryView";
view(index)
}
// controller - changeView

// Legg inn alle views i denne:

function changeView(page, index){
    model.app.currentPage = page;
    if(index === undefined || index === null){
        console.log("selector", index)
    view();
    } else {
        model.app.index = index;
        view(index);
        
    };
}


function goSubCategoryView(index) {
    model.app.currentPage = "subCategoryView";
view(index)
}

function goProductView(index) {
    model.app.currentPage = "productView";
view(index)
}

function goCartView() {
    model.app.currentPage = "cartView";
view()
}

function goFrontPageView() {
    model.app.currentPage = "frontPageView";
view()
}

function goAboutView() {
    model.app.currentPage = "aboutView";
view()
}

function goTermsView() {
    model.app.currentPage = "termsView";
view()
}
function goAddWareView() {
    model.app.currentPage = "addWareView";
view()
}


function addToCart(index) {
    let checkCount = model.products.find((x) => x.id === index);
    let found = model.shoppingCart.find(x => x.poductId === index);
    checkStorage(index)
     if (checkCount.storageCount >= 1) {
        checkCart(index)
        checkCount.storageCount = checkCount.storageCount -1;
        if(found == null) {
            model.shoppingCart.push({poductId: index, count: 1,});
        }
    }
    
};

function checkStorage(index) {
    let checkCount = model.products.find((x) => x.id === index);
    if (checkCount.storageCount === 0){alert("Tomt på lager"); 
    return;
    }
}
    
function checkCart(index) {
    for (let j = 0; j < model.shoppingCart.length; j++) {
        if (model.shoppingCart[j].poductId === index) {
            model.shoppingCart[j].count ++;
        };
    };
// view();
}

function avarage(index) {
    let rating = model.products[index].rating;
    let mult = 0;
    let avarage = 0;
        for (let i = 0; i < rating.length; i++) {
            mult += rating[i];
            avarage = (mult / rating.length).toFixed(1);
        };
        model.products[index].ratingSum = avarage;
        return avarage;
    
}

function nextImg(index) {
    if (model.productPage.picIndex === (model.products[index].pic.length -1)) model.productPage.picIndex = 0;
    else model.productPage.picIndex ++;
view(index);
}

function slideBtn(element, id, cat, index) {
   
    let updIndex = undefined;
    if (index != undefined) updIndex = index;
    if (cat === "sale") {
        let saleId = model.sale.findIndex((x)=> x == id);
        if (saleId > -1) {
            model.sale.splice(saleId, 1);
            updateSale(id);
        } else if (saleId == -1) {
             model.sale.push(id);
             updateSale(id);
        }
        

    } else if (cat === "highlight") {
        let highLightId = model.highlitghs.findIndex((x)=> x == id);
        
       if (highLightId > -1) {
            model.highlitghs.splice(highLightId, 1);
        } else if (highLightId == -1) {
            model.highlitghs.push(id);
        } 
    }
   
view(index)
}

function updateSale(id) {
    let found = model.products.findIndex((x)=> x.id === id);
    let check = model.products[found].onSale;
    if (check === true || check == "true") {model.products[found].onSale = false; return}
    if (check === false || check == "false") {model.products[found].onSale = true; return}
}

function adminMode() {
model.app.currentUser === 'admin' ? model.app.currentUser = 'user' : model.app.currentUser = 'admin';
view(model.app.index)
}