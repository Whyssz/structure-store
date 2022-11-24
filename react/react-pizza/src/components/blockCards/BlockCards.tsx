import { useMemo } from 'react';

import { Card } from '../card/Card';
import { ErrorMessage } from '../errorMessage';
import { Pagination } from '../pagination/Pagination';
import { Skeleton } from '../skeleton';

interface BlockCardsProps  {
  loading: string;
  list: any[];
};

interface PizzaList  {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  sizes: number[];
  types: number[];
};

export const BlockCards: React.FC<BlockCardsProps> = ({ loading, list }) => {
  const renderList = (list: PizzaList[]) => {
    return list?.map(({ id, title, price, imageUrl, sizes, types }) => (
      <Card
        key={id}
        id={id}
        title={title}
        price={price}
        image={imageUrl}
        sizes={sizes}
        types={types}
      />
    ));
  };

  const cardsList = useMemo(() => {
    return renderList(list);
  }, [list]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div className="content__items">
        {loading === 'loading' ? (
          [...new Array(6)].map((_, index) => <Skeleton key={index} />)
        ) : loading === 'idle' ? (
          cardsList
        ) : (
          <ErrorMessage />
        )}
      </div>
      <Pagination />
    </div>
  );
};