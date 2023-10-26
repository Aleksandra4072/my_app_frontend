import { Card } from 'react-bootstrap';
import { contentCut } from '../../utils/axiosUtils';

import styles from './PostCard.module.css';

export const PostCard = ({ data }) => {
    return (
        <Card className={styles.cardContainer}>
        <Card.Img className={styles.img} variant="top" src={data.image} />
        <Card.Body>
          <div className={styles.content}>
            <div className={styles.title}>{data.title}</div>
            <div className='mt-3'>{contentCut(data.content)}</div>
          </div>
          <Card.Footer className={styles.cardFooter}>
            <div>{data.creator}</div>
            <div>{data.creationDate}</div>
          </Card.Footer>
        </Card.Body>
      </Card>
    );
}