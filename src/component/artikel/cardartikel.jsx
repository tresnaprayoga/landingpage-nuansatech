import styles from '../../style/artikel.module.css';
import { Link } from 'react-router-dom';

export default function ArticleCard({ data }) {
  return (
    <article className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={data.image} alt={data.title} />
      </div>

      <span>{data.title}</span>
      <p>{data.excerpt}</p>

      <Link to={`/articles/${data.slug}`} className={styles.readMore}>
        Baca Selengkapnya....
      </Link>
    </article>
  );
}
