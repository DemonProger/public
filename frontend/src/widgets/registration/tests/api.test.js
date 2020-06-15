

describe("Api test", () => {

    test("Registered getting", async () => {
        const response = await fetch(
            `${process.env.BACK_URL || "http://localhost:8080"}/registration/getAll`, 
            {                
                method: 'GET',
                headers: {
                    'Origin': 'http://localhost:8080'    
            }})
        expect(response.body.length).not.toEqual(0)
    })
})