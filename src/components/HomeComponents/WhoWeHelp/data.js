state={
    data:{
        'organizations':[
            {
                name:`Organizacja "Lorem Ipsum 1"`,
                description:"Sed molestie sit amet nisi ac venenatis. Suspendisse potenti.",
                additional:"Nam laoreet consectetur nunc"
            },
            {
                name:`Organizacja "Lorem Ipsum 2"`,
                description:" Vestibulum nec pretium ante. Donec nec massa eu arcu dapibus placerat aliquet id lacus.",
                additional:"Vestibulum vel leo lacus."
            },
            {
                name:`Organizacja "Lorem Ipsum 3"`,
                description:"  Donec nec massa eu arcu dapibus placerat aliquet id lacus. Vestibulum nec pretium ante.",
                additional:"Vestibulum vel leo lacus."
            },
            {
                name:`Organizacja "Lorem Ipsum 4"`,
                description:"  Donec nec massa eu arcu dapibus placerat aliquet id lacus. Vestibulum nec pretium ante.",
                additional:"Vestibulum vel leo lacus."
            },
            {
                name:`Organizacja "Lorem Ipsum 5"`,
                description:"  Donec nec massa eu arcu dapibus placerat aliquet id lacus. Vestibulum nec pretium ante.",
                additional:"Vestibulum vel leo lacus."
            },
            {
                name:`Organizacja "Lorem Ipsum 6"`,
                description:"  Donec nec massa eu arcu dapibus placerat aliquet id lacus. Vestibulum nec pretium ante.",
                additional:"Vestibulum vel leo lacus."
            }
        ],
        'fundations':[
            {
                name:`Fundacja "Lorem Ipsum 1"`,
                description:"  Donec nec massa eu arcu dapibus placerat aliquet id lacus. Vestibulum nec pretium ante.",
                additional:"Vestibulum vel leo lacus."
            },
            {
                name:`Fundacja "Lorem Ipsum 2"`,
                description:"  Donec nec massa eu arcu dapibus placerat aliquet id lacus. Vestibulum nec pretium ante.",
                additional:"Vestibulum vel leo lacus."
            },
            {
                name:`Fundacja "Lorem Ipsum 3"`,
                description:"  Donec nec massa eu arcu dapibus placerat aliquet id lacus. Vestibulum nec pretium ante.",
                additional:"Vestibulum vel leo lacus."
            },
            {
                name:`Fundacja "Lorem Ipsum 4"`,
                description:"  Donec nec massa eu arcu dapibus placerat aliquet id lacus. Vestibulum nec pretium ante.",
                additional:"Vestibulum vel leo lacus."
            },
            {
                name:`Fundacja "Lorem Ipsum 5"`,
                description:"  Donec nec massa eu arcu dapibus placerat aliquet id lacus. Vestibulum nec pretium ante.",
                additional:"Vestibulum vel leo lacus."
            },
            {
                name:`Fundacja "Lorem Ipsum 6"`,
                description:"  Donec nec massa eu arcu dapibus placerat aliquet id lacus. Vestibulum nec pretium ante.",
                additional:"Vestibulum vel leo lacus."
            },
            {
                name:`Fundacja "Lorem Ipsum 7"`,
                description:"  Donec nec massa eu arcu dapibus placerat aliquet id lacus. Vestibulum nec pretium ante.",
                additional:"Vestibulum vel leo lacus."
            },
            {
                name:`Fundacja "Lorem Ipsum 8"`,
                description:"  Donec nec massa eu arcu dapibus placerat aliquet id lacus. Vestibulum nec pretium ante.",
                additional:"Vestibulum vel leo lacus."
            },
            {
                name:`Fundacja "Lorem Ipsum 9"`,
                description:"  Donec nec massa eu arcu dapibus placerat aliquet id lacus. Vestibulum nec pretium ante.",
                additional:"Vestibulum vel leo lacus."
            },
        ],
        'localCollections':[
            {
                name:`Zbiórka "Lorem Ipsum 1"`,
                description:"  Donec nec massa eu arcu dapibus placerat aliquet id lacus. Vestibulum nec pretium ante.",
                additional:"Vestibulum vel leo lacus."
            },
            {
                name:`Zbiórka "Lorem Ipsum 2"`,
                description:"  Donec nec massa eu arcu dapibus placerat aliquet id lacus. Vestibulum nec pretium ante.",
                additional:"Vestibulum vel leo lacus."
            },
            {
                name:`Zbiórka "Lorem Ipsum 3"`,
                description:"  Donec nec massa eu arcu dapibus placerat aliquet id lacus. Vestibulum nec pretium ante.",
                additional:"Vestibulum vel leo lacus."
            },

        ],
    },

    currentType:"organizations",
    organizationsPage:0,
};
changeTypeOfOrganization=(type)=>{
    this.setState({currentType:type,organizationsPage:0});
};
changeOrganizationPage=(nr)=>{
    this.setState({organizationsPage:nr})
};







