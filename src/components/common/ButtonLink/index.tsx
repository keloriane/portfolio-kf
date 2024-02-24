import { twMerge } from 'tailwind-merge';

type ButtonProps = {
  text: string;
  icon?: () => React.JSX.Element | null;
  className?: string | null;
  href: string;
};

const ButtonLink: React.FC<ButtonProps> = ({ text, icon, className, href }) => {
  return (
    <a
      href={href}
      className={twMerge('rounded-full bg-[#212121] text-white', className)}
      target="blank"
    >
      <span> {text}</span>
      {icon && icon()} {/* Invoke the icon function if it exists */}
    </a>
  );
};

export default ButtonLink;
