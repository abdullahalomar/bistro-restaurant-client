import { useContext } from "react";
import { AuthContext } from '../../providers/AuthProvider';
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart";

const FoodCard = ({ item }) => {
  const { name, recipe, image, price, _id } = item;
  const {user} = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [, refetch] = useCart();

  const handleAddToCart = item => {
      console.log(item);
      if (user && user.email) {
        const cartItem = {menuItemId: _id, name, image, price, email: user.email}
        fetch('http://localhost:5000/carts', {
              method: 'POST',
              headers:{
                'content-type': 'application/json'
              },
              body: JSON.stringify(cartItem)
        })
        .then(res => res.json())
        .then(data => {
          if (data.insertedId) {
           refetch();
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Food added on the cart.',
              showConfirmButton: false,
              timer: 1500
            })
            refetch()
          }
        })
      }
      else{
        Swal.fire({
          title: 'Please Login to order the food',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Login Now'
        }).then((result) => {
          if (result.isConfirmed) {
            navigate('/login', {state: {from: location}});
          }
        })
      }
  }
  return (
    <div className="mt-6">
      <div className="card w-84 bg-base-100 shadow-xl">
        <figure>
          <img
            src={image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {name}
            <div className="badge badge-secondary">${price}</div>
          </h2>
          <p>{recipe}</p>
          <div className="card-actions justify-end">
            <button onClick={() => handleAddToCart(item)} className="btn btn-outline border-0 border-b-4 bg-slate-100 btn-warning">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
