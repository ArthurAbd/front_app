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
                    <label htmlFor='number'> Телефон</label>
                    <input type='tel' id="number" value='+79534037733' disabled />
                </div>
                <div>
                    <label htmlFor='password'> Текущий пароль</label>
                    <input type='text' id="password" />
                </div>
                <div>
                    <label htmlFor='newPassword'> Новый пароль</label>
                    <input type='text' id="newPassword" />
                </div>
                <div>
                    <label htmlFor='repeatPassword'> Повторите пароль</label>
                    <input type='text' id="repeatPassword" />
                </div>
                <div className={s.BtnGroup} onClick={(e) => console.log(e)}>
                    <button type='submit' className={s.Btn}>
                        Изменить
                    </button>
                </div>
            </form>
        </div>
    )
}


export default ProfileEdit