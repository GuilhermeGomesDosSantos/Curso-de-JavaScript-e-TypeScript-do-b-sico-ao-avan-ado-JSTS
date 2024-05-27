function getDiaSemanaTexto(diaSemana) {
    let diaSemanaTexto;

    switch (diaSemana) {
        case 0:
            diaSemanaTexto = 'Domingo';
            return diaSemanaTexto;;
        case 1:
            diaSemanaTexto = 'Segunda-feira';
            return diaSemanaTexto;;
        case 2:
            diaSemanaTexto = 'Terça-feira';
            return diaSemanaTexto;;
        case 3:
            diaSemanaTexto = 'Quarta-feira';
            return diaSemanaTexto;;
        case 4:
            diaSemanaTexto = 'Quinta-feira';
            return diaSemanaTexto;;
        case 5:
            diaSemanaTexto = 'Sexta-feira';
            return diaSemanaTexto;;
        case 6:
            diaSemanaTexto = 'Sabado';
            return diaSemanaTexto;;

        default:
            diaSemanaTexto = '';
            return diaSemanaTexto;;
    }
}

const data = new Date('1987-04-23 00:00:00');
let diaSemana = data.getDay();
// diaSemana = 7;
// let diaSemanaTexto;
const diaSemanaTexto = getDiaSemanaTexto(diaSemana);

/*
switch (diaSemana) {
    case 0:
        diaSemanaTexto = 'Domingo';
        break;
    case 1:
        diaSemanaTexto = 'Segunda-feira';
        break;
    case 2:
        diaSemanaTexto = 'Terça-feira';
        break;
    case 3:
        diaSemanaTexto = 'Quarta-feira';
        break;
    case 4:
        diaSemanaTexto = 'Quinta-feira';
        break;
    case 5:
        diaSemanaTexto = 'Sexta-feira';
        break;
    case 6:
        diaSemanaTexto = 'Sabado';
        break;

    default:
        diaSemanaTexto = '';
        break;
}
*/

/*
if (diaSemana === 0) {
    diaSemanaTexto = 'Domingo'
} else if (diaSemana === 1) {
    diaSemanaTexto = 'Segunda-Feira'
} else if (diaSemana === 2) {
    diaSemanaTexto = 'Terça-Feira'
} else if (diaSemana === 3) {
    diaSemanaTexto = 'Quarta-Feira'
} else if (diaSemana === 4) {
    diaSemanaTexto = 'Quinta-Feira'
} else if (diaSemana === 5) {
    diaSemanaTexto = 'Sexta-Feira'
} else if (diaSemana === 6) {
    diaSemanaTexto = 'Sabádo'
} else {
    diaSemanaTexto = '';
}
*/


console.log(diaSemana, diaSemanaTexto);