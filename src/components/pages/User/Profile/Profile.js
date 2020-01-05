import React from 'react'
import s from './Profile.module.sass'

const Profile = (props) => {
    return (
        <div className={s.Login}>
            <form>
                <p>
                    <label for='name'> Имя</label>
                    <input type='text' id="name" />
                </p>
                <p>
                    <label for='email'> E-mail</label>
                    <input type='text' id="email" />
                </p>
                <p>
                    <label for='password'> Пароль</label>
                    <input type='text' id="password" />
                </p>
                <p>
                    <div className={s.Btn}>
                        Отмена
                    </div>
                    <div className={s.Btn}>
                        Отправить
                    </div>
                </p>
                
            </form>
            
        </div>
    )
}


export default Profile