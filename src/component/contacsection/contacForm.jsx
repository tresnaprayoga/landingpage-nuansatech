import styles from '../../style/contacform.module.css';

('use client');
import { useState } from 'react';

export default function ContactSection() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);

    await fetch('https://docs.google.com/forms/d/e/1FAIpQLSfGYtsVFb3nYfmqRW055TECaF8u59uzeS8PvUnAmqV-NtCA4A/formResponse', {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        'entry.1830091635': formData.get('nama'),
        'entry.927650626': formData.get('telepon'),
      }),
    });

    setLoading(false);
    setSuccess(true);
    e.target.reset();
  }

  return (
    <section className={styles.parallaxSection}>
      <div className={styles.overlay}></div>

      <div className={styles.formCard}>
        <h2>Ingin Berkonsultasi dengan expert Kami?</h2>
        <p>Isi formulir di bawah ini dan tim kami akan menghubungi Anda segera </p>

        <form onSubmit={handleSubmit} className={styles.form}>
          <input type='text' name='nama' placeholder='Nama' required />

          <input type='tel' name='telepon' placeholder='Nomor Telepon' required />

          <button type='submit' disabled={loading}>
            {loading ? 'Mengirim...' : 'Kirim'}
          </button>

          {success && <p className={styles.successMessage}>Terima kasih! Data Anda berhasil dikirim.</p>}
        </form>
      </div>
    </section>
  );
}
