const MenuItem = ({item}) => {
    const {name, recipe, image, price} = item;
    return (

        <div className="flex space-x-2">
            <img className="w-[100px]" style={{borderRadius: '0 200px 200px 200px'}} src={image} alt="" />
            <div>
                <h4 className="uppercase">{name}-------</h4>
                <p>{recipe}</p>
            </div>
            <div>
                <h6 className="text-amber-500">${price}</h6>
            </div>
        </div>
    );
};

export default MenuItem;