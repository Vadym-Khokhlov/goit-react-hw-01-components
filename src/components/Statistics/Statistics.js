import { StatHeading, StatItem, StatList, Stats } from './Statistics.styled';
import PropTypes from 'prop-types';

export function Statistics({ stats, title }) {
  return (
    <Stats>
      {title && <StatHeading>{title}</StatHeading>}
      <StatList>
        {stats.map(stat => (
          <StatItem key={stat.id}>
            <span className="label">{stat.label}</span>
            <span className="percentage">{stat.percentage}%</span>
          </StatItem>
        ))}
      </StatList>
    </Stats>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
