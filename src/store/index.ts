import { configureStore } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux';
import CounterReducer from './counter/counterSlice';
import PokemonsReducer from './pokemons/pokemons';
import { localStorageMiddleware } from './middlewares/localstorage-middleware';

export const store = configureStore({
  reducer: {
   counter: CounterReducer,
   pokemons: PokemonsReducer,
  },
  // middleware: ( getDefaultMiddleware ) => getDefaultMiddleware().concat(localStorageMiddleware)
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();