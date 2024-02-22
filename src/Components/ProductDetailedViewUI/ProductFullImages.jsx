function ProductFullImages({ images }) {

  return (
    <div>
        <div className="grid grid-cols-2 gap-2.5">
          {
            images.map((imageInfo) => {
              return imageInfo.image.map((imgSrc, idx) => {
                return (
                <img 
                key={`${idx}_${imageInfo.title}`}
                src={imgSrc} 
                alt={imageInfo.title} />
                )
              })
            })
          }
      </div>
    </div>
  )
}

export default ProductFullImages