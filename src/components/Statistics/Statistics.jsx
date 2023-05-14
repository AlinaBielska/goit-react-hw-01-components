import PropTypes from "prop-types";

const Statistics = ({ title, stats }) => {
return (
    <section class="statistics">
        {title && <h2 class="title">{title}</h2>}

        <ul class="stat-list">
            {stats.map(el => {
                return (
                    <li class="item" key={el.id}>
                        <span class="label">{el.label}</span>
                        <span class="percentage">{el.percentage}%</span>
                    </li>
                );
            })}
        </ul>
    </section>
    )
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.array,
}

export default Statistics;