import React from "react"
import {Slider, SliderProps} from "@mui/material"

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{ // стили для слайдера // пишет студент
                width: "150px",
                color: "rgb(0, 204, 34)",
                "& .MuiSlider-thumb":
                    {
                        height: "18px",
                        width: "18px",
                        backgroundColor: "#fff",
                        border: "1px solid #01CB22",
                        "&::before": {
                            position: "absolute",
                            height: "6px",
                            width: "6px",
                            backgroundColor: "#01CB22",
                            zIndex: "2"
                        },
                    },
                '& .MuiSlider-rail': {
                    color:'#8B8B8B'
                },
            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
