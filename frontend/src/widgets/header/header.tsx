
import * as React from 'react';
import {connect} from 'react-redux';
import {TYPE} from './actions-header';
import HeaderTemplate from "../templates/header/header"
import {HeaderProps} from "../templates/header/header"


const Header=(props: any)=>{

    const onSomeOptionClick=(optionText: string)=>{

         if (optionText==='вход'){
            props.onEntranceClick()
         }
    }
    
    const headerTemplateProps: HeaderProps = {
        logoText: "public", 
        optionsList: ["вход", "главная", "карта", "информация", "пользователи"], 
        isSearchEnabled: true, 
        onSomeOptionClick: onSomeOptionClick,
 
        searchClickHandler: props.searchClickHandler

    }
     return(
           <HeaderTemplate {...headerTemplateProps}/>
     )
    
}

//чтение состояния
let mapStateToProps=(state: any)=>{
    return{
               
    } 
}

//передача события(действие для изменения состояния компонента)
//это метод,функция, которая возвращает объект-ключ объекта-имя моего метода, значение-сама наша функция 
let mapDispatchToProps=(dispatch: any)=>{
   return {
    onEntranceClick: ()=> dispatch({
        type: TYPE.TYPE_CLICK_ENTRANCE // FIXED
    }) 
   }
}

//connect-генерируем компонент
export default  connect(mapStateToProps, mapDispatchToProps)(Header)