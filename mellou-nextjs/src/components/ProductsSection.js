import { products } from "@/data/staticData";

export default function ProductsSection() {
    return (
        <>
            <section className="random-section" id="products">
                <div className="headers">
                    <h2 className="products-something">products.</h2>
                    <h2 className="tried-something">
                        have you<br />tried our<br />best selling<br />pudding?
                    </h2>
                    <h2 className="introducing-somthing">introducing</h2>
                </div>
                <img
                    src="/assets/SignatureTextDesktop.webp"
                    className="signature"
                    alt="Signature Text"
                />
                <img
                    src="/assets/MellouSignatureMockupDesktop.webp"
                    className="right-side"
                    alt="Mellou Signature Product"
                />
                <img
                    src="/img/SignatureSubtextDesktop2.png"
                    className="signature-img"
                    alt="Signature Subtext"
                />
            </section>

            <section className="logo-something">
                <img
                    src="/img/MoreFlavoursDesktop-header.png"
                    alt="More Flavours Header"
                />

                <div className="image-grid">
                    {products.map((product) => (
                        <img
                            key={product.id}
                            src={product.image}
                            alt={product.name}
                            id={product.id}
                        />
                    ))}
                </div>
            </section>
        </>
    );
}
