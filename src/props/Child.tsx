interface ChildProps {
  color: string;
  onClick: () => void;
}

// bud muzeme destrukturizovat
export const Child = ({ color, onClick }: ChildProps) => {
  return (
    <div>
      {color}
      <button onClick={onClick}>Click me</button>
    </div>
  );
};

// nebo to zapiseme takhle
export const ChildAsFC: React.FC<ChildProps> = ({color,  onClick,children,}) => {

  return (
    <div>
      {color}
      {children}
      <button onClick={onClick}>Click me</button>
    </div>
  );
};
