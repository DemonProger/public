

class Logs {
    private isConsoleUse = true
    
    public constructor(isConsoleUse: boolean = true) {
        this.isConsoleUse = true
    }

    public info(message: string) {
        if (this.isConsoleUse)
            console.log(message)
    }

    public error(message: string) {
        if (this.isConsoleUse) 
            console.error(message)
    }

    public warn(message: string) {
        if (this.isConsoleUse) 
            console.warn(message)
    }
}


export default new Logs()