import { repositoriesReducer } from "./reponsitiories";
import {combineReducers} from 'redux'
import {RepositoryEntity} from '../model/repositoryEntity'
export interface State{
  repositories: RepositoryEntity[]
}

export const state = combineReducers<State>({
  repositories: repositoriesReducer
})