import { ActionReducerMap } from "@ngrx/store";
import { AppState } from "./app.state";
import { filmSectionsReducer } from "./film-card-list-store/film-card-list.reducer";

export const reducers: ActionReducerMap<AppState> = {
    film: filmSectionsReducer
  };