import React from "react";
import { CircularProgress } from "@mui/material";
import styled from "styled-components";

const StyledCircularProgress = styled(CircularProgress)<{
    $customColor?: string;
    $position?: React.CSSProperties["position"];
}>(({ theme, $customColor, $position }) => {
    const { palette: colors } = theme;
    return {
        "&&.MuiCircularProgress-root": {
            position: $position,
            color: $customColor ? $customColor : colors.text.primary,
            transition: ".5s",
        },
    };
});

interface LoaderProps {
    size?: number;
    color?: string;
    loading: boolean;
    isMobile?: boolean;
    props?: React.ComponentProps<typeof CircularProgress>;
}

function Loader({
    WrappedComponent,
}: {
    WrappedComponent: React.ComponentType<React.JSX.Element | any>;
}) {
    return function HOC({
        size = 40,
        color,
        loading,
        isMobile,
        ...props
    }: LoaderProps) {
        return (
            <>
                {isMobile &&
                    (loading ? (
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "center",
                                alignItems: "center",
                                width: "100%",
                                height: "10vh",
                            }}
                        >
                            <StyledCircularProgress
                                size={size}
                                $customColor={color}
                                $position="absolute"
                            />
                        </div>
                    ) : (
                        <WrappedComponent {...props} />
                    ))}
                {!isMobile &&
                    (loading ? (
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "center",
                                alignItems: "center",
                                width: "100%",
                                height: "10vh",
                            }}
                        >
                            <StyledCircularProgress size={size} $customColor={color} />
                        </div>
                    ) : (
                        <WrappedComponent {...props} />
                    ))}
            </>
        );
    };
}

export default Loader;
