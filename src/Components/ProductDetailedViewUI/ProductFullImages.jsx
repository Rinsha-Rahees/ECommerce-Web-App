function ProductFullImages({ images }) {

  return (
    <>
        <div className="grid grid-cols-2 gap-2.5">
        {images.map((img, idx) => {
              return (
                <img
                  key={`${idx}_image`}
                  src={`${img}`}
                  alt={`Product Image`}
                />
              );
            })}
      </div>
    </>
  )
}

export default ProductFullImages