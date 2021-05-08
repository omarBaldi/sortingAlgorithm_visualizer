import { FC } from 'react';
import Styles from './button.module.scss';
import { ButtonProps, SortingType } from './dto';

export const SortingButton: FC<ButtonProps> = ({
  text,
  type,
  onButtonClicked,
}: ButtonProps) => {
  const checkingSortingType = (currentType: string) => {
    switch (currentType) {
      case SortingType.bubbleSort:
        onButtonClicked && onButtonClicked('Bubble sort');
        return;
      case SortingType.insertionSort:
        onButtonClicked && onButtonClicked('Insertion sort');
        return;
      case SortingType.quickSort:
        onButtonClicked && onButtonClicked('Quick sort');
        return;
      case SortingType.selectionSort:
        onButtonClicked && onButtonClicked('Selection sort');
        return;
    }
  };

  return (
    <>
      <button
        onClick={() => checkingSortingType(type)}
        className={Styles.sortingButton}
      >
        {text}
      </button>
    </>
  );
};
