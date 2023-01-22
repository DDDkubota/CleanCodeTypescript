import { Audi, Toyota, Honda, Maserati, Vehicle, Tesla } from './03-liskov-b';


(() => {
    
    const printCarSeats = ( cars:Vehicle[] ) => {
        cars.forEach(car => {
            console.log(car.getNumberOfSeats(), car.constructor.name)

        });
        
        // for (const car of cars) {
         
        //     if( car instanceof Tesla ) {
        //         console.log( 'Tesla', car.getNumberOfSeats() )
        //         continue;
        //     }
        //     if( car instanceof Audi ) {
        //         console.log( 'Audi', car.getNumberOfSeats() )
        //         continue;
        //     }
        //     if( car instanceof Toyota ) {
        //         console.log( 'Toyota', car.getNumberOfSeats() )
        //         continue;
        //     }
        //     if( car instanceof Honda ) {
        //         console.log( 'Honda', car.getNumberOfSeats() )
        //         continue;
        //     }         

        // }
    }
    
    const cars = [
      
        new Audi(2),
        new Toyota(5),
        new Honda(5),
        new Maserati(2)
    ];


    printCarSeats( cars );

})();