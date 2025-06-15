import { type AppDispatch, type RootState } from '../store/store';
import { type TypedUseSelectorHook } from 'react-redux';
export declare const useAppDispatch: () => AppDispatch;
export declare const useAppSelector: TypedUseSelectorHook<RootState>;
