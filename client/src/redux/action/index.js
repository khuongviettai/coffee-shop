// Add to cart
export const AddCart = (product) => {
  return {
    type: "ADDITEM",
    payload: product,
  };
};

// Remove to cart

export const RemoveCart = (product) => {
  return {
    type: "REMOVEITEM",
    payload: product,
  };
};
