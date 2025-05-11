let persona = {
    name : 'Francesco',
    surname : 'Viccica',
    age : 30,
    saluta: function () {
        // console.log(`Ciao a tutti mi chiamo Francesco`);
        console.log(`Ciao a tutti sono ${this.name} ${this.surname} ed ho ${this.age} anni, piacere di conoscerti!`);
        
        
    }

}

persona.saluta()