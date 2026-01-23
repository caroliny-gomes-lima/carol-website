import { styled } from "styled-components";

type ImageProps = {
  image: string;
  alt?: string;
  link?: string;
};

const LinkStyles = styled.a(() => {
  return {
    ":hover": {
      filter: "contrast(180%)",
      opacity: 0.3,
      transition: "0.5s ease",
    }
  }
})

function ImageComponent({ image, alt, link }: ImageProps): JSX.Element {
  return (
    <>
      {link ? (
        <LinkStyles href={link} target="_blank" rel="noopener noreferrer">
          <img
            src={image}
            alt={alt}
            style={{
              width: "250px",
              height: "230px",
              display: "flex",
            }}
          />
        </LinkStyles>
      ) : (
        <img
          src={image}
          alt={alt}
          style={{
            width: "250px",
            height: "auto",
            display: "flex",
          }}
        />
      )}
    </>
  );
}

export default ImageComponent;
