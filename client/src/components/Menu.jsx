import React from 'react';
import styled from 'styled-components';
import YouTube from '../img/logo.png';
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import SportsCricketIcon from '@mui/icons-material/SportsCricket';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import MovieCreationIcon from '@mui/icons-material/MovieCreation';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import SettingsIcon from '@mui/icons-material/Settings';
import FlagIcon from '@mui/icons-material/Flag';
import HelpIcon from '@mui/icons-material/Help';
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Container = styled.div`
  flex: 1;
  background-color: #202020;
  height: 100vh;
  color: white;
  font-size: 14px;
  position: sticky;
  top: 0;
  /* Add padding to the Container */
  padding: 15px;
`;

const Wrapper = styled.div`
  /* Remove padding to eliminate the gap between Container and content */
  padding: 0;
  margin: 0;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: bold;
  margin-bottom: 25px;
`;

const Img = styled.img`
  height: 25px;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  padding: 7.5px 0px;
`;

const Hr = styled.hr`
  margin: 15px 0px;
  border: 0.5px solid #373737;
`;

const Login = styled.div``;

const Button = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  margin-top: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Menu = () => {
  return (
    <>
      {/* Add global styles to remove gap between containers and browser page */}
      <style>{`
        body, html {
          margin: 0;
          padding: 0;
        }
      `}</style>
      <Container>
        <Wrapper>
          <Logo>
            <Img src={YouTube} />
            YouTube
          </Logo>
          <Item>
            <HomeIcon />
            Home
          </Item>
          <Item>
            <ExploreIcon />
            Explore
          </Item>
          <Item>
            <SubscriptionsIcon />
            Subscriptions
          </Item>
          <Hr />
          <Item>
            <VideoLibraryIcon />
            Library
          </Item>
          <Item>
            <HistoryIcon />
            History
          </Item>
          <Hr />
          <Login>
            Sign in to like videos, comment, and subscribe.
            <Button>
              <AccountCircleIcon />
              SIGN IN
            </Button>
          </Login>
          <Hr />
          <Item>
            <LibraryMusicIcon />
            Music
          </Item>
          <Item>
            <SportsCricketIcon />
            Sports
          </Item>
          <Item>
            <SportsEsportsIcon />
            Gaming
          </Item>
          <Item>
            <MovieCreationIcon />
            Movies
          </Item>
          <Item>
            <NewspaperIcon />
            News
          </Item>
          <Item>
            <LiveTvIcon />
            Live
          </Item>
          <Hr />
          <Item>
            <SettingsIcon />
            Settings
          </Item>
          <Item>
            <FlagIcon />
            Report
          </Item>
          <Item>
            <HelpIcon />
            Help
          </Item>
          <Item>
            <SettingsBrightnessIcon />
            Dark Mode
          </Item>
        </Wrapper>
      </Container>
    </>
  );
};

export default Menu;
