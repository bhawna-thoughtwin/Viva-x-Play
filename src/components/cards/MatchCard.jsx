const MatchCard = ({ league, team1, team2, score1, score2, odds, isLive = true }) => {
  return (
    /* Card: width:301, height:202, border-radius:12px */
    <div style={{
      backgroundColor: '#f5f5f7',
      borderRadius: '12px',
      width: '301px',
      minWidth: '301px',
      height: '202px',
      display: 'flex',
      flexDirection: 'column',
      cursor: 'pointer',
      boxSizing: 'border-box',
      flexShrink: 0,
      padding: '16px 24px',
      gap: '0px',
      position: 'relative',
    }}>

      {/* League row — top:16px, left:24px, width:147, height:27, gap:16px */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '27px',
        marginBottom: '16px',
      }}>
        <span style={{ fontSize: '13px', fontWeight: '500', color: '#555' }}>{league}</span>
        {isLive && (
          <span style={{
            display: 'flex', alignItems: 'center', gap: '4px',
            backgroundColor: '#ff6a00', color: 'white',
            fontSize: '11px', fontWeight: '700',
            padding: '3px 10px', borderRadius: '999px',
          }}>
            <span style={{ width: '7px', height: '7px', borderRadius: '50%', backgroundColor: '#ff2d2d', display: 'inline-block' }} />
            LIVE
          </span>
        )}
      </div>

      {/* Teams row — top:59px, left:24px, width:253, height:27 */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', marginBottom: '16px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '27px' }}>
          <span style={{ fontSize: '14px', fontWeight: '600', color: '#222' }}>{team1}</span>
          <span style={{ fontSize: '15px', fontWeight: '700', color: '#3b6fd4' }}>{score1}</span>
        </div>

        {/* Second team row — top:94px, left:24px, width:84, height:27 */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '27px' }}>
          <span style={{ fontSize: '14px', fontWeight: '600', color: '#222' }}>{team2}</span>
          <span style={{ fontSize: '15px', fontWeight: '700', color: '#3b6fd4' }}>{score2}</span>
        </div>
      </div>

      {/* Divider */}
      <div style={{ height: '1px', backgroundColor: '#e0e0e0', marginLeft: '-24px', marginRight: '-24px', marginBottom: '12px' }} />

      {/* Odds row — top:149px, left:24px, width:254, height:37, gap:16px */}
      {/* Each value: width:74, height:37, border-radius:10px, border:1px, padding:8px 16px */}
      <div style={{ display: 'flex', gap: '16px', height: '37px' }}>
        {odds.map((odd, i) => (
          <button
            key={i}
            style={{
              width: '74px',
              height: '37px',
              borderRadius: '10px',
              border: i === odds.length - 1 ? 'none' : '1px solid #e0e0e0',
              padding: '8px 16px',
              backgroundColor: i === odds.length - 1 ? '#7ed321' : '#ffffff',
              color: i === odds.length - 1 ? '#ffffff' : '#222222',
              fontSize: '13px',
              fontWeight: '600',
              cursor: 'pointer',
              boxSizing: 'border-box',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            {odd}
          </button>
        ))}
      </div>

    </div>
  );
};

export default MatchCard;
