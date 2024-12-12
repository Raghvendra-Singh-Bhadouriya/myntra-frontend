import { useState, createContext } from "react";

export const DropDownContext = createContext();

export const DropDownProvider = ({ children }) => {
    const [loginDropDown, setLoginDropDown] = useState(false);
    const [menDropDown, setMenDropDown] = useState(false);
    const [womenDropDown, setWomenDropDown] = useState(false);
    const [kidsDropDown, setKidsDropDown] = useState(false);
    const [homeDropDown, setHomeDropDown] = useState(false);
    const [beautyDropDown, setBeautyDropDown] = useState(false);
    const [studioDropDown, setStudioDropDown] = useState(false);


    const loginMouseEnter = () => setLoginDropDown(true);
    const loginMouseLeave = () => setLoginDropDown(false);

    const menMouseEnter = () => setMenDropDown(true);
    const menMouseLeave = () => setMenDropDown(false);

    const womenMouseEnter = () => setWomenDropDown(true);
    const womenMouseLeave = () => setWomenDropDown(false);

    const kidsMouseEnter = () => setKidsDropDown(true);
    const kidsMouseLeave = () => setKidsDropDown(false);

    const homeMouseEnter = () => setHomeDropDown(true);
    const homeMouseLeave = () => setHomeDropDown(false);

    const beautyMouseEnter = () => setBeautyDropDown(true);
    const beautyMouseLeave = () => setBeautyDropDown(false);

    const studioMouseEnter = () => setStudioDropDown(true);
    const studioMouseLeave = () => setStudioDropDown(false);
    return (
        <DropDownContext.Provider
            value={{ loginDropDown, menDropDown, womenDropDown, kidsDropDown, homeDropDown, beautyDropDown, studioDropDown, loginMouseEnter, loginMouseLeave, menMouseEnter, menMouseLeave, womenMouseEnter, womenMouseLeave, kidsMouseEnter, kidsMouseLeave, homeMouseEnter, homeMouseLeave, beautyMouseEnter, beautyMouseLeave, studioMouseEnter, studioMouseLeave }}
        >
            {children}
        </DropDownContext.Provider>
    );
};
