import {RepositoryEntity} from '../model/index'
import {actionTypes} from '../common/constants/actionTypes'
export const repositoriesReducer = () => {
  (state: RepositoryEntity[] = [], action)=>{
    switch(action){
      case actionTypes.FETCH_RESPOSITIORIES_COMPLETEDL:
        return handleFetchRepositoriesCompleted(state, action.payload)
    }
    return state
  }
  const handleFetchRepositoriesCompleted =(state: RepositoryEntity[], payload: RepositoryEntity[]) => {
    return payload
  }
}