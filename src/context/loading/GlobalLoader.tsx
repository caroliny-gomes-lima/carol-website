import styled from "styled-components";
import { useGlobalLoading } from "./LoadingContext";
import { CircularProgress } from "@mui/material";
import { colors } from "config";

export const LoadingOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0); // leve opacidade para a sobreposição
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999; // coloca o overlay acima de outros elementos
`;

function GlobalLoader() {
    const { loading } = useGlobalLoading();
    if (!loading) return null;

    return (
        <LoadingOverlay>
            <CircularProgress size={100} style={{ color: colors.purple }} />
        </LoadingOverlay>
    );
}

export default GlobalLoader;
