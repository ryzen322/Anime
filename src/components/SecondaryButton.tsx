import { cva, VariantProps } from "class-variance-authority";
import { FC, HtmlHTMLAttributes } from "react";
import { cn } from "../utils/utils";

const SecondaryButtonVariants = cva(
  " w-full rounded-md font-semibold transition-all duration-200 ",
  {
    variants: {
      variants: {
        default: " bg-[#26BBFF]  hover:bg-[#61cdff] text-black",
        secondary: " bg-[#333337] hover:bg-[#ffffff59] text-white",
      },
      size: {
        default: " h-[48px]",
        secondary: " h-[32px]",
      },
    },
    defaultVariants: {
      variants: "default",
      size: "default",
    },
  }
);

interface ButtonProps
  extends HtmlHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof SecondaryButtonVariants> {
  children: React.ReactNode;
}

const SecondaryButton: FC<ButtonProps> = ({
  children,
  className,
  variants,
  size,
  ...props
}) => {
  return (
    <button
      className={cn(SecondaryButtonVariants({ className, variants, size }))}
      {...props}
    >
      {children}
    </button>
  );
};

export { SecondaryButton, SecondaryButtonVariants };
