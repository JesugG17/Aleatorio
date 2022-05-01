export const initArray = () => {

    let array = [
        "Paul Alberto", "Emma Daniel", "Agustin",
        "Jorge Fernando", "Francisco Javier", "Oscar",
        "Kevin Eduardo", "Carlos Alfonso", "Andrea Jaqueline",
        "Anna Virginia", "Jesus Alejandro", "Jesus Manuel", 
        "Samuel", "Miguel Angel", "Maria Monserrat",
        "Aldo Ivan", "Jaqueline Guadalupe", "Sebastian",
        "Gael Eduardo", "Humberto"
    ]

    array = _.shuffle( array );
    return array;
}
