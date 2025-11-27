import { type HTMLMotionProps, motion } from "framer-motion";
import type { ReactNode } from "react";

interface ButtonProps extends HTMLMotionProps<"button"> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
}

export function Button({
  children,
  onClick,
  variant = "primary",
  disabled = false,
  ...props
}: ButtonProps) {
  const getBackgroundColor = () => {
    switch (variant) {
      case "primary":
        return "var(--color-primary)";
      case "secondary":
        return "var(--color-secondary)";
      case "ghost":
        return "transparent";
      default:
        return "var(--color-primary)";
    }
  };

  const getColor = () => {
    switch (variant) {
      case "primary":
        return "#FFFFFF";
      case "secondary":
        return "#FFFFFF";
      case "ghost":
        return "var(--color-text)";
      default:
        return "#FFFFFF";
    }
  };

  return (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      whileTap={{ scale: 0.98 }}
      data-testid={`button-${variant}`}
      style={{
        width: "100%",
        maxWidth: "min(90vw, 343px)",
        minHeight: "50px",
        padding: "clamp(12px, 3vw, 16px) clamp(16px, 4vw, 24px)",
        fontSize: "clamp(15px, 4vw, 16px)",
        fontWeight: 600,
        borderRadius: "var(--radius-lg)",
        border: "none",
        cursor: disabled ? "not-allowed" : "pointer",
        backgroundColor: getBackgroundColor(),
        color: getColor(),
        opacity: disabled ? 0.5 : 1,
        margin: "0 auto",
        display: "block",
      }}
      {...props}
    >
      {children}
    </motion.button>
  );
}
