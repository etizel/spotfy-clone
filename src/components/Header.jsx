import logoSpotfy from '../assets/logo/spotify-logo.png';

const Header = () => {
  return (
    <div>
      <img src={logoSpotfy} alt="Logo do Spotify" />
      <a href="/">
        <h1>Spotfy</h1>
      </a>
    </div>
  );
};

export default Header;
