import type { ReactNode } from "react"

interface IRow{
    children: ReactNode
}

export default function Row({children}:IRow){
    return <div className="w3-row">
        {children}
    </div>
}