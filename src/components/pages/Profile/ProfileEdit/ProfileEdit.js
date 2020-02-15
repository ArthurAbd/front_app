import React from 'react'
import s from './ProfileEdit.module.sass'
import EditNameReduxForm from './EditNameReduxForm'
import EditPasswordReduxForm from './EditPasswordReduxForm'


const ProfileEdit = ({userEdit, name, number, checked}) => {
    
    return (
        <div className={s.ProfileEdit}>
            <div className={s.Name} >{name}</div>
            <div className={s.Info} >
                <p>Контактная информация</p>
                <div className={s.Contact}>
                    <div className={s.Phone}>
                        <span>+7{number}</span>
                        {checked ? 'Подтвержден' : 'Не подтвержден'}
                    </div>
                    
                </div>
                <EditNameReduxForm onSubmit={userEdit} initialValues={{name: name}}/>
            </div>
            <div className={s.Password} >
                <p>Сменить пароль</p>
                <EditPasswordReduxForm onSubmit={userEdit} />
            </div>
        </div>
    )
}


export default ProfileEdit