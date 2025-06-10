export default function ItemCard({ products }) {
  console.log(products);

  const { goodsName, price, discountPrice, imageUrl, discountRate } = products;

  return (
    <div className="product">
      <img className="product__image" src={`${imageUrl}/280`} alt="" />
      {discountRate === 0 ? <div>{price}원</div> : <div></div>}
      <p className="product__name">{goodsName}</p>
    </div>
  );
}
