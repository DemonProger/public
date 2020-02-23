
import React from 'react'
import ReactDom from 'react-dom'


import { initialState } from './reducer'
import { Registraion } from './registration'


test("registration states variants testing...", () => {

    const div = document.createElement('div')   

    const testedStates = [
        initialState, 
        {
            ...initialState, 
            isVsible: true
        }
    ]
    
    for (const state of testedStates) 
        ReactDom.render(Registraion(state), div)
})