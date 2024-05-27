import React, { useState, useEffect } from 'react';

const UniqueVisitorsCounter = () => {
  const [uniqueVisitors, setUniqueVisitors] = useState(0);

  useEffect(() => {
    // Проверяем, есть ли значение уникальных посетителей в локальном хранилище
    const storedVisitors = localStorage.getItem('uniqueVisitors');
    if (storedVisitors) {
      // Если значение есть, устанавливаем его в состояние
      setUniqueVisitors(parseInt(storedVisitors));
    } else {
      // Если значение отсутствует, устанавливаем начальное значение
      setUniqueVisitors(1);
      // Сохраняем начальное значение в локальное хранилище
      localStorage.setItem('uniqueVisitors', '1');
    }
  }, []);

  const incrementCounter = () => {
    // Увеличиваем значение счетчика на 1
    const newCount = uniqueVisitors + 1;
    // Обновляем состояние счетчика и сохраняем его в локальное хранилище
    setUniqueVisitors(newCount);
    localStorage.setItem('uniqueVisitors', newCount.toString());
  };

  return (
    <div>
      <h2>Уникальные посетители: {uniqueVisitors}</h2>
      <button onClick={incrementCounter}>Посетил страницу</button>
    </div>
  );
};

export default UniqueVisitorsCounter;