import { useNavigate } from 'react-router-dom';

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
  route: string;
};

const CategoryItem = ({ category }: MyProps) => {
  const { id, title, subtitle, imageUrl, route } = category;
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route);

  return (
    <CategoryItemContainer onClick={onNavigateHandler}>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </Body>
    </CategoryItemContainer>
  );
};

export default CategoryItem;
