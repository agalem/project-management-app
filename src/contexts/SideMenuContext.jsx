import React, { createContext, useState, useContext } from "react";

export const SideMenuContext = createContext({
    isVisible: true,
    contentType: null
});

export const SideMenuProvider = props => {
   const sideMenuContext = useContext(SideMenuContext);
   const [isVisible, setVisible] = useState(sideMenuContext.isVisible);
   const [contentType, setContentType] = useState(sideMenuContext.contentType);

   const provider = {
       isVisible,
       contentType,
       setVisible: value => setVisible(value),
       setContentType: type => setContentType(type)
   };

   return (
       <SideMenuContext.Provider value={provider}>
           {props.children}
       </SideMenuContext.Provider>
   )

};
