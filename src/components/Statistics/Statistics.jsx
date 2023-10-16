import PropTypes from "prop-types";
import data from '../Statistics/data.json'; // Импорт данных из JSON-файла
import css from 'components/Statistics/Statistics.module.css';

const Statistics = ({ variant, title = false, stats: { id, label, percentage } }) => {
  return (
    <section className={css.statistics}>
      {/* Если title существует и не является ложным значением (например, если title не равен null, undefined, false, 0, или ''), то компонент <h2> с классом title будет отрендерен с содержимым title. */}
      {title && <h2 className={css.title}>{title}</h2>}

      <ul className={css.statList}>
        {data.map((el, index) => (
          <li className={css.item} key={el.id} style={{ backgroundColor: getBgColor(el.label, index) }}>
            {/* Определение цвета фона элемента на основе label */}
            <span className={css.label}>{el.label}</span> {/* Вывод значения "label" элемента */}
            <span className={css.percentage}>{el.percentage} %</span> {/* Вывод значения "percentage" элемента */}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Statistics;

// Функция getBgColor определяет цвет фона элемента на основе label и индекса элемента
const getBgColor = (label, index) => {
  switch (label) {
    case ".docx":
      return "blue"; // Синий цвет для .docx
    case ".pdf":
      return "green"; // Зеленый цвет для .pdf
    case ".mp3":
      return "red"; // Красный цвет для .mp3
    case ".psd":
      return "orange"; // Оранжевый цвет для .psd
    default:
      return index % 2 === 0 ? "white" : "gray"; // Поочередно белый и серый фон
  }
};

Statistics.propTypes = {
  title: PropTypes.string,
  // Массив объектов "статистика" (обязательный массив)
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string, // Свойство "label" - строка
      percentage: PropTypes.number, // Свойство "percentage" - число
    })
  ).isRequired,
};



//===============================================================
// !Если просто рандомный цвет фона для каждого элемента li
//  В этой функции вы создаете случайный шестнадцатеричный цвет, который будет использоваться как цвет фона для элемента li.
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// const Statistics = ({ title=false, stats: { id, label, percentage } }) => { 
//   return (
//     <section className={css.statistics}>

//       {/* Если title существует и не является ложным значением (например, если title не равен null, undefined, false, 0, или ''), то компонент <h2> с классом title будет отрендерен с содержимым title. */}
//       {title && <h2 className={css.title}>{title}</h2> } 

//       <ul className={css.statList}>
        
//         {data.map(el => (

//       !    <li className={css.item} key={el.id} style={{ backgroundColor: getRandomHexColor() }}> 
//             <span className={css.label}>{ el.label } </span>
//             <span className={css.percentage}>{el.percentage} % </span>
//           </li>
//         ))
//         }
        

//   </ul>
// </section>
//   )
// };