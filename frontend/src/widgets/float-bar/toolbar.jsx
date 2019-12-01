
import React, { useState } from 'react'
import toolbarStyle from './toolbar.module.css'

/*
    props: {
        controlButtonName: 'имя кнопки, по нажатию на которую происходит сворачивание/разворачивание тулбара'
        buttons: {
            key: {
                text: 'текст кнопки',
                src: 'расположение файла иконки'
            }
        }
    }
*/
const ToolbarView = props => {
    const [isCollapsed, setIsCollapse] = useState(true)

    const onClick = buttonName => {
        if (buttonName === props.controlButtonName)
            setIsCollapse(!isCollapsed)

        props.onClick(buttonName)
    }

    return (
        <ul className={`${toolbarStyle.ToolbarWrapper} ${!isCollapsed ? toolbarStyle.ToolbarWrapperUpped : ''}`}>
            {
                Object.entries(props.buttons).map(pair => {
                    let key = pair[0],
                        value = pair[1],
                        marginTop = (
                            isCollapsed ? '-75px' : '1px'
                        )

                    return (
                        <div onClick={() => onClick(value.text)}
                            key={key}
                            className={toolbarStyle.ToolbarButton}
                            style={{ marginLeft: marginTop }}
                        >

                            <img alt='картинка не найдена' src={value.src} />
                            <div className={toolbarStyle.ToolbarButtonText}> {value.text} </div>
                        </div>
                    )
                })
            }
        </ul>
    )
}



export default ToolbarView