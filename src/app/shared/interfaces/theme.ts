import { IUser } from './user';

export interface ITheme<T = string> {
    subscribers: string[];
    posts: T[];
    _id: string;
    themeName: string;
    userId: IUser;
    created_at: string;
    updatedAt: string;
    __v: number;
}