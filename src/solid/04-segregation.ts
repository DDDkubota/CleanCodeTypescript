interface Bird{
    
    eat():void;
}

interface FlyingBirs{
    fly(): void;
}
interface WalkingBirds{
    walk():void
}

interface SwimminngBirds{
    swim():void
}


class Tucan implements Bird, FlyingBirs {


    public fly(){

    }
    public eat(){
        
    }
  
}

class HummingBird  implements Bird, FlyingBirs{

    public fly(){

    }
    public eat(){
        
    }

}

class Ostrich implements Bird, WalkingBirds{
    public eat(){
        
    }
    public walk(){
        
    }
}


class Pinguin implements Bird, SwimminngBirds{
    public eat(){
        
    }
    public swim(){
        
    }
}