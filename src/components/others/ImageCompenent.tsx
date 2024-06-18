import { Modal, useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";
import { colors, Theme } from "config";
import React from "react";

type ImageProps = {
  image: string;
  alt?: string;
};

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: colors.purple,
  border: "2px solid #000",
  boxShadow: 24,
  p: 2,
  overflowX: "auto",
};

function ImageComponent({ image, alt }: ImageProps): JSX.Element {
  const isMobile = useMediaQuery(Theme.Dark.breakpoints.down("sm"));
  const [isZoomed, setIsZoomed] = React.useState<boolean>(false);

  return (
    <div>
      {isMobile ? (
        <>
          <div onClick={() => setIsZoomed(true)}>
            <img
              src={image}
              alt={alt}
              style={{
                width: "100%",
                height: "auto",
                display: "flex",
                borderRadius: Theme.Dark.spacing(3),
                marginBottom: Theme.Dark.spacing(1),
              }}
            />
          </div>
          <Modal open={isZoomed} onClose={() => setIsZoomed(false)}>
            <Box sx={style}>
              <img
                src={image}
                alt={alt}
                style={{
                  width: "210%",
                  height: "auto",
                  display: "flex",
                  borderRadius: Theme.Dark.spacing(3),
                  marginBottom: Theme.Dark.spacing(1),
                }}
              />
            </Box>
          </Modal>
        </>
      ) : (
        <img
          src={image}
          alt={alt}
          style={{
            width: "100%",
            height: "auto",
            display: "flex",
            borderRadius: Theme.Dark.spacing(3),
            marginBottom: Theme.Dark.spacing(1),
          }}
        />
      )}
    </div>
  );
}

export default ImageComponent;
