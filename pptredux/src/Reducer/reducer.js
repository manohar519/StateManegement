const count=1

 const reducer =(state=count,action)=>{
 switch(action.type){
     case "INCREEMENT":
        return count+1;
    case "DECREEMENT":
        return count-1;
    default:
        return count;
 }
}
export default reducer