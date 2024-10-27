import React from "react";
import Styles from "./Styles";

import { Close } from "@mui/icons-material";
import { Grid } from "@mui/material";
import ButtonComponent from "components/buttons/ButtonComponent";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  modalText?: string;
  hasConfirmButton?: false;
  hasCancelButton?: false;
  confirmButtonLabel?: string;
  cancelButtonLabel?: string;
  children?: React.ReactNode;
}

function ModalCompoent({
  open,
  onClose,
  modalText,
  hasConfirmButton,
  hasCancelButton,
  cancelButtonLabel,
  confirmButtonLabel,
  children,
}: ModalProps): JSX.Element {

  return (
    <>

      <Styles.customModal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Styles.Container>
          <Styles.HeaderModal>
            <Styles.closeButton onClick={onClose}>
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
                  <ButtonComponent
                    type="button"
                    loading={false}
                    label={confirmButtonLabel}
                    onClick={() => null}
                  />
                </Grid>
              ) : null}

              {hasCancelButton ? (
                <Grid item xs={11} sm={11} md={10} lg={3}>
                  <ButtonComponent
                    type="button"
                    loading={false}
                    label={cancelButtonLabel}
                    onClick={onClose}
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

export default ModalCompoent;
