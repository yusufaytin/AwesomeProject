import { TODO_ACTION } from "../actions/todoAction";
import { Action } from "redux";

export interface TodoModel {
  count: number;
}

export const InitialState: TodoModel = {
	count: 0
};

const reducer = (state: TodoModel = InitialState, action: Action) => {
	switch (action.type) {
	case TODO_ACTION.INCREASE:
		return {
			...state,
			count: state.count + 1
		};
	case TODO_ACTION.DECREASE:
		return {
			...state,
			count: state.count - 1
		};
	}
	return state;
};

export default reducer;
