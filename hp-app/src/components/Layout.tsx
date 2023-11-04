import React, { useState } from "react";
import useDataFetching from "sharedResources/hooks/useDataFetching";
import Button from "sharedResources/components/Button/Button";
import List from "sharedResources/components/List/List";

interface LayoutProps {
  title: string;
}

export const Layout: React.FC<LayoutProps> = ({ title }: { title: string }) => {
  const [showList, setShowList] = useState<boolean>(false);
  const { data, loading, error } = useDataFetching(
    "https://hp-api.onrender.com/api/characters"
  );
  console.log(data);

  const handleList = () => {
    setShowList(!showList);
  };

  return (
    <div>
      <Button onClick={handleList} title={title} />

      {showList && <List list={data} />}
    </div>
  );
};
