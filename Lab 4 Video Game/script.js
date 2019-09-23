class Character{
    constructor(name,energy,hitPoints,id){
        this.name=name;
        this.energy=energy;
        this.hitPoints=hitPoints;
        this.id=id;
    }

    display = function(){
        document.getElementById(this.id).innerHTML=`Name: ${this.name} <br> Energy: ${this.energy} <br> Hit Points ${this.hitPoints}`;

    }

    attack = function(opponent){
        let newEnergy=opponent.energy - this.hitPoints;
        opponent.energy=newEnergy;
        opponent.display();
        if (opponent.energy == 0){
            document.getElementById(opponent.id).innerHTML="YOU LOSE!";
            document.getElementById(this.id).innerHTML="You WIN!";

            
        }
        
    }

}




const left = new Character("Ken", 100, 20, "left");
const right = new Character("Rob", 100, 10, "right");

left.display();
right.display();


const reset = function(){
    left.energy=100;
    right.energy=100;
    left.display();
    right.display();
}