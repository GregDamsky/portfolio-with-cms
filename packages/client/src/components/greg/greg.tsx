import styles from './greg.module.scss';
import cx from 'classnames';

export interface GregProps {
  className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Greg = ({ className }: GregProps) => {
  return (
    <div className={cx(styles.root, className, styles.zidane)}>
      <span className={styles['pic-title']}>Zidan&apos;s Photo</span>
      <img src="https://photo.one.co.il/Image/GG/7,1/1603719.webp?width=700" alt="" />
      Greg
    </div>
  );
};
