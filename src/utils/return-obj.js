const ActionDispatch = (type, payload) => {
  if (payload) return {type, payload};
  return {type};
};

export default ActionDispatch;
