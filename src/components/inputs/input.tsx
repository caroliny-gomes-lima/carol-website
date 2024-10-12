import { useEffect, useRef } from "react";
import styled from "styled-components";
import { Input } from "@mui/material";
import { FontFamily } from "components";
import { colors, Theme } from "config";
import {


  Controller,


  RegisterOptions,


  useFormContext,
} from "react-hook-form";

const StyledIput = styled(Input)(() => {
  return {
    "&&.MuiInput-root": {
      ...FontFamily.medium14,
      padding: Theme.Dark.spacing(1),
      textOverflow: "ellipsis", //Texto deve ter reticências ("...") se ele não couber no contêiner
      color: Theme.Dark.palette.primary.main,
      background: Theme.Dark.palette.primary.contrastText,
      borderRadius: Theme.Dark.spacing(1),
      "&:before, &:after": {
        borderBottom: "none !important", // Remove as bordas antes e depois do foco
      },
      "&:hover:not(.Mui-disabled):before": {
        borderBottom: "none", // Remove a borda ao passar o mouse
      },
      "& .MuiInputBase-input": {
        padding: 0,
      },
    },
  };
});

const Label = styled.p<{ withError?: boolean }>(({ withError }) => {
  return {
    ...FontFamily.bold12,
    textTransform: "uppercase",
    padding: 0,
    margin: 0,
    color: withError ? colors.red : Theme.Dark.palette.primary.main,
    transition: ".2s",
    pointerEvents: "none",
    alignItems: "center",
    display: "flex",
    overflow: "hidden",
  };
});

// const ErrorMessage = styled(FormControlLabel)({
//   color: "red",
//   minHeight: Theme.Dark.spacing(2.5),
// });

function getErrorClassName(base: string, error: boolean, valid: boolean) {
  const className = base;
  if (error) return `${className} invalid`;
  if (valid) return `${className} valid`;
  return className;
}

// function getHint(error):void{
//   if (error) return error;
// }

interface InputProps {
  id?: string;
  label?: string;
  name: string;
  type?: string;
  rules?: RegisterOptions;
  placeholder?: string;
  defaultValue?: string;
  //infoLabel?: string;
  //disableError?: boolean;
  //hideVisualError?: boolean;
  //type?: string;
  //withHide?: () => void;
  //placeholder?: string;
  //state?: boolean;
  //readOnly?: boolean;
  //maxLength?: number;
  //endButton?: (onChange: (event: any, value: any) => void, value: any) => void;
  //customColor?: string;
  //customLabel?: boolean;
  //BlogQuillTitleLabel?: boolean;
  //multiline?: boolean;
  //name: string;
  //control: Control<FieldValues>;
  //startAdornment?: any;
  //autoComplete?: string;
  //darkColor?: boolean;
  //InputTargetValue?: any;
}

function InputComponent({ label, name, type, rules, defaultValue, placeholder }: InputProps) {
  const { control } = useFormContext();
  const labelRef = useRef<HTMLDivElement | null>(null);

  /*useEffect é um hook que permite executar efeitos colaterais 
  em componentes funcionais. Ele é executado após cada renderização 
  do componente.*/

  /*O segundo argumento "[label]);" é um array de dependências contendo label. 
  O efeito será executado sempre que o valor de label mudar.*/

  /*O segundo argumento "if (label && labelRef.current) { ... }" verifica se 
  label está definido (não é null ou undefined) e se labelRef.current está 
  presente*/

  /*O "labelRef" é uma referência criada com useRef que aponta para um 
  elemento DOM específico.*/

  /*O "const fieldset = labelRef.current.querySelector("fieldset");" signifia 
  Se o elemento fieldset for encontrado, define o padding-left desse elemento 
  usando a função Theme.Dark.spacing(3) + "px"*/

  /*Este trecho de código parece ser utilizado para ajustar visualmente 
 um fieldset dentro de um elemento referenciado, baseado na mudança do label.*/

  /*Uso de Refs: labelRef é uma referência ao elemento DOM que provavelmente 
contém um fieldset.*/

  /*Resumo: Este código utiliza useEffect para ajustar dinamicamente o 
padding-left de um fieldset dentro de um elemento referenciado sempre que 
a prop label mudar.*/
  useEffect(() => {
    if (label && labelRef.current) {
      const fieldset = labelRef.current.querySelector("fieldset");
      if (fieldset) {
        fieldset.style.paddingLeft = Theme.Dark.spacing(3) + "px";
      }
    }
  }, [label]);

  return (
    // <Controller
    // name={name}
    // //control={control}
    // defaultValue=""
    // render={({ field }) => <StyledIput {...field} {...inputProps} />}/>

    // <Controller
    // name={name}
    // //control={control}
    // defaultValue=""
    // render={({ field }) => <StyledIput {...field} {...inputProps} />}/>
    <>
      <Controller
        name={name}
        control={control}
        rules={rules}
        defaultValue={defaultValue || ""}
        render={({ field, fieldState: { error } }) => {
          const className = getErrorClassName("input-field", true, false);
          return (
            <div className={className}>
              {label && (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignContent: "center",
                  }}
                >
                  <Label
                    className={"form-input-label-" + label?.replace(/\s/g, "")}
                  >
                    {label}
                  </Label>
                </div>
              )}
              <StyledIput
                id={name}
                type={type}
                placeholder={placeholder}
                {...field}
              />
              {error && <span className="error-message">Error: {error.message}</span>}
            </div>
          );
        }}
      />
    </>
  );
}

export default InputComponent;
