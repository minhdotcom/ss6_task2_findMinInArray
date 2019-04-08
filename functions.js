var array = [];

function input_array(){
    var unit;
    while (unit != "s") {
        unit = prompt("Please input a number. Input 's' to finish.");
        let temp = Number(unit);
        if (unit != "s"){
            array += temp;
        } else {
            break;
        }

    }
    console.log(array);
}

function find_min_in_array(){
    var min = array [0];
    for (let i = 1; i < array.lenght; i++){
        if (array[i] < min){
            min = array[i];
        }
    }
    alert("The min number of the input array is: " + min);
}