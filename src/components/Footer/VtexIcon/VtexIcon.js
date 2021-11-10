import React from 'react'
import icon from '../../../assets/vtex-icon/icon.svg'
import v from '../../../assets/vtex-icon/v.svg'
import t from '../../../assets/vtex-icon/t.svg'
import e from '../../../assets/vtex-icon/e.svg'
import x from '../../../assets/vtex-icon/x.svg'

export const VtexIcon = () => {

    const style = {
        marginLeft: '2px'
    }

    return (
        <div>
            <img src={icon} alt="vtex" style={style}/>
            <img src={v} alt="v" style={style}/>
            <img src={t} alt="t" style={style}/>
            <img src={e} alt="e" style={style}/>
            <img src={x} alt="x" style={style}/>
        </div>
    )
}
