import { twMerge } from 'tailwind-merge';

type ButtonProps = {
  text: string;
  icon?: () => React.JSX.Element | null;
  className?: string | null;
};

const Button: React.FC<ButtonProps> = ({ text, icon, className }) => {
  return (
    <button
      className={twMerge('rounded-full bg-[#212121] text-white', className)}
    >
      <span> {text}</span>
      {icon && icon()} {/* Invoke the icon function if it exists */}
    </button>
  );
};

export default Button;
