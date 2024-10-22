type ImageProps = {
  image: string;
  alt?: string;
};

function ImageComponent({ image, alt }: ImageProps): JSX.Element {
  return (
    <>
      <img
        src={image}
        alt={alt}
        style={{
          width: "250px",
          height: "auto",
          display: "flex",
        }}
      />
    </>
  );
}

export default ImageComponent;
