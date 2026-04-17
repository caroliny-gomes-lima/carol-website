import React from "react";
interface ComponentState {
    loading: boolean;
    disabled: boolean;
    required: boolean;
}

function useHandleClick(
    TYPE: "submit" | "button" | "reset",
    onClick?: (data: any) => void,
    reset?: () => void,
) {
    return React.useCallback(
        (event: React.MouseEvent<HTMLButtonElement>) => {
            if (TYPE === "reset") {
                reset?.();
            } else if (TYPE === "submit" && onClick) {
                onClick(event);
            } else if (onClick) {
                onClick(event);
            }
        },
        [TYPE, reset, onClick],
    );
}

function useFormButton(
    isLoading: boolean,
    isDisabled: boolean,
    InputRequired: boolean,
) {
    const isMounted = React.useRef(true);
    const [componentState, setComponentState] = React.useState<ComponentState>({
        loading: isLoading,
        disabled: isDisabled,
        required: InputRequired,
    });

    React.useEffect(() => {
        isMounted.current = true;
        setComponentState((prevState) => {
            let newState = { ...prevState };
            if (isMounted.current) {
                switch (true) {
                    case isLoading:
                        newState.loading = true;
                        break;
                    case isDisabled:
                        newState.disabled = true;
                        break;
                    case InputRequired:
                        newState.required = true;
                        break;
                    default:
                        newState = { loading: false, disabled: false, required: false };
                }
            }
            return newState;
        });
        return () => {
            isMounted.current = false;
        };
    }, [isLoading, isDisabled, InputRequired]);

    return componentState;
}
export { useHandleClick, useFormButton };
