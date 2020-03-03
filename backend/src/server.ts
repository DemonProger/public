

import * as bodyParser from 'body-parser'
import { Server } from '@overnightjs/core'
import logs from './thirdparty/logs'


class BackServer extends Server {
    
    constructor() {
        super(true)
        this.app.use(bodyParser.json())
        this.app.use(bodyParser.urlencoded({extended: true}))        
        this.setupControllers()
    }

    public start(port: number): void {                  
        this.app.listen(port, () => {
            logs.info(`Server started on port ${port}`)
        })        
    }

    private setupControllers() {
        // movies
        // this.app.put('/movie/add', MoviesController.movieAdd.bind(MoviesController))       
    }
}

export default BackServer