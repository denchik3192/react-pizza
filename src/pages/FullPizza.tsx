import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

interface Ipizza {
  imageUrl: string;
  title: string;
  price: number;
}

const FullPizza: React.FC = () => {
  const { id } = useParams();
  const [pizza, setPizza] = useState<Ipizza>();
  const navigate = useNavigate();

  useEffect(() => {
    async function getData() {
      try {
        const { data } = await axios.get(`https://6415ca5bc42f59a203a72f6d.mockapi.io/items/${id}`);
        setPizza(data);
      } catch (error) {
        alert(error);
        navigate('/');
      }
    }
    getData();
  }, []);

  if (!pizza) {
    return <div>Загрузка...</div>;
  }

  return (
    <div className="contaner">
      <h2>{pizza.title}</h2>
      <img src={pizza.imageUrl} alt="pizzaImage" />
      <p>{pizza.price}</p>
      <div>{}</div>
      <Link to={'/'} className="button button--outline button--add go-back-btn">
        <svg
          width="8"
          height="14"
          viewBox="0 0 8 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M7 13L1 6.93015L6.86175 1"
            stroke="#D3D3D3"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>

        <span>Вернуться назад</span>
      </Link>
    </div>
  );
};

export default FullPizza;
