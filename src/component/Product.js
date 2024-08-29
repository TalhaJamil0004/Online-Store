import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../store/slice';
import { fetchProducts, Statuses } from '../store/productSlice';

export default function Product() {
  const dispatch = useDispatch();
  const { data: products, status } = useSelector(state => state.product);
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  function handleAdd(productValue) {
    dispatch(add(productValue));
    setShowSuccessDialog(true); // Show success dialog
    setTimeout(() => {
      setShowSuccessDialog(false); // Hide dialog after 2 seconds
    }, 800);
  }

  if (status === Statuses.LOADING) {
    return <span className="loader"></span>;
  }

  if (status === Statuses.ERROR) {
    return <h1>Something went wrong</h1>;
  }

  return (
    <div>
      {/* Success Dialog */}
      {showSuccessDialog && (
        <div className="dialog-box">
          <p>Product successfully added to the cart!</p>
        </div>
      )}
      <span className='productWrapper'>
        {products.map((value) => (
          <div key={value.id} className='product'>
            <img src={value.image} style={{ width: "120px" }} alt={value.title} />
            <h4>{value.title}</h4>
            <h5 style={{ color: "gray" }}>{value.description}</h5>
            <h2>{`${value.price} $`}</h2>
            <button onClick={() => handleAdd(value)} className='btn'>Add to cart</button>
          </div>
        ))}
      </span>
    </div>
  );
}
