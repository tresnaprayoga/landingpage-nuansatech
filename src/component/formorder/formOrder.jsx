'use client';
import { useState } from 'react';
import styles from '../../style/formorder.module.css';

export default function OrderForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    if (loading) return;

    setLoading(true);
    setSuccess(false);

    const formData = new FormData(e.target);

    try {
      await fetch('https://docs.google.com/forms/d/e/1FAIpQLSdaNBq1LzKfjPrFQVw56oeYXG4l9nzQdff5Gg_f4--VQeunxQ/formResponse', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          'entry.1194845494': formData.get('nama'),
          'entry.2071992478': formData.get('brand'),
          'entry.1514798378': formData.get('whatsapp'),
          'entry.1200234973': formData.get('email'),
          'entry.629113208': formData.get('domain'),
          'entry.237367355': formData.get('template'),
        }),
      });

      setSuccess(true);
      e.target.reset();
    } catch (error) {
      alert('Terjadi kesalahan. Silakan coba lagi.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className={styles.section}>
      <div className={styles.image}>
        <h2 className={styles.title}>Jangkau Lebih banyak Pelanggan anda</h2>
        <p>Kembangkan bisnis Anda tanpa batas geografis dengan memiliki website profesional yang representatif dan terpercaya. Di era digital saat ini, website bukan hanya sekadar pelengkap, tetapi menjadi wajah utama bisnis Anda.</p>
        <img src='/customer.jpg' alt='Form Order' />
      </div>

      <div className={styles.container}>
        <h2 className={styles.title}>Form Pemesanan Website</h2>
        <p className={styles.subtitle}>Silakan isi form berikut untuk memesan website. Tim kami akan segera menghubungi Anda.</p>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label>Nama Lengkap *</label>
            <input type='text' name='nama' required />
          </div>

          <div className={styles.formGroup}>
            <label>Nama Usaha / Brand *</label>
            <input type='text' name='brand' required />
          </div>

          <div className={styles.formGroup}>
            <label>Nomor WhatsApp Aktif *</label>
            <small>Pastikan nomor ini aktif karena kami akan menghubungi Anda melalui WhatsApp.</small>
            <input type='tel' name='whatsapp' required />
          </div>

          <div className={styles.formGroup}>
            <label>Alamat Email *</label>
            <input type='email' name='email' required />
          </div>

          <div className={styles.formGroup}>
            <label>Tuliskan Nama Usahamu (contoh: usahaku.com) *</label>
            <input type='text' name='domain' required />
          </div>

          <div className={styles.formGroup}>
            <label>Tuliskan Nama Template Web yang Anda Pilih (contoh: Apotik)</label>
            <input type='text' name='template' />
          </div>

          <button type='submit' disabled={loading} className={styles.button}>
            {loading ? 'Mengirim...' : 'Kirim Sekarang'}
          </button>

          {success && <p className={styles.success}>Terima kasih! Data Anda berhasil dikirim.</p>}
        </form>
      </div>
    </section>
  );
}
