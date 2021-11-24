export const incNumber = (event) => {
  return {
    type: "INCREMENT",
    // payload: event.target.innerText,
  };
};

export const decNumber = (num) => {
  return {
    type: "DECREMENT",
    payload: num,
  };
};

export const steps = (event) => {
  const t = Number(event.target.innerText)
  return {
    type: "STEPS",
    payload: (t),
  };
};
