import React, { useEffect } from 'react';
import Banner from '../Organisms/Banner';
import CardMember from '../Molecules/CardMember';
import { connect } from 'react-redux';
import store from '../../Redux/store';
import { getAllTeam } from '../../Redux/actionsCreator';

const Team = ({ team }) => {
  useEffect(() => {
    store.dispatch(getAllTeam());
  }, []);
  return (
    <>
      <Banner
        color='text-color'
        title='Somos 100% transperentes'
        subtitle='Estamos convencidos que cuanto más nos conozcan formaremos un fuerte lazo de amistad y confianza. Estamos 100% dispuestos a apoyarte en tu crecimiento profesional y por ello nos mostramos ante tí.  '
        image={{
          src:
            'https://images.pexels.com/photos/1367271/pexels-photo-1367271.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
          alt: 'Seminario'
        }}
      />
      {team && (
        <div className='ed-grid m-grid-3 lg-grid-4'>
          {team.map(t => (
            <CardMember
              title={t.nombre}
              image={t.url}
              subtitle={t.subtitulo}
              twitter={t.twitter}
              linkedIn={t.linkedIn}
              email={t.email}
            />
          ))}
        </div>
      )}
    </>
  );
};

const mapStateToProps = state => ({
  team: state.teamReducer.team
});

export default connect(
  mapStateToProps,
  {}
)(Team);
