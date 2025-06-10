export default function ProductImage({ imageUrl, rank }) {
	return (
		<div className="box__image">
			<img className="image" src={`${imageUrl}/280`} alt="" />
			<span className="rank">{rank}</span>
		</div>
	);
}
