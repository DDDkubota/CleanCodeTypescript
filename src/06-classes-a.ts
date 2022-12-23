( ()=>{


    //No Aplica Principo Single responsabilty

    
    type Gender = 'M'|'F';
        class Person {
            constructor( 
                public name: string, 
                public gender: Gender, 
                public birthdate: Date
                ){

                    this.name = name;
                    this.gender = gender;
                    this.birthdate = birthdate;
            }
        } 


        class User extends Person {

            public lastAccessDate: Date;

            constructor(
                public email: string,
                public role: string,
                name: string,
                gender: Gender,
                birhdate: Date,
            ){
                super(name, gender, birhdate);
                this.lastAccessDate = new Date();
            }
        
            checkCredentials(){
                return true;


        }
  
        }
        class UserSettings extends User {
            constructor(
                public workingDirectyory:string,
                public lastOpernFolder  :string,
                email                   :string,
                role                    :string,
                name                    :string,
                gender                  :Gender,
                birhdate                :Date,

            ){
                super(email,role,name,gender,birhdate);
            }


        }
const userSettings = new UserSettings(
    '/user/settings',
    '/home',
    'ckubota54@gmail.com',
    'Admin',
    'CarlosKubota',
    'M',
    new Date('1999-06-01')

);


const persoonas = [
    {name:'nime', age:12}
]


        const newPerson = new Person('Carlos', 'M', new Date('1999-06-01'));



        console.log({userSettings})

        console.log({newPerson})


})();


