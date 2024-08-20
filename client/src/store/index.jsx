import { createGlobalState } from 'react-hooks-global-state'

export const { setGlobalState, useGlobalState } = createGlobalState({
  modal: '',
  connectedAccount: '',
  transactions: [],
  transaction: {
    address: '',
    amount: '',
    remark: '',
  },
  transactionCount: localStorage.getItem('transactionCount'),
})