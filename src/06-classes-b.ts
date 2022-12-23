( ()=>{


    //No Aplica Principo Single responsabilty
    interface PersonProps{
        name        :string;
        gender      :Gender;
        birthdate   :Date;
    }
    type Gender = 'M'|'F';


        class Person {
            public name :string;
            public gender :Gender;
            public birthdate :Date;
            constructor({name, gender, birthdate}:PersonProps){

                    this.name = name;
                    this.gender = gender;
                    this.birthdate = birthdate;
            }
        } 

        interface UserProps {
            email: string;
            role: string;
            name: string;
            gender: Gender;
            birthdate: Date;

        }


        class User extends Person {
            public email :string;
            public role :string;
            public lastAccessDate: Date;

            constructor({
                    email,
                    role,
                    name,
                    gender,
                    birthdate,
            }:UserProps
            ){
                super({name, gender, birthdate});
                this.lastAccessDate = new Date();
                this.email  = email;
                this.role = role;
            }
        
            checkCredentials(){
                return true;
            }
  
        }
        interface userSettingsProps {
            workingDirectory       :string;
            lastOpernFolder         :string;
            email                   :string;
            role                    :string;
            name                    :string;
            gender                  :Gender;
            birthdate                :Date;
        }

        class UserSettings extends User {
            public workingDirectory: string;
            public lastOpernFolder: string;
            constructor(
              {  workingDirectory ,      
                lastOpernFolder   ,
                email             ,
                role              ,
                name              ,
                gender            ,
                birthdate        }: userSettingsProps

            ){
                super({email,role,name,gender,birthdate});
                this.workingDirectory = workingDirectory;
                this.lastOpernFolder = lastOpernFolder;
            }


        }
const userSettings = new UserSettings(
   { workingDirectory: '/user/settings',
    lastOpernFolder: '/home',
    email: 'ckubota54@gmail.com',
    role: 'Admin',
    name: 'CarlosKubota',
     gender:'M',
    birthdate: new Date('1999-06-01')}

);





       



        console.log({userSettings})


})();


