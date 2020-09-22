function studentHogwarts(){
    let privateScore = 0; 
    let name = null;
    
    var changeScoreBy = function(points){
        privateScore += points;
    }
    
    this.setName = function(newName){
        name = newName;
    }
    
    this.rewardStudent = function (){
        changeScoreBy(1);
    }
    
    this.penalizeStudent = function (){
        changeScoreBy(-1);
    }
    
    this.getScore = function(){
        return(name+': '+privateScore);
    }
}

let Harry = new studentHogwarts();
Harry.setName('Harry');
Harry.rewardStudent();
Harry.rewardStudent();
Harry.rewardStudent();
Harry.rewardStudent();
console.log(Harry.getScore());

let Draco = new studentHogwarts();
Draco.setName('Draco');
Draco.rewardStudent();
Draco.penalizeStudent();
Draco.penalizeStudent();
Draco.penalizeStudent();
console.log(Draco.getScore());