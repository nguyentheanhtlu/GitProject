class SwitchButton{
    constructor(status,lamp) {
        this.status=status;
        this.lamp=lamp;
    }
    getStatus(){
        return this.status;
    }
    getLamp(){
        return this.lamp;
    }
    connectToLamp(ElectricLamp){
    this.lamp=ElectricLamp;
    }
    switchOff(){
        this.lamp.status=false;
    }
    switchOn(){
        this.lamp.status=true;
    }


}
class ElectricLamp{
    constructor(status) {
        this.status=status;
    }
    getStatus(){
        return this.status;
    }
   light(){
        if(this.status == true){
            console.log('đèn sáng')}
            else{
                console.log('đèn tắt')
            }
        }
   }

let congtac = new SwitchButton(true,'lamp');
let den = new ElectricLamp(true);

