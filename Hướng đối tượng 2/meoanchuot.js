class Mouse {
    status;

    constructor(ten, khoiluong, tocdo, status) {
        this.ten = ten;
        this.khoiluong = khoiluong;
        this.tocdo = tocdo;
        this.status = status;
    }

    getTen() {
        return this.ten;
    }

    getStatus() {
        return this.status;
    }

    getKhoiLuong() {
        return this.khoiluong;
    }

    getTocDo() {
        return this.tocdo;
    }

    check() {
        if (this.status) {
            console.log('con song');
        } else {
            console.log('da chet');
        }
    }

    // alive() {
    //     this.status = true;
    // }
    //
    // died() {
    //     this.status = false;
    // }

    Keu(a) {
        console.log(a);
    }
}

class Cat {
    constructor(ten, khoiluong, tocdo) {
        this.ten = ten;
        this.khoiluong = khoiluong;
        this.tocdo = tocdo;

    }

    getTen() {
        return this.ten;
    }

    getKhoiLuong() {
        return this.khoiluong;
    }

    getTocDo() {
        return this.tocdo;
    }

    keu(b) {
        console.log(b);
    }

    catchTheMouse(Mouse) {
        if (this.tocdo > Mouse.tocdo) {
            console.log('Mèo đã bắt được chuột');
        } else {
            console.log('Mèo quá Non');
        }
    }

    eatTheMouse(Mouse) {
        if (Mouse.status == true) {
            this.khoiluong = this.khoiluong + Mouse.khoiluong;
            Mouse.satus = false;
            console.log('Chuột đã bị ăn');
        }
    }

}
let Rat = new Mouse('Rat',10,100,true);
let Tom = new Cat('tom',20,200);

