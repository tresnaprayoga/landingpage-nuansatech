import styles from '../../style/artikel.module.css';
import { getAllArticles } from '../../dataStatis/dataartikel';
import ArticleCard from './cardartikel';

export default function Articles() {
  const dataArtikelUtama = getAllArticles();
  return (
    <section className={styles.section}>
      <header className={styles.header}>
        <h2>Artikel Terkini</h2>
      </header>

      <div className={styles.grid}>
        {dataArtikelUtama.map((article) => (
          <ArticleCard key={article.id} data={article} />
        ))}
      </div>
    </section>
  );
}
