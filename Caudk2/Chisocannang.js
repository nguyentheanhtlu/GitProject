let weight=prompt("can nang cua ban");
let height=prompt("chieu cao cua ban");
let bmi = (weight/(height*height));
if (bmi>=30) {
    alert('Obese');
}else if(bmi>=25) {
    alert('Overweight');
}else if (bmi>=18.5){
    alert('Normal');
}
else{
    alert('Underwight') ;
}
