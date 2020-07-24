export const InitialFeedback = {

    firstname:'',
    lastname:'',
    telnum:'',
    email:'',
    agree:false,
    contactType:'Tel.',
    message:''

}
// import * as ActionTypes from './ActionTypes';

// export const InitialFeedback = (state = {
//     errMess:null,
//     feedback:[]
//     }, action) => {
//     switch (action.type) {
//         case ActionTypes.ADD_FEEDBACK:
//             return {...state, isLoading: false, errMess: null, feedback: action.payload};
//         case ActionTypes.FEEDBACK_LOADING:
//             return {...state, isLoading: false, errMess: action.payload, feedback:[]};
//         // case ActionTypes.ADD_COMMENT:
//         //     var comment = action.payload;
//         //     return {...state,comments: state.comments.concat(comment)};
//         default:
//           return state;
//       }
// };