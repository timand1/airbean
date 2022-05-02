export default function CartList(props) {
    const { product } = props;
    return (
        <section>
            <p>{product.title}</p>
        </section>
    )
}