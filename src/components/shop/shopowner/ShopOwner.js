import { useContext } from 'react';
import { useParams } from 'react-router-dom';

import { GlobalContext } from '../../../context/GlobalState';

const ShopOwner = ({ children }) => {
  const { state } = useContext(GlobalContext);
  const { user } = state;
  const { shopId } = useParams();

  return user?.shopId === shopId ? children : null;
};

export default ShopOwner;
