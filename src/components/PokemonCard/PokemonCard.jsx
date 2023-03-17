import { StarOutlined } from "@ant-design/icons";
import { Card } from "antd";
import Meta from "antd/es/card/Meta";

export const PokemonCard = ({name, image, types}) => {

  //obtener el tipo de pokemon y concatenar 
  const typesString = types.map(type => type.type.name).join(', ');
  
  return (
    <Card
      title={name}
      cover={<img src={image} alt={name}/>}
      extra={<StarOutlined />}
    >
      <Meta description={typesString} /> 
      
    </Card>
  );
};
