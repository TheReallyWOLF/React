import {createSelector} from "reselect";

export const getUsers = (state) => {
    return state.usersPage.users;
};
export const getPageSize = (state) => {
    return state.usersPage.pageSize;
};
export const getTotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount;
};
export const getCurrentPage = (state) => {
    return state.usersPage.currentPage;
};
export const getIsUsersFetch = (state) => {
    return state.usersPage.isUsersFetch;
};
export const getFollowingInProgress = (state) => {
    return state.usersPage.followingInProgress;
};
// сложные селекторы (селекторы с логикой) необходимо создавать через библиотеку reselect (что бы не создавать лишние перерисовки)
export const getUsersHardSelector = createSelector([getUsers, getIsUsersFetch],
    (users, isUsersFetch) => {
        return users.filter(user => true);
    }
);