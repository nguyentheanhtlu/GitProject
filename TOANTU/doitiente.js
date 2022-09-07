function chuyendoi() {
    let giatrivao=document.getElementById('dauvao').value;
    let a =document.getElementById('a').value;
    let b =document.getElementById('b').value;
    if (a == b) {
        alert(giatrivao);
    }
    if (a=='vietnam' &&  b=='USD') {
        alert(giatrivao/23000);
    }
    if (a=='USD' &&  b=='vietnam') {
        alert(giatrivao*23000);
    }



}