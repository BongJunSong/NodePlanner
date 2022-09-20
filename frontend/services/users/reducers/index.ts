// import { createSelector, createSlice } from '@reduxjs/toolkit';

// // import { AsyncEntity, IUser } from '@typings/db';
// // import { loadInfo, loadSpecificMemberInfo, login, logout, signup } from '@services/user';
// import { RootState } from '@store/config';

// export interface userState {
//   userInfo: AsyncEntity<IUser, string>;
//   DMInfo: AsyncEntity<IUser, string>;
// }

// export const initialState: userState = {
//   userInfo: {
//     data: null,
//     status: 'idle',
//     error: null,
//   },
//   DMInfo: {
//     data: null,
//     status: 'idle',
//     error: null,
//   },
// };

// const userSlice = createSlice({
//   name: 'user',
//   initialState,
//   reducers: {
//     userInfoReset(state) {
//       Object.assign(state, initialState);
//     },
//   },
//   extraReducers: (builder) =>
//     builder
//       .addCase(login.pending, (state) => {
//         state.userInfo.status = 'loading';
//         state.userInfo.error = null;
//       })
//       .addCase(login.fulfilled, (state, action) => {
//         state.userInfo.status = 'success';
//         state.userInfo.data = action.payload;
//       })
//       .addCase(login.rejected, (state, action) => {
//         state.userInfo.status = 'fail';
//         if (typeof action.payload === 'string') {
//           state.userInfo.error = action.payload;
//         }
//       })
//       .addCase(signup.pending, (state) => {
//         state.userInfo.status = 'loading';
//         state.userInfo.error = null;
//       })
//       .addCase(signup.fulfilled, (state, action) => {
//         state.userInfo.status = 'success';
//       })
//       .addCase(signup.rejected, (state, action) => {
//         state.userInfo.status = 'fail';
//         if (typeof action.payload === 'string') {
//           state.userInfo.error = action.payload;
//         }
//       })
//       .addCase(loadInfo.pending, (state) => {
//         state.userInfo.status = 'loading';
//         state.userInfo.error = null;
//       })
//       .addCase(loadInfo.fulfilled, (state, action) => {
//         state.userInfo.status = 'success';
//         state.userInfo.data = action.payload;
//       })
//       .addCase(loadInfo.rejected, (state, action) => {
//         state.userInfo.status = 'fail';
//         if (typeof action.payload === 'string') {
//           state.userInfo.error = action.payload;
//         }
//       })
//       .addCase(logout.pending, (state) => {
//         state.userInfo.status = 'loading';
//         state.userInfo.error = null;
//       })
//       .addCase(logout.fulfilled, (state) => {
//         state.userInfo.status = 'success';
//       })
//       .addCase(logout.rejected, (state, action) => {
//         state.userInfo.status = 'fail';
//         if (typeof action.payload === 'string') {
//           state.userInfo.error = action.payload;
//         }
//       })
//       .addCase(loadSpecificMemberInfo.pending, (state) => {
//         state.DMInfo.status = 'loading';
//         state.DMInfo.error = null;
//       })
//       .addCase(loadSpecificMemberInfo.fulfilled, (state, action) => {
//         state.DMInfo.status = 'success';
//         state.DMInfo.data = action.payload;
//       })
//       .addCase(loadSpecificMemberInfo.rejected, (state, action) => {
//         state.DMInfo.status = 'success';
//         if (typeof action.payload === 'string') {
//           state.DMInfo.error = action.payload;
//         }
//       }),
// });

// export const { userInfoReset } = userSlice.actions;

// //  redux store 값을 가져와 계산을 해서, redux가 적은 양의 필요한 데이터만 가지고 있게 도와줍니다
// // 구조가 바뀌어도 연관된 컴포넌트 바꿀필요없이 selector만 바꾸면 됩니다.
// // 메모되어 재계산 방지 효율적
// export const userSelector = (state: RootState): IUser | null => state.user.userInfo.data;
// export const dmSelector = (state: RootState): IUser | null => state.user.DMInfo.data;
// export const statusSelector = (state: RootState): string | null => state.user.userInfo.status;
// export const errorSelector = (state: RootState): string | null => state.user.userInfo.error;

// export const reselectUserInfoSelector = createSelector(
//   userSelector,
//   dmSelector,
//   statusSelector,
//   errorSelector,
//   (userInfo, dmInfo, status, error) => {
//     return { userInfo, dmInfo, status, error };
//   },
// );

// export default userSlice;
