

class UsersProfiles{
    async getUsers(): Promise<any>{

        let response = await fetch("http://localhost:8080/registration/getAll")

        let usersformat=await response.json();
         
        console.log();

        return usersformat;
    }
    
}   
export default new UsersProfiles(); 
