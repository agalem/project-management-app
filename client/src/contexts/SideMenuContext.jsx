import React, { createContext, useState, useContext } from "react";

export const SideMenuContext = createContext({
    isVisible: true,
    contentType: null,
    taskId: '',
    isNewTask: false,
    boardId: '',
});

export const SideMenuProvider = props => {
   const sideMenuContext = useContext(SideMenuContext);
   const [isVisible, setVisible] = useState(sideMenuContext.isVisible);
   const [contentType, setContentType] = useState(sideMenuContext.contentType);
   const [taskId, setTaskId] = useState(sideMenuContext.taskId);
   const [isNewTask, setIsNewTask] = useState(sideMenuContext.isNewTask);
   const [boardId, setBoardId] = useState(sideMenuContext.boardId);

   const provider = {
       isVisible,
       contentType,
       taskId,
       isNewTask,
       boardId,
       setSideMenuVisible: value => setVisible(value),
       setSideMenuContentType: type => setContentType(type),
       setSideMenuTaskId: taskId => setTaskId(taskId),
       setSideMenuBoardId: boardId => setBoardId(boardId),
       setSideMenuIsNewTask: isNew => setIsNewTask(isNew)
   };

   return (
       <SideMenuContext.Provider value={provider}>
           {props.children}
       </SideMenuContext.Provider>
   )

};
