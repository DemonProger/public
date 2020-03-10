

import * as bodyParser from 'body-parser'
import { Server } from '@overnightjs/core'
import logs from './thirdparty/logs'

const express = require('express')
const path = require('path')


import UsersController from './controllers/users'
import { UserModel, UserModelWithoutDb } from './models/user'


class BackServer extends Server {
    
    constructor() {
        super(true)
       
        this.app.use(bodyParser.json())
        this.app.use(bodyParser.urlencoded({extended: true}))        
        this.app.use(express.static(path.join(__dirname, process.env.PUBLIC_PATH)))

        this.setupControllers()
    }

    public start(port: number): void {                  
        this.app.listen(port, () => {
            logs.info(`Server started on port ${port}`)
        })        
    }

    private setupControllers() {

        let userModel = null
        if (process.env.USE_DB)
            userModel = new UserModel()
        else 
            userModel = new UserModelWithoutDb()        

        const usersController = new UsersController(userModel)

        this.app.post("/user", usersController.registerUser.bind(usersController))     
    }
}

export default BackServer