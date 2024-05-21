import { Theme } from "config";
import React from "react";
import styled from "styled-components";

type ImageProps = {
  image: string;
  alt?: string;
};

const Image = styled.img(()=> {
    return {
      width: "100%",
      height: "auto",
      display: "flex",
      borderRadius: Theme.Dark.spacing(3),
      marginBottom: Theme.Dark.spacing(1),
    }
  })

function ImageComponent({ image, alt }: ImageProps): JSX.Element {
  return (
    <div>
        <Image src={image} alt={alt} />
    </div>
  );
}

export default ImageComponent;
