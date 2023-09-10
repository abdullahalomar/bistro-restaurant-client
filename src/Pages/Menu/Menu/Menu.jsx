import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from '../../../assets/menu/banner3.jpg'
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";
import dessertImg from '../../../assets/menu/dessert-bg.jpeg';
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'
 

const Menu = () => {
  const [menu] = useMenu();
  const offered = menu.filter(item => item.category === 'offered');
  const dessert = menu.filter(item => item.category === 'dessert');
  const pizza = menu.filter(item=> item.category === 'pizza');
  const salad = menu.filter(item=> item.category === 'salad');
  const soup = menu.filter(item=> item.category === 'soup');
  
  return (
    <div>
      <div>
      <Helmet>
        <title>Restaurant | Menu</title>
      </Helmet>
      <Cover BackgroundImg={menuImg} title='Our Menu'></Cover>
      <SectionTitle subHeading="Don't miss" heading="TODAY'S OFFER"></SectionTitle>

      <div className="max-w-screen-xl mx-28 mb-14">
      <MenuCategory items={offered}></MenuCategory>
      <MenuCategory 
      items={dessert}
      title={"dessert"}
      coverImg={dessertImg}
      ></MenuCategory>

      <MenuCategory
      items={pizza}
      title={"pizza"}
      coverImg={pizzaImg}
      ></MenuCategory>

      <MenuCategory
      items={salad}
      title={"salad"}
      coverImg={saladImg}
      ></MenuCategory>

      <MenuCategory
      items={soup}
      title={"soup"}
      coverImg={soupImg}
      ></MenuCategory>

      </div>

      </div>
    </div>
  );
};

export default Menu;
