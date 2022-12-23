(() => {


    // Resolver sin la triple condicional dentro del if
    // includes? arrays?
    function isRedFruit( fruit: string ): boolean {
        let fruitsValit= ['manzana', 'cereza', 'ciruela']
        return fruitsValit.includes(fruit)
    }
    interface FruitsObjectColor {
        [key: string]: Array<string>
    }
    // Simplificar esta función
    // switch? Object literal? validar posibles colores
    function getFruitsByColor( color: string ): string[] {
        let fruitsColorsObjects:FruitsObjectColor ={
            'red':['manzana','fresa'],
            'yellow':['piña','banana'],
            'purple':['moras','uvas']
        }
      if (fruitsColorsObjects[color]) return fruitsColorsObjects[color]
        throw Error('the color must be: red, yellow, purple')
    }

    // Simplificar esta función
    let isFirstStepWorking  = true;
    let isSecondStepWorking = true;
    let isThirdStepWorking  = true;
    let isFourthStepWorking = true;

    function workingSteps() {
        if(!isFirstStepWorking)return 'First step broken.';
        if(!isSecondStepWorking)return 'Second step broken.';
        if(!isThirdStepWorking)return 'Third step broken.';
        if(!isFourthStepWorking)return 'Fourth step broken.';
        return 'Working properly!';
    }


    // isRedFruit
    console.log({ isRedFruit: isRedFruit('cereza'), fruit: 'cereza' }); // true
    console.log({ isRedFruit: isRedFruit('piña'), fruit: 'piña' }); // true

    //getFruitsByColor
    console.log({ redFruits: getFruitsByColor('red') }); // ['manzana', 'fresa']
    console.log({ yellowFruits: getFruitsByColor('yellow') }); // ['piña', 'banana']
    console.log({ purpleFruits: getFruitsByColor('purple') }); // ['moras', 'uvas']
    console.log({ pinkFruits: getFruitsByColor('pink') }); // Error: the color must be: red, yellow, purple

    // workingSteps
    console.log({ workingSteps: workingSteps() }); // Cambiar los valores de la línea 31 y esperar los resultados


})();