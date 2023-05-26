import { Fragment, useEffect, useRef } from "react"

export function Instructions() {
  const fragment1 = useRef(null);
  const fragment2 = useRef(null);

  
  useEffect(() => {

    fragment1.current.style.opacity = 1;
    fragment1.current.style.top = 0;

    fragment2.current.style.opacity = 1;
    fragment2.current.style.top = 0;

  }, [])

  return (

    <Fragment>
      <h1 ref={fragment1} className="RampTextHeading--l">Approve transactions</h1>
      <div className="RampBreak--l" />
      <p ref={fragment2} className="RampText RampTextMajor">
        Your company uses Ramp as their main financial instrument. You are a manager and you need to
        approve the transactions made by your employees.
        <span className="RampBreak--s" />
         Select the checkbox on the right to approve or decline the transactions. You can filter
        transactions by employee.
      </p>
    </Fragment>
  )
}
