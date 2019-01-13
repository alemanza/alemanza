var items = [
    {
        name: "Big Ben",
        description: "London, United Kingdom",
        imgURL: "big-ben",
        rating: '$2000.00',
        modalImg: ['1','2','3']
    },
    {
        name: "Sagrada Familia",
        description: "Barcelona, Spain",
        imgURL: "sagrada-familia",
        rating: 4.7
    },
    {
        name: "Eiffel Tower",
        description: "Paris, France",
        imgURL: "eiffel-tower",
        rating: 4.6
    },
    {
        name: "Trevi Fountain",
        description: "Roma, Italy",
        imgURL: "trevi-fountain",
        rating: 4.7
    },
    {
        name: "Bloemenmarkt",
        description: "Amsterdam, Netherlands",
        imgURL: "bloemenmarkt",
        rating: 4.2
    },
    {
        name: "Alexanderplatz",
        description: "Berlin, Germany",
        imgURL: "alexanderplatz",
        rating: 4.5
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
        modal: null
    }
})



