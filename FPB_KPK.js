var a1 = [];
var a2 = [];
var a3 = [];
var hasila = 0;

var b1 = [];
var b2 = [];
var b3 = [];
var hasilb = 0;

var x_y = (angka1, angka2) => {

    for(i=1; i<=angka1; i++) {
        if(angka1 % i == 0){
            a1.push(i);
        }
    }

    for(i=1; i<=angka2; i++) {
        if(angka2 % i == 0){
            a2.push(i);
        }
    }

    for(i=0; i<a1.length; i++){
        if(a2.includes(a1[i])) {
            a3.push(a1[i]);
        }
    }

    hasila = a3[a3.length - 1];


    for(i=1; i<=angka2; i++){
        b1.push(angka1 * i);
    }

    for(i=1; i<=angka1; i++){
        b2.push(angka2 * i);
    }

    for(i=0; i<b1.length; i++){
        if(b2.includes(b1[i])) {
            b3.push(b1[i]);
        }
    }

    hasilb = b3[0];

console.log(`FPB ${angka1} & ${angka2} = ${hasila} 
KPK ${angka1} & ${angka2} = ${hasilb}`)
}

x_y(30, 20)