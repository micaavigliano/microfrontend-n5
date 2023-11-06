import React, { ReactNode, Children, Dispatch, SetStateAction } from "react";
import { UlContainer, LiContainer } from "./List.styled";
import Modal from "../Modal/Modal";

export interface Props<T> extends React.LiHTMLAttributes<HTMLUListElement> {
  children: ReactNode;
  showList: boolean;
  setShowList: Dispatch<SetStateAction<boolean>>;
}

const List = <T,>({ children, showList, setShowList, ...rest }: Props<T>) => {
  const closeModal = () => {
    setShowList(!showList);
  };

  return (
    <>
      {showList && (
        <Modal isOpen={showList} onClose={closeModal}>
          <UlContainer {...rest}>
            {Children.map(children, (child, index?: number) => (
              <LiContainer key={index}>{child}</LiContainer>
            ))}
          </UlContainer>
        </Modal>
      )}
    </>
  );
};

export default List;
