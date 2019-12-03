const inicialState = {
    configSearch: {
        orderBy: 'create_date',
        order: 'asc',
        offset: 0,
        limit: 10,
        min: '',
        max: '',
        type: ['r', 'st', '1k', '2k', '3k', '4k+'],
        coordX: [-90, 90],
        coordY: [-180, 180],
        selectSort: 'dateDesc',
        selectType: ''
    },
    searchResult: [{
        id: 1,
        url: 'http://14.img.avito.st/1280x960/6029856714.jpg',
        price: 20000,
        address: 'Краснодарский край, Анапа, Крымская ул., 274'
    },
    {
        id: 2,
        url: 'http://14.img.avito.st/1280x960/6029856714.jpg',
        price: 20000,
        address: 'Краснодарский край, Анапа, Крымская ул., 274'
    },
    {
        id: 3,
        url: 'http://14.img.avito.st/1280x960/6029856714.jpg',
        price: 20000,
        address: 'Краснодарский край, Анапа, Крымская ул., 274'
    }],
    searchMap: {

    },
    searchFilter: {
        
    }
}

const reduser = (state = inicialState, action) => {
    
    switch (action.type) {
        // case '':
        //     return 
                
        default: return state
    }
}

export default reduser