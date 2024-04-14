interface TitleProps {
  title?: string;
  className?: string;
}

const Title: React.FC<TitleProps> = ({ title, className }) => {
  return (
    <h2
      className={`${className} uppercase text-[16px] font-semibold ml-0 mr-auto my-0 leading-[155%]`}
    >
      {title}
    </h2>
  );
};

export default Title;
