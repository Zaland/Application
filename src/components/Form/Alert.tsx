import {
  styled,
  Alert as MuiAlert,
  AlertProps as MuiAlertProps,
} from "@mui/material";

import SuccessIcon from "../../assets/icons/success-icon.svg";
import ErrorIcon from "../../assets/icons/error-icon.svg";

type AlertProps = MuiAlertProps & {
  message?: string;
  backgroundColor?: string;
};

const CustomAlert = styled(MuiAlert, {
  shouldForwardProp: (prop) => prop !== "backgroundColor",
})<AlertProps>(({ backgroundColor }) => ({
  position: "absolute",
  width: 426,
  padding: "18px 28px",
  zIndex: 2,
  right: "3%",
  top: "16%",
  color: "#333",
  backgroundColor,

  "& .MuiAlert-icon": {
    color: "#333",
  },
  "& .MuiAlert-message": {
    paddingTop: "11px",
  },
}));

export const Alert = ({ children, severity, ...theRest }: AlertProps) => {
  let backgroundColor;

  if (severity === "success") {
    backgroundColor = "#CDFADC";
  } else if (severity === "error") {
    backgroundColor = "#FFC0C0";
  }

  return (
    <CustomAlert
      backgroundColor={backgroundColor}
      icon={
        <img
          src={severity === "success" ? SuccessIcon : ErrorIcon}
          alt="Alert icon"
        />
      }
      {...theRest}
    >
      {children}
    </CustomAlert>
  );
};
