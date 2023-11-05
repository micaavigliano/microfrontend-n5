import React, { useState } from "react";
import useDataFetching from "sharedResources/hooks/useDataFetching";
import Button from "sharedResources/components/Button/Button";
import List from "sharedResources/components/List/List";
import { AppContainer, ListContainer } from "./Layout_rm.styled";

interface LayoutProps {
  title: string;
}

export const LayoutRm: React.FC<LayoutProps> = ({
  title,
}: {
  title: string;
}) => {
  const [showList, setShowList] = useState<boolean>(false);
  const { data, loading } = useDataFetching(
    "https://rickandmortyapi.com/api/character"
  );

  const handleList = () => {
    setShowList(!showList);
  };

  return (
    <AppContainer>
      <Button onClick={handleList} title={title} />
      {showList && (
        <ListContainer>
          <List
            list={data.results}
            loading={loading}
            showList={showList}
            setShowList={setShowList}
          />
        </ListContainer>
      )}
    </AppContainer>
  );
};
