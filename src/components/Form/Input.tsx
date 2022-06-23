import { styled, TextField, TextFieldProps } from "@mui/material";

type InputProps = TextFieldProps & {
  marginTop?: string | number;
  marginBottom?: string | number;
};

const CustomInput = styled(TextField)<InputProps>(
  ({ marginTop, marginBottom }) => ({
    marginTop,
    marginBottom,
  })
);

export const Input = ({
  label,
  variant = "outlined",
  fullWidth,
  marginTop = 0,
  marginBottom = 0,
}: InputProps) => (
  <CustomInput
    label={
      <>
        {label} <span style={{ color: "red" }}>*</span>
      </>
    }
    variant={variant}
    marginTop={marginTop}
    marginBottom={marginBottom}
    fullWidth={fullWidth}
  />
);
