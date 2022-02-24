/* var x= prompt("bir sayı girin");
x=Number(x);
if(x!=0){
var y= 50/x;
console.log(y);
}


var s1=Number(promt("bir sayı girin"));
var s2=Number(promt("bir sayı girin"));
var s3=Number(promt("bir sayı girin"));
var ort=(s1+s2+s3)/3;
 */

/* var sonuc="";
if(ort>s1){
    sonuc="Kar";
}
else{
    Sonuc="Zarar";
}

console.log(sonuc); */
/* 
var x=prompt("metin gir");
x=legth.x;
if(x>2 && x<50){
    console.log("merhaba");
}
else{"yeniden metin girin";
}

 */

/* var boy= Number(prompt("boyunuz"));
var kilo= Number(promt("kilonuz"));
var vki= kilo/(boy*boy);
var sonuc="";

if(vki<18.5 || vki>25){
    sonuc="ideal"
}
else{
    sonuc="ideal değil"
}
console.log(sonuc) */


/* var maas=Number(prompt("maas gir"));
var zamli_maas="";

if(maas>4000){
    zamli_maas=maas*1.05;
}
else if(maas<2000){
    zamli_maas=maas*1.3;
}
else{
    zamli_maas=maas*1.15
}

console.log(zamli_maas) 

 */

/* var x=Number(prompt("sayı gir"));

if(x%3==0 && x%5==0){
    console.log("3 ve 5e bölünür");
}
else if(x%3==0){
    console.log("3e bölünür");
}
else if(x%5==0){
    console.log("5e bölünür");
}
else{
    console.log("3e ve 5e bölünmez")
    } */
/* 
var sayi, ort=0;

for(var i=1;i<11;i++){
    sayi=Number(prompt("sayıyı gir"));
    ort=ort+sayi;
    console.log(ort);
}
ort=ort/10;
console.log("ortalama",ort);  */

/*var s=100,ort=0;
for(var i=1;i<51;i++){
    s=s+2;
    ort=ort+s
    console.log(s);
}

console.log(ort); */

/* var adet3=0;
var adet7=0;
for(var i=500;i<1000;i++){
    if(i%3==0){
        adet3++;
    }
    if(i%7==0){
        adet7++
    }


}
console.log("3e bölünen:", adet3 ,"7ye bölünen:",adet7);  */


/* for(var i=0;i<5;i++){
    for(var k=0;k<3;k++){
        console.log(i,k);
    }
} */

/* for (var i=0;i<10;i++){
    for (var k=0;k<10;k++){
        console.log(i+"*"+k,"=",i*k)
    }
    console.log("---------------");
}
     */

/*  const sutun=10,satir=6;
var a="";
for(var i=0;i<satir;i++){
    for(var k=0;k<sutun;k++){
    a=a+"*";
    
    }
    a=a+"\n";
}
console.log(a); 
 */


/* const sat=6;
var sek="";
for(var i=0;i<sat;i++){
    for(var k=0;k<=i;k++){
       sek= sek+"*";
    }
    sek=sek+"\n";
}
console.log(sek); */

/* const sat=6, sut=6;
var sek="";
for(var i=1;i<sat;i++ ){
    for(var k=1;k<sut;k++){
        if(i==k){
            sek=sek+"*";
        }
        else{
            sek=sek+" ";
        }
    }   
    sek=sek+"\n";    
}
console.log(sek); */

/* const sut=10,sat=10;
var sek="";
for(var i=0;i<=sat;i++){
    for(var k=0;k<=sut;k++){
        if(i+k<sut){
            sek+=" ";
        }
        else{
            sek+="*";
        }
    
    }
    sek=sek+"\n";
}
console.log(sek);  */

/* var sek="";
const sayı=Number(prompt("sayı giriniz"))
if(sayı%2==0){
    alert("Tek sayı giriniz");
}
else{
    const sat=(sayı+1)/2;
    console.log(sat);

    for(var i=0;i<sat;i++){
        for(var k=0;k<i+sat;k++){
            if(sat-1-i>k){
                sek+=" ";
            }
            else{
                sek+="*";
            }
        }
        sek+="\n";
    }
    console.log(sek);
} */

/* var toplam=0,sayiAdedi=0,sayac=100;
while(toplam<=2000){
        toplam+=sayac;
        sayac++;
        sayiAdedi++;
        
    
    }

 console.log(sayiAdedi)
 console.log(toplam) */




