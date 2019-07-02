import * as React from 'react';
import { connect } from 'react-redux';
import {MembersPage } from './page';
import { fetchMembersAction } from './actions/fetchMembers';

const mapStateToProps = (state) => ({
  members: state.members
});
const mapActionToProps = (dispatch)=>({
    fetchMembers: ()=> dispatch(fetchMembersAction())
})
export const MembersPageContainer = connect(mapStateToProps,mapActionToProps)(MembersPage)