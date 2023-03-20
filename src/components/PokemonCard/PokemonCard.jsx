import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import { StarButton } from './../StarButton/StarButton';
import { useDispatch } from 'react-redux';
import { setFavorite } from './../../actions/index';

export const PokemonCard = ({name, image, types, id, favorite}) => {

  const dispatch = useDispatch();

  //obtener el tipo de pokemon y concatenar 
  const typesString = types.map(type => type.type.name).join(', ');

  //función para dejarlo como favorito
  const handleOnFavorite = () => {
    dispatch(setFavorite({ pokemonId: id}));
  }
  
  return (
    <Card
      title={name}
      cover={<img src={image} alt={name}/>}
      extra={<StarButton isFavorite={favorite} onClick={ handleOnFavorite}/>}
    >
      <Meta description={typesString} /> 
      
    </Card>
  );
};
