function teste() {
    // console.log('Este é meu teste') // o this é o objeto global
    console.log(this);
}

class ControleRemoto {
    constructor (tv) {
        this.tv = tv;
        this.volume = 0;
        teste();
    }

    aumentarVolume() {
        this.volume += 2;
    }

    diminuiVolume() {
        this.volume -= 2;
    }

    static trocaPilha() {
        console.log('Ok, vou trocar')
        console.log(this.volume) // por ser metodo estatico não irá retornar o valor do objeto
    }

    // método estatico é uma função que está dentro de uma classe
    static soma (x, y) { // metodos estaticos não tem acesso aos dados da instancia

        // return x + y;
        console.log(this); // this é referente a classe ControleRemoto
    }
}

const controle1 = new ControleRemoto('LG');
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();
// console.log(controle1)
// ControleRemoto.trocaPilha();
console.log(ControleRemoto.soma(10, 5));
// ControleRemoto.soma()