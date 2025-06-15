declare const rootReducer: import("redux").Reducer<{
    movies: import("./moviesSlice").MoviesState;
}, import("redux").UnknownAction, Partial<{
    movies: import("./moviesSlice").MoviesState | undefined;
}>>;
export declare const store: import("@reduxjs/toolkit").EnhancedStore<{
    movies: import("./moviesSlice").MoviesState;
} & import("redux-persist/es/persistReducer").PersistPartial, import("redux").UnknownAction, import("@reduxjs/toolkit").Tuple<[import("redux").StoreEnhancer<{
    dispatch: import("redux-thunk").ThunkDispatch<{
        movies: import("./moviesSlice").MoviesState;
    } & import("redux-persist/es/persistReducer").PersistPartial, undefined, import("redux").UnknownAction>;
}>, import("redux").StoreEnhancer]>>;
export declare const persistor: import("redux-persist").Persistor;
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export {};
