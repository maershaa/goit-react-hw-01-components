import PropTypes from "prop-types";
import data from '../Statistics/data.json';
import css from 'components/Statistics/Statistics.module.css'

const Statistics = ({ title=false, stats: { id, label, percentage } }) => { 
  return (
    <section className={css.statistics}>

      {/* Если title существует и не является ложным значением (например, если title не равен null, undefined, false, 0, или ''), то компонент <h2> с классом title будет отрендерен с содержимым title. */}
      {title && <h2 className={css.title}>{title}</h2> } 

      <ul className={css.statList}>
        
        {data.map(el => (

          <li className={css.item} key={el.id} style={{ backgroundColor: getRandomHexColor() }}> 
            <span className={css.label}>{ el.label } </span>
            <span className={css.percentage}>{el.percentage} % </span>
          </li>
        ))
        }
        

  </ul>
</section>
  )
};

export default Statistics;

//  В этой функции вы создаете случайный шестнадцатеричный цвет, который будет использоваться как цвет фона для элемента li.
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


Statistics.propTypes = {
  title: PropTypes.string,

  // Массив объектов "статистика" (обязательный массив)
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ).isRequired,
};


