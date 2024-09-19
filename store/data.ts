import {create} from 'zustand'

export type User = {
  name: string;
  weight: string;
  height: string;
  age: string;
  level: string;
  objective: string;
  gender: string;
  comorbidity?: string;
}

type DataState = {
  user: User;
  setPageOne: (data: Omit<User, 'gender' | 'objective' | 'level' | 'comorbidity'>) => void;
  setPageTwo: (data: Pick<User, 'gender' | 'objective' | 'level' | 'comorbidity'>) => void;
}

export const useDataStore = create<DataState>((set) => ({
  user:{
    name: '',
    weight: '',
    height: '',
    age: '',
    level: '',
    objective: '',
    gender: '',
    comorbidity: ''
  },
  setPageOne: (data) => set((state) => ({user: {...state.user, ...data}})),
  setPageTwo: (data) => set((state) => ({user: {...state.user, ...data}}))
}))