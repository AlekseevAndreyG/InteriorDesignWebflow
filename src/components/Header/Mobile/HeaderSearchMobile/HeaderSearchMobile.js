import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./HeaderSearchStyleMobile.css";

function HeaderSearchMobile() {
  // Создаем состояние isExpanded с помощью хука useState
  const [isExpanded, setExpanded] = useState(false);

  // Обработчик клика по иконке поиска или кнопке "Close"
  const handleToggle = () => {
    // Инвертируем текущее состояние isExpanded при каждом клике
    setExpanded(!isExpanded);
  };

  return (
    <div className="header_search_mobile">
      {/* Отображение иконки поиска, если isExpanded равно false */}
      {!isExpanded && (
        <FaSearch
          className="header_search_icon_mobile"
          onClick={handleToggle}
        />
      )}

      {/* Отображение расширенного поиска (input), если isExpanded равно true */}
      {isExpanded && (
        <input
          type="search"
          placeholder="Search"
          autoFocus
          onBlur={handleToggle}
        />
      )}
    </div>
  );
}

export default HeaderSearchMobile;

/*
Мы используем хук useState для создания состояния isExpanded, которое будет отслеживать, раскрыт ли расширенный поиск в данный момент. По умолчанию isExpanded установлено в false.

Мы объявляем функцию handleToggle, которая будет вызываться при клике по иконке поиска или кнопке "Close". Внутри этой функции мы используем функцию setExpanded для инвертирования текущего состояния isExpanded (т.е. если isExpanded равно false, оно станет true, и наоборот).

В компоненте HeaderSearchMobile мы отображаем иконку поиска, если isExpanded равно false, и расширенный поиск (input), если isExpanded равно true. При клике по иконке поиска вызывается функция handleToggle, что приводит к изменению состояния isExpanded и отображению/скрытию расширенного поиска.
*/
