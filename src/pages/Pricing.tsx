import PageNav from "../components/PageNav";
import styles from "../styles/Pricing.module.css";

const Pricing: React.FC = () => {
  return (
    <div className={styles.pricing}>
      <PageNav />
      <div className={styles.content}>
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
        <div>
          <img src="/img-2.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Pricing;
