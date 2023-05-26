import { useCallback, useState, CSSProperties } from "react"
import ClockLoader from "react-spinners/PropagateLoader";
import { useEffect, useRef } from "react"
import { useCustomFetch } from "src/hooks/useCustomFetch"
import { SetTransactionApprovalParams } from "src/utils/types"
import { TransactionPane } from "./TransactionPane"
import { SetTransactionApprovalFunction, TransactionsComponent } from "./types"

export const Transactions: TransactionsComponent = ({ transactions }) => {
  const { fetchWithoutCache, loading } = useCustomFetch();
  let [pending, setPending] = useState(true);
  const [Transaction, setTransaction] = useState<Array<object> | null>(null);

 useEffect(() => {

 }, []);

 const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

  const setTransactionApproval = useCallback<SetTransactionApprovalFunction>(
    async ({ transactionId, newValue }) => {
      await fetchWithoutCache<void, SetTransactionApprovalParams>("setTransactionApproval", {
        transactionId,
        value: newValue,
      })
    },
    [fetchWithoutCache]
  )



  if (transactions === null) {
    return <div id="RampLoading--container" className="RampLoading--container">
       <ClockLoader
        color="rgb(33, 145, 236"
        loading={pending}
        cssOverride={override}
        size={30}
        data-testid="loader"
      />
    </div>
  }


  return (
    <div className="transaction-container" data-testid="transaction-container">
      {transactions.map((transaction) => (
        <TransactionPane
          key={transaction.id}
          transaction={transaction}
          loading={loading}
          setTransactionApproval={setTransactionApproval}
        />
      ))}
    </div>
  )
}
