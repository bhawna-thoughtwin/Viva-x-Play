import bookOfTimeImg from '../../assets/images/bookoftime.png';
import juicyFruitImg from '../../assets/images/juicyfruit.png';
import sugarRushImg from '../../assets/images/sugarrush.png';
import pinkoImg from '../../assets/images/pinko.png';

const mockRows = [
  { game: "Book Of Time", user: "abc0215", time: "05:30pm", betAmount: "5.00", multiplier: "2.34x", payout: "11.70" },
  { game: "Pinko", user: "abcd20215", time: "05:30pm", betAmount: "5.00", multiplier: "1.05x", payout: "5.25" },
  { game: "Juicy Fruits Multihold", user: "abch215", time: "05:30pm", betAmount: "5.00", multiplier: "7.80x", payout: "39.00" },
  { game: "Sugar Rush 1000", user: "ahc20215", time: "05:30pm", betAmount: "4.00", multiplier: "3.12x", payout: "15.60" },
  { game: "Pinko", user: "kjd20215", time: "05:30pm", betAmount: "5.00", multiplier: "1.50x", payout: "7.50" },
  { game: "Book Of Time", user: "pkrd0215", time: "05:30pm", betAmount: "5.00", multiplier: "4.40x", payout: "62.00" },
  { game: "Sugar Rush 1000", user: "norem20215", time: "05:30pm", betAmount: "5.00", multiplier: "0.00x", payout: "0.00" },
  { game: "Juicy Fruits Multihold", user: "kesd20215", time: "05:30pm", betAmount: "5.00", multiplier: "4.67x", payout: "23.35" },
  { game: "Book Of Time", user: "lkus20215", time: "05:30pm", betAmount: "5.00", multiplier: "1.20x", payout: "6.00" },
  { game: "Juicy Fruits Multihold", user: "forem20215", time: "05:30pm", betAmount: "5.00", multiplier: "3.00x", payout: "45.00" },
  { game: "Book Of Time", user: "ashe20215", time: "05:30pm", betAmount: "5.00", multiplier: "2.75x", payout: "13.75" },
  { game: "Juicy Fruits Multihold", user: "shw20215", time: "05:30pm", betAmount: "5.00", multiplier: "0.00x", payout: "0.00" },
  { game: "Pinko", user: "asje20215", time: "05:30pm", betAmount: "5.00", multiplier: "2.50x", payout: "27.50" },
];

const getImage = (game) => {
  if (game.startsWith('Book Of Time')) return bookOfTimeImg;
  if (game.startsWith('Juicy Fruits')) return juicyFruitImg;
  if (game.startsWith('Sugar Rush')) return sugarRushImg;
  return pinkoImg;
};


const LatestBet = () => {
  return (
    <section className="mt-2 md:mt-2 bg-white rounded-xl p-4 md:p-5 shadow-[0_4px_14px_rgba(0,0,0,0.04)] w-full box-border">

      {/* Tabs */}
      <div className="w-full md:w-auto inline-flex border border-[#FFFFFF] overflow-hidden mb-4 rounded-sm md:rounded-md">
        <button className="w-1/2 md:w-auto px-4 md:px-5 py-2 text-[12px] md:text-[13px] border-none bg-[#1F2937] text-[#FFFFFF] font-semibold cursor-pointer">
          Live Bet
        </button>
        <button className="w-1/2 md:w-auto px-4 md:px-5 py-2 text-[12px] md:text-[13px] border-none bg-transparent text-[#1F2937] cursor-pointer">
          High Rollers
        </button>
      </div>


      {/* ── DESKTOP TABLE (md and up) ── */}
      <div className="hidden md:block rounded-xl overflow-hidden border border-[#e6e8ec]">

        {/* Header */}
        <div
          className="grid bg-[#f4f6f9] px-4 py-3 text-[12px] font-semibold text-[#6b7280]"
          style={{ gridTemplateColumns: '2.5fr 1.2fr 1fr 1.2fr 1.2fr 1.2fr' }}
        >
          <span>Game</span>
          <span>User</span>
          <span>Time</span>
          <span>Bet Amount</span>
          <span>Multiplier</span>
          <span>Payout</span>
        </div>

        {/* Data Rows */}
        <div className="max-h-[350px] overflow-y-auto">
          {mockRows.map((row, i) => (
            <div
              key={i}
              className="grid px-4 py-3 text-[13px] items-center"
              style={{
                gridTemplateColumns: '2.5fr 1.2fr 1fr 1.2fr 1.2fr 1.2fr',
                backgroundColor: i % 2 === 0 ? '#f9fafc' : '#ffffff',
              }}
            >
              <span className="flex items-center gap-2 text-[#333]">
                <img src={getImage(row.game)} alt={row.game} className="w-7 h-7 rounded object-cover shrink-0" />
                <span className="truncate">{row.game}</span>
              </span>
              <span className="text-[#333]">{row.user}</span>
              <span className="text-[#333]">{row.time}</span>
              <span className="text-[#333]">$ {row.betAmount}</span>
              <span className="text-[#00b15a] font-semibold">~ {row.multiplier}</span>
              <span className="text-[#333]">
                $ {(Math.random() * 100).toFixed(2)}
              </span>

            </div>
          ))}
        </div>
      </div>

      {/* ── MOBILE CARDS (below md) ── */}
      <div className="md:hidden rounded-xl overflow-hidden border border-[#e6e8ec]">

        {/* Mobile column header — Game | Payout */}
        <div className="flex justify-between bg-[#f4f6f9] px-3 py-2.5 text-[11px] font-semibold text-[#6b7280]">
          <span>Game</span>
          <span>Payout</span>
        </div>

        {/* Mobile rows */}
        <div className="max-h-[400px] overflow-y-auto divide-y divide-[#f0f0f0]">
          {mockRows.map((row, i) => (
            <div
              key={i}
              className="flex items-center justify-between px-3 py-3"
              style={{ backgroundColor: i % 2 === 0 ? '#f9fafc' : '#ffffff' }}
            >
              {/* Game: image + name */}
              <span className="flex items-center gap-2 text-[#333] text-[12px] min-w-0 flex-1 mr-3">
                <img src={getImage(row.game)} alt={row.game} className="w-7 h-7 rounded object-cover shrink-0" />
                <span className="truncate">{row.game}</span>
              </span>

              {/* Payout */}
              <span className="text-[#333] text-[12px] font-medium shrink-0">
                $ {(Math.random() * 100).toFixed(2)}
              </span>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default LatestBet;
