type Props = {
  children: React.ReactNode;
};

const AuthLayout = ({ children }: Props) => {
  return (
    <div className="flex size-full items-center justify-center">{children}</div>
  );
};

export default AuthLayout;
