

class UsersProfiles{
    async getDataUser(): Promise<any>{

        let response = await fetch(`${process.env.BACK_URL || "http://localhost:3000"}/user`)

        let usersformat=await response.json();

        return usersformat;
    }
    
}   
export default new UsersProfiles(); 