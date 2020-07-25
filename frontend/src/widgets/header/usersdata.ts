
class UsersProfiles {

    async getUsers(): Promise<any> {

        const resp = await fetch('http://localhost:8080/registration/all', {mode: 'cors'} )

        // const usersformat=await response.json()
        let usersformat=await resp.json()

        // console.log(usersformat);
        // { mode: 'no-cors' }
        

        return usersformat;
    }
    
}
export default new UsersProfiles();