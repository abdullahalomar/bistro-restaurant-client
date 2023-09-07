import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from '../../../assets/menu/banner3.jpg'


const Menu = () => {
  return (
    <div>
      <div>
      <Helmet>
        <title>Restaurant | Menu</title>
      </Helmet>
      <Cover BackgroundImg={menuImg} title='Our Menu'></Cover>
  
      </div>
    </div>
  );
};

export default Menu;
