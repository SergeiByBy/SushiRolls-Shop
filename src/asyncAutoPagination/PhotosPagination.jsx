import React from 'react'

const PhotosPagination =  ({photos})=> {
  return (
    <div>
      {photos.map(photo=>
        <div className="photo" key={photo.id}>
            <div className="title">{photo.title}</div>
            <img src={photo.thumbnailUrl} alt={photo.albumId} />
            </div>
      )}
      
    </div>
  )
}
export default PhotosPagination;