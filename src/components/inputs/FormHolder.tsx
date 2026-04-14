import { FormProvider, useForm } from "react-hook-form";

interface HOCProps {
    onSubmit: (data: any) => void;
    props?: any;

}

function FormHolder(WrappedComponent: React.ComponentType<any>) {
    return function HOC({ onSubmit, props }: HOCProps) {
        const formMethods = useForm();

        return (
            <FormProvider {...formMethods}>
                <form onSubmit={formMethods.handleSubmit(onSubmit)}
                    style={{ width: "100%" }}>
                    <WrappedComponent {...props} {...formMethods} />
                </form>
            </FormProvider>
        );
    };
}

export default FormHolder;