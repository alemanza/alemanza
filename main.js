var items = [
    // {
    //     name: "Escritorio industrial Paltafurn",
    //     description: "Escritorio de diseño - Estilo Industrial by Paltafurn",
    //     rating: '$ 5.000',
    //     folder: 'escritorio',
    //     imgLength: 4,
    // },
    // {
    //     name: "Black out",
    //     description: "Black out 115x200cm (cantidad 2) ",
    //     rating: '$ 2.500',
    //     folder: 'blackout',
    //     imgLength: 1,
    // },    
    // {
    //     name: "Mueble para TV",
    //     description: "Mueble TV de melamina",
    //     rating: '$ 800',
    //     folder: 'muebleTV',
    //     imgLength: 1,
    // },
    // {
    //     name: "Placard 2 puertas",
    //     description: "Placard de dos puertas de melamina",
    //     rating: '$ 2.700',
    //     folder: 'placard',
    //     imgLength: 2,
    // },
    {
        name: "Silla Eames Tulip",
        description: "Con almohadón y patas de madera",
        rating: '$ 1.500',
        folder: 'silla',
        imgLength: 3,
    },
    // {
    //     name: "Cajonera plástica en torre",
    //     description: "Cajonera plástica en torre, contiene trés cajones",
    //     rating: '$ 900',
    //     folder: 'cajonera',
    //     imgLength: 3,
    // },
    {
        name: "Lámpara escritorio",
        description: "Lámpara de escritorio negra",
        rating: '$ 900',
        folder: 'lampara2',
        imgLength: 2,
    },
    // {
    //     name: "Lámpara estilo industrial",
    //     description: "Lámpara colgante estilo industrial",
    //     rating: '$ 1.000',
    //     folder: 'lampara',
    //     imgLength: 2,
    // },
    {
        name: "Samsung S23B350",
        description: "Monitor Led Samsung S23B350 23\"",
        rating: '$ 3.000',
        folder: 'monitor',
        imgLength: 5,
    },
    {
        name: "Samsung LT24A550",
        description: "Monitor TV Led Samsung LT24A550 24\"",
        rating: '$ 3.500',
        folder: 'monitor2',
        imgLength: 4,
    },
    {
        name: "Parrilla y plancha Black&Decker",
        description: "Parrilla eléctrica Black&Decker",
        rating: '$ 900',
        folder: 'parrilla',
        imgLength: 4,
    },
    // {
    //     name: "Pava Top House",
    //     description: "Pava eléctrica Top House",
    //     rating: '$ 900',
    //     folder: 'pava',
    //     imgLength: 2,
    // },

    {
        name: "G&L Asat Classic Tribute",
        description: "Guitarra Eléctrica G&L Asat Classic Tribute",
        rating: '$ 36.000',
        folder: 'asat',
        imgLength: 6,
        // modalDescription: 'Se vende con micrófonos '
    },
    {
        name: "Bajo eléctrico",
        description: "Bajo eléctrico para principiantes (pie incluído)",
        rating: '$ 2.000',
        folder: 'bajo',
        imgLength: 3,
    },      
    {
        name: "Epiphone AJ220",
        description: "Guitarra Acústica Epiphone",
        rating: '$ 8.000',
        folder: 'epiphone',
        imgLength: 5,
    },       
    {
        name: "AKG P120",
        description: "Micrófono Condenser, como nuevo!",
        rating: '$ 5.000',
        folder: 'mic',
        imgLength: 4,
    },
    {
        name: "Focusrite Scarlett 2i4",
        description: "Placa de audio USB Focusrite Scarlett 2i4, muy poco uso",
        rating: '$ 8.000',
        folder: 'placa',
        imgLength: 4,
    },
    {
        name: "Edifier C3",
        description: "Parlantes Edifier C3 2.1",
        rating: '$ 3.500',
        folder: 'c3',
        imgLength: 4,
    },
    {
        name: "Edifier X400",
        description: "Parlantes Edifier X400 2.1",
        rating: '$ 2.300',
        folder: 'edifier',
        imgLength: 4,
    },
    {
        name: "Flashback TC Electronic",
        description: "Pedal de delay digital Flashback TC Electronic",
        rating: '$ 9.000',
        folder: 'flashback',
        imgLength: 5,
    },
    {
        name: "Pie jirafa Hércules",
        description: "Pie de micrófono como nuevo!",
        rating: '$ 1.000',
        folder: 'pie',
        imgLength: 4,
    },     
    // {
    //     name: "Simmons Beautyrest",
    //     description: "Sommier y colchón Simmons Beautyrest 1,60 x 2mts",
    //     rating: '$ 10.000',
    //     folder: 'sommier',
    //     imgLength: 4,
    // },
    // {
    //     name: "Electrolux DF34",
    //     description: "Heladera con freezer, frost free",
    //     rating: '$ 15.000',
    //     folder: 'heladera',
    //     imgLength: 3,
    // },
    // {
    //     name: "Candy CT66 6kg",
    //     description: "Lavarropas Candy CT66 carga superior",
    //     rating: '$ 2.500',
    //     folder: 'lavarropas',
    //     imgLength: 3,
    // },
    // {
    //     name: "Karcher V2",
    //     description: "Aspiradora Karcher V2, como nueva!",
    //     rating: '$ 3.500',
    //     folder: 'karcher',
    //     imgLength: 3,
    // },
    {
        name: "Trípode Velbon DF 40",
        description: "incluye bolso",
        rating: '$ 700',
        folder: 'tripode',
        imgLength: 5,
    },
    // {
    //     name: "ColchoKit",
    //     description: "Colchoneta gym azul + 2 mancuernas 1kg + 2 tobilleras 1.5 kg",
    //     rating: '$ 500',
    //     folder: 'colchokit',
    //     imgLength: 3,
    // },    
]


// register modal component
Vue.component('modal', {
    template: '#modal-template'
  })

var app = new Vue({
    el: '#app',
    data: {
        cards: items,
        showModal: false,
        item: {},
        scroll: null
    },
    methods: {
        openModal() {
            if( !window.matchMedia("(max-width: 767px)") ) {
                document.body.style.overflow = 'hidden';
            } else {
                this.scroll = window.scrollY;
            }
            this.showModal = true
        },
        closeModal() {
            this.showModal = false
            document.body.style.overflow = 'auto';
            setTimeout(() => {
                window.scrollTo( 0, this.scroll );
            },0)
        }
    }
})



