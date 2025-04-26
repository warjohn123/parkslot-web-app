interface Props {
  children: React.ReactNode;
  className?: string;
}

const H2: React.FC<Props> = ({ children, className }: Props) => {
  return (
    <h2
      className={`scroll-m-20 text-2xl tracking-tight lg:text-4xl ${className}`}
    >
      {children}
    </h2>
  );
};

export default H2;
