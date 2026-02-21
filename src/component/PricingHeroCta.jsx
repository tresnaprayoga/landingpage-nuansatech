import styles from '../style/pricingcta.module.css';
import { Link } from 'react-router-dom';

const PricingHeroCta = ({ title, desc, buttonText, image }) => {
  return (
    <div className={styles.containerpricingcta}>
      <div className={styles.titeljudul}>
        <h3>Harga Bersahabat, Kualitas Dahsyat !</h3>
        <p>Membuat website profesional kini lebih murah. Dapatkan desain modern dan mudah digunakan tanpa perlu khawatir soal biaya</p>
      </div>

      <section className={styles.hero}>
        <div className={styles.content} style={{ whiteSpace: 'pre-line' }}>
          <h4>{title}</h4>
          <p>{desc}</p>
          <p style={{ fontWeight: 'bold', fontSize: '1.2rem', marginTop: '16px', color: '#2a2a72' }}>
            Harga <br /> Rp. 500.000/tahun
          </p>

          {/* <button>
            <Link to='/order'>{buttonText}</Link>
          </button> */}

          <Link to='/order'>
            <button className={styles.button}>{buttonText}</button>
          </Link>
        </div>

        <div className={styles.imageWrapper}>
          <img src={image} alt={title} />
        </div>
      </section>
    </div>
  );
};

export default PricingHeroCta;
