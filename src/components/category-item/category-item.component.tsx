import {
  CategoryItemContainer,
  BackgroundImage,
  Body,
} from './category-item.styles';

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
    <CategoryItemContainer>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </Body>
    </CategoryItemContainer>
  );
};

export default CategoryItem;
