import SectionHeader from '../common/SectionHeader';

const trendingMatches = [
  { league: 'Soccer | La Liga 2026', team1: 'FC Barcelona', team2: 'Real Madrid', odds: ['1.85', '3.20', '4.10'] },
  { league: 'NBA | 2026', team1: 'LA Lakers', team2: 'Chicago Bulls', odds: ['2.10', '3.50', '1.75'] },
  { league: 'Tennis | ATP 2026', team1: 'Djokovic', team2: 'Alcaraz', odds: ['1.95', '3.00', '1.90'] },
  { league: 'Soccer | La Liga 2026', team1: 'FC Barcelona', team2: 'Real Madrid', odds: ['1.85', '3.20', '4.10'] },
];

const Trending = () => {
  return (
    <section style={styles.section}>
      <SectionHeader title="Trending" onViewAll={() => {}} />
      <div style={styles.list}>
        {trendingMatches.map((match, i) => (
          <div key={i} style={styles.row}>
            <div style={styles.matchInfo}>
              <span style={styles.league}>{match.league}</span>
              <span style={styles.teams}>{match.team1} vs {match.team2}</span>
            </div>
            <div style={styles.oddsRow}>
              {match.odds.map((odd, j) => (
                <button key={j} style={styles.oddBtn}>{odd}</button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const styles = {
  section: {
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    padding: '20px',
    marginBottom: '16px',
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  row: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '12px 14px',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    border: '1px solid #ebebeb',
  },
  matchInfo: {
    display: 'flex',
    flexDirection: 'column',
    gap: '3px',
  },
  league: {
    fontSize: '12px',
    color: '#888888',
    fontFamily: 'inherit',
  },
  teams: {
    fontSize: '14px',
    color: '#333333',
    fontWeight: '700',
    fontFamily: 'inherit',
  },
  oddsRow: {
    display: 'flex',
    gap: '6px',
  },
  oddBtn: {
    backgroundColor: '#f0f0f0',
    border: '1px solid #e0e0e0',
    color: '#333333',
    padding: '6px 14px',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '13px',
    fontWeight: '590',
    fontFamily: 'inherit',
  },
};

export default Trending;
