import React from "react";
import Paginator from "../Common/Paginator/paginator";
import User from "./User";

let Users = ({currentPage, totalUsersCount, pageSize, onPageChanged, users, ...props}) => {
    return (
        <div>
           <Paginator currentPage = {currentPage}
                      totalItemsCount = {totalUsersCount}
                      pageSize = {pageSize}
                      onPageChanged = {onPageChanged}/>
          <div>
              {users.map(user => <User key={user.id}
                                       user={user}
                                       followingInProgress={props.followingInProgress}
                                       followThunkCreator={props.followThunkCreator}
                                       unfollowThunkCreator={props.unfollowThunkCreator}/>)}
          </div>
        </div>
    )
}

export default Users;