import axios from 'axios';

export function fetchItems() {
  axios
    .get(
      `https://6415ca5bc42f59a203a72f6d.mockapi.io/items?page=${currentPage}&limit=4&${
        categoryId > 0 ? `category=${categoryId}` : ''
      }&sortBy=${sort.sortProperty}&order=desc&search=${searchValue}`,
    )
    .then((res) => {
      setItems(res.data);
      setIsLoading(false);
    });
}
