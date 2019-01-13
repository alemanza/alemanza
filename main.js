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
        name: "Electrolux DF34",
        description: "Heladera con freezer, frost free",
        rating: '$ 15.000',
        folder: 'heladera',
        imgLength: 3,
    },
    {
        name: "Electrolux DF34",
        description: "Heladera con freezer, frost free",
        rating: '$ 15.000',
        folder: 'heladera',
        imgLength: 3,
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



