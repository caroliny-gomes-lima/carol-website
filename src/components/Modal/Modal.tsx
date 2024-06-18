import React from "react";
import Styles from "./Styles";
import DefaultButton from "components/buttons/DefaultButton";
import { Close } from "@mui/icons-material";
import { Grid } from "@mui/material";

interface ModalProps {
  modalButtonLabel?: string;
  modalText?: string;
  hasConfirmButton?: false;
  hasCancelButton?: false;
  confirmButtonLabel?: string;
  cancelButtonLabel?: string;
  children?: React.ReactNode;
}

function DefaultModal({
  modalButtonLabel,
  modalText,
  hasConfirmButton,
  hasCancelButton,
  cancelButtonLabel,
  confirmButtonLabel,
  children,
}: ModalProps): JSX.Element {
  const [open, setOpen] = React.useState<boolean>(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <DefaultButton
        label={modalButtonLabel}
        type="button"
        onClick={handleOpen}
        fullWidth={false}
        loading={false}
        customButtonColor="white"
        customButtonLabelColor="black"
        customButtonHoverColor="#006dd0"
        customButtonHoverLabelColor="white"
      />
      <Styles.customModal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Styles.Container>
          <Styles.HeaderModal>
            <Styles.closeButton onClick={handleClose}>
              <Close />
            </Styles.closeButton>
            <Styles.ModalTitle>ABRIU O MODAL</Styles.ModalTitle>
          </Styles.HeaderModal>
          <Styles.Content>
            <Styles.TextStyles>{modalText}</Styles.TextStyles>
            {children}
          </Styles.Content>
          {hasConfirmButton || cancelButtonLabel ? (
            <Grid
              container
              spacing={1}
              direction={"row"}
              justifyContent={"flex-end"}
            >
              {hasConfirmButton ? (
                <Grid item xs={11} sm={11} md={10} lg={2}>
                  <DefaultButton
                    type="button"
                    loading={false}
                    label={confirmButtonLabel}
                    onClick={() => null}
                  />
                </Grid>
              ) : null}

              {hasCancelButton ? (
                <Grid item xs={11} sm={11} md={10} lg={3}>
                  <DefaultButton
                    type="button"
                    loading={false}
                    label={cancelButtonLabel}
                    onClick={handleClose}
                  />
                </Grid>
              ) : null}
            </Grid>
          ) : null}
        </Styles.Container>
      </Styles.customModal>
    </>
  );
}

export default DefaultModal;
