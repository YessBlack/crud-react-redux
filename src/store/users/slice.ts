import { createSlice } from '@reduxjs/toolkit';

export interface Users {
  name: string;
  email: string;
  github: string;
}

export interface UserWithId extends Users {
  id: string;
}

const initialState: UserWithId[] = [
  {
		id: "1",
		name: "Angelica",
		email: "angelica@gmail.com",
		github: "yessblack",
	},
	{
		id: "2",
		name: "Miguel",
		email: "midu@gmail.com",
		github: "midudev",
	},
	{
		id: "2",
		name: "Natalia",
		email: "nati@gmail.com",
		github: "natioterom",
	},
];

export const usersSlice = createSlice({
  name: 'users',
  initialState: initialState ,
  reducers: {},
});

export default usersSlice.reducer;