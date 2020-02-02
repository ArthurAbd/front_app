import React from 'react'
import TextInput from '../common/inputs/TextInput/TextInput'
import Select from '../common/inputs/Select/Select'
import FormField from '../common/inputs/FormField/FormField'
import TextArea from '../common/inputs/TextArea/TextArea'
import CheckBox from '../common/inputs/CheckBox/CheckBox'
import Button from '../common/Button/Button'

const UI = (props) => {
    return (
        <div style={{margin: '50px', width: '400px',
                display: 'flex', flexDirection: 'column'}}>
            <FormField label='Имя' >
                <TextInput value='Артур' />
            </FormField>
            <br/>
            <TextInput value='Артур' />
            <br/>
            <Select options={['small', 'medium', 'large']} />
            <br/>
            <TextArea />
            <br/>
            <CheckBox label='Interested' />
            <br/>
            <Button label='active' active/>
            <br/>
            <Button label='Edit'/>
            <br/>
            <form onSubmit={(e) => {
                e.preventDefault()
                console.log(e.target.ss.value)
            }
                }>
                <TextInput name='ss' value='Артур' />
                <br/>
                <br/>
                <Button label='Edit' primary/>
            </form>
        </div>
    )
}

export default UI