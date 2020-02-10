import React from 'react'
import TextInput from '../common/inputs/TextInput/TextInput'
import Select from '../common/inputs/Select/Select'
import FormField from '../common/inputs/FormField/FormField'
import TextArea from '../common/inputs/TextArea/TextArea'
import CheckBox from '../common/inputs/CheckBox/CheckBox'
import Button from '../common/Button/Button'
import FileInput from '../common/inputs/FileInput/FileInput'

const UI = (props) => {
    return (
        <div style={{margin: '50px', width: '400px',
                display: 'flex', flexDirection: 'column'}}>
            <FileInput />
        </div>
    )
}

export default UI