import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

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
    </div>
  );
};

export default FullPizza;
