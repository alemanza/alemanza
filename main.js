var items = [
    {
        name: "Epiphone AJ220",
        description: "Guitarra Acústica Epiphone",
        rating: '$ 8.000',
        folder: 'epiphone',
        imgLength: 5,
    },
    {
        name: "Electrolux DF34",
        description: "Heladera con freezer, frost free",
        rating: '$ 15.000',
        folder: 'heladera',
        imgLength: 3,
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
        name: "Flashback TC Electronic",
        description: "Pedal de delay digital Flashback TC Electronic",
        rating: '$ 9.000',
        folder: 'flashback',
        imgLength: 5,
    },
    {
        name: "Simmons Beautyrest",
        description: "Sommier y colchón Simmons Beautyrest 1,60 x 2mts",
        rating: '$ 10.000',
        folder: 'sommier',
        imgLength: 4,
    },
    {
        name: "ColchoKit",
        description: "Colchoneta gym azul + 2 mancuernas 1kg + 2 tobilleras 1.5 kg",
        rating: '$ 500',
        folder: 'colchokit',
        imgLength: 3,
    },
    {
        name: "Black out",
        description: "Black out 115x200cm (cantidad 2) ",
        rating: '$ 2.500',
        folder: 'blackout',
        imgLength: 1,
    },
    {
        name: "Samsung S23B350",
        description: "Monitor Led Samsung S23B350 23\"",
        rating: '$ 2.500',
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
        name: "Mueble para TV",
        description: "Mueble TV de melamina",
        rating: '$ 800',
        folder: 'muebleTV',
        imgLength: 1,
    },
    {
        name: "Placard 2 puertas",
        description: "Placard de dos puertas de melamina",
        rating: '$ 2.700',
        folder: 'placard',
        imgLength: 2,
    },
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
        item: null
    },
    methods: {
        openModal() {
            document.body.style.overflow = 'hidden';
            this.showModal = true
        },
        closeModal() {
            this.showModal = false
            document.body.style.overflow = 'auto';
        }
    }
})



