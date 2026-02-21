import { useParams } from 'react-router-dom';
import { getAllArticles } from '../../dataStatis/dataartikel';
import styles from '../../style/detailartikel.module.css';

export default function ArticleDetail() {
  const articlesData = getAllArticles();

  const { slug } = useParams();
  const article = articlesData.find((a) => a.slug === slug);

  if (!article) {
    return <p style={{ padding: '60px' }}>Article not found</p>;
  }

  return (
    <div>
      <section className={styles.detail}>
        <img src={article.image} alt={article.title} className={styles.detailImage} />

        <div className={styles.detailContent}>
          <h1>{article.title}</h1>
          <span className={styles.date}>{article.date}</span>

          <p style={{ whiteSpace: 'pre-line' }}>{article.content}</p>
        </div>
      </section>
    </div>
  );
}
