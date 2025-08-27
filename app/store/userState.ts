export interface User{
    id: String;
    email: String;
    firstName: String;
    lastName: String;
    createdAt: Date;
    updatedAt: Date;

}

export const userState = {
    key: 'userState',
    default: null
}