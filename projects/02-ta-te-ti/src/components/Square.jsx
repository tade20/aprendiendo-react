export const Square = ({ children, updateBoard, index, isSelected }) => {
  const selectedStyle = `square ${isSelected ? "is-selected" : ""}`;
  const handleClick = () => {
    updateBoard(index);
  };
  return (
    <div className={selectedStyle} onClick={handleClick}>
      {children}
    </div>
  );
};
