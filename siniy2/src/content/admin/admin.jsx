import React, { useState } from 'react';
import AdminPage from './admin_page';
import css from './admin.module.css'
const Audit = () => {
    const [passwd, setpasswd] = useState(false)
    const [value, setvalue] = useState('')

    function inputed_text(event) {
        setvalue(event.target.value)
        if (event.target.value.length === 4) {
            if (event.target.value === '1225') { setpasswd(true) } else {
                setTimeout(() => {
                    alert('wrong password')
                    setvalue('')
                }, 10)
            }
        }
    }
    
    return (
        <div className="admin">
            {!!passwd && <AdminPage />}
            {!passwd && <div className={css.container}>
                <div className={css.header}>Admin</div>
                <div className={css.text}>Введи пароль</div>
                <input className={css.input} type="password" value={value} onChange={inputed_text} />
                </div>}
        </div>
    )
}
export default Audit