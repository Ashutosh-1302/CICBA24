import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styles from '../../styles/Carousely.module.css';

export default function Carousely() {
  return (
    <div className={styles['carousel-container']}>
      <Carousel showThumbs={false}>
        <div className={`${styles.slide} grid grid-cols-2`}>
          <div className={`content w-1/2 p-4 ${styles['left-content']}`}>
            <h2 className="text-2xl font-bold">Left Content</h2>
            <p className="text-lg">Some text or other components</p>
          </div>
          <div className={`image w-1/2 flex items-center justify-center ${styles['right-content']}`}>
            <img
              src="http://www.cicba.in/cicba2023/images/slide1.jpg"
              alt="image1"
              className={styles['carousel-image']}
            />
          </div>
        </div>
        <div className={styles.slide}>
          <div className={styles['left-half']}>
            <h2>Left Content</h2>
            <p>Some text or other components</p>
          </div>
          <div className={styles['right-half']}>
            <img
              src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
              alt="image 2"
            />
          </div>
        </div>
      </Carousel>
    </div>
  );
}
