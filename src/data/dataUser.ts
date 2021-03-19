export interface StorageUser {
  id?: number;
  username?: string;
  avatarUrl?: string;
  token?: string;
}

export const dataUserGet = (): StorageUser => {
  try {
    return JSON.parse(window.localStorage.getItem('user') || '{}');
  } catch (error) {
    return {};
  }
};

export const dataUserSet = (data: StorageUser) => {
  try {
    window.localStorage.setItem('user', JSON.stringify(data));

    return true;
  } catch (error) {
    return false;
  }
};
