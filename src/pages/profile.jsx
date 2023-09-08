import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchUserData } from '../actions/userActions';

const UserDashboard = ({ user, fetchUserData }) => {
  useEffect(() => {
    // Fetch user data when the component mounts
    fetchUserData();
  }, [fetchUserData]);

  return (
    <div>
      {user ? (
        <Dashboard />
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = {
  fetchUserData,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserDashboard);
