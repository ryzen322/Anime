import { FC, HtmlHTMLAttributes } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "../utils/utils";

const buttonVariants = cva(
  "rounded-sm font-bold flex item-center gap-2 outline-none transition-all duration-200",
  {
    variants: {
      variant: {
        default: "bg-white text-black hover:bg-white/75",
        secondaryColor: "bg-[#7E8183] text-white hover:bg-[#7E8183]/75",
        thirdColor: "bg-white/70  text-black",
      },
      size: {
        lg: "text-lg phoneX:text-2xl xl:text-4xl",
        default:
          "px-[1.5rem] phoneX:text-lg h-[2rem] xl:h-[2.75rem] xl:text-2xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

interface ButtonProps
  extends HtmlHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: React.ReactNode;
}

const Button: FC<ButtonProps> = ({
  children,
  className,
  size,
  variant,
  ...props
}) => {
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {children}
    </button>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export { Button, buttonVariants };
