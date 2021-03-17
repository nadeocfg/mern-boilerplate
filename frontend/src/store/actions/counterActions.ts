const counterActions = {
  increment: () => ({ type: 'INCREMENT_COUNTER' }),
  decrement: () => ({ type: 'DECREMENT_COUNTER' }),
  incrementNumber: (number: number) => ({
    type: 'INCREMENT_NUMBER',
    payload: number,
  }),
};

export default counterActions;
