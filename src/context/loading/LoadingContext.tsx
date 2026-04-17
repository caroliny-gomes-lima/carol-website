import React from "react";

type LoadingContextProps = {
    loading: boolean;
    startLoading: () => void;
    stopLoading: () => void;
};

const loadingContext = React.createContext<LoadingContextProps | undefined>(
    undefined,
);

const LoadingProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const [loadingCount, setLoadingCount] = React.useState(0);

    const startLoading = () => {
        setLoadingCount((prev) => prev + 1);
    };

    const stopLoading = () => {
        setLoadingCount((prev) => Math.max(prev - 1, 0));
    };

    return (
        <loadingContext.Provider
            value={{
                loading: loadingCount > 0,
                startLoading,
                stopLoading,
            }}
        >
            {children}
        </loadingContext.Provider>
    );
};

const useGlobalLoading = () => {
    const context = React.useContext(loadingContext);
    if (!context) {
        throw new Error(
            "useGlobalLoading deve ser usado dentro do LoadingProvider",
        );
    }
    return context;
};

export { LoadingProvider, useGlobalLoading }