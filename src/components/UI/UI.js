import React from 'react'
import FileInput from '../common/inputs/FileInput/FileInput'
import Button from '../common/Button/Button'
import TextInput from '../common/inputs/TextInput/TextInput'
import Select from '../common/inputs/Select/Select'
import FormField from '../common/inputs/FormField/FormField'
import TextArea from '../common/inputs/TextArea/TextArea'
import CheckBox from '../common/inputs/CheckBox/CheckBox'
import { Field } from 'redux-form'

const UI = (props) => {
    return (
        <div style={{margin: '50px', width: '600px',
                display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
            <FileInput />
            <br/>
            <Button size='s' >Button-S</Button>
            <br/>
            <Button size='m' >Button-M</Button>
            <br/>
            <Button size='m' disabled >Button-M-disabled</Button>
            <br/>
            <Button size='m' active >Button-M-active</Button>
            <br/>
            <Button size='l' >Button-L</Button>
            <br/>
            <Button size='m' variant='outline' >Button-M-Outline</Button>
            <br/>
            <Button size='m' variant='outline' disabled >Button-M-Outline-disabled</Button>
            <br/>
            <Button size='m' variant='outline' active >Button-M-Outline-active</Button>
            <br/>
            <Button size='m' variant='transparent' >Button-M-transparent</Button>
            <br/>
            <Button size='m' variant='transparent' disabled >Button-M-transparent-disabled</Button>
            <br/>
            <FormField label={<i className='fa fa-phone fa-2x' />} >
                <TextInput placeholder='Телефон' />
            </FormField>
            <br/>
            <Button size='m' variant='transparent' active >Button-M-transparent-active</Button>
            <br/>
            <CheckBox />
        </div>
    )
}

export default UI