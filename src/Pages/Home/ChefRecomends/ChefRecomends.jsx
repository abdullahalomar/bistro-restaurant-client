import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import salad from '../../../assets/menu/salad-bg.jpg';

const ChefRecomends = () => {
 
  return (
    <section className="max-w-screen-xl mx-28 mb-14">
      <SectionTitle
        subHeading="Should Try"
        heading="Chef Recommends"
      ></SectionTitle>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="card w-65 bg-slate-100 shadow-xl">
          <figure className="">
            <img
              src={salad}
              alt="salad"
              className=""
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Caeser Salad</h2>
            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
            <div className="card-actions">
              <button className="btn btn-outline border-0 border-b-4 btn-warning uppercase">add to cart</button>
            </div>
          </div>
        </div>

        <div className="card w-65 bg-slate-100 shadow-xl">
          <figure className="">
            <img
              src={salad}
              alt="salad"
              className=""
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Caeser Salad</h2>
            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
            <div className="card-actions">
              <button className="btn btn-outline border-0 border-b-4 btn-warning hover:btn-neutral uppercase">add to cart</button>
            </div>
          </div>
        </div>

        <div className="card w-65 bg-slate-100 shadow-xl">
          <figure className="">
            <img
              src={salad}
              alt="salad"
              className=""
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Caeser Salad</h2>
            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
            <div className="card-actions">
              <button className="btn btn-outline border-0 border-b-4 btn-warning uppercase">add to cart</button>
            </div>
          </div>
        </div>


     
      </div>
    </section>
  );
};

export default ChefRecomends;
