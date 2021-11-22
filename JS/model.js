//Model

const model = {
    //app
    app: {
        currentPage: 'frontPageView',         // 'frontPage', 'productPage', 'shoppingCart',
        path: ['',],             //
        currentUser: 'Guest',    // inlogging funksjon "medlemmer"
    },

//inputs
    general: {
        // search: '',
        // bilder
        // Bestillings side
        // Antall + / - ??
        cartCount: 0,
        cartSum: 0,
    },
    addProduct: {
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
        },
    byteArray: [],

    addWare: {
        categoryChooser: {
            value: 0,
            name: 'Kategori',
        },
    },

    addSubCat: {
            sCatId: '', 
            parentId: '', 
            sCatName: '',
            description: '',
            pic: null,
            },

    addCat: {
        catId: '', 
        catName: '',
        },

    menuPage: [
        {productCount: 0,},
    ],

    productPage: {
        picIndex: 0,
        productCount: 0,
    },

    cartPage: [
        {productCount: 0,},
    ],

    // checkOut: {
    //     comments: '',
    //     email: '',
    //     cellNr: '',
    //     postalCode: '',
    //     delivery: [ 
    //         {text: '',
    //         check: 'checked',
    //         },
    //     ],
    // },

//data
    info: {
        logo: 'bilder/logo.png',
        cart: 'bilder/handlekurv.png'
    }, //legges i view?



    shoppingCart: [
        {poductId: 0, count: 2},
        {poductId: 2, count: 2},
        {poductId: 4, count: 1},
        {poductId: 6, count: 2},
       
    ],

    // orders: [
    //     {
    //         customer: '',
    //         orderLines: [
    //             {id: 0, count: 0,},
    //         ],
    //     },
    // ],

    categories: [
        {catId: 0, catName: 'Salg',},
        {catId: 1, catName: 'Nyheter',},
            {catId: 2, catName: 'Kofferter',},
        // {catId: 3, catName: 'Oppbevaring',},
        {catId: 4, catName: 'Elektronikk',},
        {catId: 9, catName: 'Diverse',},
        {catId: 10, catName: 'Høydepunkter',},
    ],

    subCategories: [
        {sCatId: 0, parentId: 0, sCatName: 'Salg', description: 'Varer på salg',},
            
        // {sCatId: 10, parentId: 1, sCatName: 'Underkategori1'},
        // {sCatId: 11, parentId: 1, sCatName: 'Underkategori2'},
        // {sCatId: 12, parentId: 1, sCatName: 'Underkategori3'},
        // {sCatId: 13, parentId: 1, sCatName: 'Underkategori4'},
            {sCatId: 20, parentId: 2, sCatName: 'Osl Serie', pic: 'bilder/redigert/OSL3.png', description: 'Kofferter OSL Serie',},
            {sCatId: 21, parentId: 2, sCatName: 'Helsinki Serie', pic: 'bilder/redigert/hels1.png', description: 'Kofferter Helsinki Serie',},
            {sCatId: 22, parentId: 2, sCatName: 'Business', pic: 'bilder/OSLbuiz2.jpg', description: 'Kofferter Buisness/Håndbagasje Serie',},
            {sCatId: 23, parentId: 2, sCatName: 'Set', pic: 'bilder/OslSerie.jpg', description: 'Koffert set', },
        {sCatId: 40, parentId: 4, sCatName: 'Batteribank', pic: 'bilder/batteribank.jpg', description: 'Powerbank',},
        {sCatId: 41, parentId: 4, sCatName: 'AirPods', pic: 'bilder/inpodsCat.jpg', description: 'Airpods i forskjellige farger og modeller',},
        {sCatId: 42, parentId: 4, sCatName: 'Tilbehør', pic: 'bilder/laderCat.jpg', description: 'Diverse tilbehør; ledninger',},    
        // {sCatId: 30, sCatName: ''},
        // {sCatId: 40, sCatName: ''},
        // {sCatId: 50, sCatName: ''},
    ],
    sale: [3, 6, 7, 0,],
    highlitghs: [3, 41, 20, 1],

    products: [
        {
            id: 0,
            parentId: 20,
            productNr: 1000,
            productName: 'OSL small',
            price: 1295,
            salePrice: 999,
            pic: ['bilder/redigert/OSL2-1.png', 'bilder/redigert/OSL3.png', 'bilder/redigert/OSL4.png', 'bilder/redigert/OSL5.png'],
            description: 'Liten og nett koffert for korte turer, eller som håndbagasje',
            specs: {
                dimensions: '38x20x55cm',
                weight: '2,2kg',
                volume: '37l',
                other: '',
            },  
            storageCount: 5,
            rating: [9, 9, 7, 9, 9, 8, 8, 9, 10, 9,], //endre til objekter for kundeomtale.
            ratingSum: 0,
            onSale: true,
        },
        {
            id: 1,
            parentId: 20,
            productNr: 1001,
            productName: 'OSL medium',
            price: 1495,
            salePrice: 1095,
            pic: ['bilder/redigert/OSL3.png', 'bilder/redigert/OSL4.png', 'bilder/redigert/OSL5.png', 'bilder/redigert/OSL2-1.png', ],
            description: 'Medium størrelse koffert, får plass til det essensielle til reisen',
            specs: {
                dimensions: '45x26,5x67cm',
                weight: '2,6kg',
                volume: '62l',
                other: '',
            },  
            storageCount: 8,
            rating: [9, 9, 7, 7, 9, 8, 8, 9, 10, 9,],
            ratingSum: 0,
            onSale: false,
        },
        {
            id: 2,
            parentId: 20,
            productNr: 1002,
            productName: 'OSL large',
            price: 1695,
            salePrice: 1395,
            pic: ['bilder/redigert/OSL4.png', 'bilder/redigert/OSL5.png', 'bilder/redigert/OSL2-1.png', 'bilder/redigert/OSL3.png', ],
            description: 'Stor koffert for de lange turene, eller hvor en trenger litt ekstra med seg',
            specs: {
                dimensions: '50,5x31,5x77cm',
                weight: '3,2kg',
                volume: '92l',
                other: '',
            },  
            storageCount: 6,
            rating: [9, 9, 7, 7, 9, 10, 10, 10, 10, 9,],
            ratingSum: 0,
            onSale: false,
        },
        {
            id: 3,
            parentId: 22,
            productNr: 1003,
            productName: 'OSL Buisness',
            price: 1695,
            salePrice: 1395,
            pic: ['bilder/OSLbuiz.jpg', 'bilder/OSLbuiz2.jpg', 'bilder/OSLbuiz3.jpg', 'bilder/OSLbuiz4.jpg',],
            description: 'Stilig håndbagasje koffert. Perfekt til korte turer og pendling etc.',
            specs: {
                dimensions: '50,5x31,5x77cm',
                weight: '3,2kg',
                volume: '92l',
                other: '',
            },  
            storageCount: 6,
            rating: [9, 9, 7, 10, 10, 10, 10, 10, 10, 9,],
            ratingSum: 0,
            onSale: true,
        },
        {
            id: 4,
            parentId: 40,
            productNr: 1004,
            productName: 'Powebank',
            price: 999,
            salePrice: 699,
            pic: ['bilder/batteribank.jpg',],
            description: 'Powerbank 26800 mA/h med solcellepanel!En helt rå powerbank som kan lade 4 enheter samtidig, tåler regn og har en kraftig lommelykt',
            specs: {
                dimensions: null,
                weight: null,
                volume: null,
                other: '26800 mA/h',
            },  
            storageCount: 20,
            rating: [10, 9, 9, 9, 9, 9, 9, 10,],
            ratingSum: 0,
            onSale: false,
        },
        {
            id: 5,
            parentId: 41,
            productNr: 1005,
            productName: 'AirPod Sort',
            price: 199,
            salePrice: 149,
            pic: ['bilder/airpod2.jpg',],
            description: 'Replica airpods gir god lyd til en billig penge. Perfekt til reisen',
            specs: {
                dimensions: null,
                weight: null,
                volume: null,
                other: '',
            },  
            storageCount: 100,
            rating: [7, 6],
            ratingSum: 0,
            onSale: false,
        },
        {
            id: 6,
            parentId: 41,
            productNr: 1006,
            productName: 'AirPod Hvit',
            price: 199,
            salePrice: 149,
            pic: ['bilder/airpod3.jpg',],
            description: 'Replica airpods gir god lyd til en billig penge. Perfekt til reisen',
            specs: {
                dimensions: null,
                weight: null,
                volume: null,
                other: '',
            },  
            storageCount: 100,
            rating: [7, 3],
            ratingSum: 0,
            onSale: true,
        },
        {
            id: 7,
            parentId: 41,
            productNr: 1007,
            productName: 'AirPod Turkis',
            price: 199,
            salePrice: 149,
            pic: ['bilder/airpod1.jpg',],
            description: 'Replica airpods gir god lyd til en billig penge. Perfekt til reisen',
            specs: {
                dimensions: null,
                weight: null,
                volume: null,
                other: '',
            },  
            storageCount: 100,
            rating: [7, 8],
            ratingSum: 0,
            onSale: true,
        },
        {
            id: 8,
            parentId: 41,
            productNr: 1008,
            productName: 'AirPod Marrakesh',
            price: 199,
            salePrice: 149,
            pic: ['bilder/airpod4.jpg',],
            description: 'Replica airpods gir god lyd til en billig penge. Perfekt til reisen',
            specs: {
                dimensions: null,
                weight: null,
                volume: null,
                other: '',
            },  
            storageCount: 100,
            rating: [7, 8],
            ratingSum: 0,
            onSale: false,
        },
        {
            id: 9,
            parentId: 21,
            productNr: 1009,
            productName: 'Helsinki',
            price: 1990,
            salePrice: 1490,
            pic: ['bilder/redigert/hels1.png', 'bilder/redigert/hels2.png', 'bilder/hels3.jpg', 'bilder/hels4.jpg',],
            description: 'Kommer mer/fler ',
            specs: {
                dimensions: null,
                weight: null,
                volume: null,
                other: '',
            },  
            storageCount: 10,
            rating: [7, 5, 8, ],
            ratingSum: 0,
            onSale: false,
        },
       
    ],
};