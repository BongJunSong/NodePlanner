// import { AnyAction, CombinedState, combineReducers } from 'redux';

// // import userSlice, { userState } from './user';
// // import channelSlice, { ChannelState } from './channel';
// // import workspaceSlice, { workspaceState } from './workspace';
// // import workspaceMemberSlice, { workspaceMemberState } from './workspaceMember';
// // import channelMemberSlice, { channelMemberState } from './channelMember';
// // import dmSlice, { DmState } from './dm';

// // (이전상태, 액션) => 다음상태
// const rootReducer = (
//   state:
//     | CombinedState<{
//         user: userState;
//         // workspace: workspaceState;
//         // channel: ChannelState;
//         // dm: DmState;
//         // workspaceMember: workspaceMemberState;
//         // channelMember: channelMemberState;
//       }>
//     | undefined,
//   action: AnyAction,
// ) => {
//   const combinedReducer = combineReducers({
//     user: userSlice.reducer,
//     // workspace: workspaceSlice.reducer,
//     // channel: channelSlice.reducer,
//     // dm: dmSlice.reducer,
//     // workspaceMember: workspaceMemberSlice.reducer,
//     // channelMember: channelMemberSlice.reducer,
//   });
//   return combinedReducer(state, action);
// };

// export default rootReducer;
