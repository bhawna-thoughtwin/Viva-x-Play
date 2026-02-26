import { useNavigate, useLocation } from 'react-router-dom';
import { providerIcon } from '../assets/icons';
import providerimage1 from '../assets/images/providerimage1.svg';
import providerimg2 from '../assets/images/providerimg2.svg';
import providerimg3 from '../assets/images/providerimg3.svg';

const providers = [
  { id: 1, image: providerimage1, name: 'Pragmatic Play',      fullCard: true },
  { id: 2, image: providerimg2,    name: 'Skywind Group',       fullCard: true },
  { id: 3, image: providerimg3,    name: 'Creedroomz',          fullCard: true },
];

const ProvidersPage = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const isLive = pathname.startsWith('/live-casino');
  const lobbyLabel = isLive ? 'Live Casino Lobby' : 'Casino Lobby';
  const lobbyPath  = isLive ? '/live-casino' : '/casino';

  return (
    <div className="w-full min-h-screen bg-[#ECECEC]">
      <div className="flex flex-col gap-4 md:gap-6 md:p-6">

        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-[13px] text-[#6b7280] pt-4 md:pt-0">
          <button
            onClick={() => navigate('/')}
            className="bg-transparent border-none cursor-pointer p-0 hover:text-[#1CD4FF] transition-colors font-medium"
          >
            Home
          </button>
          <span className="text-[#ccc]">›</span>
          <button
            onClick={() => navigate(lobbyPath)}
            className="bg-transparent border-none cursor-pointer p-0 hover:text-[#1CD4FF] transition-colors font-medium"
          >
            {lobbyLabel}
          </button>
          <span className="text-[#ccc]">›</span>
          <span className="text-[#0D0C22] font-semibold">Providers</span>
        </nav>

        {/* Card */}
        <div className="bg-white rounded-xl p-5 md:p-8 shadow-[0_4px_14px_rgba(0,0,0,0.04)]">

          {/* Header */}
          <div className="flex items-center gap-2 mb-6">
            <img src={providerIcon} alt="providers" className="w-[20px] h-[20px] object-contain" />
            <h1 className="text-[22px] font-bold text-[#0D0C22] m-0">Providers</h1>
            <span className="ml-auto text-[13px] text-[#6b7280]">{providers.length} providers</span>
          </div>

          {/* Grid */}
          <div className="grid gap-4"
            style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))' }}
          >
            {providers.map((provider) =>
              provider.fullCard ? (
                <div
                  key={provider.id}
                  className="h-[93px] rounded-lg overflow-hidden cursor-pointer hover:scale-[1.02] transition-transform"
                >
                  <img
                    src={provider.image}
                    alt={provider.name}
                    className="w-full h-full object-contain"
                  />
                </div>
              ) : (
                <div
                  key={provider.id}
                  className="h-[93px] bg-[#F3F4F6] rounded-lg flex items-center justify-center px-4 cursor-pointer hover:bg-[#eaebed] transition-colors"
                >
                  <img
                    src={provider.image}
                    alt={provider.name}
                    className="max-h-[56px] max-w-[180px] object-contain"
                  />
                </div>
              )
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProvidersPage;