// export default {
//     foundations: {
//         description: 'W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.',
//         items: [
//             {
//                 who: 'Fundacja “Dbam o Zdrowie”',
//                 purpose: 'Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.',
//                 what: 'ubrania, jedzenie, sprzęt AGD, meble, zabawki'
//             },
//             {
//                 who: 'Fundacja “Dla dzieci”',
//                 purpose: 'Cel i misja: Pomoc dzieciom z ubogich rodzin.',
//                 what: 'ubrania, meble, zabawki'
//             },
//             {
//                 who: 'Fundacja “Bez domu”',
//                 purpose: 'Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.',
//                 what: 'ubrania, jedzenie, ciepłe koce'
//             },
//             {
//                 who: 'Fundacja “FEJK”',
//                 purpose: 'Cel i misja: Depresja u dzieci.',
//                 what: 'Lorem ipsum dolor.'
//             },
//             {
//                 who: 'Fundacja “Elebana”',
//                 purpose: 'Cel i misja: Lorem ipsum.',
//                 what: 'ubrania, meble, zabawki, lorem, ipsum'
//             },
//             {
//                 who: 'Fundacja “Przed ostatnia”',
//                 purpose: 'Cel i misja: Depresja u dzieci.',
//                 what: 'Lorem ipsum dolor.'
//             },
//             {
//                 who: 'Fundacja “Ostatnia”',
//                 purpose: 'Cel i misja: Lorem ipsum.',
//                 what: 'ubrania, meble, zabawki, lorem, ipsum'
//             }
//         ],
//     },
//     organizations: {
//         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
//         items: [
//             {
//                 who: 'Lorem ipsum 1',
//                 purpose: 'Cel i misja lorem ipsum  lorem ipsum  lorem ipsum',
//                 what: 'ipsum, dolor, sit, amet'
//             },
//             {
//                 who: 'Lorem ipsum 2',
//                 purpose: 'Cel i misja lorem ipsum lorem ipsum',
//                 what: 'ipsum, dolor'
//             },
//             {
//                 who: 'Lorem ipsum 3',
//                 purpose: 'Cel i misja lorem ipsum  lorem ipsum sit, amet lorem ipsum',
//                 what: 'ipsum, sit, amet'
//             },
//             {
//                 who: 'Lorem ipsum 4',
//                 purpose: 'Cel i misja lorem ipsum  lorem ipsum  lorem ipsum',
//                 what: 'ipsum, dolor, sit, amet'
//             },
//             {
//                 who: 'Lorem ipsum 5',
//                 purpose: 'Cel i misja lorem ipsum lorem ipsum, dolor sit amet',
//                 what: 'ipsum, dolor, amet'
//             }
//         ]

//     },
//     local: {
//         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
//         items: [
//             {
//                 who: 'Zbiórka 1',
//                 purpose: 'Quis varius quam quisque id diam vel quam elementum pulvinar.',
//                 what: 'Ut, aliquam, purus, sit, amet'
//             },
//             {
//                 who: 'Zbiórka 2',
//                 purpose: 'Quis varius quam quisque quam elementum pulvinar.',
//                 what: 'Ut, aliquam, purus, amet'
//             },
//             {
//                 who: 'Zbiórka 3',
//                 purpose: ' quam elementum pulvinar.',
//                 what: 'Ut, sit, amet'
//             }
//         ]
//     },
// };