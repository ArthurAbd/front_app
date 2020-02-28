import React from 'react'
import s from './FileInput.module.sass'
import {connect} from 'react-redux'
import {sendOnePhoto} from '../../../../actions'

const FileInput = ({sendOnePhoto, photos, photoMask, error, changePhotos}) => {
    
    const sendPhotos = (files) => {

        for (let i = 0; i < files.length; i++) {
            const file = files[i]
            if ((file.type === "image/png" || 
            file.type === "image/jpg" || 
            file.type === "image/jpeg") &&
            file.size < 1024 * 1024 * 20) {
                sendOnePhoto(file)
                continue
            }
            console.log('Большой размер')
        }
    }

    React.useEffect(() => {
        changePhotos(photos)
    }, [photos[0], photos[1]])

    const [fileOver, setFileOver] = React.useState(false)
    

    const onDragLeave = (e) => {
        setFileOver(false)
        e.stopPropagation()
        e.preventDefault()
    }

    const onDragOver = (e) => {
        e.stopPropagation()
        e.preventDefault()
    }

    const onDragEnter = (e) => {
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

    let photoBlock = photoMask.map((item, index) => {
        return (
            <span key={index}>
                <i className="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
                <span className="sr-only">Loading...</span>
            </span>
        )
    })

    {photos[0].forEach((url, index) => {
        photoBlock[index] = (
            <img key={url} src={url} />
        )
    })}

    return (
        <>
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
            {/* {error && <span>{error}</span>} */}
        </div>
        {photoMask.length > 0 ? (
        <div className={s.ImgContainer}>
            {photoBlock}
        </div>
        ) : null}
        </>
    )
}

const mapStateToProps = ({fileInput}) => {
    return {
        photoMask: fileInput.photoMask,
        photos: [fileInput.photosSmall, fileInput.photos],
        error: fileInput.error,
        isLoading: fileInput.isLoading
    }
}

export default connect(mapStateToProps, {sendOnePhoto})(FileInput)