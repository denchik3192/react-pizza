import React, { memo } from 'react';

type CategoriesProps = {
  category: number;
  onChangeCategory: (i: number) => void;
};

const Categories: React.FC<CategoriesProps> = memo(({ category, onChangeCategory }) => {
  const categoryData = [
    { id: 0, name: 'Все' },
    { id: 1, name: 'Мясные' },
    { id: 2, name: 'Вегетарианская' },
    { id: 3, name: 'Гриль' },
    { id: 4, name: 'Острые' },
    { id: 5, name: 'Закрытые' },
  ];

  const categoryList = categoryData.map((c) => {
    return (
      <li
        className={c.id === category ? 'active' : ''}
        key={c.id}
        onClick={() => onChangeCategory(c.id)}>
        {c.name}
      </li>
    );
  });

  return (
    <div className="categories">
      <ul>{categoryList}</ul>
    </div>
  );
});

export default Categories;
