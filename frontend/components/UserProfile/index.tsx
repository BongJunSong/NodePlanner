import React, { FC, useCallback } from 'react';
import gravatarUrl from 'gravatar-url';

import { LogOutButton, ProfileModal } from './styles';
import Menu from '@components/Menu';
import { IUser } from '@services/users/model';

interface Props {
  showMenu: boolean;
  onCloseModal: () => void;
  data: IUser;
}

const UserProfile: FC<Props> = ({ showMenu, onCloseModal, data }) => {
  const onLogout = useCallback(() => {}, []);

  return (
    <Menu showMenu={showMenu} onCloseModal={onCloseModal}>
      <ProfileModal>
        <img src={gravatarUrl(data.email, { size: 30, default: 'retro' })} alt={data.nickname} />
        <div>
          <span id="profile-name">{data.nickname}</span>
          <span id="profile-active">Active</span>
        </div>
      </ProfileModal>
      <LogOutButton onClick={onLogout}>로그아웃</LogOutButton>
    </Menu>
  );
};

export default UserProfile;
