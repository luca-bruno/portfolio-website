"use client"

import React from "react"
import { Oval } from "react-loader-spinner"
import LoadingSpinnerTypes from "./types/LoadingSpinner.interface"

const LoadingSpinner: React.FC<LoadingSpinnerTypes> = ({ height, width, styles }) => (
    <Oval
        height={height}
        width={width}
        color="#16ac8e"
        wrapperStyle={styles}
        wrapperClass=""
        visible
        ariaLabel="oval-loading"
        secondaryColor="#16ac8e"
        strokeWidth={7}
        strokeWidthSecondary={7}
    />
)

export default LoadingSpinner