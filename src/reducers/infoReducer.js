import action from '../actions'

const initialState={
    data:[

      {
        id:1,
        information: "Each dot on the map indicates a dig location. Select the dots to discover specifics about what was found.",
        infoStart:" It is 3030, and a group of scientists are digging up different areas in a state park to try and see what clues they can find about the past."
      }
      
    ]
    
   

    }

    const infoReducer = (state=initialState, action)=>{
        switch(action.type){
            case "ADD_INFO":
                return [...state]
                default:
                    return state;
        }


    }
    export default infoReducer