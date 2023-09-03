interface SlideShowTypes {
    images?: string[]
}

interface SlideShowViewToggleTypes {
    setIsMobileView: React.Dispatch<React.SetStateAction<boolean>>
    isMobileView: boolean
}

export type { SlideShowTypes, SlideShowViewToggleTypes } 
