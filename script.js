notas = [6, 8, 9, 2, 5, 10];
suma = 0;
promedio = 0;



function obtenerSuma() {
    for (var i = 0; i < notas.length; i++) {
        suma += notas[i];
    }
    
    
    console.log(suma)

    return suma;
}



function obtenerPromedio() {
    suma2 = obtenerSuma();
   
    
    total = suma2 / notas.length;

    console.log(total)

    return total;
}

 obtenerPromedio()



NOTAS = [6,8,9,2,5,10];
suma = 0;
for(var i = 0 ; i < notas.length; i++)
{
    suma += notas[i];
}


