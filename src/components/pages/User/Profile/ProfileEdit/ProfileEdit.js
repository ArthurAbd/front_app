import React from 'react'
import s from './ProfileEdit.module.sass'


const ProfileEdit = (props) => {
    

    return (
        <div className={s.ProfileEdit}>
            <form>
                <div>
                    <label htmlFor='name'> Имя</label>
                    <input type='text' id="name" />
                </div>
                <div>
                    <label htmlFor='email'> E-mail</label>
                    <input type='text' id="email" />
                </div>
                <div>
                    <label htmlFor='password'> Пароль</label>
                    <input type='text' id="password" />
                </div>
                <div className={s.BtnGroup}>
                    <button type='submit' className={s.Btn}>
                        Изменить
                    </button>
                </div>
            </form>
        </div>
    )
}


export default ProfileEdit