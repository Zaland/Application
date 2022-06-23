import {
  styled,
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
} from "@mui/material";

type ButtonProps = MuiButtonProps & {
  marginLeft?: string | number;
};

const CustomButton = styled(MuiButton)<ButtonProps>(({ marginLeft }) => ({
  width: 145,
  height: 46,
  textTransform: "none",
  fontSize: 16,
  marginLeft,
}));

export const Button = ({
  children,
  variant,
  marginLeft = 0,
  color,
}: ButtonProps) => (
  <CustomButton variant={variant} marginLeft={marginLeft} color={color}>
    {children}
  </CustomButton>
);
