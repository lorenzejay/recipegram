import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFollowers } from "../redux/Actions/followersAction";
import ErrorMessage from "./errorMessage";
import Loader from "./loader";

const FollowersTab = ({ anyUserProfile, follow }) => {
  const dispatch = useDispatch();
  const getFollows = useSelector((state) => state.getFollows);
  const { loading, followers, error } = getFollows;

  useEffect(() => {
    if (anyUserProfile && anyUserProfile.user) {
      dispatch(getFollowers(anyUserProfile.user.user_id));
    }
  }, [dispatch, anyUserProfile, follow]);

  return (
    <div className="followers flex flex-row gap-5">
      {loading && <Loader />}
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {followers && (
        <div className="text-xl flex gap-10 mt-5">
          <p>Followers: {followers.followerCount}</p>
          <p>Following: {followers.followingCount}</p>
        </div>
      )}
    </div>
  );
};

export default FollowersTab;
