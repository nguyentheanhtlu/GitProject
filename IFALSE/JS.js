let year = parseInt(prompt("Enter a year"));
if (year %4==0) {
    if (year % 100 == 0) {
        if (year % 400 == 0) {
            alert("la nam nhuan");
        } else {
            alert("la nam khong nhuan");
        }
    } else {
        alert("la nam nhuan");
    }
}else {
    alert("la nam khong nhuan");
}

