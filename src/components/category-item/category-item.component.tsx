import './category-item.styles.scss';

type MyProps = {
  category: CategoryItem;
};

type CategoryItem = {
  id: string;
  title: string;
  subtitle: string;
  imageUrl: string;
};

const CategoryItem = ({ category }: MyProps) => {
  const { id, title, subtitle, imageUrl } = category;

  return (
    <div className='category-container'>
      <div
        className='background-image'
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className='category-body-container'>
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>
    </div>
  );
};

export default CategoryItem;
