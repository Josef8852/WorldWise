import PageNav from "../components/PageNav";

import styles from "../styles/Product.module.css";

const Product: React.FC = () => {
  return (
    <div className={styles.product}>
      <PageNav />
      <div className={styles.content}>
        <div>
          <img src="/img-1.jpg" alt="" />
        </div>
        <div>
          <h2>
            Simple pricing. <br /> Just $9/month.
          </h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae vel
            labore mollitia iusto. Recusandae quos provident, laboriosam fugit
            voluptatem iste.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Product;
