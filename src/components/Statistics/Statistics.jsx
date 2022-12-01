import { StatHeading, StatItem, StatList, Stats } from './Statistics.styled';

export function Statistics({ stats }) {
  return (
    <Stats>
      <StatHeading>Upload stats</StatHeading>
      <StatList>
        {stats.map(stat => (
          <StatItem key={stat.id}>
            <span class="label">{stat.label}</span>
            <span class="percentage">{stat.percentage}%</span>
          </StatItem>
        ))}
      </StatList>
    </Stats>
  );
}

// Profile.propTypes = {
//     username: PropTypes.string.isRequired,
//     tag: PropTypes.string.isRequired,
//     location: PropTypes.number.isRequired,
//   };
