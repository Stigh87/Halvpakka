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
    if(index === undefined){
    view();
    } else {
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
    checkCart(index)
    let checkCount = model.products.find((x) => x.id === index);
    let found = model.shoppingCart.find(x => x.poductId === index);
    checkCount.storageCount = checkCount.storageCount -1;
    if(checkCount.storageCount > 0) {
        if(found == null) {
            model.shoppingCart.push({poductId: index, count: 1,});
        }
    } else alert("Tomt på lager");
};
    
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
