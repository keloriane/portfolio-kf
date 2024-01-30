export const Title = ({ title }: { title: string }) => {
    return (
        <h2 className="text-[1.8rem] text-accent underline">{title}</h2>
    );
}




type ResponsiveTitleProps = {
    title: string;
    size: number;
    className?: string;
}
export const ResponsiveTitle:React.FC<ResponsiveTitleProps> = ({ title , size, className }) => {
    const breakpointPrefixes = ['', 'sm:', 'md:', 'lg:', 'xl:', '2xl:'];
const getBreakpoint = (index: number) => {
    return breakpointPrefixes[index];
};
    return (
        <h2 className={className} style={{ fontSize:` calc((${size}vw - 48px) * 0.1695)`}}>{title}</h2>
    );
}