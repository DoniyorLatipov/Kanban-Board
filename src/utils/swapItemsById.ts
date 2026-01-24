import findIndexById from './findIndexById';

export default function swapItemsById<T extends { id: string }>(
  array: T[],
  firstId: string,
  secondId: string,
  clone?: boolean,
) {
  const duplicatedArray = clone ? [...array] : array;

  const firstIndex = findIndexById(duplicatedArray, firstId);
  const secondIndex = findIndexById(duplicatedArray, secondId);

  if (firstIndex === -1 || secondIndex === -1) {
    const errorMsg = `Undefined element(s). First ID: ${firstIndex === -1 ? firstId : 'found'}, Second ID: ${secondIndex === -1 ? secondId : 'found'}`;
    console.error(errorMsg);
    throw new Error(errorMsg);
  }

  // swaping values directly in duplicatedArray
  [duplicatedArray[firstIndex], duplicatedArray[secondIndex]] = [
    duplicatedArray[secondIndex],
    duplicatedArray[firstIndex],
  ];

  return duplicatedArray;
}
