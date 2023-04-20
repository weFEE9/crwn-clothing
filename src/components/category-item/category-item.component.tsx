import './category-item.styles.scss';

type MyProps = {
  category: Item;
};

type Item = {
  id: string;
  title: string;
  subtitle: string;
  imageUrl: string;
};

const CategoryItem = ({ category }: MyProps) => {
  const { id, title, subtitle, imageUrl } = category;

  return (
    <div className='category-item-container'>
      <div
        className='background-image'
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className='category-item-body-container'>
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>
    </div>
  );
};

export default CategoryItem;
