const Tags = ({ tagsString }) => {
  const tags = tagsString.split(',').filter((tag) => tag.trim() !== '');
  const getTagClass = () => {
    let ranDomNum = Math.floor(Math.random() * 10);
    if (ranDomNum % 3 === 0) {
      return 'inline-block h-5 whitespace-nowrap rounded-[45px] bg-[#00D991A1] px-2.5 text-sm capitalize text-[#F4F5F6]';
    } else if (ranDomNum % 2 === 0) {
      return 'inline-block h-5 whitespace-nowrap rounded-[45px] bg-[#1C92FFB0] px-2.5 text-sm capitalize text-[#F4F5F6]';
    } else {
      return 'inline-block h-5 whitespace-nowrap rounded-[45px] bg-[#FE1A1AB5] px-2.5 text-sm capitalize text-[#F4F5F6]';
    }
  };

  return (
    <ul className="flex justify-center gap-1.5 flex-wrap">
      {tags.map((tag, index) => {
        return (
          <li key={index}>
            <span className={getTagClass()}>{tag}</span>
          </li>
        );
      })}
    </ul>
  );
};
export default Tags;
