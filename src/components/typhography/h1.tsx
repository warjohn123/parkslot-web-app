interface Props {
  children: React.ReactNode;
  className?: string;
}

const H1: React.FC<Props> = ({ children, className }: Props) => {
  return (
    <h1
      className={`scroll-m-20 text-6xl tracking-tight lg:text-5xl ${className}`}
    >
      {children}
    </h1>
  );
};

export default H1;
