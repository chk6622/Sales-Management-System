import { CHANGE_ACTIVE_ITEM,CHANGE_OPEN_STATE } from './ActionTypes';
import IAction from './IAction';
import {IAppMenuState} from './IState';




const initState:IAppMenuState={
    activeItem:'Home',
    isOpen:false
}

export default (state=initState,action:IAction)=>{
    const newState:IAppMenuState=JSON.parse(JSON.stringify(state));
    switch(action.type){
        case CHANGE_ACTIVE_ITEM:
            newState.activeItem=action.value;
            break;
        case CHANGE_OPEN_STATE:
            newState.isOpen=action.value;
            break;
    }
    return newState;
}