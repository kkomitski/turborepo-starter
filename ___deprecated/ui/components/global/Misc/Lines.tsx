type Props = {
  left?: boolean;
  right?: boolean;
  children?: React.ReactNode;
};

const Lines = ({ left, right, children }: Props) => {
  return (
    <div className="lines-container">
      <div className="relative h-full w-full">
        <div className="lines">
          <div className={`${left ? "left" : "hidden"}`}></div>
          <div className={`${right ? "right" : "hidden"}`}></div>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Lines;
