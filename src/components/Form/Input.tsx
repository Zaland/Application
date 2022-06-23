import { styled, TextField, TextFieldProps } from "@mui/material";

type InputProps = TextFieldProps & {
  marginTop?: string | number;
  marginBottom?: string | number;
};

const CustomInput = styled(TextField, {
  shouldForwardProp: (prop) => prop !== "marginTop" && prop !== "marginBottom",
})<InputProps>(({ marginTop, marginBottom }) => ({
  marginTop,
  marginBottom,
}));

export const Input = ({
  marginTop = 0,
  marginBottom = 0,
  variant = "outlined",
  label,
  ...theRest
}: InputProps) => (
  <CustomInput
    marginTop={marginTop}
    marginBottom={marginBottom}
    label={
      <>
        {label} <span style={{ color: "red" }}>*</span>
      </>
    }
    variant={variant}
    {...theRest}
  />
);
