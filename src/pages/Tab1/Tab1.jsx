import { useEffect, useState } from 'react';
import Category from '../../components/Tab1/Category';
import './Tab1.css';
import { useLocation } from 'react-router';
import ItemCard from '../../components/Tab1/ItemCard';

export default function Tab1() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const curGroupCode = params.get('groupCode') || '100000000';

  useEffect(() => {
    setLoading(true); // 요청 시작

    Promise.all([
      fetch('/categoryData.json').then((res) => res.json()),
      fetch('/itemData.json').then((res) => res.json()),
    ]).then(([categoryRes, productRes]) => {
      setData(categoryRes.categoryData);
      setProducts(productRes);

      setLoading(false);
    });
  }, []);

  if (loading) {
    return <div>로딩 중...</div>;
  }

  const curProducts = products[curGroupCode] || products[100000000];

  return (
    <div className="tab1">
      <header className="header">베스트</header>
      <Category category={data} curGroupCode={curGroupCode} />
      <ul>
        {curProducts &&
          curProducts.map((items) => <ItemCard products={items} />)}
      </ul>
    </div>
  );
}

/* 

정리 해야할 것
1. promise all 은 뭔지
2. 로딩 빼는 법?
3. 리액트 리렌더링 되는 경우중! useLocation? 

해야할 것
1. 반응형 -> hooks 로 만들기
2. 로딩? -> hooks 로 만들기
3. 쿠폰가격....

*/
