import React from "react";
import { Navigate } from "react-router-dom";
import { useAccount } from "wagmi";
import { toast } from "react-toastify";

const RequireAuth = ({children}) => {
    const { address: accountAddress } = useAccount();
    if (accountAddress === undefined || accountAddress === "") {
        toast.error("Please connect your account first!");
        return <Navigate to={"/#connect"} />
    }
    return children;
}

export default RequireAuth;