import React from "react";
import styled from "styled-components";
import { Input } from "@mui/material";
import {FontFamily} from "components";
import { Theme } from "config";
import { Control, Controller, FieldValues, FormProvider, useController, useForm, useFormContext } from "react-hook-form";

const StyledIput = styled(Input)(() => {
    return {
        "&&.MuiInput-root": {
           ...FontFamily,
            padding: Theme.Dark.spacing(1, 1),
            // alignItems: $minHeight && "flex-start",
            // paddingTop: $minHeight && Spacing(2.5),
            // marginTop: Spacing(1),
            // multiline: true,
            // minHeight: $minHeight && Spacing(10),
            // textOverflow: "ellipsis",
            color: Theme.Dark.palette.secondary.contrastText,
            background: "white",
            // borderBottom: "0px",
            // borderRadius: 12,
            // "& .MuiInputBase-input": {
            //   padding: 0,
            //   "&::placeholder": {
            //     opacity: $darkColor ? 1 : 0.5,
            //   },
            // },
            // ...$inputStyle,
          },
    }
})

interface InputProps {
    //id?: string;
    //infoLabel?: string;
    //label?: string;
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
    name: string;
    control: Control<FieldValues>;
    //startAdornment?: any;
    //autoComplete?: string;
    //darkColor?: boolean;
    //InputTargetValue?: any;
  }


function InputComponent({name, control, ...inputProps}:InputProps){

  
    return (
   
        <Controller
        name={name}
        control={control}
        defaultValue=""
        render={({ field }) => <StyledIput {...field} {...inputProps} />}/>

    )

}

export default InputComponent;