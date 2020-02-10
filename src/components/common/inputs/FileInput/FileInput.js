import React from 'react'
import s from './FileInput.module.sass'
import {connect} from 'react-redux'
import {sendOnePhoto} from '../../../../actions'


const FileInput = ({sendOnePhoto, photos}) => {
    
    const sendPhotos = (files) => {

        for (let i = 0; i < files.length; i++) {
            const file = files[i]
            if (file.type === "image/png" || 
            file.type === "image/jpg" || 
            file.type === "image/jpeg" &&
            file.size < 1024 * 1024 * 20) {
                sendOnePhoto(file)
                continue
            }
            console.log('Большой размер')
        }
    }


    const [fileOver, setFileOver] = React.useState(false)
    

    const onDragLeave = (e) => {
        console.log(e.currentTarget, e.target)
        setFileOver(false)
        e.stopPropagation()
        e.preventDefault()
    }

    const onDragOver = (e) => {
        e.stopPropagation()
        e.preventDefault()
    }

    const onDragEnter = (e) => {
        console.log(e.currentTarget, e.target)
        setFileOver(true)
        e.stopPropagation()
        e.preventDefault()
    }

    const onDrop = (e) => {
        setFileOver(false)
        e.stopPropagation()
        e.preventDefault()
        const dt = e.dataTransfer;
        const files = dt.files;
        sendPhotos(files)
    }

    return (
        <div className={s.FileInput}>
            <label className={s.Label} >
                <div className={`${s.InputLayer} ${fileOver ? s.File: ''}`}
                    onDragLeave={onDragLeave}
                    onDragOver={onDragOver}
                    onDragEnter={onDragEnter}
                    onDrop={onDrop}
                    >
                    <input type="file" multiple style={{display:'none'}}
                        onChange={(e) => sendPhotos(e.target.files)}/>
                    Добавить изображения не больше 20 МБ.
                </div>
            </label>
            {photos}
        </div>
    )
}

const mapStateToProps = ({fileInput}) => {
    return {
        photos: fileInput.photos,
        error: fileInput.error,
        isLoading: fileInput.isLoading
    }
}

export default connect(mapStateToProps, {sendOnePhoto})(FileInput)