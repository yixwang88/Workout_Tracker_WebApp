import arrow from './arrow-right.svg'
const ArrowRightProperty1Outline = ({
  property1 = "linear",
  className,
  ...props
}) => {
  const variantsClassName = "property-1-" + property1;

  return (
    <div className={"w-6 h-6 relative " + className + " " + variantsClassName}>
      <img
        className="h-[auto] absolute left-0 top-0 overflow-visible"
        src={arrow}
      />
    </div>
  );
};
export default ArrowRightProperty1Outline;