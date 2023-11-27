"use client"

import { Oval } from "react-loader-spinner"

const loading = () =>
    <div
        className=""
        style={{ justifyContent: "center", display: "flex" }}
    >
        <Oval
            height={30}
            width={30}
            color="white"
            wrapperStyle={{ opacity: "50%", height: "calc(100vh - 64px)", alignItems: "center" }}
            wrapperClass=""
            visible
            ariaLabel="oval-loading"
            secondaryColor="white"
            strokeWidth={7}
            strokeWidthSecondary={7}
        />
    </div>

export default loading
