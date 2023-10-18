import React from "react"

function useIsSsr() {
  const [isSsr, setIsSsr] = React.useState(true)

  React.useEffect(() => {
    setIsSsr(false)
  }, [])

  return isSsr
}

export default useIsSsr