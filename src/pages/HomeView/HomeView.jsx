import { Link, Outlet } from 'react-router-dom';
import HomeImg from '../../images/home-img.png';
import { ImgBox, Text, Title } from './HomeView.styled';

export default function HomeView() {
  return (
    <div>
      <Outlet />
      <Title>Phonebook</Title>
      <Text>
        Save your contacts <Link to={'/contacts'}>here</Link>
      </Text>
      <ImgBox>
        <img src={HomeImg} alt="phonebook" width={300} />
      </ImgBox>
    </div>
  );
}
