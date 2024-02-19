import { useContext } from "react";
import CategoryContext from "../../contexts/CategoryContext";
import categories from "../../constants/categories";
import "./CategoryContainer.css";
import DataContext from "../../contexts/DataContext";

const CategoryContainer = () => {
  const { selectedCategory, setSelectedCategory } = useContext(CategoryContext);
  const { setFirstData, setSecondData, setInputErrors } =
    useContext(DataContext);

  const handleSelectCategory = (category) => {
    setFirstData("");
    setSecondData("");
    setInputErrors("");
    setSelectedCategory(category);
  };

  const mappedCategory = categories.map(({ category }, idx) => {
    return (
      <button
        key={idx}
        className="category-button"
        onClick={() => handleSelectCategory(category)}
        style={
          selectedCategory === category
            ? { background: "var(--sea-green)", color: "var(--white)" }
            : {}
        }
      >
        {category}
      </button>
    );
  });

  return <div className="container">{mappedCategory}</div>;
};

export default CategoryContainer;
