import React, { useState } from 'react';

function Categories() {
  const [activeCategoryId, setActiveCategoryId] = useState(0);

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
        className={c.id === activeCategoryId ? 'active' : ''}
        key={c.id}
        onClick={() => setActiveCategoryId(c.id)}>
        {c.name}
      </li>
    );
  });

  return (
    <div className="categories">
      <ul>{categoryList}</ul>
    </div>
  );
}

export default Categories;
