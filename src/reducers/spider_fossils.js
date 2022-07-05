



import action from '../actions'
const initialState={
    data:[
    
{
    id:1,
    name:"Spider"
},
{
    id:2,
    name:"Hunts at night and eats small insects"
},{
    id:3,
    name:"Lives largely in arid habitats"
}
    ]
   

    }

    const spiderReducer = (state=initialState,action)=>{
        switch(action.type){
            case "Add1":
                return state;
                default:
                    return state;
        }


    }
    export default spiderReducer