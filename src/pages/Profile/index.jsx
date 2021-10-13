import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import { Button, Header, Footer } from '../../components';
import Context from '../../context/Context';

const Profile = () => {
  const {
    appState: { user: { email } },
  } = useContext(Context);
  const history = useHistory();
  return (
    <>
      <Header title="Perfil" displaySearchBtn={ false } />
      <p data-testid="profile-email">{email}</p>
      <Button
        dataTestId="profile-done-btn"
        onClick={ () => history.push('/receitas-feitas') }
      >
        Receitas Feitas
      </Button>
      <Button
        dataTestId="profile-favorite-btn"
        onClick={ () => history.push('/receitas-favoritas') }
      >
        Receitas Favoritas
      </Button>
      <Button
        dataTestId="profile-logout-btn"
        onClick={ () => {
          localStorage.clear();
          history.push('/');
        } }
      >
        Sair
      </Button>
      <Footer />
    </>
  );
};

export default Profile;
