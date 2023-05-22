"use client";

import { IconType } from "react-icons";

interface CategoryBoxProps {
  key: string;
  label: string;
  description: string;
  icon: IconType;
  selected?: boolean;
}

const CategoryBox: React.FC<CategoryBoxProps> = ({
  key,
  label,
  description,
  icon,
  selected,
}) => {
  return <div>{label}</div>;
};

export default CategoryBox;
