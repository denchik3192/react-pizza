import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function FullPizza() {
  const { id } = useParams();
  const [pizza, setPizza] = useState({});
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
    <div>Загрузка...</div>;
  }

  return (
    <div className="contaner">
      <h2>{pizza.title}</h2>
      <img src={pizza.imageUrl} alt="" />
      <p>{pizza.price}</p>
      <div>{}</div>
    </div>
  );
}

export default FullPizza;
