import { Maybe } from '../../utils/maybe';

export enum SortingType {
  bubbleSort = '0',
  insertionSort = '1',
  quickSort = '2',
  selectionSort = '3',
}

export type ButtonProps = {
  text: string;
  type: SortingType;
  onButtonClicked?: Maybe<(c: string) => void>;
};
