
function view(index) {
let html = '';   
html = navBar();  
let app = document.getElementById('app');    

    switch (model.app.currentPage) {
        case "frontPageView":
            html += frontPageView(index);
            break;

        case "categoryView":
            html += categoryView(index);
            break;

        case "subCategoryView":
            html += subCategoryView(index);
            break;

        case "productView":
        html += productView(index);
            break;

        case "cartView":
            html += cartView();
            break;

        case "aboutView":
            html += aboutView();
            break;

        case "termsView":
            html += termsView();
            break;

        case "addWareView":
            html += addWareView();
            break;

        case "addCategoriesView":
            html += addCategoriesView();
            break;

        default:
            break;
    };
app.innerHTML = html;
};