/*  //var rs=Math.random()*(max-min)+min;
 var rs=Math.random()*9+1;
 rs=Math.round(rs);
 
 do{
    var tah=Number(prompt("1 ile 10 arası sayı gir"));
    if(rs<tah){
        alert(tah+"sayısından daha küçük sayı gir")
    }
    else if(rs==tah){
        alert("bildiniz");
    }else{
        alert(tah+"daha büyük bir sayı gir")
    }
 }
 while(rs!=tah); */




 /* function sayHello(name){
    var sonuc="hello "+name;
    return sonuc

    }

 console.log(sayHello("Ali"));
 console.log(sayHello("Ayşe"));
 */


/* 
function topla(x,y){
    var toplam=x + y;
    return toplam;
}


console.log(topla(45,65));
alert(topla(4,65));


 */


/*  function fakt(s){
    var carpim=1;
    for(var i=s;i>=1;i--){
        carpim=carpim*i;
    
    }
    return carpim;
}


var sonuc=fakt(prompt("sayı giriniz"));
console.log(sonuc);
 */


/* function not(s){
    var sonuc="";
    if(s>=90 && s<=100){
        sonuc="A";
    }
    else if(s>=80 && s<90){
        sonuc="B";
    }
    else if(s>=70 && s<80){
        sonuc="C";
    }
    else if(s>=60 && s<70){
        sonuc="D";
    }
    else if(s>=50 && s<60){
        sonuc="E";
    }
    else if(s>=0 && s<50){
        sonuc="F";
    }

    return sonuc;
}

var netice=not(prompt("notu giriniz"));
alert(netice);
 */


/* 
var araba={
        marka:"Mercedes",
        model:"S500",
        motor:5,
        kasa:"Sedan"
}

console.log(araba);
araba.motor=7;
console.log(araba);
console.log(araba.marka);

 */

/* 
var vize = Number(prompt("Vize giriniz"));
var final = Number(prompt("Final giriniz"));
var ortalama = vize*0.3 + final*0.7;


var notlar = {
    vize: 0,
    final: 0,
    ort: 0
};

notlar.vize = vize;
notlar.final = final;
notlar.ort = ortalama;

console.log(notlar);
 */


/* var sayilar = [12,56,14,33,89,67,22];
var toplam=0
for (var i=0;i<sayilar.length;i++){
        toplam=toplam+sayilar[i]
    }
console.log(toplam)
    


 */

/* var sayilar = [12,56,14,33,89,67,22];
var buyuk=sayilar[0];
for (var i=0;i<sayilar.length;i++){
    if(sayilar[i]>buyuk){
        buyuk=sayilar[i];
    }
}


console.log(buyuk) */


/* var sayilar = [12,56,14,33,89,67,22];
var buyuk=sayilar[0];
for (var i=0;i<sayilar.length;i++){
    if(sayilar[i]>buyuk){
        buyuk=sayilar[i];
    }
}
var kucuk=sayilar[0];
for (var i=0;i<sayilar.length;i++){
    if(sayilar[i]<kucuk){
        kucuk=sayilar[i];
    }
}


console.log(buyuk-kucuk) 
 */


/* var sayilar = [12,56,14,33,89,67,22];
var ort=0;
for (var i=0;i<sayilar.length;i++){
    ort+=sayilar[i];
    
    
}
ort=ort/sayilar.length
sayi=0
for (var i=0;i<sayilar.length;i++){
    if(sayilar[i]<ort){
        sayi+=1
    }
}
console.log(sayi) */


/* var sayilar1 = [12,56,14,33,89,67,22];
var sayilar2 = [124,342,3,56,80,1,426];
var sayilar3 = [];

for(var i=0; i<sayilar1.length; i++){
    sayilar3[i] = sayilar1[i] + sayilar2[sayilar1.length-1-i];
}

console.log(sayilar3);
 */


/* var sayilar = [12,56,14,33,89,67,22];
var temp;

console.log(sayilar);

for(var i=0; i<sayilar.length; i++){
    for(var j=i+1; j<sayilar.length; j++){
        console.log(sayilar[i], sayilar[j])
        if(sayilar[i] < sayilar[j]){
            temp = sayilar[j];
            sayilar[j] = sayilar[i];
            sayilar[i] = temp;
        }
        
        console.log(sayilar);
    }
}


 */

























