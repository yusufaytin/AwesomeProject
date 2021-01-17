import { ActionCreator, Action } from "redux";

export enum TODO_ACTION {
  INCREASE= "INCREASE",
  DECREASE= "DECREASE"
}

export const increaseCounter: ActionCreator<Action> = (count: number) => ({
	type: TODO_ACTION.INCREASE,
	payload: count
});

export const decreaseCounter: ActionCreator<Action> = (count: number) => ({
	type: TODO_ACTION.DECREASE,
	payload: count
});