import { type AppDispatch, type RootState } from '../store/store';
import { useSelector, type TypedUseSelectorHook } from 'react-redux';
import { useDispatch } from 'react-redux';

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
