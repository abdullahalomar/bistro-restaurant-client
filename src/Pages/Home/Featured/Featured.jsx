import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg';
import '../Featured/Featured.css'

const Featured = () => {
    return (
        <section className="featured-item text-white bg-fixed bg-slate-500 bg-opacity-60 pt-6">
            <div className="max-w-screen-xl mx-28 mb-14">
            <SectionTitle subHeading='Check it out' heading='FROM OUR MENU'>

            </SectionTitle>
            <div className="md:flex justify-center items-center pb-20 pt-12 px-36">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>March 20, 2023</p>
                    <p className="uppercase">WHERE CAN I GET SOME?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                    <button className="btn btn-outline border-0 border-b-4 btn-primary uppercase mt-5">Read More</button>
                </div>
            </div>
        </div>
        </section>
    );
};

export default Featured;