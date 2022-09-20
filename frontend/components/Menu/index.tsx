import React, { FC, PropsWithChildren, useCallback } from 'react';
import { CSSProperties } from 'styled-components';
import { CloseModalButton, CreateMenu } from './styles';

interface Props {
  showMenu: boolean;
  onCloseModal: () => void;
  closeButton?: boolean;
  style?: CSSProperties;
}

const Menu: FC<PropsWithChildren<Props>> = ({ showMenu, onCloseModal, closeButton, style, children }) => {
  if (!showMenu) {
    return null;
  }

  const onStopPropagation = useCallback((e: any) => {
    e.stopPropagation();
  }, []);

  return (
    <CreateMenu onClick={onCloseModal}>
      <div onClick={onStopPropagation} style={style}>
        {closeButton && <CloseModalButton onClick={onCloseModal}>&times;</CloseModalButton>}
        {children}
      </div>
    </CreateMenu>
  );
};

Menu.defaultProps = {
  closeButton: true,
};

export default Menu;
