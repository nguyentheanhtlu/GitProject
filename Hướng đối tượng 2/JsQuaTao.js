class Apple{
    constructor(name,khoiluong) {
        this.name=name;
        this.khoiluong=khoiluong;

    }
    getKhoiLuong(){
        return this.khoiluong;
    }
}
class Human{

    constructor(ten,gioitinh,cannang) {
        this.ten=ten;
        this.gioitinh=gioitinh;
        this.cannang=cannang;
    }
    getTen(){
        return this.ten;
    }
    getGioiTinh(){
        return this.gioitinh;
    }
    getCanNang(){
        return this.cannang;
    }
    eat(apple){
        if (apple.khoiluong>0){
            apple.khoiluong--;
            this.cannang++;
        }
    }
    noi(A){
        console.log(A);
    }
    kiemtra(apple){
        return apple.getKhoiLuong();
    }
}
let App = new Apple('apple1',10);
let Adam = new Human('Adam','Nam',68);
let Eva = new Human('Adam',"nữ", 50);

