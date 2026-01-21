import styles from '../../style/outherservice.module.css';

function ServiceSection({ data }) {
  return (
    <div className={styles.promoSection}>
      <p>Butuh Solusi Lain</p>
      <section className={styles.section}>
        {data.map((item) => (
          <div key={item.id} className={styles.card}>
            <div className={styles.content}>
              <img src={item.image} />
              <h2 className={styles.title}>{item.title}</h2>
              {item.button && <p>{item.subtitle}</p>}
              {item.button && (
                <a href={item.url1} target='_blank'>
                  <button>{item.button}</button>
                </a>
              )}

              {item.button1 && (
                <a href={item.url} target='_blank'>
                  <button>{item.button1}</button>
                </a>
              )}
            </div>
          </div>
        ))}
      </section>
      {/* <BrandList brands={brandData} /> */}
    </div>
  );
}

export default ServiceSection;
